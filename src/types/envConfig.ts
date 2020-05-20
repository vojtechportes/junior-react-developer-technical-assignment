export interface EnvConfigProps {
  MDB_BASE_URL: string
  MDB_API_KEY: string
}

declare global {
  interface Window {
    _envConfig: EnvConfigProps
  }
}
