import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Addlisting from "./pages/Addlisting.jsx";   // ← NEW IMPORT
import AppLayout from "./layout/AppLayout";
import Reports from "./pages/Reports.jsx";

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
        path: "addlisting",           // ← NEW ROUTE
        element: <Addlisting />,       // ← NEW PAGE
      },
      // src/router.jsx (inside children array)
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

export default router;