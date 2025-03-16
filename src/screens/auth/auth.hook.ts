import { useNavigate } from "react-router-dom"
import { getToken, saveTokensOnStorage } from "../../utils/auth"
import { useEffect } from "react"

export const useAuth = () => {
  const navigate = useNavigate()

  const handleSaveUserToken = () => {
    const token = 'mockedToken'
    saveTokensOnStorage(token)
    navigate('/home')
  }

  const isUserAlreadyLogged = () => {
    const token = getToken()

    if (token) {
      navigate('/home')
    }
  }

  useEffect(() => {
    isUserAlreadyLogged()
  })

  return {
    actions: {
      handleSaveUserToken
    }
  }
}