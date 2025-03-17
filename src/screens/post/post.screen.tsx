import { useParams } from "react-router-dom"
import { usePost } from "./post.hook"
import { LoadingComponent } from "./components/loading/loading.component"
import { EmptyScreen } from "@/components/commons/emptyScreen/empty-Screen.component"
import { format } from "date-fns"
import { ChevronLeft } from "lucide-react"

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
            <h1 className="font-bold text-lg">{states.post.title}</h1>
          </div>

          <p className="text-xs text-gray-400">
            {format(new Date(states.post.createdAt), 'dd/MM/yyyy')}
          </p>
        </div>

        <div className="mt-16">
          <textarea
            className="w-full h-96 p-4 border border-gray-100 rounded-md shadow-gray-300 shadow-md"
            disabled
            value={states.post.content}
          />
        </div>

        <div className="flex justify-end mt-8">
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
