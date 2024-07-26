import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, Contact, User, Github } from './components'
import { githubInfoLoader } from './components/github/Github'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}>
        <Route path='user/:id' element={<User />}/>  
      </Route>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User />} />
      <Route
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} 
      >
        <Route path='user/:id' element={<User />} />  
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
