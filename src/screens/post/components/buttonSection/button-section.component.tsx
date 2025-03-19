import { Button } from "@/components/commons/button/button.component";
import { ButtonSectionProps } from "./button-section.types";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  isEdit,
  postId,
  isLoading,
  isDeleting,
  resetField,
  cancelEdit,
  handleStartEdit,
  handleDeletePost,
}) => {
  return (
    <div
    className="flex items-center gap-4"
  >
    {!isEdit && postId !== 'criar' ? (
      <Button
        type="button"
        className="w-20 p-2 bg-green-300 rounded-md text-white"
        onClick={(event) => { event.preventDefault(); handleStartEdit() }}
      >
        Editar
      </Button>
    ) : (
      <Button
        type="submit"
        className="w-20 p-2 bg-green-300 rounded-md text-white"
        loading={isLoading}
      >
        Salvar
      </Button>
    )}

    {isEdit && (
      <Button
        type="button"
        className="w-20 p-2 bg-red-300 rounded-md text-white"
        onClick={() => {
          resetField('title')
          resetField('content')
          cancelEdit()
        }}
      >
        Cancelar
      </Button>
    )}

    {(postId !== 'criar' && !isEdit) && (
      <Button
        type="button"
        className="w-20 p-2 bg-red-300 rounded-md text-white"
        onClick={handleDeletePost}
        loading={isDeleting}
      >
        Excluir
      </Button>
    )}
  </div>
  )
}