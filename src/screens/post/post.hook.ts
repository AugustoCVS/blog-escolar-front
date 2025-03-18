import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

import { PostsService } from "@/services/requests/posts"
import { useState } from "react"
import { CreatePostProps } from "@/services/interfaces/posts"

export const usePost = ({postId}: {postId: string}) => {
  const navigate = useNavigate()

  const user = useSelector((state: RootState) => state.user);

  const [edit, setEdit] = useState<boolean>(false)

  const handleGoBackToHome = () => {
    navigate('/home')
  }

  const getPostById = useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      return await PostsService.getPostsById(postId)
    },
    enabled: postId !== 'criar'
  })

  const post = getPostById.data
  const isLoading = getPostById.isLoading

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleDelete = () => {
    navigate('/home')
  }

  const onFormSubmit = (data: CreatePostProps) => {
    const postData = {
      title: data.title,
      content: data.content,
    }

    console.log(postData)
  };

  return {
    states: {
      user,
      post,
      isLoading,
      edit
    },
    actions: {
      handleGoBackToHome,
      handleEdit,
      handleDelete,
      onFormSubmit,
    }
  }
}