// src/components/add-listing/LiveSummary.jsx
import { EyeIcon } from "@heroicons/react/24/outline";
export default function LiveSummary({ form, estPayout, isReady, onPreview }) {
  return (
    <div className="sticky top-8 bg-white border border-[#e7efe9] rounded-[18px] shadow-[0_10px_25px_rgba(2,6,23,0.06)] p-5">
      <div className="flex items-center justify-between mb-4">
        <b className="text-xs uppercase text-[#6b7280] tracking-wide">Live Summary</b>
        <span
          className={`px-3 py-1 text-xs font-black rounded-full ${
            isReady ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
          }`}
        >
          {isReady ? "Ready" : "Draft"}
        </span>
      </div>

      <div className="space-y-2 text-sm divide-y divide-[rgba(231,239,233,0.8)]">
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Event</span>
          <b className="text-[#0f172a]">{form.eventName || "—"}</b>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Qty</span>
          <b className="text-[#0f172a]">{form.quantity || "—"}</b>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Type</span>
          <b className="text-[#0f172a]">{form.ticketType || "—"}</b>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Split</span>
          <b className="text-[#0f172a]">{form.splitType || "—"}</b>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Section</span>
          <b className="text-[#0f172a]">{form.section || "—"}</b>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Row</span>
          <b className="text-[#0f172a]">{form.row || "—"}</b>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Price</span>
          <b className="text-[#0f172a]">{form.proposedPrice ? `£${form.proposedPrice}` : "—"}</b>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Est. payout</span>
          <b className="text-[#0f172a]">{estPayout !== "—" ? `£${estPayout}` : "—"}</b>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[#6b7280] font-black">Status</span>
          <b className={isReady ? "text-green-700" : "text-amber-700 font-black"}>
            {isReady ? "Ready" : "Needs info"}
          </b>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={onPreview}
          className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2"
        >
          <EyeIcon className="w-5 h-5" />
          Preview
        </button>
        <button
          disabled={!isReady}
          onClick={onPreview} // same as preview for now; can change to direct publish
          className={`flex-1 py-3 font-semibold rounded-xl transition flex items-center justify-center gap-2 ${
            isReady
              ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md hover:shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Publish
        </button>
      </div>

      <p className="mt-4 text-xs text-gray-500 text-center font-bold">
        Preview opens a modal with validation results and listing summary.
      </p>
    </div>
  );
}