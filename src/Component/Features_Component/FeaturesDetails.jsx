import React from "react";
import { UserPlus, Zap, ArrowRight, Play, Crown } from "lucide-react";
import details_Img from "../../assets/img/details.png";
export default function FeaturesDetails() {
  return (
    <>
      {/* 🌟 Header Section */}
      <div className="relative overflow-hidden mt-10 md:mt-40">
        {/* 🔵 Background Glows */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-20 2xl:top-20 left-10 sm:left-12 md:left-16 lg:left-20 xl:left-20 2xl:left-20 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 2xl:bottom-20 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-20 2xl:right-20 w-64 sm:w-80 md:w-88 lg:w-96 xl:w-96 2xl:w-96 h-64 sm:h-80 md:h-88 lg:h-96 xl:h-96 2xl:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* 🧭 Content Section */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 max-w-7xl text-center">
          {/* <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 border border-[#126f77]/20 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
            <Zap className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-[#EB6319]" />
            <span className="text-[#126F77] font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
              In-Depth Feature Details
            </span>
          </div> */}
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
                Dive Deeper into Our
                <br />
                <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
                Explore detailed explanations of each feature and how they
                empower modern madrasas to operate more efficiently and
                effectively.
              </p>
            </div>
            <div className="">
              <img src={details_Img} alt="Image" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Admission System Section */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-12 xl:py-12 2xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20 border-b border-[#E5E7EB] pb-8 sm:pb-10 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12">
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
            {/* <div
              className="w-16 sm:w-20 md:w-24 lg:w-24 xl:w-24 2xl:w-24 h-16 sm:h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl text-white group-hover:scale-110 transition-transform duration-300"
              style={{
                background: `linear-gradient(to right, #126F77, #EB6319)`,
              }}
            >
              <UserPlus className="w-8 sm:w-10 md:w-12 lg:w-12 xl:w-12 2xl:w-12 h-8 sm:h-10 md:h-12 lg:h-12 xl:h-12 2xl:h-12" />
            </div> */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Streamline Your Admission Process With Digital Excellence
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-relaxed">
                CAMPUSDEAN’s online student admission management system is a
                powerful and user-friendly solution for automating and
                simplifying the student admission process in schools, colleges,
                universities, and training institutes.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mb-6 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10 leading-relaxed">
                This cloud-based ERP software enables institutions to
                effectively manage admission forms, collect documents, and
                shortlist candidates in a secure online environment. The system
                centralizes every step of the student enrollment process,
                reducing paperwork, errors, and improving data accuracy.
                Admissions teams can manage applications from any location using
                mobile and web access, ensuring a smooth, transparent, and
                streamlined experience for both administrators and applicants.
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#126F77] mb-4">
                Features of CAMPUSDEAN Online Student Admission System:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 list-disc list-inside">
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Online submission of application forms
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  No need to wait in long lines
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Reduces the need for additional staff
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Reduces paperwork through digital processing
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Easy to follow up on student inquiries
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Students can be easily transferred to school records
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  User-friendly interface for both staff and students
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Admission fees are securely collected online
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Fast handling of new student inquiries
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Automatically create student merit lists
                </li>
                <li className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                  Instantly generate and send admission letters
                </li>
              </ul>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10 text-[#EB6319]">
                Online Student Admission System
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                CAMPUSDEAN has developed a robust and future-ready Online
                Student Admission System that simplifies and automates the
                entire admission process for educational institutions. From
                inquiry to enrollment, the software offers a seamless digital
                experience for students and school administrators alike.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                Students can fill out admission forms online, upload required
                documents, and securely pay application fees using various
                payment methods such as credit/debit cards, net banking, or
                digital wallets.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                The system also supports manual data entry by schools for
                walk-in inquiries, making it flexible for both online and
                offline admission processes. Entrance exams and results can be
                managed within the platform, and merit lists are auto-generated
                based on predefined criteria, saving valuable administrative
                time.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                Once a student is selected, the software helps generate
                admission or offer letters, track follow-ups, manage special
                notes or recommendations, and even integrate with the school’s
                Student Information System (SIS) for smooth data transfer. With
                a strong focus on data security and compliance, CAMPUSDEAN
                ensures that all applicant information remains confidential and
                protected.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      {/* <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-16 text-center mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20">
        <div className="bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 sm:top-3 md:top-4 lg:top-4 xl:top-4 2xl:top-4 right-2 sm:right-3 md:right-4 lg:right-4 xl:right-4 2xl:right-4 w-12 sm:w-16 md:w-20 lg:w-20 xl:w-20 2xl:w-20 h-12 sm:h-16 md:h-20 lg:h-20 xl:h-20 2xl:h-20 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-4 xl:bottom-4 2xl:bottom-4 left-2 sm:left-3 md:left-4 lg:left-4 xl:left-4 2xl:left-4 w-10 sm:w-12 md:w-16 lg:w-16 xl:w-16 2xl:w-16 h-10 sm:h-12 md:h-16 lg:h-16 xl:h-16 2xl:h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8 bg-white rounded-lg rotate-45"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
              <Crown className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-white" />
              <span className="text-white font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                Ready to Transform Your Madrasa?
              </span>
            </div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-white mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
              Experience the Admission System in Detail
            </h3>
            <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 max-w-2xl mx-auto">
              Start your free trial today and explore how CAMPUSDEAN’s Online
              Student Admission System can revolutionize your madrasa
              management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
              <button className="bg-white rounded-md p-1.5 sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 text-[#126F77] font-bold inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 group">
                Start Free Trial
                <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
                  <ArrowRight
                    size={15}
                    className="font-bold h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5"
                  />
                </span>
              </button>
              <button className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white rounded-md p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 2xl:p-3 text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
                <span>
                  <Play
                    size={15}
                    className="inline-block h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5"
                  />
                </span>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
