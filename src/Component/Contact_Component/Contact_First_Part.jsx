import React from "react";
import { Headphones } from "lucide-react";
export default function Contact_First_Part() {
  return (
    <>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20 mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 border border-[#126f77]/20">
            <Headphones className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-[#EB6319]" />
            <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-[#126F77] font-medium">
              We're Here to Help
            </span>
          </div>
          <h2 className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
            Get in Touch
            <br />
            <span className="bg-gradient-to-r from-[#126f77]/10 to-[#EB6319] bg-clip-text text-transparent">
              With Our Team
            </span>
          </h2>
          <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
            Have a question about DeenNest? Need help getting started? Our
            friendly support team is always ready to assist you with setup,
            guidance or technical queries.
          </p>
        </div>
      </div>
    </>
  );
}
