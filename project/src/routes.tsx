import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../src/components/layout"
import { NotFound } from "../src/components/notFound"
import { Home } from "../src/pages/home"
import { Error_Server_500 } from "./pages/error_server_500"
import { Error_Server } from "./pages/error_server"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <NotFound />
      }, 
      {
        path: '/',
        element: <Home />
      },
    ]
  },
  {
    path: '/error_server_500',
    element: <Error_Server_500 />
  },
  {
    path: '/error_server',
    element: <Error_Server />
  }
])

export default router