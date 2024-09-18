import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import './index.css'
import router from '../../router-context/src/router/routes.jsx'
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>

  <RouterProvider router={router}>

  </RouterProvider>
  </GlobalContextProvider>
)
