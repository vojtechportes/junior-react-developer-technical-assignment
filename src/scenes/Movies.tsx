import React, { useCallback, useState, useRef, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import axios, { CancelTokenSource } from 'axios'
import { MoviesApi } from 'api/MoviesApi'
import { Movie } from 'model/api/Movie'
import { Button } from 'components/Button'
import { useGetImagePath } from 'hooks/useGetImagePath'
import { ConfigurationBackdropSizesEnum } from 'model/api/ConfigurationBackdropSizesEnum'

export const Movies: React.FC<RouteComponentProps> = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number>()
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const cancelTokenSourceRef = useRef<CancelTokenSource>(
    axios.CancelToken.source()
  )
  const getImagePath = useGetImagePath(ConfigurationBackdropSizesEnum.W_780)

  const getMovies = useCallback(async () => {
    try {
      setLoading(true)

      const {
        data: { results, total_pages },
      } = await MoviesApi.getTrendingMovies('week', page, {
        cancelToken: cancelTokenSourceRef.current.token,
      })

      setMovies(values => [...values, ...results])
      setTotalPages(total_pages)
    } catch (e) {
      //
    } finally {
      setLoading(false)
    }
  }, [page])

  const handleLoadMore = useCallback(() => {
    // TODO: Implement loading of more results
  }, [])

  useEffect(() => {
    const cancelTokenSource = cancelTokenSourceRef.current

    getMovies()

    return () => cancelTokenSource.cancel()
  }, [getMovies])

  // TODO: Add loading state (it can be just "Loading..."" as text)

  return (
    <div>
      <h1>Movies</h1>

      {movies.map(({ id, title, backdrop_path }) => {
        const image = backdrop_path && getImagePath(backdrop_path)

        // TODO: Replace following code with component based on design
        return (
          <div key={id}>
            {image && <img src={image} alt={title} />}
            <div>{title}</div>
          </div>
        )
      })}

      <Button onClick={handleLoadMore}>Load More</Button>
    </div>
  )
}
