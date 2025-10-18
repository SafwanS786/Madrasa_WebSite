import React from "react";
import { Zap } from "lucide-react";

export default function Features() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-20 2xl:top-20 left-10 sm:left-12 md:left-16 lg:left-20 xl:left-20 2xl:left-20 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 2xl:bottom-20 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-20 2xl:right-20 w-64 sm:w-80 md:w-88 lg:w-96 xl:w-96 2xl:w-96 h-64 sm:h-80 md:h-88 lg:h-96 xl:h-96 2xl:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 border border-[#126f77]/20 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
              <Zap className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-[#EB6319]" />
              <span className="text-[#126F77] font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                Comprehensive Features
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
              Everything You Need to
              <br />
              <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                Run Your Madrasa Smoothly
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              Discover all the tools and capabilities that make our platform the
              complete solution for managing your Islamic educational
              institution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
