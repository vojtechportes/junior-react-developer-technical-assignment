import React, { useCallback, useEffect, createContext, useState } from 'react'
import { Configuration } from 'model/api/Configuration'
import { ConfigurationApi } from 'api/ConfigurationApi'
import axios, { CancelToken } from 'axios'

export interface GlobalContextProps {
  configuration?: Configuration
  loading: boolean
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
)

export interface GlobalContextProviderProps {
  children: React.ReactNode | React.ReactNodeArray
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false)
  const [configuration, setConfiguration] = useState<Configuration>()

  const getConfiguration = useCallback(async (cancelToken: CancelToken) => {
    try {
      setLoading(true)

      const { data } = await ConfigurationApi.getConfiguration({
        cancelToken,
      })

      setConfiguration(data)
    } catch (e) {
      //
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    getConfiguration(cancelTokenSource.token)

    return () => cancelTokenSource.cancel()
  }, [getConfiguration])

  return (
    <GlobalContext.Provider value={{ configuration, loading }}>
      {children}
    </GlobalContext.Provider>
  )
}
