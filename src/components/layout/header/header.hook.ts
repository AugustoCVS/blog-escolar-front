import { RootState } from "@/redux/store"
import { removeTokensOnStorage } from "@/utils/auth"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const useHeader = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.user)

  const handleLogout = () => {
    navigate('/')
    removeTokensOnStorage()
  }

  const handleGoToHome = () => {
    navigate('/home')
  }

  const handleGoToPerfil = () => {
    navigate('/perfil')
  }

  return {
    states: {
      user
    },
    actions: {
      handleLogout,
      handleGoToHome,
      handleGoToPerfil
    }
  }
}