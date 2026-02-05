// src/components/add-listing/EventRibbon.jsx
import { XMarkIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function EventRibbon({ form, update, onViewMap }) {
  return (
    <div className="bg-white/90 backdrop-blur-md border border-[#e7efe9] rounded-[16px] shadow-[0_10px_25px_rgba(2,6,23,0.06)] p-4">
      <div className="flex items-center justify-between mb-3">
        <small className="text-xs font-black text-[#6b7280] uppercase tracking-wide">
          Choose Match Event
        </small>
        <button className="text-xs font-black text-[#1a7d47] hover:text-[#13663a]">
          Change
        </button>
      </div>

      <div className="relative">
        <input
          className="w-full h-11 px-4 pr-12 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none"
          value={form.eventName}
          onChange={(e) => update("eventName", e.target.value)}
        />
        {form.eventName && (
          <button
            onClick={() => {
              update("eventName", "");
              update("eventDate", "");
              update("eventTime", "");
              update("eventVenue", "");
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-[10px] border border-[#e7efe9] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] grid place-items-center text-[#6b7280] hover:text-[#0f172a]"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        )}
      </div>

      {form.eventName && (
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] text-sm">
            {form.eventDate}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] text-sm">
            {form.eventTime}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] text-sm">
            <MapPinIcon className="w-5 h-5 text-[#6b7280]" />
            {form.eventVenue}
          </div>
        </div>
      )}

      {/* View Map Button */}
      <button
        onClick={onViewMap}
        className="mt-4 w-full flex items-center justify-between px-4 py-3 border border-[#e7efe9] rounded-[16px] bg-gradient-to-b from-white to-[#fbfffd] shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#13663a] hover:text-[#1a7d47] hover:shadow-[0_12px_30px_rgba(26,125,71,0.12)] transition"
      >
        View Map <span className="text-[#1a7d47]">↗</span>
      </button>
    </div>
    
  );
}