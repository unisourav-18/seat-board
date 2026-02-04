import { NavLink } from "react-router-dom"
import {
  HomeIcon,
  BellIcon,
  CubeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"

const base =
  "w-14 h-14 rounded-xl border border-line bg-white grid place-items-center transition shadow-soft"
const active =
  "bg-brand-50 border-[rgba(26,125,71,.2)] text-brand relative after:absolute after:right-[-8px] after:h-[22px] after:w-[6px] after:rounded-full after:bg-brand"

export default function Sidebar() {
  return (
    <aside className="rounded-xl bg-white/80 backdrop-blur-glass border border-line shadow-card p-2 flex flex-col items-center gap-3">
      <NavLink to="/" className={({ isActive }) => `${base} ${isActive && active}`}>
        <HomeIcon className="w-5 h-5" />
      </NavLink>

      <NavLink to="/alerts" className={base}>
        <BellIcon className="w-5 h-5" />
      </NavLink>

      <NavLink to="/inventory" className={base}>
        <CubeIcon className="w-5 h-5" />
      </NavLink>

      <div className="flex-1" />

      <button className={base}>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </aside>
  )
}