import React from 'react'
import ReactDOM from 'react-dom/client'
import { // 1
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import ErrorPage from './routes/ErrorPage'
import Login from './routes/auth/Login'
import App from './App'
import AuthProvider from './contexts/Auth/AuthProvider'
import './index.css'

// 1 - Configurando router
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/contatos',
        element: <Contact />
      }
    ]
  },
  {
    path:'/auth/login',
    element: <Login />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /> 
    </AuthProvider> 
  </React.StrictMode>,
)
