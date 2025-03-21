import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { PostsService } from "@/services/requests/posts";


export const useHome = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [paginationProps, setPaginationProps] = useState<{page: number, limit: number}>({
    page: 1,
    limit: 10,
  });

  const handleDebounceSearch = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const getPosts = useQuery({
    queryKey: ["getPosts", paginationProps],
    queryFn: async () => {
      return await PostsService.getPosts({limit: paginationProps.limit, page: paginationProps.page});
    },
    retry: 2,
    enabled: debouncedSearch === '',
    refetchOnWindowFocus: false,
  });

  const searchPosts = useQuery({
    queryKey: ["posts", debouncedSearch],
    queryFn: async () => {
      return await PostsService.getPostsBySearch(debouncedSearch);
    },
    retry: 2,
    enabled: debouncedSearch !== '',
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

  const posts = debouncedSearch ? searchPosts.data : ( getPosts.data || []);
  const loading = searchPosts.isLoading || getPosts.isFetching

  return {
    states: {
      user,
      debouncedSearch,
      search,
      posts,
      loading,
    },
    actions: {
      handleDebounceSearch,
      handleLoadMore,
      handleNavigateToPost,
      handleNavigateToCreatePost,
    },
  };
};