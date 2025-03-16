import { toast } from "react-toastify";

type ToastType = "error" | "success"

type ToastProps = {
  message: string;
  type: ToastType;
}

const handleSendToast = ({message, type}: ToastProps) => {
  return type === "error" ? toast.error(message) : toast.success(message);
}

export const MessageUtils = {
  handleSendToast,
}