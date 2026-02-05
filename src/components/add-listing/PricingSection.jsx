// src/components/add-listing/PricingSection.jsx
export default function PricingSection({ form, update, estPayout }) {
  return (
    <div className="bg-white border border-[#e7efe9] rounded-[18px] shadow-[0_10px_25px_rgba(2,6,23,0.06)] p-5">
      <div className="flex items-center justify-between mb-4">
        <b className="text-xs uppercase text-[#6b7280] tracking-wide">Pricing</b>
        <span className="text-xs uppercase text-[#6b7280] tracking-wide">Real-time margin preview</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Face value
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280] font-black">£</span>
            <input
              type="number"
              step="0.01"
              value={form.faceValue}
              onChange={(e) => update("faceValue", e.target.value)}
              placeholder="0.00"
              className="w-full h-11 pl-8 pr-4 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Proposed price <span className="text-[#ef4444]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280] font-black">£</span>
            <input
              type="number"
              step="0.01"
              value={form.proposedPrice}
              onChange={(e) => update("proposedPrice", e.target.value)}
              placeholder="0.00"
              className="w-full h-11 pl-8 pr-4 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none"
            />
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs font-bold text-[#6b7280]">
        {form.proposedPrice
          ? `Estimated payout after fees: £${estPayout}`
          : "Enter pricing to see estimated payout."}
      </p>
    </div>
  );
}