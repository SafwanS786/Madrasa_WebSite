import React from "react";
import { Calculator } from "lucide-react";

export default function Pricing() {
  return (
    <>
      <div>
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-24 2xl:py-24 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 border border-[#126f77]/20 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
              <Calculator className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-[#EB6319]" />
              <span className="text-[#126F77] font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                Simple & Transparent
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
              Honest Pricing for
              <br />
              <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                Every Madrasa
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              One simple plan with everything you need. No hidden fees, no
              surprises—just powerful features at an honest price that grows
              with your institution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
