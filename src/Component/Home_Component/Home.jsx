import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaArrowTrendUp, FaStar, FaCircleCheck } from "react-icons/fa6";
import { LuNetwork } from "react-icons/lu";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] overflow-hidden px-8 md:px-16">
      <div className="flex-1 flex flex-col items-start justify-center">
        <div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 backdrop-blur-sm
          rounded-full px-6 py-2 border border-[#126F77]/20 shadow-sm mb-8"
        >
          <FaStarOfLife className="text-[#EB6319]" />
          <span className="text-[#126F77] font-medium">
            Trusted by 500+ Institutions Worldwide
          </span>
          <HiArrowUpRight className="text-[#126F77]" />
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

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          {/* Button 1 */}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center  mt-12 md:mt-0">
        <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full">
          <div className="absolute -top-5 -right-4 bg-[#EB6319] text-white p-3 rounded-lg shadow-md hover:scale-110">
            <LuNetwork size={25} />
          </div>

          <div className="flex items-center justify-between mb-6">
            {/* Left side: Title */}
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <span className="w-5 h-5 rounded-md bg-gradient-to-r from-[#126F77] to-[#EB6319]"></span>
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
                <FaArrowTrendUp className="w-3 h-3 text-[#126F77]" />
                <span className="text-xs text-[#126F77]">+12% this month</span>
              </div>
            </div>

            {/* Attendance Rate */}
            <div className="bg-gradient-to-br from-[#EB6319]/10 to-[#EB6319]/5 rounded-2xl p-4 border border-[#EB6319]/10">
              <div className="text-3xl font-bold text-[#EB6319] mb-1">
                98.5%
              </div>
              <div className="text-[#6B6B6B] text-sm">Attendance Rate</div>
              <div className="flex items-center gap-1 mt-2">
                <FaStar className="w-3 h-3 text-[#EB6319]" />
                <span className="text-xs text-[#EB6319]">Excellent</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-5">
            {/* Student Management */}
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#126F77]/5 transition-colors">
              {/* Left Icon Box */}
              <div className="w-8 h-8 bg-[#126F77] rounded-lg flex items-center justify-center">
                <FaCircleCheck className="w-4 h-4 text-white" />
              </div>

              {/* Text */}
              <span className="text-[#1A1A1A] flex-1">Student Management</span>

              {/* Right Pulse Dot */}
              <div className="w-2 h-2 bg-[#126F77] rounded-full animate-pulse"></div>
            </div>

            {/* Performance Analytics */}
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#EB6319]/5 transition-colors">
              {/* Left Icon Box */}
              <div className="w-8 h-8 bg-[#EB6319] rounded-lg flex items-center justify-center">
                <FaStar className="w-4 h-4 text-white" />
              </div>

              {/* Text */}
              <span className="text-[#1A1A1A] flex-1">
                Performance Analytics
              </span>

              {/* Right Pulse Dot */}
              <div className="w-2 h-2 bg-[#EB6319] rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-[#126F77] text-white p-3 rounded-lg shadow-md hover:scale-105">
            <FaArrowTrendUp size={25} />
          </div>
        </div>
      </div>
    </section>
  );
}
