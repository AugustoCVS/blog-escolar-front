import { ChevronDown } from "lucide-react"
import { PostsList } from "./components/postsList/posts-list.component"
import { SearchComponent } from "./components/search/search.component"
import { useHome } from "./home.hook"
import { Button } from "@/components/commons/button/button.component"
import { SkeletonComponent } from "@/components/commons/skeleton/skeleton.component"

export const Home: React.FC = () => {
  const { states, actions } = useHome()

  const renderPostList = () => {
    if(states.loading) {
      return (
        <div className='w-3/4'>
         {[...Array(5)].map(() => 
           <SkeletonComponent 
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

        <SearchComponent value={states.search} setValue={actions.handleDebounceSearch} />
      </div>
      <div className="flex flex-col items-center mt-8 w-full">
        <div className="flex flex-col items-center w-full">
          {renderPostList()}
        </div>
        <div className="flex justify-end mt-4 w-3/4">
          <Button 
            className="flex items-center justify-center bg-gray-500 p-4 rounded-md text-white gap-1"
            onClick={actions.handleLoadMore}
          >
            Carregar mais
            <ChevronDown size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}
