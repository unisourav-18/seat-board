// src/components/add-listing/DeliverySection.jsx
import { CalendarIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export default function DeliverySection({ form, update, fileInput, onFileChange }) {
  return (
    <div className="bg-white border border-[#e7efe9] rounded-[18px] shadow-[0_10px_25px_rgba(2,6,23,0.06)] p-5">
      <div className="flex items-center justify-between mb-4">
        <b className="text-xs uppercase text-[#6b7280] tracking-wide">Delivery</b>
        <span className="text-xs uppercase text-[#6b7280] tracking-wide">Shipping rules & proofs</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Date to ship
          </label>
          <div className="relative">
            <input
              type="date"
              value={form.shipDate}
              onChange={(e) => update("shipDate", e.target.value)}
              className="w-full h-11 px-4 border border-[#e7efe9] rounded-[14px] bg-white shadow-[0_10px_25px_rgba(2,6,23,0.06)] font-bold text-[#0f172a] focus:border-[rgba(26,125,71,0.55)] focus:shadow-[0_0_0_4px_rgba(26,125,71,0.14)] outline-none"
            />
            <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280] pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
            Tickets in hand
          </label>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold text-[#6b7280]">Mark if ready now</span>
            <div
              className={`w-14 h-8 rounded-full border-2 cursor-pointer transition-colors relative ${
                form.inHand ? "bg-emerald-500 border-emerald-500" : "bg-gray-200 border-gray-300"
              }`}
              onClick={() => update("inHand", !form.inHand)}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                  form.inHand ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-[11px] font-black text-[#6b7280] uppercase tracking-wide mb-1.5">
          Upload tickets
        </label>
        <div className="border-2 border-dashed border-[rgba(26,125,71,0.30)] bg-[rgba(26,125,71,0.06)] rounded-[16px] p-6 text-center">
          <ArrowUpTrayIcon className="w-8 h-8 mx-auto text-emerald-500" />
          <p className="mt-2 text-sm text-gray-600 font-bold">Drop files here</p>
          <p className="text-xs text-gray-500">PDF / Images • Max 10MB</p>
          <button
            onClick={() => fileInput.current?.click()}
            className="mt-4 px-5 py-2 bg-white border border-emerald-300 rounded-lg text-emerald-700 font-medium hover:bg-emerald-50 transition"
          >
            Choose files
          </button>
          <input
            ref={fileInput}
            type="file"
            multiple
            onChange={(e) => onFileChange(Array.from(e.target.files))}
            className="hidden"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {form.files.length ? `${form.files.length} file(s) selected.` : "No files selected."}
        </p>
      </div>
    </div>
  );
}