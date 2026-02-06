import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 h-[72px] px-6 flex items-center justify-between bg-white border-b border-gray-200">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-4">
        {/* Green circle logo */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-500 flex items-center justify-center shadow-md">
          {/* You can put an icon or letter here if needed */}
          {/* e.g. <span className="text-white font-bold text-xl">I</span> */}
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-black-600">Inventory</h1>
          <p className="text-sm text-gray-500">
            Modern listings board • same data, new layout
          </p>
        </div>
      </div>

      {/* Right: Search + Badges + Buttons */}
      <div className="flex items-center gap-4">
        {/* Search input */}
        <div className="relative flex items-center w-80">
          <MagnifyingGlassIcon className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events, listings, stadiums..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 shadow-sm"
          />
        </div>

        {/* Live badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Live
        </div>

        {/* Export button */}
        <button className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
          Export
        </button>

        {/* Add Listing button */}
        <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 shadow-md transition-colors">
          + Add Listing
        </button>
      </div>
    </header>
  );
}