
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDispatch } from "react-redux";

import { setUser } from "@/redux/slices/User/user.slice";
import { getToken } from "@/utils/auth";
import { MessageUtils } from "@/utils/messages";
import { UserService } from "@/services/requests/user";

const ERROR_MESSAGE = "Erro ao buscar os dados do usuário";

export const UserInfo: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

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
