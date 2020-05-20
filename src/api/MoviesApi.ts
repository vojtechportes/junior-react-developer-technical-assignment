import axios, { AxiosPromise } from 'axios'
import { RequestConfig } from './requestConfig'
import { List } from 'model/api/List'
import { Movie } from 'model/api/Movie'

export class MoviesApi {
  /** TODO: Add getMovieDetailMethod that will be fetching data from /movie/${movieId} endpoint */

  /**
   * Trending Movies
   *
   * @param time_window
   * @param page
   */

  static getTrendingMovies(
    time_window: 'day' | 'week',
    page?: number,
    config?: RequestConfig
  ): AxiosPromise<List<Movie>> {
    return axios({
      ...config,
      method: 'GET',
      url: `/trending/movie/${time_window}`,
      params: {
        page,
      },
    })
  }
}
