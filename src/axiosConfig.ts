
import { ACCEPT } from 'constants/http'
import axios from 'axios'

export const configureAxiosInterceptors = () => {
  const { MDB_API_KEY, MDB_BASE_URL } = window._envConfig

  const requestInterceptor = axios.interceptors.request.use(config => ({
    ...config,
    baseURL: MDB_BASE_URL,
    headers: {
      ...config.headers,
      [ACCEPT]: 'application/json',
    },
    params: {
      ...config.params,
      api_key: MDB_API_KEY,
    },
  }))

  return {
    request: [requestInterceptor],
  }
}

export const configureBaseUrl = () => {
  const { MDB_BASE_URL } = window._envConfig

  axios.defaults.baseURL = MDB_BASE_URL
}