import { LogOut, ShieldUser } from 'lucide-react';

import { useHeader } from "./header.hook"

export const Header: React.FC = () => {
  const { states, actions } = useHeader()

  return (
    <header className='flex items-center justify-between px-8 bg-gray-800 text-white p-4 h-[10vh]'>
      <h1 
        className='text-2xl font-bold cursor-pointer'
        onClick={actions.handleGoToHome}
      >
        Blog Escolar Fiap
      </h1>
      <div
        className='flex items-center justify-center p-2 gap-4 rounded'
      >
        {states.user.isAdmin && (
          <ShieldUser
            size={40}
            onClick={actions.handleGoToPerfil}
            className='cursor-pointer hover:bg-gray-700 p-2 rounded'
          />
        )}

        <LogOut 
          size={40}
          onClick={actions.handleLogout}
          className='cursor-pointer hover:bg-gray-700 p-2 rounded'
        />
      </div>
    </header>
  )
}