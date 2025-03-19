import { RootState } from "@/redux/store"
import { PostsService } from "@/services/requests/posts"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const usePerfil = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.user)

  const [paginationProps, setPaginationProps] = useState<{page: number, limit: number}>({
    page: 1,
    limit: 10,
  });

  const getPosts = useQuery({
    queryKey: ["getPostsByAuthor", paginationProps],
    queryFn: async () => {
      return await PostsService.getPostsByAuthor({
        limit: paginationProps.limit, 
        page: paginationProps.page,
        authorId: user.id
      });
    },
    retry: 2,
    enabled: user.id !== '',
    refetchOnWindowFocus: false,
  });

  const handleLoadMore = () => {
    setPaginationProps({
      ...paginationProps,
      limit: paginationProps.limit + 10,
    });
  }

  const handleNavigateToPost = (id: string) => {
    navigate(`/post/${id}`);
  }

  const handleNavigateToCreatePost = () => {
    navigate('/post/criar');
  }

  const posts = getPosts.data || []
  const loading = false

  return {
    states: {
      user,
      posts,
      loading
    },
    actions: {
      handleNavigateToPost,
      handleNavigateToCreatePost,
      handleLoadMore
    }
  }
}