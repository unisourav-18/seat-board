import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx"
import Inventory from "./pages/Inventory.jsx"
import EventDetails from "./pages/EventDetails.jsx"
import AppLayout from "./layout/AppLayout"



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,   // 👈 THIS IS THE KEY
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "inventory/event/:id",
        element: <EventDetails />,
      },
      
    ],
  },
])

export default router
