import React from "react";
import { Zap, ArrowRight, Play, Crown } from "lucide-react";
// import { LeftArrow } from "react-icons/bi";

export default function Features_Last_Card() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-16 text-center">
      <div className="mt-12 sm:mt-16 md:mt-18 lg:mt-20 xl:mt-20 2xl:mt-20 bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 sm:top-3 md:top-4 lg:top-4 xl:top-4 2xl:top-4 right-2 sm:right-3 md:right-4 lg:right-4 xl:right-4 2xl:right-4 w-12 sm:w-16 md:w-20 lg:w-20 xl:w-20 2xl:w-20 h-12 sm:h-16 md:h-20 lg:h-20 xl:h-20 2xl:h-20 border-2 border-white rounded-lg rotate-12"></div>
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-4 xl:bottom-4 2xl:bottom-4 left-2 sm:left-3 md:left-4 lg:left-4 xl:left-4 2xl:left-4 w-10 sm:w-12 md:w-16 lg:w-16 xl:w-16 2xl:w-16 h-10 sm:h-12 md:h-16 lg:h-16 xl:h-16 2xl:h-16 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8 bg-white rounded-lg rotate-45"></div>
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
            <Crown className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-white" />
            <span className="text-white font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
              Ready to Transform Your Madrasa?
            </span>
          </div>
          <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-white mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
            Experience All Features
          </h3>
          <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how these powerful features can
            transform your madrasa management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
            <button className="bg-white rounded-md p-1.5 sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 text-[#126F77] font-bold inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 group">
              Start Free Trial
              <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
                <ArrowRight
                  size={15}
                  className="font-bold h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5"
                />
              </span>
            </button>
            <button className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white rounded-md p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 2xl:p-3 text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
              <span>
                <Play
                  size={15}
                  className="inline-block h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5"
                />
              </span>
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
