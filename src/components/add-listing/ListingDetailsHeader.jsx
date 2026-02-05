// src/components/add-listing/ListingDetailsHeader.jsx
export default function ListingDetailsHeader({ onSaveDraft, onPublish }) {
  return (
    <div className="px-6 py-5 border-b border-[#e7efe9] bg-gradient-to-r from-white to-[#fbfffd] flex items-start justify-between gap-4">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Listing details</h2>
        <p className="text-sm text-gray-600 mt-1">
          Unique layout: grouped cards + sticky summary for perfect space usage.
        </p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          onClick={onSaveDraft}
          className="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition"
        >
          Save draft
        </button>
        <button
          onClick={onPublish}
          className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
        >
          Publish listing
        </button>
      </div>
    </div>
  );
}