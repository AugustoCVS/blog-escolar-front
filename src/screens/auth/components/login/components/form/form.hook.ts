import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthService } from "@/services/requests/auth";
import { LoginRequestProps } from "@/services/interfaces/auth";
import { MessageUtils } from "@/utils/messages";
import { saveTokensOnStorage } from "@/utils/auth";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./form.constants";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const navigateToHome = (): void => {
    setTimeout(() => {
      navigate("/home");
    }, 100)
  }

  const handleLogin = useMutation({
    mutationFn: async (data: LoginRequestProps) =>
      AuthService.login({
        email: data.email,
        password: data.password,
      }),
    onError: () => {
      MessageUtils.handleSendToast({
        message: ERROR_MESSAGE,
        type: "error",
      });
    },
    onSuccess: (res) => {
      MessageUtils.handleSendToast({
        message: SUCCESS_MESSAGE,
        type: "success",
      });
      saveTokensOnStorage(res.id);
      navigateToHome();
    },
  });

  const handleChangePassword = (): void => {
    MessageUtils.handleSendToast({
      message: "Funcionalidade em desenvolvimento",
      type: "error",
    });
  };

  const onFormSubmit = (data: LoginRequestProps): void => {
    handleLogin.mutate(data);
  };

  return {
    states: {
      showPassword,
    },
    actions: {
      handleChangePassword,
      handleShowPassword,
      handleLogin,
      onFormSubmit,
    },
  };
};
