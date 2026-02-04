import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Addlisting from "./pages/Addlisting.jsx";   // ← NEW IMPORT
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,   // Layout with Sidebar + Topbar
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
      {
        path: "add-listing",           // ← NEW ROUTE
        element: <Addlisting />,       // ← NEW PAGE
      },
    ],
  },
]);

export default router;