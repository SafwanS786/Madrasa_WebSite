import React from "react";
import {
  Star,
  MessageSquare,
  ThumbsUp,
  UserCheck,
  TrendingUp,
  ClipboardCheck,
  CircleCheckBig,
} from "lucide-react";
import reviewImg from "../../../assets/img/Review.jpg"; // ⭐ Replace with your image path
import { useNavigate } from "react-router-dom";
export default function ReviewManagementDetails() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-64 sm:w-80 md:w-88 lg:w-96 h-64 sm:h-80 md:h-88 lg:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
            {/* Left Text Section */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 text-start">
                <span className="inline">Review </span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  Management
                </span>
                <br /> System
              </h1>

              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                Manage feedback, ratings, and user experiences effortlessly.
                Collect insights, respond to reviews, and enhance trust across
                your institution with our centralized Review Management System.
              </p>

              {/* Buttons */}
              <div className="flex flex-row gap-4">
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

            {/* Right Image Section */}
            <div className="flex-1 w-full max-w-2xl">
              <img
                src={reviewImg}
                alt="Review Management"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-2 px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
        <section className="mb-6 md:mb-16 border-b border-[#E5E7EB] pb-4 md:pb-12">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Complete Review Management Solution
                </span>
              </h2>

              <p className="text-base md:text-xl text-[#6B6B6B] mb-6 leading-relaxed">
                DeenNest’s Review Management System helps institutions monitor
                feedback from students, staff, and parents. Analyze satisfaction
                levels, identify improvement areas, and build a culture of
                transparency and growth.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 md:gap-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Ratings & Feedback Management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Comment Moderation System
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    User Identity & Role Verification
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Feedback Analytics Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Review Approval Workflow
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CircleCheckBig className="w-5 h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Auto-Response Templates
                  </span>
                </div>
              </div>

              {/* Key Benefits */}
              <h3 className="text-lg md:text-2xl font-semibold text-[#126F77] mb-4">
                Key Benefits:
              </h3>
              <ul className="grid grid-cols-1 gap-4 list-disc list-inside">
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Centralized review and feedback tracking
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Real-time sentiment analysis and reports
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Boost transparency and institutional trust
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Monitor staff and faculty performance
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Respond quickly to reviews and resolve concerns
                </li>
              </ul>

              {/* Highlight Box */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
                  Empowering Continuous Improvement
                </h3>
                <p className="text-[#6B6B6B] text-sm md:text-base">
                  DeenNest’s Review Management System helps educational
                  institutions build a transparent environment where feedback
                  drives excellence — ensuring student satisfaction and
                  institutional growth with Islamic values.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
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
    </div>
  );
}
