// src/components/FooterBar.jsx
import React from 'react';

const FooterBar = ({ selectedCount = 0 }) => {
  return (
    <div 
      className="
        fixed bottom-0 left-0 right-0 z-10
        bg-white border-t border-gray-200
        px-6 py-3 shadow-lg
        flex items-center justify-between
        text-sm
      "
    >
      {/* Left: Bulk actions */}
      <div className="flex items-center gap-5">
        <button className="text-gray-700 hover:text-green-700 font-medium transition-colors">
          Select all
        </button>
        <button className="text-gray-700 hover:text-green-700 font-medium transition-colors">
          Deselect
        </button>
        <button className="text-gray-700 hover:text-green-700 font-medium transition-colors">
          Clone
        </button>
        <button className="text-gray-700 hover:text-green-700 font-medium transition-colors">
          Edit
        </button>
        <button className="text-gray-700 hover:text-red-600 font-medium transition-colors">
          Delete
        </button>
      </div>

      {/* Right: Selected count + Cancel + Windows note */}
      <div className="flex items-center gap-6 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="font-medium">{selectedCount} selected</span>
          <span>•</span>
          <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Cancel
          </button>
        </div>

        {/* Windows activation watermark (realistic touch) */}
        <div className="text-xs text-gray-400 flex items-center gap-2">
          <span>Activate Windows</span>
          <span>•</span>
          <span>Go to Settings to activate Windows.</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;