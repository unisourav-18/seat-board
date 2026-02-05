// src/components/add-listing/TicketsSection.jsx
export default function TicketsSection({ form, update }) {
  return (
    <div className="bg-white border border-[#e7efe9] rounded-[18px] shadow-[0_10px_25px_rgba(2,6,23,0.06)] p-5">
      <div className="flex items-center justify-between mb-4">
        <b className="text-xs uppercase text-[#6b7280] tracking-wide">Tickets</b>
        <span className="text-xs uppercase text-[#6b7280] tracking-wide">Quantity, types, split</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Quantity <span className="text-[#ef4444]">*</span>
          </label>
          <input
            type="number"
            min="1"
            value={form.quantity}
            onChange={(e) => update("quantity", e.target.value)}
            placeholder="e.g., 2"
            className="w-full h-11 px-4 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none"
          />
        </div>
        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Ticket type <span className="text-[#ef4444]">*</span>
          </label>
          <select
            value={form.ticketType}
            onChange={(e) => update("ticketType", e.target.value)}
            className="w-full h-11 px-4 pr-10 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none appearance-none bg-no-repeat bg-[position:calc(100%-18px)_center,calc(100%-13px)_center] bg-[size:5px_5px] bg-[linear-gradient(45deg,transparent_50%,#9ca3af_50%),linear-gradient(135deg,#9ca3af_50%,transparent_50%)]"
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
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Split type <span className="text-[#ef4444]">*</span>
          </label>
          <select
            value={form.splitType}
            onChange={(e) => update("splitType", e.target.value)}
            className="w-full h-11 px-4 pr-10 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none appearance-none bg-no-repeat bg-[position:calc(100%-18px)_center,calc(100%-13px)_center] bg-[size:5px_5px] bg-[linear-gradient(45deg,transparent_50%,#9ca3af_50%),linear-gradient(135deg,#9ca3af_50%,transparent_50%)]"
          >
            <option value="">Select…</option>
            <option>No Preferences</option>
            <option>Must sell together</option>
            <option>Pairs only</option>
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Max display quantity
          </label>
          <input
            type="number"
            min="1"
            value={form.maxDispQty}
            onChange={(e) => update("maxDispQty", e.target.value)}
            placeholder="e.g., 2"
            className="w-full h-11 px-4 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none"
          />
        </div>
      </div>
    </div>
  );
}