// src/pages/AddListing.jsx
import { useState, useRef } from "react";
import {
  XMarkIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ArrowUpTrayIcon,
  EyeIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import EventRibbon from "../components/add-listing/EventRibbon";
import ListingDetailsHeader from "../components/add-listing/ListingDetailsHeader";
import TicketsSection from "../components/add-listing/TicketsSection";
import PricingSection from "../components/add-listing/PricingSection";
import DeliverySection from "../components/add-listing/DeliverySection";
import LocationSection from "../components/add-listing/LocationSection";
import RulesSection from "../components/add-listing/RulesSection";
import LiveSummary from "../components/add-listing/LiveSummary";
import MapModal from "../components/add-listing/MapModal";
import PreviewModal from "../components/add-listing/PreviewModal";

export default function AddListing() {
  const [form, setForm] = useState({
    eventName: "FC Köln vs Wolfsburg • Rhein Energie Stadion",
    eventDate: "Fri, 30 January 2026",
    eventTime: "20:30",
    eventVenue: "Rhein Energie Stadion, Köln, Germany",
    quantity: "",
    ticketType: "",
    splitType: "",
    maxDispQty: "",
    faceValue: "",
    proposedPrice: "",
    section: "",
    row: "",
    fanArea: "",
    shipDate: "",
    inHand: false,
    files: [],
    benefits: "",
    restriction: "",
    seating: "",
  });

  const [showMap, setShowMap] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [toast, setToast] = useState("");

  const fileInput = useRef(null);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const estPayout = form.proposedPrice
    ? Math.max(0, Number(form.proposedPrice) * 0.9 - 2).toFixed(2)
    : "—";

  const isReady =
    form.eventName &&
    form.quantity &&
    form.ticketType &&
    form.splitType &&
    form.seating &&
    form.proposedPrice;

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3200);
  };

  const handlePublish = () => {
    setShowPreview(true);  // Always open preview modal
  };

  const confirmPublish = () => {
    setShowPreview(false);
    showToast("Listing published");
  };

  return (
    <div className="min-h-screen bg-[#f7faf8] relative pb-12">
      {/* Header - Re-enabled as it's in the target design */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-lg border-b border-[#e7efe9] shadow-sm">
        <div className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="p-1.5 sm:p-2 rounded-lg hover:bg-emerald-50 text-emerald-700">
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div>
              <h1 className="text-base sm:text-xl font-bold text-emerald-900">Add Inventory</h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Fast, guided listing creation with modern validation & previews
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 text-gray-600">?</button>
            <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 text-gray-600">⚙</button>
            <button
              onClick={handlePublish}
              className="px-4 sm:px-6 py-1.5 sm:py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition text-sm sm:text-base"
            >
              Publish listing
            </button>
          </div>
        </div>
      </header>

      <main className="w-full px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 space-y-4 sm:space-y-6 md:space-y-8">
        {/* Event Ribbon + Smart Checks - UPDATED TO MATCH TARGET DESIGN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {/* Event Ribbon - Updated to match target design */}
          <div className="bg-white/90 backdrop-blur-md border border-[#e7efe9] rounded-lg sm:rounded-[18px] shadow-[0_6px_15px_rgba(2,6,23,0.06)] p-4 sm:p-5">
            {/* Header row */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Choose Match Event
              </h2>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 border border-[#e7efe9] text-gray-700 font-medium rounded-lg hover:bg-gray-50 text-sm">
                  Change
                </button>
                <button 
                  onClick={() => setShowMap(true)}
                  className="px-3 py-1.5 bg-white border border-[#e7efe9] text-gray-700 font-medium rounded-lg hover:bg-gray-50 text-sm flex items-center gap-1.5"
                >
                  <MapPinIcon className="w-4 h-4" />
                  View Map
                </button>
              </div>
            </div>
            
            {/* Event details */}
            <div className="mb-4 sm:mb-5">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                FC Köln vs Wolfsburg • Rhein Energie Stadion
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-600">
                <span className="font-medium">Fri, 30 January 2026</span>
                <span className="hidden sm:inline">•</span>
                <span className="font-medium">20:30</span>
                <span className="hidden sm:inline">•</span>
                <span className="font-medium flex items-center gap-1">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  Rhein Energie Stadion, Köln, Germany
                </span>
              </div>
            </div>
            
            {/* Status indicator - Updated to match target */}
            <div className="flex items-center justify-between pt-3 border-t border-[#e7efe9]">
              <div>
                <span className="text-xs text-gray-500">Event selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-xs font-medium text-amber-700">Missing required</span>
              </div>
            </div>
          </div>
          
          {/* Smart Checks Section - Updated to match target */}
          <div className="bg-white/90 backdrop-blur-md border border-[#e7efe9] rounded-lg sm:rounded-[18px] shadow-[0_6px_15px_rgba(2,6,23,0.06)] p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <b className="text-xs uppercase tracking-wide text-[#6b7280]">Smart Checks</b>
              <span className="text-xs uppercase tracking-wide text-[#6b7280]">Missing required</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              As you fill the form, we'll validate required fields and pricing.
            </p>
          </div>
        </div>

        {/* Form Surface - Updated to match target design layout */}
        <div className="bg-white/90 backdrop-blur-md border border-[#e7efe9] rounded-lg sm:rounded-[18px] shadow-[0_6px_20px_rgba(2,6,23,0.08)] overflow-hidden">
          <ListingDetailsHeader onSaveDraft={() => showToast("Draft saved")} onPublish={handlePublish} />

          <div className="p-3 sm:p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Left Column: TICKETS + LOCATION */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* TICKETS Section */}
              <div className="bg-white border border-[#e7efe9] rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  TICKETS
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      QUANTITY
                    </label>
                    <input
                      type="number"
                      value={form.quantity}
                      onChange={(e) => update("quantity", e.target.value)}
                      placeholder="2"
                      className="w-full h-9 sm:h-10 px-3 border border-[#e7efe9] rounded-lg bg-white text-gray-900 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                    />
                  </div>
                  
                  {/* Ticket Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      TICKET TYPE
                    </label>
                    <div className="relative">
                      <select 
                        value={form.ticketType}
                        onChange={(e) => update("ticketType", e.target.value)}
                        className="w-full h-9 sm:h-10 px-3 pr-10 border border-[#e7efe9] rounded-lg bg-white text-gray-900 font-medium appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                      >
                        <option value="">Select...</option>
                        <option value="Mobile">Mobile</option>
                        <option value="E-Ticket">E-Ticket</option>
                        <option value="Paper">Paper</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Split Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      SPLIT TYPE
                    </label>
                    <div className="relative">
                      <select 
                        value={form.splitType}
                        onChange={(e) => update("splitType", e.target.value)}
                        className="w-full h-9 sm:h-10 px-3 pr-10 border border-[#e7efe9] rounded-lg bg-white text-gray-900 font-medium appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                      >
                        <option value="">Select...</option>
                        <option value="Can Split">Can Split</option>
                        <option value="Cannot Split">Cannot Split</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* LOCATION Section */}
              <div className="bg-white border border-[#e7efe9] rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  LOCATION
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      SECTION/BLOCK ROW
                    </label>
                    <div className="relative">
                      <select 
                        value={form.section}
                        onChange={(e) => update("section", e.target.value)}
                        className="w-full h-9 sm:h-10 px-3 pr-10 border border-[#e7efe9] rounded-lg bg-white text-gray-900 font-medium appearance-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                      >
                        <option value="">Select...</option>
                        <option value="Section 12">Section 12</option>
                        <option value="Section 15">Section 15</option>
                        <option value="Section 20">Section 20</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      FAN AREA
                    </label>
                    <input
                      type="text"
                      value={form.fanArea}
                      onChange={(e) => update("fanArea", e.target.value)}
                      placeholder="e.g., 12"
                      className="w-full h-9 sm:h-10 px-3 border border-[#e7efe9] rounded-lg bg-white text-gray-900 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Middle Column: PRICING + DELIVERY */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* PRICING Section */}
              <div className="bg-white border border-[#e7efe9] rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  PRICING
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {/* Quantity, Types, Split */}
                  <div className="flex items-center justify-between py-2 border-b border-[#e7efe9]">
                    <span className="text-xs font-medium text-gray-600">Quantity, types, split</span>
                    <span className="text-sm font-bold text-gray-900">€0.00</span>
                  </div>
                  
                  {/* Face Value */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      FACE VALUE
                    </label>
                    <input
                      type="number"
                      value={form.faceValue}
                      onChange={(e) => update("faceValue", e.target.value)}
                      placeholder="€0.00"
                      className="w-full h-9 sm:h-10 px-3 border border-[#e7efe9] rounded-lg bg-white text-gray-900 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                    />
                  </div>
                  
                  {/* Real-time margin preview */}
                  <div className="pt-2">
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      REAL-TIME MARGIN PREVIEW
                    </label>
                    <div className="mt-1 p-2 bg-gray-50 border border-gray-100 rounded text-xs text-gray-600">
                      Enter pricing to see estimated payout.
                    </div>
                  </div>
                  
                  {/* Proposed Price */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      PROPOSED PRICE
                    </label>
                    <input
                      type="number"
                      value={form.proposedPrice}
                      onChange={(e) => update("proposedPrice", e.target.value)}
                      placeholder="€0.00"
                      className="w-full h-9 sm:h-10 px-3 border border-[#e7efe9] rounded-lg bg-white text-gray-900 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>
              
              {/* DELIVERY Section */}
              <div className="bg-white border border-[#e7efe9] rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  DELIVERY
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {/* Date to Ship */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      DATE TO SHIP
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={form.shipDate}
                        onChange={(e) => update("shipDate", e.target.value)}
                        placeholder="mm/dd/yyyy"
                        className="w-full h-9 sm:h-10 px-3 border border-[#e7efe9] rounded-lg bg-white text-gray-900 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <CalendarIcon className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Tickets in Hand */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="inHand"
                      checked={form.inHand}
                      onChange={(e) => update("inHand", e.target.checked)}
                      className="w-4 h-4 rounded border-[#e7efe9] text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="inHand" className="text-sm text-gray-700">
                      Tickets in hand
                    </label>
                  </div>
                  
                  {/* Upload Tickets */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-wide mb-1">
                      UPLOAD TICKETS
                    </label>
                    <div className="mt-1">
                      <div 
                        className="border-2 border-dashed border-[#e7efe9] rounded-lg p-4 text-center cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 transition"
                        onClick={() => fileInput.current?.click()}
                      >
                        <ArrowUpTrayIcon className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Click here to upload tickets</p>
                        <p className="text-[10px] text-gray-400">PDF / Images • Max 10MB</p>
                      </div>
                      <input
                        type="file"
                        ref={fileInput}
                        className="hidden"
                        multiple
                        onChange={(e) => update("files", Array.from(e.target.files))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: LIVE SUMMARY - Now correctly positioned */}
            <LiveSummary
              form={form}
              estPayout={estPayout}
              isReady={isReady}
              onPreview={() => setShowPreview(true)}
            />
          </div>
        </div>
      </main>

      {/* Modals */}
      <MapModal
        open={showMap}
        onClose={() => setShowMap(false)}
        onChoose={() => {
          setShowMap(false);
          update("section", "Longside Lower");
          showToast("Section selected from map");
        }}
      />

      <PreviewModal
        open={showPreview}
        onClose={() => setShowPreview(false)}
        onConfirm={confirmPublish}
        form={form}
        estPayout={estPayout}
      />

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 bg-white/95 backdrop-blur-md border border-emerald-200 rounded-lg sm:rounded-xl shadow-2xl px-4 py-2 sm:px-5 sm:py-3 text-emerald-800 font-medium text-sm">
          {toast}
        </div>
      )}
    </div>
  );
}