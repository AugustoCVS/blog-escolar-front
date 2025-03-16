import { LogOut } from 'lucide-react';

import { useHeader } from "./header.hook"

export const Header: React.FC = () => {
  const { actions } = useHeader()

  return (
    <header className='flex items-center justify-between px-8 bg-gray-800 text-white p-4 h-[10vh]'>
      <h1>Blog Escolar Fiap</h1>
      <div
        className='flex items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-700'
        onClick={actions.handleLogout}
      >
        <LogOut size={24} />
      </div>
    </header>
  )
}