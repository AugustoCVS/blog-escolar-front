import { useParams } from "react-router-dom"
import { usePost } from "./post.hook"
import { LoadingComponent } from "./components/loading/loading.component"
import { EmptyScreen } from "@/components/commons/emptyScreen/empty-Screen.component"
import { format } from "date-fns"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/commons/button/button.component"
import { useForm } from "react-hook-form"
import { formProps } from "./post.types"
import { yupResolver } from "@hookform/resolvers/yup"
import { postSchema } from "./post.constants"
import { InputController } from "@/components/commons/inputController/input-controller.component"
import { TexteAreaController } from "@/components/commons/textAreaController/text-area-controller.component"

export const Post: React.FC = () => {
  const { id } = useParams()
  const postId = id || ''

  const { states, actions } = usePost({ postId })

  const {control, handleSubmit, formState: { errors }} = useForm<formProps>({
    resolver: yupResolver(postSchema),
    values: {
      title: states.post?.title || '',
      content: states.post?.content || '',
    }
  })

  const renderPostInfo = () => {
    if(postId !== 'criar') {
      if(states.isLoading) {
        return <LoadingComponent />
      }
  
      if(!states.post) {
        return <EmptyScreen message="Post não encontrado. Tente novamente!" />
      }
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
            {states.user.isAdmin || states.edit ? (
              <InputController 
                name="title"
                control={control}
                errorMessage={errors.title?.message}
                isInvalid={!!errors.title}
                placeholder="Título"
                type="text"
              />
            ) : (
              <h1 className="font-bold text-lg">{states.post?.title}</h1>
            )}
          </div>

          {states.post?.createdAt && (
             <p className="text-xs text-gray-400">
             {format(new Date(states.post.createdAt), 'dd/MM/yyyy')}
           </p>
          )}
        </div>

        <div className="mt-16">
          <TexteAreaController 
            name="content"
            control={control}
            errorMessage={errors.content?.message}
            isInvalid={!!errors.content}
            placeholder="Conteúdo"
            disabled={!states.edit && !states.user.isAdmin && postId !== 'criar'}
          />
        </div>

        <div className={`flex items-center ${states.user.isAdmin ? 'justify-between' : 'justify-end'} mt-8 gap-4`}>

          {states.user.isAdmin && (
            <div
              className="flex items-center gap-4"
            >
              <Button
                type={states.edit || postId === 'criar' ? 'submit' : 'button'}
                className="w-20 p-2 bg-green-300 rounded-md text-white"
                onClick={actions.handleEdit}
              >
                {states.edit || postId === 'criar' ? 'Salvar' : 'Editar'}
              </Button>

              {postId !== 'criar' && (
                <Button
                  type="button"
                  className="w-20 p-2 bg-red-300 rounded-md text-white"
                  onClick={actions.handleDelete}
                >
                  Excluir
                </Button>
              )}
            </div>
          )}

          {states.post?.author && (
            <p className="text-xs text-gray-400">Autor: {states.post.author.name}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <form 
      className="w-full"
      onSubmit={handleSubmit(actions.onFormSubmit)}
    >
      {renderPostInfo()}
    </form>
  )
}
