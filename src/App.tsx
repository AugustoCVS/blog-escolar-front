import { ToastContainer } from "react-toastify"
import { Header } from "./components/layout/header/header.component"
import { ReactQuery } from "./providers/ReactQuery"
import { ReduxStore } from "./providers/ReduxStore"
import { UserInfo } from "./providers/User"
import { ElementRoutes } from "./routes"
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      <ReduxStore>
        <ReactQuery>
          <UserInfo>
            <ToastContainer />
            {location.pathname !== '/' && <Header />}
            <ElementRoutes />
          </UserInfo>
        </ReactQuery>
      </ReduxStore>
    </>
  )
}

export default App
