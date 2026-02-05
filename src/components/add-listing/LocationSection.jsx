// src/components/add-listing/LocationSection.jsx
export default function LocationSection({ form, update }) {
  return (
    <div className="bg-white border border-[#e7efe9] rounded-[18px] shadow-[0_10px_25px_rgba(2,6,23,0.06)] p-5">
      <div className="flex items-center justify-between mb-4">
        <b className="text-xs uppercase text-[#6b7280] tracking-wide">Location</b>
        <span className="text-xs uppercase text-[#6b7280] tracking-wide">Section/row & fan area</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Section/Block
          </label>
          <select
            value={form.section}
            onChange={(e) => update("section", e.target.value)}
            className="w-full h-11 px-4 pr-10 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none appearance-none bg-no-repeat bg-[position:calc(100%-18px)_center,calc(100%-13px)_center] bg-[size:5px_5px] bg-[linear-gradient(45deg,transparent_50%,#9ca3af_50%),linear-gradient(135deg,#9ca3af_50%,transparent_50%)]"
          >
            <option value="">Select…</option>
            <option>Shortside Upper</option>
            <option>Longside Upper</option>
            <option>Shortside Lower</option>
            <option>Longside Lower</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Row
          </label>
          <input
            type="text"
            value={form.row}
            onChange={(e) => update("row", e.target.value)}
            placeholder="e.g., 12"
            className="w-full h-11 px-4 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
          Fan area
        </label>
        <select
          value={form.fanArea}
          onChange={(e) => update("fanArea", e.target.value)}
          className="w-full h-11 px-4 pr-10 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none appearance-none bg-no-repeat bg-[position:calc(100%-18px)_center,calc(100%-13px)_center] bg-[size:5px_5px] bg-[linear-gradient(45deg,transparent_50%,#9ca3af_50%),linear-gradient(135deg,#9ca3af_50%,transparent_50%)]"
        >
          <option value="">Select…</option>
          <option>Home</option>
          <option>Away</option>
          <option>Neutral</option>
        </select>
      </div>
    </div>
  );
}