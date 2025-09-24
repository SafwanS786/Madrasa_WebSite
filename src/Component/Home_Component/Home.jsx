import React from "react";
import { Sparkles, TrendingUp, CircleCheckBig, Star, Play } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section
        className="relative min-h-screen flex flex-col md:flex-col md:gap-12 2xl:flex-row items-center justify-between 
        bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] overflow-hidden
        px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
      >
        {/* Background Blobs */}
        <div
          aria-hidden="true"
          className="absolute top-20 left-10 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full 
          bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 blur-3xl animate-pulse z-0 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 rounded-full 
          bg-gradient-to-r from-[#EB6319]/10 to-[#126F77]/10 blur-3xl animate-pulse z-0 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-32 right-[25%] w-6 h-6 sm:w-8 sm:h-8 bg-[#EB6319]/20 
          rounded-lg rotate-45 animate-bounce pointer-events-none z-0"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-40 left-[30%] w-4 h-4 sm:w-6 sm:h-6 bg-[#126F77]/30 
          rounded-full animate-bounce pointer-events-none z-0"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-6 sm:left-10 w-2 h-2 sm:w-4 sm:h-4 bg-[#EB6319]/40 
          rounded-full animate-ping pointer-events-none z-0"
        />

        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start justify-center z-10 mt-10 md:mt-20">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 backdrop-blur-sm
            rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-[#126F77]/20 shadow-sm mb-6 sm:mb-8"
          >
            <Sparkles className="text-[#EB6319] w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-[#126F77] font-medium text-sm sm:text-base">
              Trusted by 500+ Institutions Worldwide
            </span>
            <TrendingUp className="text-[#126F77] w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Transform Your <br />
            <span className="bg-gradient-to-r from-[#126F77] via-[#0F5A61] to-[#126F77] bg-clip-text text-transparent animate-pulse">
              Madrasa
            </span>
            <br /> Management
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-lg">
            Streamline operations, enhance learning, and strengthen your
            educational community with our AI-powered Islamic institution
            management platform.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium 
              h-10 sm:h-12 rounded-md bg-gradient-to-r from-[#126F77] to-[#0F5A61]
              hover:from-[#0F5A61] hover:to-[#126F77] text-white 
              px-6 sm:px-8 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Start Free Trial
              <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium 
              border-2 sm:border-[3px] border-[#EB6319] text-[#EB6319] rounded-md 
              hover:bg-[#EB6319] hover:text-white 
              px-6 sm:px-8 h-10 sm:h-12 text-base sm:text-lg shadow-md transition-all duration-300 group"
            >
              <Play size={16} />
              Watch Demo
            </button>
          </div>
          <div className="flex md:flex-row md:items-center justify-center flex-col gap-2 mt-10 md:gap-12 md:mt-20">
            <div className="flex gap-2 text-[#6B6B6B] mb-3">
              <CircleCheckBig className="text-primary" />
              30-day free trial
            </div>
            <div className="flex  gap-2 text-[#6B6B6B] mb-3">
              <CircleCheckBig className="text-primary" />
              No setup fees
            </div>
            <div className="flex  gap-2 text-[#6B6B6B] mb-3">
              <CircleCheckBig className="text-primary" />
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Right Content (Dashboard---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------) */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0 mb-12 md:mb-10 ">
          <div className="relative  rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-md sm:max-w-lg md:w-full  lg:bg-white lg:max-w-2xl">
            {/* Floating Icon */}
            <div className="absolute -top-7 -right-4 bg-gradient-to-r from-[#EB6319] to-[#FF8C42] text-white rounded-2xl p-3 sm:p-4 shadow-md transition-transform cursor-pointer hover:scale-110">
              <Sparkles size={22} />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="flex items-center gap-2 text-sm sm:text-base font-semibold">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-r from-[#126F77] to-[#EB6319]"></span>
                Madrasa Dashboard
              </h2>
              <div className="flex gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#EB6319] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#126F77] rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#6B6B6B]/30 rounded-full"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-[#126F77]/10 to-[#126F77]/5 rounded-2xl p-3 sm:p-4 border border-[#126F77]/10">
                <div className="text-2xl sm:text-3xl font-bold text-[#126F77] mb-1">
                  1,247
                </div>
                <div className="text-[#6B6B6B] text-xs sm:text-sm">
                  Active Students
                </div>
                <div className="flex items-center gap-1 mt-1 sm:mt-2">
                  <TrendingUp className="w-3 h-3 text-[#126F77]" />
                  <span className="text-xs text-[#126F77]">
                    +12% this month
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#EB6319]/10 to-[#EB6319]/5 rounded-2xl p-3 sm:p-4 border border-[#EB6319]/10">
                <div className="text-2xl sm:text-3xl font-bold text-[#EB6319] mb-1">
                  98.5%
                </div>
                <div className="text-[#6B6B6B] text-xs sm:text-sm">
                  Attendance Rate
                </div>
                <div className="flex items-center gap-1 mt-1 sm:mt-2">
                  <Star className="w-3 h-3 text-[#EB6319]" />
                  <span className="text-xs text-[#EB6319]">Excellent</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-5">
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-[#126F77]/5 transition-colors">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#126F77] rounded-lg flex items-center justify-center">
                  <CircleCheckBig className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-[#1A1A1A] text-sm sm:text-base flex-1">
                  Student Management
                </span>
                <div className="w-2 h-2 bg-[#126F77] rounded-full animate-pulse"></div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-[#EB6319]/5 transition-colors">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#EB6319] rounded-lg flex items-center justify-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-[#1A1A1A] text-sm sm:text-base flex-1">
                  Performance Analytics
                </span>
                <div className="w-2 h-2 bg-[#EB6319] rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Bottom Floating Icon */}
            <div className="absolute -bottom-4 -left-4 bg-[#126F77] text-white p-3 sm:p-4 rounded-2xl shadow-md transition-transform cursor-pointer hover:scale-105">
              <TrendingUp size={20} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
