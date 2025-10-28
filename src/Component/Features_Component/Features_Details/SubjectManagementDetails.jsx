import React from "react";
import {
  BookOpen,
  Users,
  FileText,
  CheckSquare,
  TrendingUp,
  Calendar,
  Award,
  Clock,
} from "lucide-react";
import subjectImg from "../../../assets/img/Subject.png"; // UPDATE: Add your image
import { useNavigate } from "react-router-dom";

export default function SubjectManagementDetails() {
  const navigate = useNavigate();

  return (
    <>
      {/* --------------------------------------------------------------
          HERO SECTION – EXACT SAME AS StudentDetails
      -------------------------------------------------------------- */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        <div className="absolute inset-0">
          {/* Left blur */}
          <div className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-20 2xl:top-20 left-10 sm:left-12 md:left-16 lg:left-20 xl:left-20 2xl:left-20 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>

          {/* Right blur */}
          <div
            className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 2xl:bottom-20 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-20 2xl:right-20 w-64 sm:w-80 md:w-88 lg:w-96 xl:w-96 2xl:w-96 h-64 sm:h-80 md:h-88 lg:h-96 xl:h-96 2xl:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
            {/* ---------- TEXT CONTENT ---------- */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 text-start">
                <span className="inline">Subject </span>
                <span className="hidden md:block"></span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  Management
                </span>
                <br /> System
              </h1>

              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                Create, assign, and track subjects across all classes. Manage
                syllabus, teacher allocation, and subject-wise performance with
                detailed analytics.
              </p>

              <div className="flex flex-row sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg font-semibold hover:shadow-lg transition-all">
                  Start Free Trial
                </button>
                <button className="border-2 border-[#126F77] text-[#126F77] px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg font-semibold hover:bg-[#126F77] hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* ---------- IMAGE ---------- */}
            <div className="flex-1 w-full max-w-2xl">
              <img
                src={subjectImg}
                alt="Subject Management"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------
          FEATURES SECTION – EXACT SAME AS StudentDetails
      -------------------------------------------------------------- */}
      <div className="py-2 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
        <section className="mb-6 md:mb-16 border-b border-[#E5E7EB] pb-4 md:pb-12">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Complete Subject Management Solution
                </span>
              </h2>

              <p className="text-base md:text-xl text-[#6B6B6B] mb-6 leading-relaxed">
                DeenNest enables full control over subject creation, teacher
                assignment, syllabus tracking, and performance monitoring across
                all classes and divisions.
              </p>

              {/* Icon Grid – same sizes & spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 md:gap-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Subject Creation & Details
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Teacher Assignment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Syllabus Management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Performance Analytics
                  </span>
                </div>
              </div>

              <h3 className="text-lg md:text-2xl font-semibold text-[#126F77] mb-4">
                Key Benefits:
              </h3>

              {/* Dot bullets – exact same */}
              <ul className="grid grid-cols-1 gap-4 list-disc list-inside">
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Create subjects with code, name, and type
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Assign multiple teachers per subject
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Upload and track syllabus completion
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Subject-wise attendance & exam results
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Generate detailed subject reports
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Support for Quran, Hifz, Tajweed, Fiqh, Arabic
                </li>
              </ul>

              {/* Highlight box – identical */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
                  Perfect For Islamic Curriculum
                </h3>
                <p className="text-[#6B6B6B] text-sm">
                  Whether teaching Quran recitation, Tajweed, Fiqh, or modern
                  subjects, our system supports your full Islamic and academic
                  curriculum with precision.
                </p>
              </div>
            </div>
          </div>

          {/* Back button – exact same */}
          <div className="mt-4 md:mt-8 text-center">
            <button
              onClick={() => navigate("/features")}
              className="bg-[#126F77] text-white px-2 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer text-sm md:text-base"
            >
              Back to Features
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
