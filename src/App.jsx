import React, { Suspense } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RouterLayout from './layout/RouterLayout'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'
import Blog  from './pages/Blog.jsx'
import Error from './pages/Error.jsx'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<RouterLayout/>}>
        <Route index 
        element = {<Home/>}
        loader = {dataLoader}
        />
        <Route path='about' element={<About/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element = {<Error/>}></Route>
      </Route>
      
    )
  )
  return (
    <Suspense fallback = {<div>loading</div>}>
   <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default App


export async function dataLoader() {
  const response = await fetch('/produts.json');
  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }
  return response.json(); 
}