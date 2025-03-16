import { useHome } from "./home.hook"

export const Home: React.FC = () => {
  const { states } = useHome()

  return (
    <div>
      <div className="flex items-center font-bold h-[10vh] p-4">
        <h2>Bem vindo, { states.user.name } </h2>
      </div>
      <div>
        
      </div>
    </div>
  )
}
