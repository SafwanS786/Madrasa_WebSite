import React from "react";

import { Users } from "lucide-react";

export default function Stories() {
  return (
    <section className="bg-white text-center py-8 sm:py-12 md:py-16 lg:py-24 xl:py-24 2xl:py-24 ">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#eb6319]/10 text-[#126f77] rounded-full px-4 py-2  font-medium mb-6 sm:px-4 md:px-4
           lg:px-4 xl:px-4 2xl:px-4 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 2xl:py-2 text-xs 
        sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6"
        >
          <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#126f77]" />
          Customer Stories
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          Loved by educators worldwide
        </h2>
        <p
          className="text-[#1A1A1A] max-w-2xl mx-auto mt-6 text-base sm:text-lg md:text-lg
         lg:text-lg xl:text-xl 2xl:text-xl sm:mt-5 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6"
        >
          See how madrasas around the globe are transforming their operations
          and improving student outcomes with our platform.
        </p>
      </div>
    </section>
  );
}
