import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../screens/home/home.screen'
import { Post } from '../screens/post/post.screen'

export const ElementRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}