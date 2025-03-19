import { PostProps } from "@/services/interfaces/posts";

export type PostsListsProps = {
  post: PostProps;
  handleNavigateToPost: (id: string) => void;
}