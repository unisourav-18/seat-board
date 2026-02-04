// src/pages/AddListing.jsx
import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  XMarkIcon,
  ArrowUpTrayIcon,
  EyeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function AddListing() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [splitType, setSplitType] = useState("");
  const [maxDisplayQty, setMaxDisplayQty] = useState("");
  const [section, setSection] = useState("");
  const [row, setRow] = useState("");
  const [fanArea, setFanArea] = useState("");
  const [faceValue, setFaceValue] = useState("");
  const [proposedPrice, setProposedPrice] = useState("");
  const [shipDate, setShipDate] = useState("");
  const [inHand, setInHand] = useState(false);
  const [files, setFiles] = useState([]);
  const [benefits, setBenefits] = useState("");
  const [restriction, setRestriction] = useState("");
  const [seating, setSeating] = useState("");

  // Simple payout estimation (demo)
  const estPayout = proposedPrice
    ? Math.max(0, Number(proposedPrice) * 0.9 - 2).toFixed(2)
    : "—";

  const isReady = selectedEvent && quantity && ticketType && splitType && seating && proposedPrice;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/60 via-white to-emerald-50/30 pb-12">
      {/* Top Header */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-emerald-800">Add Inventory</h1>
            <p className="text-sm text-gray-600 mt-0.5">
              Fast, guided listing creation with modern validation & previews
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
              ?
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
              <span className="sr-only">Settings</span>⚙
            </button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition">
              Publish listing
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Event Selection Ribbon */}
        <section className="mb-8 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Event Picker */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700">Choose Match Event</label>
              <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                Change
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                value={selectedEvent || ""}
                readOnly
                placeholder="Select an event..."
                className="w-full h-12 pl-4 pr-12 border border-gray-300 rounded-xl bg-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
              {selectedEvent && (
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              )}
            </div>

            {selectedEvent && (
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg">
                  Fri, 30 January 2026
                </div>
                <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg">
                  20:30
                </div>
                <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg flex items-center gap-1.5">
                  <MapPinIcon className="w-4 h-4" />
                  Rhein Energie Stadion, Köln, Germany
                </div>
              </div>
            )}
          </div>

          {/* Right: Actions + Smart Checks */}
          <div className="flex flex-col gap-4 lg:items-end">
            <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 font-medium rounded-xl border border-emerald-200 hover:border-emerald-300 transition flex items-center gap-2">
              View Map ↗
            </button>

            <div className="w-full lg:w-80 bg-white border border-emerald-100 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Smart Checks</span>
                <span className="text-xs text-emerald-600 font-medium">Waiting…</span>
              </div>
              <p className="text-sm text-gray-500">
                As you fill the form, we’ll validate required fields and pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Main Form */}
        <section className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-white to-emerald-50/30 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Listing details</h2>
              <p className="text-sm text-gray-600 mt-1">
                Unique layout: grouped cards + sticky summary for perfect space usage.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition">
                Save draft
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition">
                Publish listing
              </button>
            </div>
          </div>

          {/* Form Grid */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* Tickets */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">TICKETS</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g., 2"
                      className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Ticket type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={ticketType}
                      onChange={(e) => setTicketType(e.target.value)}
                      className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="">Select…</option>
                      <option>Mobile</option>
                      <option>PDF</option>
                      <option>Transfer</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Split type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={splitType}
                      onChange={(e) => setSplitType(e.target.value)}
                      className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="">Select…</option>
                      <option>No Preferences</option>
                      <option>Must sell together</option>
                      <option>Pairs only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Max display quantity
                    </label>
                    <input
                      type="number"
                      value={maxDisplayQty}
                      onChange={(e) => setMaxDisplayQty(e.target.value)}
                      placeholder="e.g., 2"
                      className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">LOCATION</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Section/Block</label>
                    <select
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="">Select…</option>
                      <option>Shortside Upper</option>
                      <option>Longside Upper</option>
                      <option>Shortside Lower</option>
                      <option>Longside Lower</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Row</label>
                    <input
                      type="text"
                      value={row}
                      onChange={(e) => setRow(e.target.value)}
                      placeholder="e.g., 12"
                      className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">Fan area</label>
                  <select
                    value={fanArea}
                    onChange={(e) => setFanArea(e.target.value)}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Select…</option>
                    <option>Home</option>
                    <option>Away</option>
                    <option>Neutral</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {/* Pricing */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">PRICING</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Face value</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">£</span>
                      <input
                        type="number"
                        step="0.01"
                        value={faceValue}
                        onChange={(e) => setFaceValue(e.target.value)}
                        placeholder="0.00"
                        className="w-full h-11 pl-8 pr-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Proposed price <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">£</span>
                      <input
                        type="number"
                        step="0.01"
                        value={proposedPrice}
                        onChange={(e) => setProposedPrice(e.target.value)}
                        placeholder="0.00"
                        className="w-full h-11 pl-8 pr-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  {proposedPrice
                    ? `Estimated payout after fees: £${estPayout}`
                    : "Enter pricing to see estimated payout."}
                </p>
              </div>

              {/* Delivery */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">DELIVERY</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Date to ship</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={shipDate}
                        onChange={(e) => setShipDate(e.target.value)}
                        className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                      />
                      <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Tickets in hand</label>
                    <div
                      onClick={() => setInHand(!inHand)}
                      className={`w-14 h-8 rounded-full border-2 cursor-pointer transition-colors ${
                        inHand ? "bg-emerald-500 border-emerald-500" : "bg-gray-200 border-gray-300"
                      } relative`}
                    >
                      <div
                        className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                          inHand ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">Upload tickets</label>
                  <div className="border-2 border-dashed border-emerald-300 bg-emerald-50/30 rounded-xl p-6 text-center">
                    <ArrowUpTrayIcon className="w-8 h-8 mx-auto text-emerald-500" />
                    <p className="mt-2 text-sm text-gray-600">Drop files here</p>
                    <p className="text-xs text-gray-500">PDF / Images • Max 10MB</p>
                    <button className="mt-4 px-5 py-2 bg-white border border-emerald-300 rounded-lg text-emerald-700 font-medium hover:bg-emerald-50">
                      Choose files
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {files.length ? `${files.length} file(s) selected.` : "No files selected."}
                  </p>
                </div>
              </div>

              {/* Rules */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">RULES</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Benefits</label>
                    <select
                      value={benefits}
                      onChange={(e) => setBenefits(e.target.value)}
                      className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="">Select…</option>
                      <option>Hospitality included</option>
                      <option>Free drinks</option>
                      <option>Lounge access</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Restriction</label>
                    <select
                      value={restriction}
                      onChange={(e) => setRestriction(e.target.value)}
                      className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                    >
                      <option value="">Select…</option>
                      <option>No away fans</option>
                      <option>Adults only</option>
                      <option>Obstructed view</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">
                    Seating arrangement <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Select…</option>
                    <option>Seated together</option>
                    <option>Pairs only</option>
                    <option>Singles allowed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Column 3 – Sticky Summary */}
            <div className="lg:sticky lg:top-8 space-y-6">
              <div className="bg-white border border-emerald-100 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-emerald-800">Live Summary</h3>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      isReady ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {isReady ? "Ready" : "Draft"}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Event</span>
                    <span className="font-medium">{selectedEvent || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Qty</span>
                    <span className="font-medium">{quantity || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type</span>
                    <span className="font-medium">{ticketType || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Split</span>
                    <span className="font-medium">{splitType || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Section</span>
                    <span className="font-medium">{section || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Row</span>
                    <span className="font-medium">{row || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price</span>
                    <span className="font-medium">
                      {proposedPrice ? `£${proposedPrice}` : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold text-gray-800">Est. payout</span>
                    <span className="font-bold text-emerald-700">
                      {estPayout !== "—" ? `£${estPayout}` : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-600">Status</span>
                    <span
                      className={`font-bold ${
                        isReady ? "text-green-700" : "text-amber-700"
                      }`}
                    >
                      {isReady ? "Ready" : "Needs info"}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition">
                    Preview
                  </button>
                  <button
                    disabled={!isReady}
                    className={`flex-1 py-3 font-semibold rounded-xl transition ${
                      isReady
                        ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md hover:shadow-lg"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Publish
                  </button>
                </div>

                <p className="mt-4 text-xs text-gray-500 text-center">
                  Preview opens a modal with validation results and listing summary.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}