import React from "react";
import {
  Sparkles,
  TrendingUp,
  Star,
  CircleCheckBig,
  CheckCircle2,
} from "lucide-react";
import details_Img from "../../assets/img/details.png";
export default function FeaturesDetails() {
  return (
    <>
      <div className="relative overflow-hidden mt-8 md:mt-10">
        <div className="absolute inset-0">
          <div
            className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-20 2xl:top-20
           left-10 sm:left-12 md:left-16 lg:left-20 xl:left-20 2xl:left-20 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-80 h-48 
           sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"
          ></div>
          <div
            className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 
            2xl:bottom-20 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-20 2xl:right-20 w-64 sm:w-80 
            md:w-88 lg:w-96 xl:w-96 2xl:w-96 h-64 sm:h-80 md:h-88 lg:h-96 xl:h-96 2xl:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 max-w-7xl text-center ">
          <div className="relative overflow-hidden mt-10 md:mt-20 lg:mt-22 xl:mt-30">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-20 w-80 h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-20 right-20 w-96 h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:h-[420px]">
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 text-start">
                    Transform Your <br />
                    <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                      Madrasa
                    </span>
                    <br /> Management
                  </h1>

                  <p className="text-sm sm:text-base md:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                    DeenNest helps Islamic institutes simplify daily operations
                    from student admissions to attendance, fee collection,
                    Maulana & Staff payroll and communication — all in one
                    powerful platform.
                  </p>
                </div>

                <div className="flex-1 w-full max-w-2xl mb-6">
                  <div className="relative w-full  shadow-xl p-3 rounded-lg md:p-6 md:rounded-2xl bg-white">
                    <div
                      className="absolute -top-4 -right-2 md:-right-4 lg:-top-2 lg:-right-5
                     bg-gradient-to-r from-[#EB6319] to-[#FF8C42] rounded-lg p-2 md:rounded-xl md:p-3 text-white shadow-lg"
                    >
                      <Sparkles size={20} className="w-3 h-3 md:w-5 md:h-5" />
                    </div>
                    <div
                      className="absolute -bottom-1 -left-2 md:-left-4 md:-bottom-4 bg-[#126F77] text-white p-2 rounded-lg md:rounded-xl md:p-3 shadow-lg"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <TrendingUp size={20} className="w-3 h-3 md:w-5 md:h-5" />
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <h2 className="flex items-center gap-2 text-sm md:text-base font-semibold">
                        <span className="w-3 h-3 rounded-sm md:w-6 md:h-6 md:rounded-lg bg-gradient-to-r from-[#126F77] to-[#EB6319]"></span>
                        DeenNest Dashboard
                      </h2>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-[#EB6319] rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-[#126F77] rounded-full"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-[#6B6B6B]/30 rounded-full"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-5 text-start">
                      <div
                        className="bg-gradient-to-br from-[#126F77]/10 to-[#126F77]/5 rounded-xl p-2 md:p-4 
                      border border-[#126F77]/10 hover:shadow-md transition-shadow"
                      >
                        <div className="text-base md:text-3xl font-bold text-[#126F77] mb-1">
                          1,247
                        </div>
                        <div className="text-[#6B6B6B] text-sm mb-2">
                          Active Students
                        </div>
                        <div className="inline-flex flex-row items-center gap-1">
                          <TrendingUp className="w-2 h-2 md:w-3 md:h-3 text-[#126F77]" />
                          <span className="text-xs text-[#126F77]">
                            +12% this month
                          </span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-[#EB6319]/10 to-[#EB6319]/5 rounded-xl p-2 md:p-4 border border-[#EB6319]/10 hover:shadow-md transition-shadow">
                        <div className="text-base md:text-3xl font-bold text-[#EB6319] mb-1">
                          98.5%
                        </div>
                        <div className="text-[#6B6B6B] text-sm mb-2">
                          Attendance Rate
                        </div>
                        <div className="inline-flex flex-row items-center gap-1">
                          <Star className="w-2 h-2 md:w-3 md:h-3 text-[#EB6319]" />
                          <span className="text-xs text-[#EB6319]">
                            Excellent
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div
                        className="flex flex-row items-center justify-between p-2 m-0 rounded-xl hover:bg-[#126F77]/5 
                      transition-colors group cursor-pointer md:p-3"
                      >
                        <div className="flex flex-row gap-4">
                          <div className="w-8 h-8 bg-[#126F77] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CircleCheckBig className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <span className="text-[#1A1A1A] text-base flex-1">
                              Student Management
                            </span>
                          </div>
                        </div>
                        <div className="flex items-end">
                          <div className="w-2 h-2 bg-[#126F77] rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      <div
                        className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-[#EB6319]/5
                       transition-colors group cursor-pointer md:p-3"
                      >
                        <div className="flex flex-row gap-4">
                          <div className="w-8 h-8 bg-[#EB6319] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Star className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <span className="text-[#1A1A1A] text-base flex-1">
                              Performance Analytics
                            </span>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-[#EB6319] rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Admission System Section */}
      <div className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
        <section className="mb-2 sm:mb-4 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20 border-b border-[#E5E7EB] pb-4 sm:pb-5 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12">
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Streamline Your Admission Process With Digital Excellence
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-relaxed">
                DeenNest’s Online Student Admission Management System is an
                intuitive and efficient solution designed to simplify and
                automate the admission process for Islamic institutes, madrasas,
                schools, and educational organizations.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mb-6 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10 leading-relaxed">
                This cloud-based platform enables institutions to seamlessly
                manage admission forms, document submissions, and student
                shortlisting — all within a secure online environment. By
                centralizing every step of the enrollment process, DeenNest
                minimizes paperwork, reduces errors, and enhances data accuracy.
                With mobile and web access, administrators and staff can manage
                admissions anytime, anywhere, ensuring a transparent,
                streamlined, and hassle-free experience for both students and
                management.
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#126F77] mb-4">
                Features of CAMPUSDEAN Online Student Admission System:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 list-disc list-inside ">
                <li className=" list-disc text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />
                  Online submission of application forms
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  No need to wait in long lines
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  Reduces the need for additional staff
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  Reduces paperwork through digital processing
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />
                  Easy to follow up on student inquiries
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  Students can be easily transferred to school records
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  User-friendly interface for both staff and students
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  Admission fees are securely collected online
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  Fast handling of new student inquiries
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  Automatically create student merit lists
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] text-start flex items-start">
                  <CheckCircle2 className="text-[#126f77] w-4 h-4 mr-2 mt-1" />{" "}
                  Instantly generate and send admission letters
                </li>
              </ul>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10 text-[#EB6319]">
                Online Student Admission System
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                DeenNest offers a powerful and future-ready Online Student
                Admission System designed specifically for Islamic institutes,
                madrasas, and educational organizations. It simplifies and
                automates the entire admission process — from student inquiries
                to final enrollment — providing a seamless digital experience
                for both applicants and administrators.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                Students can easily fill out admission forms online, upload
                necessary documents, and securely submit fees through multiple
                payment options such as UPI, credit/debit cards, net banking, or
                digital wallets.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                The system also allows institutes to manually enter walk-in
                inquiries, ensuring flexibility for both online and offline
                admissions. Entrance assessments and results can be efficiently
                managed within the same platform, with auto-generated merit
                lists based on predefined criteria — saving valuable
                administrative time.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                Once a student is shortlisted, DeenNest enables staff to
                generate admission or offer letters, record follow-ups, manage
                recommendations, and sync data directly with the Student
                Information System (SIS) for smooth integration. With advanced
                data security and cloud compliance, DeenNest ensures that every
                applicant’s information remains confidential, accurate, and
                protected.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
