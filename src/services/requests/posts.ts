import { api } from "../api";
import { PaginationRequestProps } from "../interfaces/default";
import { CreatePostProps, PostProps, UpdatePostProps } from "../interfaces/posts";

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
  },

  createPost: async ({
    postData,
    userId,
    }: { postData: CreatePostProps, userId: string}
  ): Promise<void> => {
    const res = await api.post(`/posts?userId=${userId}`, postData);

    return res.data
  },

  updatePost: async ({postData}: {postData: UpdatePostProps}): Promise<void> => {
    const res = await api.put(`/posts/update/${postData.postId}?userId=${postData.userId}`, postData);

    return res.data
  },

  deletePost: async ({postId, userId}: {postId: string, userId: string}): Promise<void> => {
    const res = await api.delete(`/posts/${postId}?userId=${userId}`);

    return res.data
  }
}