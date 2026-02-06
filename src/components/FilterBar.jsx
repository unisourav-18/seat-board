// src/components/FilterBar.jsx
import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

const FilterBar = () => {
  // Track which quick filter is currently selected
  const [activeFilter, setActiveFilter] = useState('All');

  const quickFilters = ['All', 'Published', 'Unpublished', 'Needs pricing', 'Sold out'];

  return (
    <div className="mx-6 mb-6 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search / Choose match/event */}
        <input
          type="text"
          placeholder="Choose match/event..."
          className="
            min-w-[220px] flex-1 h-10 px-4 
            border border-gray-300 rounded-lg 
            text-sm placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700
          "
        />

        {/* Team members */}
        <select
          className="
            h-10 min-w-[140px] px-3 
            border border-gray-300 rounded-lg 
            text-sm text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700
          "
        >
          <option>Team members</option>
          <option>Shub</option>
          <option>Admin</option>
        </select>

        {/* Date picker with icon */}
        <div className="relative min-w-[160px]">
          <input
            type="date"
            className="
              h-10 w-full pl-9 pr-4 
              border border-gray-300 rounded-lg 
              text-sm text-gray-700 
              focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700
            "
          />
          <CalendarIcon 
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
          />
        </div>

        {/* Ticket type */}
        <select
          className="
            h-10 min-w-[140px] px-3 
            border border-gray-300 rounded-lg 
            text-sm text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700
          "
        >
          <option>Ticket type</option>
          <option>Mobile Ticket</option>
          <option>Paper Ticket</option>
        </select>

        {/* Category */}
        <select
          className="
            h-10 min-w-[140px] px-3 
            border border-gray-300 rounded-lg 
            text-sm text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700
          "
        >
          <option>Category</option>
          <option>Longside</option>
          <option>Shortside</option>
        </select>

        {/* Quick filters – now with real active state */}
        <div className="flex flex-wrap gap-2 ml-auto">
          {quickFilters.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveFilter(label)}
              className={`
                h-9 px-5 text-sm font-medium rounded-full 
                transition-all duration-200 border
                ${
                  activeFilter === label
                    ? 'bg-emerald-600 text-white border-green-600 shadow-sm'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;