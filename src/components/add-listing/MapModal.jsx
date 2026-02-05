// src/components/add-listing/MapModal.jsx
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function MapModal({ open, onClose, onChoose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-[95%] max-h-[90vh] overflow-hidden border border-[#e7efe9]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-[#e7efe9] flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Venue map preview</h3>
            <p className="text-sm text-gray-600 mt-1">Placeholder map panel. Plug in real map/seatmap later.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center text-gray-500 font-medium border border-[#e7efe9]">
            Venue / Seat Map Placeholder
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
            >
              Close
            </button>
            <button
              onClick={onChoose}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg"
            >
              Choose section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}