import { useNavigate } from "react-router-dom"
import { getToken, saveTokensOnStorage } from "../../utils/auth"
import { useEffect, useState } from "react"

export const useAuth = () => {
  const navigate = useNavigate()

  const [showRegister, setShowRegister] = useState<boolean>(false);

  const handleToggleRegister = (): void => {
    setShowRegister(!showRegister);
  };

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
    states: {
      showRegister,
    },
    actions: {
      handleSaveUserToken,
      handleToggleRegister
    }
  }
}