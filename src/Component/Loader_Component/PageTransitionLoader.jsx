import React from "react";

export default function PageTransitionLoader() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[999998] flex items-center justify-center">
      <div className="relative">
        {/* Spinner */}
        <div className="w-20 h-20 border-4 border-[#126F77]/20 border-t-[#126F77] rounded-full animate-spin"></div>

        {/* DeenNest Text */}
        <div className="absolute inset-0 flex  items-center justify-center">
          <div className="text-[#126F77] font-semibold text-sm">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
