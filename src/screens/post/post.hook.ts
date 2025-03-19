import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

import { PostsService } from "@/services/requests/posts"
import { useState } from "react"
import { CreatePostProps, UpdatePostProps } from "@/services/interfaces/posts"
import { MessageUtils } from "@/utils/messages"

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

  const createPost = useMutation({
    mutationFn: async ({postData, userId}: {postData: CreatePostProps, userId: string}) =>
      await PostsService.createPost({postData, userId}),
    onError: () => {
      MessageUtils.handleSendToast({
        type: 'error',
        message: 'Erro ao criar post. Tente novamente!'
      })
    },
    onSuccess: () => {
      MessageUtils.handleSendToast({
        type: 'success',
        message: 'Post criado com sucesso!'
      })

      navigate('/home')
    }
  })

  const updatePost = useMutation({
    mutationFn: async ({ postData }: {postData: UpdatePostProps}) =>
      await PostsService.updatePost({ postData }),
    onError: () => {
      MessageUtils.handleSendToast({
        type: 'error',
        message: 'Erro ao atualizar post. Tente novamente!'
      })
    },
    onSuccess: () => {
      MessageUtils.handleSendToast({
        type: 'success',
        message: 'Post atualizado com sucesso!'
      })

      cancelEdit()
      getPostById.refetch()
    }
  })

  const deletePost = useMutation({
    mutationFn: async ({postId, userId}: {postId: string, userId: string}) =>
      await PostsService.deletePost({postId, userId}),
    onError: () => {
      MessageUtils.handleSendToast({
        type: 'error',
        message: 'Erro ao deletar post. Tente novamente!'
      })
    },
    onSuccess: () => {
      MessageUtils.handleSendToast({
        type: 'success',
        message: 'Post deletado com sucesso!'
      })

      navigate('/home')
    }
  })

  const handleDelete = () => {
    deletePost.mutate({postId, userId: user.id})
  }

  const handleStartEdit = () => {
    setEdit(true)
  }

  const cancelEdit = () => {
    setEdit(false)
  }

  const onFormSubmit = (data: CreatePostProps) => {
    const createPosData = {
      title: data.title,
      content: data.content,
    }

    const updatePosData = {
      ...createPosData,
      postId,
      userId: user.id
    }

    if(postId === 'criar') {
      return createPost.mutate({postData: createPosData, userId: user.id})
    }

    if(edit) {
      return updatePost.mutate({postData: updatePosData})
    }
  };

  const post = getPostById.data
  const isLoading = getPostById.isLoading
  const isLoadingDeletePost = deletePost.isPending
  const isLoadingCreatePost = createPost.isPending
  const isLoadingUpdatePost = updatePost.isPending

  return {
    states: {
      user,
      post,
      isLoading,
      isLoadingDeletePost,
      isLoadingCreatePost,
      isLoadingUpdatePost,
      edit
    },
    actions: {
      handleGoBackToHome,
      handleStartEdit,
      handleDelete,
      onFormSubmit,
      cancelEdit,
    }
  }
}