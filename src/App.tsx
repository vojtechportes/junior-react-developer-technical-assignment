import React, { useContext } from 'react'
import { Router } from 'components/Router'
import { GlobalContext } from 'components/GlobalContextProvider'

const App: React.FC = () => {
  const { loading } = useContext(GlobalContext)

  if (loading) return <>Loading...</>

  return <Router />
}

export default App
