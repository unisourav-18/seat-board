// src/pages/Inventory.jsx

import EventCard from "../components/EventCard";
import FilterBar from "../components/FilterBar";
import Topbar from "../components/Topbar";

export default function Inventory() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Topbar />
      
      {/* STATS ROW - With exact gradient effect from CSS */}
      <div className="grid grid-cols-6 gap-4 mb-6 px-6 pt-6">
        {[
          { title: "Total Events", value: "3", tag: "Overview" },
          { title: "Listings", value: "11", tag: "All" },
          { title: "Published", value: "11", tag: "Live" },
          { title: "Unpublished", value: "0", tag: "Draft" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-200"
          >
            {/* Exact gradient effect from CSS - with darker green */}
            <div 
              className="absolute pointer-events-none"
              style={{
                inset: '-56px -70px auto auto',
                width: '180px',
                height: '180px',
                borderRadius: '999px',
                background: 'radial-gradient(circle at 30% 30%, rgba(20, 100, 57, 0.18), transparent 62%)',
                transform: 'rotate(12deg)',
              }}
            />
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-1 relative z-10">
              <span>{item.title}</span>
              <span className="px-2.5 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                {item.tag}
              </span>
            </div>
            <div className="text-2xl font-semibold text-gray-800 relative z-10">
              {item.value}
            </div>
          </div>
        ))}

        {/* Tickets card - NO gradient effect */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 group hover:shadow-md transition-shadow duration-200">
          <p className="text-sm font-medium text-gray-700 mb-2">Tickets</p>
          <div className="relative h-20 w-20 mx-auto">
            <div
              className="h-20 w-20 rounded-full shadow-inner"
              style={{
                background: `conic-gradient(#10b981 0deg 240deg, #d1fae5 240deg 360deg)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-xs font-medium text-green-700 shadow-sm">
                66%
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            15 tickets total
          </p>
        </div>

        {/* Health card - NO gradient effect */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 group hover:shadow-md transition-shadow duration-200">
          <p className="text-sm font-medium text-gray-700 mb-2">Health</p>
          <div className="relative h-20 w-20 mx-auto">
            <div
              className="h-20 w-20 rounded-full shadow-inner"
              style={{
                background: `conic-gradient(#10b981 0deg 300deg, #d1fae5 300deg 360deg)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-xs font-medium text-emerald-700 shadow-sm">
                OK
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            No issues detected
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <FilterBar />

      {/* EVENTS SECTION + FOOTER */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Events (3)
          </h2>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span>View</span>
            <select className="h-8 px-2 border border-gray-300 rounded-md text-sm">
              <option>50</option>
              <option>25</option>
              <option>10</option>
            </select>
            <span>• Page 1 of 1</span>
          </div>
        </div>

        <div className="space-y-5">
          <EventCard expanded={true} />
          <EventCard />
          <EventCard />
        </div>

        {/* Footer card with gradient effect */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-200">
          {/* Gradient effect for footer card - with darker green */}
          <div 
            className="absolute pointer-events-none"
            style={{
              inset: '-56px -70px auto auto',
              width: '180px',
              height: '180px',
              borderRadius: '999px',
              background: 'radial-gradient(circle at 30% 30%, rgba(20, 100, 57, 0.18), transparent 62%)',
              transform: 'rotate(12deg)',
            }}
          />
          
          <div className="px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 text-sm relative z-10">
            {/* Left actions */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 min-w-0">
              <button className="text-gray-700 hover:text-green-700 font-medium transition-colors whitespace-nowrap">
                Select all
              </button>
              <button className="text-gray-700 hover:text-green-700 font-medium transition-colors whitespace-nowrap">
                Deselect
              </button>
              <button className="text-gray-700 hover:text-green-700 font-medium transition-colors whitespace-nowrap">
                Clone
              </button>
              <button className="text-gray-700 hover:text-green-700 font-medium transition-colors whitespace-nowrap">
                Edit
              </button>
              <button className="text-gray-700 hover:text-red-600 font-medium transition-colors whitespace-nowrap">
                Delete
              </button>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4 text-gray-600 whitespace-nowrap">
              <span className="font-medium">0 selected</span>
              <span className="text-gray-400">•</span>
              <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}