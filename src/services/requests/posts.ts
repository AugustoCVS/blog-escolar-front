import { api } from "../api";
import { PaginationRequestProps } from "../interfaces/default";
import { PostProps } from "../interfaces/posts";

export const PostsService = {
  getPosts: async ({ page = 1, limit = 10 }: PaginationRequestProps): Promise<PostProps[]> => {
    const res = await api.get(`/posts/list?$page=${page}&limit=${limit}`);

    return res.data
  },

  getPostsById: async (id: string): Promise<PostProps> => {
    const res = await api.get(`/posts/list/${id}`);

    return res.data
  },

  getPostsBySearch: async (search: string): Promise<PostProps[]> => {
    const res = await api.get(`/posts/search?searchQuery=${search}`);

    return res.data
  },

  getPostsByAuthor: async (
      { page = 1, limit = 10 }: PaginationRequestProps,
      authorId: string
    ): Promise<PostProps[]> => {
    const res = await api.get(`{/posts/list?$page=${page}&limit=${limit}&userId=${authorId}`);

    return res.data
  }
}