import { Header } from "./components/Header/header.component"
import { ElementRoutes } from "./routes"
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && <Header />}
      <ElementRoutes />
    </>
  )
}

export default App
