import * as yup from "yup";

export const postSchema = yup.object().shape({
  title: yup.string().required("O titulo é obrigatório"),
  content: yup
    .string()
    .required("O conteudo do post é obrigatório"),
  author: yup.string()
});

export const SUCCESS_MESSAGE = "Post cadastrado com sucesso!";
export const ERROR_MESSAGE = "Erro ao cadastrar post!";