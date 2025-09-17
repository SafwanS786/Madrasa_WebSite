import React from "react";
// import { FaStarOfLife } from "react-icons/fa";
// import { HiArrowUpRight } from "react-icons/hi2";
// import { FaArrowTrendUp, FaStar, FaCircleCheck } from "react-icons/fa6";
// import { LuNetwork } from "react-icons/lu";
import { Sparkles, TrendingUp, CircleCheckBig, Star, Play } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] overflow-hidden px-8 md:px-16">
        <div className="flex-1 flex flex-col items-start justify-center">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 backdrop-blur-sm
          rounded-full px-6 py-3 border border-[#126F77]/20 shadow-sm mb-8"
          >
            <Sparkles className="text-[#EB6319]" />
            <span className="text-[#126F77] font-medium">
              Trusted by 500+ Institutions Worldwide
            </span>
            <TrendingUp className="text-[#126F77]" />
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 leading-tight">
            Transform Your <br />
            <span className="bg-gradient-to-r from-[#126F77] via-[#0F5A61] to-[#126F77] bg-clip-text text-transparent animate-pulse">
              Madrasa
            </span>
            <br /> Management
          </h1>

          <p className="mt-6 text-xl text-[#6B6B6B] leading-relaxed max-w-lg">
            Streamline operations, enhance learning, and strengthen your
            educational community with our AI-powered Islamic institution
            management platform.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium 
              h-10 rounded-md bg-gradient-to-r from-[#126F77] to-[#0F5A61]
              hover:from-[#0F5A61] hover:to-[#126F77] text-white 
              px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Start Free Trial
              <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium 
              border-[3px] border-[#EB6319] text-[#EB6319] rounded-md 
              hover:bg-[#EB6319] hover:text-white 
              px-8 py-1 text-lg shadow-md transition-all duration-300 group"
            >
              <Play />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center  mt-12 md:mt-0">
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full">
            <div className="absolute -top-8 -right-4 bg-gradient-to-r from-[#EB6319] to-[#FF8C42] text-white rounded-2xl p-4 shadow-md transition-transform cursor-pointer hover:scale-110">
              <Sparkles size={25} />
            </div>

            <div className="flex items-center justify-between mb-6">
              {/* Left side: Title */}
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#126F77] to-[#EB6319]"></span>
                Madrasa Dashboard
              </h2>

              {/* Right side: 3 dots */}
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#EB6319] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#126F77] rounded-full"></div>
                <div className="w-3 h-3 bg-[#6B6B6B]/30 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Active Students */}
              <div className="bg-gradient-to-br from-[#126F77]/10 to-[#126F77]/5 rounded-2xl p-4 border border-[#126F77]/10">
                <div className="text-3xl font-bold text-[#126F77] mb-1">
                  1,247
                </div>
                <div className="text-[#6B6B6B] text-sm">Active Students</div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="w-3 h-3 text-[#126F77]" />
                  <span className="text-xs text-[#126F77]">
                    +12% this month
                  </span>
                </div>
              </div>

              {/* Attendance Rate */}
              <div className="bg-gradient-to-br from-[#EB6319]/10 to-[#EB6319]/5 rounded-2xl p-4 border border-[#EB6319]/10">
                <div className="text-3xl font-bold text-[#EB6319] mb-1">
                  98.5%
                </div>
                <div className="text-[#6B6B6B] text-sm">Attendance Rate</div>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-3 h-3 text-[#EB6319]" />
                  <span className="text-xs text-[#EB6319]">Excellent</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-5">
              {/* Student Management */}
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#126F77]/5 transition-colors">
                {/* Left Icon Box */}
                <div className="w-8 h-8 bg-[#126F77] rounded-lg flex items-center justify-center">
                  <CircleCheckBig className="w-4 h-4 text-white" />
                </div>

                {/* Text */}
                <span className="text-[#1A1A1A] flex-1">
                  Student Management
                </span>

                {/* Right Pulse Dot */}
                <div className="w-2 h-2 bg-[#126F77] rounded-full animate-pulse"></div>
              </div>

              {/* Performance Analytics */}
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#EB6319]/5 transition-colors">
                {/* Left Icon Box */}
                <div className="w-8 h-8 bg-[#EB6319] rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>

                {/* Text */}
                <span className="text-[#1A1A1A] flex-1">
                  Performance Analytics
                </span>

                {/* Right Pulse Dot */}
                <div className="w-2 h-2 bg-[#EB6319] rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 bg-[#126F77] text-white p-4 rounded-2xl shadow-md transition-transform cursor-pointer hover:scale-105">
              <TrendingUp size={25} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
