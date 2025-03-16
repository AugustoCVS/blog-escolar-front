import { useParams } from "react-router-dom"

export const Post: React.FC = () => {
  const { id } = useParams()

  return (
    <div className='flex items-center justify-center h-[90vh] bg-gray-100'>
      <p>Post World {id}</p>
    </div>
  )
}
