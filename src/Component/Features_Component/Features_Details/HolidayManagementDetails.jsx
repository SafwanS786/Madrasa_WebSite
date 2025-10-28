import React from "react";
import { CalendarDays, Clock, Bell, Smile, Sun } from "lucide-react";
import holidayImg from "../../../assets/img/Holiday.avif";
// import holidayImg from "../../../assets/img/Holiday.avif";

import { useNavigate } from "react-router-dom";

export default function HolidayManagementDetails() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 py-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 text-start">
                <span>Holiday </span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Management
                </span>{" "}
                System
              </h1>
              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-8 text-start">
                Effortlessly manage institutional holidays, vacations, and
                special events with automated schedules and reminders.
              </p>

              <div className="flex flex-row sm:flex-row gap-4">
                <button
                  className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg 
                font-semibold hover:shadow-lg transition-all"
                >
                  Start Free Trial
                </button>
                <button className="border-2 border-[#126F77] text-[#126F77] px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg font-semibold hover:bg-[#126F77] hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl">
              <img
                src={holidayImg}
                alt="Holiday Management"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="py-2 px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
        <section className="mb-5 md:mb-12 border-b border-[#E5E7EB] pb-4 md:pb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
            Smart & Organized Holiday Planner
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-8">
            DeenNest’s Holiday Management automates the entire process of
            scheduling, approving, and displaying holidays across the
            institution.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-4 h-4 md:w-5 md:h-5 text-[#126F77] " />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Centralized Holiday Calendar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-[#126F77] w-4 h-4 md:w-5 md:h-5 " />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Auto Reminders for Upcoming Holidays
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="text-[#126F77] w-4 h-4 md:w-5 md:h-5 " />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Notifications to Students & Staff
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Smile className="text-[#126F77] w-4 h-4 md:w-5 md:h-5 " />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Easy View by Departments or Classes
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Sun className="text-[#126F77] w-4 h-4 md:w-5 md:h-5 " />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Festival & Custom Event Integration
              </span>
            </div>
          </div>

          {/* Key Benefits */}
          <h3 className="text-xl font-semibold text-[#126F77] mb-4">
            Key Benefits:
          </h3>
          <ul className="grid grid-cols-1 gap-3 list-disc list-inside text-[#6B6B6B]">
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Easy and quick holiday setup
            </li>
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Keep everyone updated in real-time
            </li>
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Save time on manual announcements
            </li>
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              View and print monthly holiday reports
            </li>
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Boost transparency and consistency
            </li>
          </ul>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
            <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
              Simplify Institutional Planning
            </h3>
            <p className="text-[#6B6B6B] text-sm md:text-base">
              With automated reminders and clear communication, DeenNest’s
              Holiday Management ensures smooth academic and administrative
              planning.
            </p>
          </div>

          <div className="mt-4 md:mt-8 text-center">
            <button
              onClick={() => navigate("/features")}
              className="bg-[#126F77] text-white px-2 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-lg hover:bg-[#0E575D]
               transition-colors duration-300 cursor-pointer text-sm md:text-base"
            >
              Back to Features
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
