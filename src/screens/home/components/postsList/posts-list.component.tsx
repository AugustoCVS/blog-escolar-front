import { PostsListsProps } from "./posts-list.types";

export const PostsList: React.FC<PostsListsProps> = ({post, handleNavigateToPost}) => {
  return (
    <div>
      <div 
        className="p-4 my-2 border border-gray-200 rounded-md"
        onClick={() => handleNavigateToPost(post.id)}
      >
        <h2 className="font-bold text-lg">{post.title}</h2>
        <p className="text-sm text-gray-500">{post.content}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-400">Criado em: {post.createdAt.toString()}</p>
          <p className="text-xs text-gray-400">Atualizado em: {post.updatedAt.toString()}</p>
        </div>
      </div>
    </div>
  )

}