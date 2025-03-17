import { ToastContainer } from "react-toastify"
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from 'react-router-dom'

import { Header } from "./components/layout/header/header.component"
import { ReactQuery } from "./providers/ReactQuery"
import { ReduxStore } from "./providers/ReduxStore"
import { UserInfo } from "./providers/User"
import { ElementRoutes } from "./routes"

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
