import { usePerfil } from "./perfil.hook"

export const Perfil: React.FC = () => {
  const {states, actions} = usePerfil()

  return (
    <div>
      <h1>Perfil</h1>
    </div>
  )
}