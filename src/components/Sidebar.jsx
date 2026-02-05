// src/components/Sidebar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import {
  Bars3Icon,
  BellIcon,
  CubeIcon,
  ChevronLeftIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  WalletIcon,
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const location = useLocation();
  const { isExpanded, setIsExpanded } = useSidebar();

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <>
      {/* Narrow sidebar (always visible) */}
      <aside
        className={`
          fixed left-0 top-0 z-40 h-screen w-16
          flex flex-col items-center pt-5 pb-6 gap-4
          bg-gradient-to-b from-emerald-50/80 to-emerald-50/20
          border-r border-emerald-100/60
          rounded-r-xl shadow-sm transition-all duration-300
        `}
      >
        {/* Hamburger / Menu toggle */}
        <button
          onClick={toggleSidebar}
          className="
            w-10 h-10 rounded-xl bg-white/90 hover:bg-white
            border border-emerald-100/70 flex items-center justify-center
            text-emerald-600 hover:text-emerald-700 transition-all shadow-sm
          "
        >
          <Bars3Icon className="w-5 h-5 stroke-[2.3]" />
        </button>

        {/* Home (dashboard) */}
        <button
          type="button"
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 bg-white/90 hover:bg-white border border-emerald-100/70 text-gray-600 hover:text-emerald-600 shadow-sm"
        >
          <HomeIcon className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Bell */}
        <button
          className="
            w-10 h-10 rounded-xl bg-white/90 hover:bg-white
            border border-emerald-100/70 flex items-center justify-center
            text-gray-600 hover:text-emerald-600 transition-all shadow-sm relative
          "
        >
          <BellIcon className="w-5 h-5 stroke-[2]" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            10
          </span>
        </button>

        {/* Cube / Inventory */}
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            `w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
              isActive
                ? "bg-emerald-50/90 border border-emerald-200 text-emerald-600 shadow-sm"
                : "bg-white/90 hover:bg-white border border-emerald-100/70 text-gray-600 hover:text-emerald-600 shadow-sm"
            }`
          }
        >
          <CubeIcon className="w-5 h-5 stroke-[2]" />
        </NavLink>

        <div className="flex-1" />

        <button
          onClick={toggleSidebar}
          className="
            w-10 h-10 rounded-xl bg-white/90 hover:bg-white
            border border-emerald-100/70 flex items-center justify-center
            text-gray-600 hover:text-emerald-600 transition-all shadow-sm
          "
        >
          <ArrowRightCircleIcon className="w-5 h-5 stroke-[2.3]" />
        </button>
      </aside>

      {/* Expanded sidebar */}
      <div
        className={`
          fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300
          ${isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={toggleSidebar}
      >
        <div
          className={`
            fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-200
            shadow-2xl transform transition-transform duration-300 ease-in-out
            ${isExpanded ? "translate-x-0" : "-translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* User header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold">
                SH
              </div>
              <div>
                <p className="font-medium text-gray-900">SH • Shub</p>
                <p className="text-sm text-gray-500">Seller Console</p>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-800"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-3 space-y-1">
            {/* Inventory - NavLink */}
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition font-medium ${
                  isActive
                    ? "bg-gradient-to-b from-emerald-50/80 to-emerald-100/60 text-emerald-700 border border-emerald-200/50"
                    : "hover:bg-gray-50 text-gray-700"
                }`
              }
            >
              <CubeIcon className="w-5 h-5" />
              Inventory
            </NavLink>

            {/* Dashboard - Regular button */}
            <button
              type="button"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition"
            >
              <HomeIcon className="w-5 h-5" />
              Dashboard
            </button>

            {/* Notifications - Regular Link */}
            <Link
              to="#"
              className="w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition"
            >
              <div className="flex items-center gap-3">
                <BellIcon className="w-5 h-5" />
                Notifications
              </div>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                10
              </span>
            </Link>

            {/* Add Listings - NavLink */}
            <NavLink
              to="/addlisting"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition font-medium ${
                  isActive
                    ? "bg-gradient-to-b from-emerald-50/80 to-emerald-100/60 text-emerald-700 border border-emerald-200/50"
                    : "hover:bg-gray-50 text-gray-700"
                }`
              }
            >
              <span className="text-lg font-bold">+</span>
              Add Listings
            </NavLink>

            {/* My Listings - Regular Link */}
            <Link
              to="#"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition"
            >
              <ClipboardDocumentListIcon className="w-5 h-5" />
              My Listings
            </Link>

            {/* Bulk Listings - Regular Link */}
            <Link
              to="#"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition"
            >
              <ClipboardDocumentListIcon className="w-5 h-5" />
              Bulk Listings
            </Link>

            {/* Sales - Regular Link */}
            <Link
              to="#"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition"
            >
              <CurrencyDollarIcon className="w-5 h-5" />
              Sales
            </Link>

            {/* Reports - NavLink */}
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition font-medium ${
                  isActive
                    ? "bg-gradient-to-b from-emerald-50/80 to-emerald-100/60 text-emerald-700 border border-emerald-200/50"
                    : "hover:bg-gray-50 text-gray-700"
                }`
              }
            >
              <ChartBarIcon className="w-5 h-5" />
              Reports
            </NavLink>

            {/* Wallet - Regular Link */}
            <Link
              to="#"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition"
            >
              <WalletIcon className="w-5 h-5" />
              Wallet
            </Link>

            {/* Search Tickets - Regular Link */}
            <Link
              to="#"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
              Search Tickets
            </Link>

            {/* Logout - Regular Link */}
            <Link
              to="#"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 mt-4 transition"
            >
              <ArrowRightCircleIcon className="w-5 h-5" />
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}