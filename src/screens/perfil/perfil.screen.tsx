import { Button } from "@/components/commons/button/button.component"
import { usePerfil } from "./perfil.hook"
import { SkeletonComponent } from "@/components/commons/skeleton/skeleton.component"
import { EmptyScreen } from "@/components/commons/emptyScreen/empty-Screen.component"
import { PostsList } from "@/components/commons/postsList/posts-list.component"
import { ChevronDown } from "lucide-react"

export const Perfil: React.FC = () => {
  const {states, actions} = usePerfil()

  const renderPostList = () => {
    if(states.loading) {
      return (
        <div className='w-3/4'>
         {[...Array(5)].map((_, index) => 
           <SkeletonComponent 
            key={index}
            height={90} 
            width='100%'  
            baseColor='#ececec'
            borderRadius={6}
            highlightColor='#E3E3ED'
          />
        )}
        </div>
      )
    }

    if(states.posts?.length === 0 || !states.posts) {
      return <EmptyScreen message="Nenhum post encontrado" />
    }

    return states.posts?.map((post) => (
      <PostsList 
        key={post.id} 
        post={post} 
        handleNavigateToPost={actions.handleNavigateToPost} 
      />
    ))
  }

  return (
    <div>
      <div className="flex items-center justify-between font-bold h-[10vh] p-4 mt-4">
        <h2>Bem vindo, { states.user.name } </h2>

        <div 
          className="flex items-center justify-center gap-4"
        >
          <Button
            onClick={actions.handleNavigateToCreatePost}
            className="bg-gray-500 text-white p-4 rounded-md"
          >
            Criar post
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 w-full">
        <div className="flex flex-col items-center w-full">
          {renderPostList()}
        </div>
          {states.posts?.length !== 0 && states.posts && (
            <div className="flex justify-end mt-4 w-3/4">
              <Button 
                className="flex items-center justify-center bg-gray-500 p-2 text-sm rounded-md text-white gap-1"
                onClick={actions.handleLoadMore}
              >
                Carregar mais
                <ChevronDown size={16} />
              </Button>
            </div>
          )}
      </div>
    </div>
  )
}