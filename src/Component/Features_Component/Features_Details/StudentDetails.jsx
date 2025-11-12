import React from "react";

import studentImg from "../../../assets/img/student.png";
import { useNavigate } from "react-router-dom";
import StdProfile from "../../../assets/img/complete.png";
import Admission from "../../../assets/img/Admission.png";
import Parent from "../../../assets/img/Parenticon.jpg";
import History from "../../../assets/img/history.jpg";
import Doc from "../../../assets/img/document.png";

export default function StudentDetails() {
  const navigate = useNavigate();
  const StudentFData = [
    {
      icon: StdProfile,
      Title: " Complete Student Profiles",
      Head: "Maintain student details, photos, contact info and enrollment data in one place.",
    },
    {
      icon: Admission,
      Title: "Admission & Enrollment Tracking",
      Head: "Automate registration, assign classes and generate admission records.",
    },
    {
      icon: Parent,
      Title: "Parent & Guardian Details",
      Head: " Store and manage parent or guardian contact information for communication and updates.",
    },
    {
      icon: History,
      Title: "Academic History",
      Head: "Maintain each student’s learning timeline and class participation records.",
    },
    {
      icon: Doc,
      Title: "Document Management",
      Head: " Upload and store essential student documents safely in the cloud.",
    },
  ];
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
              <h1 className=" text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 text-start ">
                <span className="inline">Student </span>
                <span className="hidden md:block"></span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  Management
                </span>
                <br /> System
              </h1>
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#126f77] to-[#eb6319] bg-clip-text text-transparent  mb-6">
                Simplify Student Records with One Unified Platform
              </h1>
              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                DeenNest’s Student Management System helps Islamic institutions
                manage every stage of a student’s journey - from admission to
                attendance - in one secure, easy-to-use dashboard.
              </p>

              <div className="flex flex-row sm:flex-row gap-4">
                <button
                  className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg 
                font-semibold hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate("/sign_up")}
                >
                  Start Free Trial
                </button>
                <button
                  className="border-2 border-[#126F77] text-[#126F77] px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg 
                font-semibold hover:bg-[#126F77] hover:text-white transition-all cursor-pointer"
                  onClick={() => navigate("/video-tutorial")}
                >
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl">
              <img
                src={studentImg}
                alt="Student Management"
                className="w-full rounded-2xl shadow-2xl"
              />
              {/* w-3xs */}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-2 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
        <section className="mb-6 md:mb-16 border-b border-[#E5E7EB] pb-4 md:pb-12">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <h3 className="text-lg md:text-2xl font-semibold text-[#126F77] mb-4">
                Key Capabilities:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {StudentFData.map((value, i) => {
                  return (
                    <div className="" key={i}>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center">
                          <div className="">
                            <img src={value.icon} className="w-7 h-7" />
                          </div>
                          <div>
                            <h1 className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent text-xl">
                              {value.Title}
                            </h1>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base max-w-md">{value.Head}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            <h3 className="text-lg md:text-2xl font-semibold text-[#126F77] mb-6">
              Why It Matters
            </h3>
            <h4 className="text-base text-[#6b6b6b] font-semibold">
              A well-organized student database reduces paperwork, saves time
              for Maulanas and administrators and ensures that every student’s
              record remains accessible, accurate and secure. (edited){" "}
            </h4>
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
