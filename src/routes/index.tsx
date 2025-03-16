import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Header } from '../components/Header/header.component'
import { Home } from '../screens/home/home.screen'
import { Post } from '../screens/post/post.screen'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />} >
      <Route path='home' element={<Home />} />
      <Route path="post/:id" element={<Post />} />
    </Route>
  )
)