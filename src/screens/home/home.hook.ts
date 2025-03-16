import { saveTokensOnStorage } from "../../utils/auth"

export const useHome = () => {

  const handleSaveUserToken = () => {
    const token = 'mockedToken'
    saveTokensOnStorage(token)
  }

  return {
    actions: {
      handleSaveUserToken
    }
  }

}