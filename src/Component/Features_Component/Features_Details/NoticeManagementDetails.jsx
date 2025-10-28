// import React from "react";
// import { Bell, FileText, CalendarDays, AlertCircle, Users } from "lucide-react";
// import noticeImg from "../../../assets/img/Notice1.png";
// import { useNavigate } from "react-router-dom";

// export default function NoticeManagementDetails() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="relative overflow-hidden mt-10 md:mt-20">
//         <div className="absolute inset-0">
//           <div className="absolute top-10 left-10 w-72 h-72 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
//           <div
//             className="absolute bottom-10 right-10 w-96 h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
//             style={{ animationDelay: "1s" }}
//           ></div>
//         </div>

//         <div className="relative z-10 mx-auto px-6 max-w-7xl">
//           <div className="flex flex-col lg:flex-row items-center gap-12 py-8">
//             <div className="flex-1 text-left">
//               <h1 className="text-5xl font-bold text-gray-900 mb-6">
//                 Notice{" "}
//                 <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
//                   Management
//                 </span>{" "}
//                 System
//               </h1>

//               <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
//                 Efficiently create, schedule, and manage institutional notices
//                 for students, staff, and departments. Ensure timely
//                 communication across your organization with digital notice
//                 boards and alerts.
//               </p>

//               <div className="flex flex-row sm:flex-row gap-4">
//                 <button
//                   className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg
//                 font-semibold hover:shadow-lg transition-all"
//                 >
//                   Start Free Trial
//                 </button>
//                 <button className="border-2 border-[#126F77] text-[#126F77] px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg font-semibold hover:bg-[#126F77] hover:text-white transition-all">
//                   Watch Demo
//                 </button>
//               </div>
//             </div>

//             <div className="flex-1 w-full max-w-2xl">
//               <img
//                 src={noticeImg}
//                 alt="Notice Management"
//                 className="w-full rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="py-12 px-8 mx-auto max-w-7xl">
//         <section className="border-b border-gray-200 pb-12">
//           <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
//             Smart Digital Notice Management
//           </h2>

//           <p className="text-lg text-[#6B6B6B] mb-8">
//             DeenNest's Notice Management feature lets administrators publish and
//             distribute notices institution-wide. Track who viewed them, schedule
//             recurring announcements, and maintain transparency.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div className="flex items-center gap-3">
//               <Bell className="text-[#126F77]" />
//               <span>Instant Notifications</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <FileText className="text-[#126F77]" />
//               <span>Notice Templates</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CalendarDays className="text-[#126F77]" />
//               <span>Scheduled Notices</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Users className="text-[#126F77]" />
//               <span>Audience Targeting</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <AlertCircle className="text-[#126F77]" />
//               <span>Read Receipts & Tracking</span>
//             </div>
//           </div>

//           <div className="mt-8 text-center">
//             <button
//               onClick={() => navigate("/features")}
//               className="bg-[#126F77] text-white px-8 py-3 rounded-lg hover:bg-[#0E575D] transition-all"
//             >
//               Back to Features
//             </button>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
import React from "react";
import { Bell, FileText, CalendarDays, Users, AlertCircle } from "lucide-react";
import noticeImg from "../../../assets/img/notice1.png";
import { useNavigate } from "react-router-dom";

export default function NoticeManagementDetails() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        {/* Background Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 py-8">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 text-start">
                <span>Notice </span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  Management
                </span>{" "}
                System
              </h1>
              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-8 text-start">
                Streamline how your institute shares updates, circulars, and
                announcements with staff, students, and parents — digitally and
                instantly.
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

            {/* Image */}
            <div className="flex-1 w-full max-w-2xl">
              <img
                src={noticeImg}
                alt="Notice Management"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="py-2 px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
        <section className="mb-5 md:mb-12 border-b border-[#E5E7EB] pb-4 md:pb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
            Smart & Instant Digital Notices
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-8">
            DeenNest’s Notice Management system allows administrators to publish
            and schedule institutional announcements effortlessly.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Instant Notifications & Alerts
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Custom Notice Templates
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Scheduled Announcements
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Targeted Audience (Departments / Roles)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <AlertCircle className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
              <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                Read Receipts & Delivery Tracking
              </span>
            </div>
          </div>

          {/* Key Benefits */}
          <h3 className="text-xl font-semibold text-[#126F77] mb-4">
            Key Benefits:
          </h3>
          <ul className="grid grid-cols-1 gap-3 list-disc list-inside text-[#6B6B6B]">
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Ensure timely delivery of important notices
            </li>
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Reduce paper use through digital communication
            </li>
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Track who viewed or missed notices
            </li>
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Automate scheduled announcements
            </li>
            <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
              Improve coordination between departments
            </li>
          </ul>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
            <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
              Empowering Transparent Communication
            </h3>
            <p className="text-[#6B6B6B] text-sm md:text-base">
              DeenNest’s Notice Management helps ensure that everyone stays
              informed and connected through efficient digital communication.
            </p>
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
    </>
  );
}
