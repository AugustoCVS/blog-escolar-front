import { removeTokensOnStorage } from "@/utils/auth"
import { useNavigate } from "react-router-dom"

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