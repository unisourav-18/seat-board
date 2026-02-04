import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-bg grid grid-rows-[72px_1fr]">
      <Topbar />

      <div className="grid grid-cols-[92px_1fr] gap-4 p-4">
        <Sidebar />
        <main className="grid grid-rows-[auto_auto_1fr] gap-4 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
