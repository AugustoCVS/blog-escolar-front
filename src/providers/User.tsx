
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDispatch } from "react-redux";

import { setUser } from "@/redux/slices/User/user.slice";
import { getToken, removeTokensOnStorage } from "@/utils/auth";
import { MessageUtils } from "@/utils/messages";
import { UserService } from "@/services/requests/user";
import { useNavigate } from "react-router-dom";

const ERROR_MESSAGE = "Erro ao buscar os dados do usuário";

export const UserInfo: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetUser = async (): Promise<void> => {
    const token = getToken();

    if (!token) {
      return;
    }

    await UserService.getUser({ id: token })
    .then((res) => {
      dispatch(setUser(res));
    })
    .catch(() => {
      MessageUtils.handleSendToast({
        message: ERROR_MESSAGE,
        type: "error",
      });

      removeTokensOnStorage();
      navigate("/");
    });
  };

  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      await handleGetUser();
      return null;
    },
  });

  return <>{children}</>;
};
