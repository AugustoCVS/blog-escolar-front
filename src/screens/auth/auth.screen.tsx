import { BookOpenCheck } from "lucide-react";
import { useAuth } from "./auth.hook"
import { AnimatePresence } from "framer-motion";
import { Login } from "./components/login/login.auth";
import { Register } from "./components/register/register.auth";

export const AuthScreen = () => {
  const { states, actions } = useAuth()

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-2/4 bg-gray-700 h-screen hidden md:flex items-center justify-center">
        <BookOpenCheck size={120} color="#E1E1E6" />
      </div>

      <div className="w-3/4 md:w-2/4 h-screen flex items-center justify-center">
        <Login handleShowRegister={actions.handleToggleRegister} />
      </div>

      <AnimatePresence>
        {states.showRegister && (
          <Register handleCloseRegister={actions.handleToggleRegister} />
        )}
      </AnimatePresence>
    </div>
  );
}