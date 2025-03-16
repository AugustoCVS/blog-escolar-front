import { useAuth } from "./auth.hook"

export const AuthScreen = () => {
  const { actions } = useAuth()

  return (
    <div>
      <h1>Auth Screen</h1>
      <button 
        className="bg-green-300 p-2 rounded"
        onClick={actions.handleSaveUserToken}
      >
        Save Token
      </button>
    </div>
  )
}