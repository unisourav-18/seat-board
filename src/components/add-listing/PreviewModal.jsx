// src/components/add-listing/PreviewModal.jsx
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function PreviewModal({ open, onClose, onConfirm, form = {}, estPayout }) {
  // Default to empty object if form is undefined (prevents crash)
  const safeForm = form || {};

  const isValid =
    safeForm.eventName &&
    safeForm.quantity &&
    safeForm.ticketType &&
    safeForm.splitType &&
    safeForm.seating &&
    safeForm.proposedPrice;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#e7efe9]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-[#e7efe9] flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Listing preview</h3>
            <p className="text-sm text-gray-600 mt-1">Review details before publishing.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Validation Card */}
          <div className="bg-white border border-[#e7efe9] rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <b className="text-sm font-semibold text-gray-700">Validation</b>
              <span className={`text-sm font-medium ${isValid ? "text-emerald-600" : "text-amber-600"}`}>
                {isValid ? "Ready to publish" : "Action needed"}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {isValid
                ? "Looks good. Confirm publish to create listing."
                : "Please fill: Event, Quantity, Ticket type, Split type, Seating arrangement, Proposed price."}
            </p>
          </div>

          {/* Summary Card */}
          <div className="bg-white border border-[#e7efe9] rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <b className="text-sm font-semibold text-gray-700">Summary</b>
              <span className="text-xs font-bold text-gray-500">Auto-generated</span>
            </div>
            <div className="space-y-2 text-sm divide-y divide-gray-100">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Event</span>
                <span className="font-medium">{safeForm.eventName || "—"}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Quantity</span>
                <span className="font-medium">{safeForm.quantity || "—"}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Ticket type</span>
                <span className="font-medium">{safeForm.ticketType || "—"}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Split type</span>
                <span className="font-medium">{safeForm.splitType || "—"}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Section / Row</span>
                <span className="font-medium">
                  {safeForm.section || "—"} {safeForm.row ? `/ Row ${safeForm.row}` : ""}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Price</span>
                <span className="font-medium">{safeForm.proposedPrice ? `£${safeForm.proposedPrice}` : "—"}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tickets in hand</span>
                <span className="font-medium">{safeForm.inHand ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Files</span>
                <span className="font-medium">{safeForm.files?.length ? `${safeForm.files.length} file(s)` : "None"}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={onConfirm}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg"
            >
              Confirm publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}