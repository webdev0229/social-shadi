import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard from "../pages/Dashboard/Dashboard"

const ShadiRouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default ShadiRouterProvider
