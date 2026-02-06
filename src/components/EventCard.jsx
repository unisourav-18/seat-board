// src/components/EventCard.jsx
import React, { useState } from 'react';
import { ChevronDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const matches = [
  {
    title: "Manchester United vs Tottenham Hotspur • Premier League",
    venue: "Old Trafford, Manchester, United Kingdom",
    date: "Sat, 07 Feb 2026",
    kickoff: "12:30",
  },
  {
    title: "Aston Villa vs Chelsea • Premier League",
    venue: "Villa Park, Birmingham, United Kingdom",
    date: "Wed, 04 Mar 2026",
    kickoff: "20:00",
  },
  {
    title: "Manchester United vs Liverpool • Premier League",
    venue: "Old Trafford, Manchester, United Kingdom",
    date: "Sat, 02 May 2026",
    kickoff: "15:00",
  },
];

const EventCard = ({ expanded = false }) => {
  const [isOpen, setIsOpen] = useState(expanded);

  // Choose match variant
  // expanded → always first match
  // collapsed → random one of the three
  const event = expanded
    ? matches[0]
    : matches[Math.floor(Math.random() * matches.length)];

  return (
    <div
      className={`
        bg-white rounded-xl border border-gray-200 overflow-hidden
        shadow-sm hover:shadow-md transition-shadow
        ${isOpen ? '' : 'cursor-pointer'}
      `}
    >
      {/* Header / Summary - always visible */}
      <div
        className="flex items-center justify-between px-5 py-4 cursor-pointer"
        onClick={() => !expanded && setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-base leading-tight">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">{event.venue}</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div>
            <span className="text-gray-500">Date</span>
            <div className="font-medium">{event.date}</div>
          </div>
          <div>
            <span className="text-gray-500">Kickoff</span>
            <div className="font-medium">{event.kickoff}</div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              className="p-1.5 text-gray-500 hover:text-green-600 rounded-md hover:bg-green-50 transition-colors"
              title="Market data"
            >
              <ArrowUpRightIcon className="w-5 h-5" />
            </button>
            <button
              className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              title="Expand/Collapse"
            >
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded content */}
      {isOpen && (
        <div className="px-5 pb-5 border-t border-gray-100 bg-gray-50/40">
          {/* Dropdown row */}
          <div className="grid grid-cols-4 gap-3 mt-5 mb-4">
            <select className="h-10 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700">
              <option>Ticket type: Mobile Ticket</option>
              <option>Paper Ticket</option>
            </select>
            <select className="h-10 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700">
              <option>Seating: Longside Upper Tier</option>
              <option>Longside Lower Tier</option>
              <option>Shortside Upper Tier</option>
            </select>
            <select className="h-10 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700">
              <option>Section/Block: No Block</option>
              <option>A</option>
              <option>B</option>
            </select>
            <select className="h-10 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700">
              <option>Fan area: Home</option>
              <option>Away</option>
              <option>Neutral</option>
            </select>
          </div>

          {/* Input row */}
          <div className="flex items-center gap-3 flex-wrap">
            <input
              className="h-10 w-24 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
              placeholder="Row"
            />
            <input
              type="number"
              defaultValue="1"
              min="0"
              className="h-10 w-20 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
              placeholder="Qty"
            />
            <input
              type="number"
              defaultValue="0"
              min="0"
              className="h-10 w-20 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
              placeholder="Sold"
            />
            <input
              type="number"
              defaultValue="60"
              min="0"
              className="h-10 w-24 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
              placeholder="Face value"
            />
            <input
              type="number"
              placeholder="Price"
              className="h-10 w-28 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
            />
            <button className="h-10 px-5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
              Clone
            </button>
            <button className="h-10 px-6 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
              Save
            </button>
          </div>

          {/* Tip */}
          <p className="mt-4 text-sm text-gray-500 italic">
            Tip: Use quick filters above to narrow down unpublished / pricing required listings.
          </p>
        </div>
      )}

      
    </div>
  );
};

export default EventCard;