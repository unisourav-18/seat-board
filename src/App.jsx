import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-[#f7faf8]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 overflow-y-auto px-6 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
