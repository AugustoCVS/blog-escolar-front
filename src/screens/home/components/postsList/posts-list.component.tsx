import { format } from 'date-fns';
import { PostsListsProps } from "./posts-list.types";

export const PostsList: React.FC<PostsListsProps> = ({ post, handleNavigateToPost }) => {

  return (
    <div 
      className="p-4 my-2 border border-gray-100 rounded-md w-3/4 cursor-pointer shadow-gray-300 shadow-md"
      onClick={() => handleNavigateToPost(post.id)}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">{post.title}</h2>

        <p className="text-xs text-gray-400">
          {format(new Date(post.createdAt), 'dd/MM/yyyy')}
        </p>
      </div>
      <p className="text-sm text-gray-500">{post.content.substring(0, 120)}...</p>

      <div className="flex justify-end">
        <p className="text-xs text-gray-400">{post.author.name}</p>
      </div>
    </div>
  )
}