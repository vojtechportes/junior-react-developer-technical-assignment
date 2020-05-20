import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configureAxiosInterceptors } from 'axiosConfig'
import { GlobalStyle } from 'GlobalStyle'
import { GlobalContextProvider } from 'components/GlobalContextProvider'

configureAxiosInterceptors()

ReactDOM.render(
  <GlobalContextProvider>
    <App />
    <GlobalStyle />
  </GlobalContextProvider>,
  document.getElementById('root')
)
