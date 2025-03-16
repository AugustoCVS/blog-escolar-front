import { useNavigate } from "react-router-dom"
import { removeTokensOnStorage } from "../../utils/auth"

export const useHeader = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    removeTokensOnStorage()
  }

  return {
    actions: {
      handleLogout
    }
  }
}