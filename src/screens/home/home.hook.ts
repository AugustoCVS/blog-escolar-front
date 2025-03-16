import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const useHome = () => {
  const user = useSelector((state: RootState) => state.user);

  return {
    states: {
      user
    },
  }
}