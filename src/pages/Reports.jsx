// src/pages/Reports.jsx
import { useState } from "react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ClockIcon,
  EyeIcon,
  ChevronLeftIcon,
  FunnelIcon,
  Squares2X2Icon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const reports = [
  { id: "1BX46346", date: "Jan 15, 2026", value: "£200.00", event: "Manchester United Vs Liverpool", venue: "Old Trafford", eventDate: "May 02, 2026", details: "Shortside Upper Tier", qty: 1, ticket: "Mobile" },
  { id: "1BX62512", date: "Dec 09, 2025", value: "£150.00", event: "Manchester United Vs Newcastle United", venue: "Old Trafford", eventDate: "Dec 26, 2025", details: "Shortside Lower Tier", qty: 1, ticket: "Mobile" },
  { id: "1BX62524", date: "Dec 09, 2025", value: "£100.00", event: "Manchester United Vs Newcastle United", venue: "Old Trafford", eventDate: "Dec 26, 2025", details: "Shortside Upper Tier", qty: 1, ticket: "Mobile" },
  { id: "1BX62697", date: "Dec 09, 2025", value: "£100.00", event: "Aston Villa Vs Manchester United", venue: "Villa Park", eventDate: "Dec 21, 2025", details: "Shortside Upper Tier", qty: 1, ticket: "Mobile" },
  { id: "1BX61991", date: "Nov 26, 2025", value: "£130.00", event: "Aston Villa Vs Arsenal", venue: "Villa Park", eventDate: "Dec 06, 2025", details: "Longside Lower Tier", qty: 1, ticket: "Mobile" },
];

export default function Reports() {
  const [search, setSearch] = useState("");
  const [venue, setVenue] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [category, setCategory] = useState("");

  const filtered = reports.filter(r =>
    Object.values(r).some(v => String(v).toLowerCase().includes(search.toLowerCase().trim()))
  );

  return (
    <div className="min-h-screen bg-[#f7faf8] p-2 sm:p-3 lg:p-4">
      <div className="w-full mx-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 sm:mb-5 px-1 sm:px-2">
          <div className="mb-3 sm:mb-0">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Welcome, Shub</h1>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold">Overview</p>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Currency Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 sm:py-2 border border-[#e7efe9] rounded-full bg-white shadow-sm">
              <span className="font-bold text-emerald-700 text-xs sm:text-sm">£ GBP</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(26,125,71,0.12)] sm:shadow-[0_0_0_4px_rgba(26,125,71,0.12)]"></span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></span>
              </div>
            </div>
            
            {/* Toolbar buttons */}
            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl border border-[#e7efe9] bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-800">
              <FunnelIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl border border-[#e7efe9] bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-800">
              <Squares2X2Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl border border-[#e7efe9] bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-800">
              <EllipsisHorizontalIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Main Content Surface */}
        <div className="bg-white border border-[#e7efe9] rounded-xl sm:rounded-2xl shadow-[0_6px_20px_rgba(2,6,23,0.08)] backdrop-blur-sm overflow-hidden">
          <div className="p-3 sm:p-4 md:p-5">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {[
                { title: "TOTAL SALES", value: "5", sub: "Orders", extra: "5" },
                { title: "TOTAL REVENUE", value: "£680.00", sub: "Gross", extra: "£680.00" },
                { title: "TOTAL PAYOUTS", value: "£480.00", sub: "Net", extra: "£480.00" },
                { title: "TICKETS SOLD", value: "5", sub: "Qty", extra: "5" },
              ].map((k, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e7efe9] rounded-xl sm:rounded-2xl shadow-[0_6px_15px_rgba(2,6,23,0.06)] p-3 sm:p-4 relative overflow-hidden min-h-[60px] sm:min-h-[72px]"
                >
                  {/* Gradient effect */}
                  <div 
                    className="absolute pointer-events-none"
                    style={{
                      inset: '-40px -50px auto auto',
                      width: '140px',
                      height: '140px',
                      borderRadius: '999px',
                      background: 'radial-gradient(circle at 30% 30%, rgba(26, 125, 71, 0.14), transparent 62%)',
                      transform: 'rotate(12deg)',
                    }}
                  />
                  
                  <div className="flex justify-between items-start gap-2 relative z-10">
                    <span className="text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider whitespace-nowrap">{k.title}</span>
                    <span className="text-[10px] xs:text-xs font-black uppercase text-gray-500 whitespace-nowrap">{k.extra}</span>
                  </div>
                  <div className="text-sm sm:text-lg font-black text-gray-900 tracking-tight mt-1 relative z-10">{k.value}</div>
                  <div className="flex justify-between items-center mt-1 relative z-10">
                    <span className="text-[10px] xs:text-xs text-gray-500">{k.sub}</span>
                    <span className="text-[10px] xs:text-xs font-bold text-emerald-700">—</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Filters - Updated to match screenshot */}
            <div className="bg-white border border-[#e7efe9] rounded-xl sm:rounded-2xl shadow-[0_6px_15px_rgba(2,6,23,0.06)] p-3 sm:p-4 mb-4 sm:mb-6">
              {/* First row of filters - Updated to 5 equal columns (no Export CSV button) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 mb-2 sm:mb-3">
                {/* Search */}
                <div className="sm:col-span-2 lg:col-span-2">
                  <label className="block text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider mb-1">Search</label>
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                    <input
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      placeholder="Search Match event or Booking number"
                      className="w-full h-9 sm:h-10 pl-8 sm:pl-10 pr-3 border border-[#e7efe9] rounded-lg sm:rounded-xl bg-white text-gray-900 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Venue */}
                <div>
                  <label className="block text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider mb-1">Venue</label>
                  <div className="relative">
                    <select 
                      value={venue}
                      onChange={e => setVenue(e.target.value)}
                      className="w-full h-9 sm:h-10 px-2.5 sm:px-3 pr-8 sm:pr-10 border border-[#e7efe9] rounded-lg sm:rounded-xl bg-white text-gray-900 font-medium appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-xs sm:text-sm"
                    >
                      <option value="">Venue</option>
                      <option value="Old Trafford">Old Trafford</option>
                      <option value="Villa Park">Villa Park</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Transaction Date */}
                <div>
                  <label className="block text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider mb-1">Transaction Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={transactionDate}
                      onChange={e => setTransactionDate(e.target.value)}
                      placeholder="mm / dd / yyyy"
                      className="w-full h-9 sm:h-10 px-2.5 sm:px-3 border border-[#e7efe9] rounded-lg sm:rounded-xl bg-white text-gray-900 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-xs sm:text-sm placeholder-gray-400"
                    />
                    <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider mb-1">Event Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={eventDate}
                      onChange={e => setEventDate(e.target.value)}
                      placeholder="mm / dd / yyyy"
                      className="w-full h-9 sm:h-10 px-2.5 sm:px-3 border border-[#e7efe9] rounded-lg sm:rounded-xl bg-white text-gray-900 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-xs sm:text-sm placeholder-gray-400"
                    />
                    <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Removed Export CSV Button - Space is now used by other fields */}
              </div>

              {/* Second row of filters - Now 4 equal columns (taking full width) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                {/* Team Members */}
                <div>
                  <label className="block text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider mb-1">Team Members</label>
                  <div className="relative">
                    <select 
                      value={teamMembers}
                      onChange={e => setTeamMembers(e.target.value)}
                      className="w-full h-9 sm:h-10 px-2.5 sm:px-3 pr-8 sm:pr-10 border border-[#e7efe9] rounded-lg sm:rounded-xl bg-white text-gray-900 font-medium appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-xs sm:text-sm"
                    >
                      <option value="">Team Members</option>
                      <option value="Shub">Shub</option>
                      <option value="Ops">Ops</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Order Status */}
                <div>
                  <label className="block text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider mb-1">Order Status</label>
                  <div className="relative">
                    <select 
                      value={orderStatus}
                      onChange={e => setOrderStatus(e.target.value)}
                      className="w-full h-9 sm:h-10 px-2.5 sm:px-3 pr-8 sm:pr-10 border border-[#e7efe9] rounded-lg sm:rounded-xl bg-white text-gray-900 font-medium appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-xs sm:text-sm"
                    >
                      <option value="">Order Status</option>
                      <option value="awaiting">Awaiting</option>
                      <option value="delivered">Delivered</option>
                      <option value="completed">Completed</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Payment Status */}
                <div>
                  <label className="block text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider mb-1">Payment Status</label>
                  <div className="relative">
                    <select 
                      value={paymentStatus}
                      onChange={e => setPaymentStatus(e.target.value)}
                      className="w-full h-9 sm:h-10 px-2.5 sm:px-3 pr-8 sm:pr-10 border border-[#e7efe9] rounded-lg sm:rounded-xl bg-white text-gray-900 font-medium appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-xs sm:text-sm"
                    >
                      <option value="">Payment Status</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">Unpaid</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-[10px] xs:text-xs font-black uppercase text-gray-500 tracking-wider mb-1">Category</label>
                  <div className="relative">
                    <select 
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      className="w-full h-9 sm:h-10 px-2.5 sm:px-3 pr-8 sm:pr-10 border border-[#e7efe9] rounded-lg sm:rounded-xl bg-white text-gray-900 font-medium appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-xs sm:text-sm"
                    >
                      <option value="">Category</option>
                      <option value="Shortside Upper Tier">Shortside Upper Tier</option>
                      <option value="Shortside Lower Tier">Shortside Lower Tier</option>
                      <option value="Longside Lower Tier">Longside Lower Tier</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Reports Table */}
            <div className="bg-white border border-[#e7efe9] rounded-xl sm:rounded-2xl shadow-[0_6px_15px_rgba(2,6,23,0.06)] overflow-hidden">
              {/* Table Header */}
              <div className="px-4 sm:px-6 py-3 border-b border-[#e7efe9] bg-gradient-to-r from-white to-[#fbfffd] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-gray-900">Reports</h2>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#e7efe9] text-gray-700 font-semibold rounded-lg sm:rounded-xl shadow-sm hover:shadow transition flex items-center gap-1.5 text-xs sm:text-sm">
                  <ArrowDownTrayIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Export CSV
                </button>
              </div>

              {/* Table Container with horizontal scroll */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead className="bg-white border-b border-[#e7efe9]">
                    <tr>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">ORDER ID</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">ORDER DATE</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-right text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">ORDER VALUE</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap min-w-[180px]">EVENT</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">VENUE</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">EVENT DATE</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">TICKET DETAILS</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-right text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">QTY</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">TICKET</th>
                      <th className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-right text-[10px] xs:text-xs font-black uppercase tracking-wide text-gray-500 whitespace-nowrap">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(r => (
                      <tr key={r.id} className="border-b border-[#e7efe9] hover:bg-[#fbfffd] transition-colors">
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 font-bold text-gray-900 whitespace-nowrap">{r.id}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-900 whitespace-nowrap">{r.date}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-right font-bold text-gray-900 whitespace-nowrap">{r.value}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-900">{r.event}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-900 whitespace-nowrap">{r.venue}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-900 whitespace-nowrap">{r.eventDate}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-900 whitespace-nowrap">{r.details}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-right font-bold text-gray-900 whitespace-nowrap">{r.qty}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-900 whitespace-nowrap">{r.ticket}</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-right">
                          <div className="flex justify-end gap-1">
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-[#e7efe9] bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-emerald-600 transition">
                              <ClockIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-[#e7efe9] bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-emerald-600 transition">
                              <EyeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}