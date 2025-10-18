import React from "react";
import { Zap } from "lucide-react";

export default function Features() {
  return (
    <div className="md:mt-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-40 mx-auto">
      <div className="text-center mb-16 sm:mb-20">
        <div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 rounded-full
        py-3 sm:py-3 px-6 mb-6 border border-[#126f77]/20"
        >
          <Zap className="w-5 h-5 sm:w-5 sm:h-5 text-[#EB6319]" />

          <span className="text-sm md:text-base text-[#126F77] font-medium">
            Comprehensive Features
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sen text-[#1A1A1A] mb-2 sm:mb-6 leading-tight">
          Everything You Need to
          <br />
          <span className="block bg-gradient-to-r from-[#126f77] to-[#EB6319] bg-clip-text text-transparent">
            Run Your Madrasa Smoothly
          </span>
        </h2>
        <p className="text-base md:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
          Our complete management system helps you handle students, maulana,
          staff, classes and finances — all from one simple, easy-to-use
          dashboard.
        </p>
      </div>
    </div>
  );
}
