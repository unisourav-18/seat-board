import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-[#f7faf8] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Topbar full-width background, but content offset */}
        <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
          <div className="pl-16">
            <Topbar />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pl-16 pr-6 py-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
