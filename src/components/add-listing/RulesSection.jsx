// src/components/add-listing/RulesSection.jsx
export default function RulesSection({ form, update }) {
  return (
    <div className="bg-white border border-[#e7efe9] rounded-[18px] shadow-[0_10px_25px_rgba(2,6,23,0.06)] p-5">
      <div className="flex items-center justify-between mb-4">
        <b className="text-xs uppercase text-[#6b7280] tracking-wide">Rules</b>
        <span className="text-xs uppercase text-[#6b7280] tracking-wide">Benefits & restrictions</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Benefits
          </label>
          <select
            value={form.benefits}
            onChange={(e) => update("benefits", e.target.value)}
            className="w-full h-11 px-4 pr-10 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none appearance-none bg-no-repeat bg-[position:calc(100%-18px)_center,calc(100%-13px)_center] bg-[size:5px_5px] bg-[linear-gradient(45deg,transparent_50%,#9ca3af_50%),linear-gradient(135deg,#9ca3af_50%,transparent_50%)]"
          >
            <option value="">Select…</option>
            <option>Hospitality included</option>
            <option>Free drinks</option>
            <option>Lounge access</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Restriction
          </label>
          <select
            value={form.restriction}
            onChange={(e) => update("restriction", e.target.value)}
            className="w-full h-11 px-4 pr-10 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none appearance-none bg-no-repeat bg-[position:calc(100%-18px)_center,calc(100%-13px)_center] bg-[size:5px_5px] bg-[linear-gradient(45deg,transparent_50%,#9ca3af_50%),linear-gradient(135deg,#9ca3af_50%,transparent_50%)]"
          >
            <option value="">Select…</option>
            <option>No away fans</option>
            <option>Adults only</option>
            <option>Obstructed view</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
          Seating arrangement <span className="text-[#ef4444]">*</span>
        </label>
        <select
          value={form.seating}
          onChange={(e) => update("seating", e.target.value)}
          className="w-full h-11 px-4 pr-10 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none appearance-none bg-no-repeat bg-[position:calc(100%-18px)_center,calc(100%-13px)_center] bg-[size:5px_5px] bg-[linear-gradient(45deg,transparent_50%,#9ca3af_50%),linear-gradient(135deg,#9ca3af_50%,transparent_50%)]"
        >
          <option value="">Select…</option>
          <option>Seated together</option>
          <option>Pairs only</option>
          <option>Singles allowed</option>
        </select>
      </div>
    </div>
  );
}