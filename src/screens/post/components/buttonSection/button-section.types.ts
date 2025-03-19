import { UseFormResetField } from "react-hook-form";

export type ButtonSectionProps = {
  isEdit: boolean;
  postId: string;
  isLoading: boolean;
  isDeleting: boolean;
  resetField: UseFormResetField<{
    author?: string | undefined;
    title: string;
    content: string;
  }>;
  cancelEdit: () => void;
  handleStartEdit: () => void;
  handleDeletePost: () => void;
}