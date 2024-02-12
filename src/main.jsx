import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Navbar from './components/navBar/NavBar.jsx'
import auth from './Firebase-conf.js'
import Pokemons from './components/Pokemons.jsx'
import Detalle from './components/Detalle.jsx'


const router= createBrowserRouter([
  {
    path: '/',
    element: <>
    <Navbar/>
    <App/>
    </>,
  },
  {
    path: '/Login',
    element: <>
    <Navbar/>
    <Login/>
    </>,
  },
  {
    path: '/Register',
    element: <>
    <Navbar/>
    <Register/>
    </>,
  },
  {
    path: '/Pokedex',
    element: <>
    <Navbar/>
    <Pokemons/>
    </>,
  },
  {
    path: '/detalle',
    element:<>
      <Navbar/>
      <Detalle/>
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
