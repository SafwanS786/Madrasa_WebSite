import React from "react";
import {
  UserCheck,
  Calendar,
  CreditCard,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import maulanaImg from "../../../assets/img/maulana_img1.jpg";
import { useNavigate } from "react-router-dom";

export default function MaulanaDetails() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative overflow-hidden mt-10 md:mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-20 2xl:top-20 left-10 sm:left-12 md:left-16 lg:left-20 xl:left-20 2xl:left-20 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>

          <div
            className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 2xl:bottom-20 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-20 2xl:right-20 w-64 sm:w-80 md:w-88 lg:w-96 xl:w-96 2xl:w-96 h-64 sm:h-80 md:h-88 lg:h-96 xl:h-96 2xl:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 text-start">
                <span className="block">Maulana & Staff</span>
                <span className="block bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                Efficient management of teaching and non-teaching staff with
                complete profiles, attendance tracking, payroll processing, and
                performance monitoring.
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
                src={maulanaImg}
                alt="Maulana Management"
                className="w-full h-auto max-h-96 md:max-h-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-8 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
        <section className="mb-5 md:mb-16 border-b border-[#E5E7EB] pb-4 md:pb-12">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Comprehensive Staff Management
                </span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-[#6B6B6B] mb-6 leading-relaxed">
                Manage your Maulana, teachers, and administrative staff
                efficiently with our complete staff management system. Track
                attendance, process payroll, and monitor performance all in one
                place.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#126F77]" />
                  <span className="text-sm sm:text-base text-[#6B6B6B]">
                    Staff Profiles & Contact Info
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#126F77]" />
                  <span className="text-sm sm:text-base text-[#6B6B6B]">
                    Attendance Tracking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-[#126F77]" />
                  <span className="text-sm sm:text-base text-[#6B6B6B]">
                    Payroll Details
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#126F77]" />
                  <span className="text-sm sm:text-base text-[#6B6B6B]">
                    Role & Subject Assignment
                  </span>
                </div>
              </div>

              <h3 className="text-lg md:text-2xl font-semibold text-[#126F77] mb-4">
                Key Features:
              </h3>
              <ul className="grid grid-cols-1 gap-3 md:gap-4 list-disc list-inside text-sm md:text-base text-[#6B6B6B]">
                <li>
                  Complete staff profiles with personal and professional details
                </li>
                <li>Digital attendance system for teachers and staff</li>
                <li>Automated payroll processing with salary slips</li>
                <li>Class and subject allocation management</li>
                <li>Performance tracking and evaluation system</li>
                <li>Leave management and approval workflow</li>
              </ul>

              <div className="mt-8 p-5 md:p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
                  Designed for Islamic Education
                </h3>
                <p className="text-sm md:text-base text-[#6B6B6B]">
                  Our system understands the unique needs of Islamic educational
                  institutions, providing specialized features for Maulana
                  management while maintaining Islamic principles and values in
                  staff administration.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <button
              onClick={() => navigate("/features")}
              className="bg-[#126F77] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer text-sm md:text-base"
            >
              Back to Features
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
