import * as yup from "yup";
import { postSchema } from "./post.constants";

export type formProps = yup.InferType<typeof postSchema>;