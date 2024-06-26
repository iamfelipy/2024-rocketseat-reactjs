import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Home } from './pages/Home/index.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Cart } from './pages/Cart/index.tsx'
import { Sucess } from './pages/Sucess/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderId/sucess',
        element: <Sucess />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
