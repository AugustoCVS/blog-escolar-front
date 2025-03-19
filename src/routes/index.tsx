import { Route, Routes } from 'react-router-dom'
import { Home } from '@/screens/home/home.screen'
import { Post } from '@/screens/post/post.screen'
import { AuthScreen } from '@/screens/auth/auth.screen'
import { Perfil } from '@/screens/perfil/perfil.screen'

export const ElementRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthScreen />} />
      <Route path='home' element={<Home />} />
      <Route path="post/:id" element={<Post />} />
      <Route path="perfil" element={<Perfil />} />
    </Routes>
  )
}