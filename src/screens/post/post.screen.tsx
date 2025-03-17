import { useParams } from "react-router-dom"
import { usePost } from "./post.hook"
import { LoadingComponent } from "./components/loading/loading.component"
import { EmptyScreen } from "@/components/commons/emptyScreen/empty-Screen.component"
import { format } from "date-fns"
import { ChevronLeft } from "lucide-react"
import { Input } from "@/components/commons/input/input.component"
import { Button } from "@/components/commons/button/button.component"

export const Post: React.FC = () => {
  const { id } = useParams()
  const postId = id || ''

  const { states, actions } = usePost({ postId })

  const renderPosts = () => {
    if(states.isLoading) {
      return <LoadingComponent />
    }

    if(!states.post) {
      return <EmptyScreen message="Post não encontrado. Tente novamente!" />
    }

    return (
      <div className="flex flex-col w-full mt-8 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <ChevronLeft
              className="cursor-pointer"
              size={24}
              onClick={actions.handleGoBackToHome}
            />
            {states.user.isAdmin && states.edit ? (
              <Input
                placeholder="Pesquisar"
                value={states.post.title}
                onChange={() => {}}
                type="text"
              />
            ) : (
              <h1 className="font-bold text-lg">{states.post.title}</h1>
            )}
          </div>

          <p className="text-xs text-gray-400">
            {format(new Date(states.post.createdAt), 'dd/MM/yyyy')}
          </p>
        </div>

        <div className="mt-16">
          <textarea
            className="w-full h-96 p-4 border border-gray-100 rounded-md shadow-gray-300 shadow-md"
            disabled={!states.edit}
            value={states.post.content}
            onChange={() => {}}
          />
        </div>

        <div className={`flex items-center ${states.user.isAdmin ? 'justify-between' : 'justify-end'} mt-8 gap-4`}>

          {states.user.isAdmin && (
            <div
              className="flex items-center gap-4"
            >
              <Button
                className="w-20 p-2 bg-green-300 rounded-md text-white"
                onClick={actions.handleEdit}
              >
                {states.edit ? 'Salvar' : 'Editar'}
              </Button>

              <Button
                className="w-20 p-2 bg-red-300 rounded-md text-white"
                onClick={actions.handleDelete}
              >
                Excluir
              </Button>
            </div>
          )}

          <p className="text-xs text-gray-400">Autor: {states.post.author.name}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {renderPosts()}
    </div>
  )
}
