import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import { PostsService } from "@/services/requests/posts"

export const usePost = ({postId}: {postId: string}) => {
  const navigate = useNavigate()

  const handleGoBackToHome = () => {
    navigate('/home')
  }

  const getPostById = useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      return await PostsService.getPostsById(postId)
    }
  })

  const post = getPostById.data
  const isLoading = getPostById.isLoading

  return {
    states: {
      post,
      isLoading
    },
    actions: {
      handleGoBackToHome
    }
  }
}