// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function ReportsDetails() {
//   // Sample reports data
//   const reportsData = {
//     studentName: "Ali Khan",
//     rollNumber: "23",
//     class: "8th Grade",
//     reportDate: "2025-10-25",
//     feeSummary: {
//       totalDue: "₹5,000",
//       totalPaid: "₹9,500",
//       overdue: "₹500",
//     },
//     payrollSummary: {
//       totalSalary: "₹45,000",
//       totalPaid: "₹4,50,000 (YTD)",
//       pending: "₹0",
//     },
//     performanceTrends: {
//       math: "85% (Up 5%)",
//       science: "78% (Down 2%)",
//       english: "90% (Up 3%)",
//     },
//     absenceTracking: {
//       totalAbsences: 2,
//       recentAbsences: ["2025-10-02", "2025-10-05"],
//     },
//   };
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-5xl mx-auto p-6 sm:p-8">
//       <h1 className="text-3xl font-bold text-[#126f77] mb-6">
//         Reports & Analytics Details
//       </h1>

//       {/* Basic Report Info */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Student Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Name:</span>{" "}
//             {reportsData.studentName}
//           </p>
//           <p>
//             <span className="font-semibold">Roll Number:</span>{" "}
//             {reportsData.rollNumber}
//           </p>
//           <p>
//             <span className="font-semibold">Class:</span> {reportsData.class}
//           </p>
//           <p>
//             <span className="font-semibold">Report Date:</span>{" "}
//             {reportsData.reportDate}
//           </p>
//         </div>
//       </div>

//       {/* Fee Summary */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Fee Summary</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Total Due:</span>{" "}
//             {reportsData.feeSummary.totalDue}
//           </p>
//           <p>
//             <span className="font-semibold">Total Paid:</span>{" "}
//             {reportsData.feeSummary.totalPaid}
//           </p>
//           <p className="text-red-600">
//             <span className="font-semibold">Overdue:</span>{" "}
//             {reportsData.feeSummary.overdue}
//           </p>
//         </div>
//       </div>

//       {/* Payroll Summary */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Payroll Summary</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Total Salary:</span>{" "}
//             {reportsData.payrollSummary.totalSalary}
//           </p>
//           <p>
//             <span className="font-semibold">Total Paid (YTD):</span>{" "}
//             {reportsData.payrollSummary.totalPaid}
//           </p>
//           <p>
//             <span className="font-semibold">Pending:</span>{" "}
//             {reportsData.payrollSummary.pending}
//           </p>
//         </div>
//       </div>

//       {/* Performance Trends */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Performance Trends</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(reportsData.performanceTrends).map(
//             ([subject, trend], index) => (
//               <div
//                 key={index}
//                 className="bg-[#f0fdf4] p-4 rounded-xl text-center shadow-sm"
//               >
//                 <p className="font-semibold">{subject}</p>
//                 <p className="text-lg text-[#126f77] font-bold">{trend}</p>
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       {/* Absence Tracking */}
//       <div className="bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-semibold mb-4">Absence Tracking</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Total Absences:</span>{" "}
//             {reportsData.absenceTracking.totalAbsences}
//           </p>
//           <p>
//             <span className="font-semibold">Recent Absences:</span>{" "}
//             {reportsData.absenceTracking.recentAbsences.join(", ")}
//           </p>
//         </div>
//       </div>

//       {/* Navigation Back Button */}
//       <div className="mt-8 text-center">
//         <button
//           onClick={() => navigate("/features")}
//           className="bg-[#126F77] text-white px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer"
//         >
//           Back to Features
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  FileText,
  PieChart,
  CalendarDays,
  TrendingUp,
  ClipboardList,
} from "lucide-react";
// import reportsImg from "../../../assets/img/reports-analytics.png";

export default function ReportsDetails() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 sm:w-64 md:w-72 lg:w-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-64 sm:w-80 md:w-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 text-start">
                <span className="inline">Reports & </span>
                <span className="hidden md:block"></span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Analytics
                </span>{" "}
                <br />
                Dashboard
              </h1>

              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                DeenNest’s Reports and Analytics module provides deep insights
                into student performance, fee collections, staff payroll, and
                attendance trends — all in one unified dashboard.
              </p>

              <div className="flex flex-row sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg font-semibold hover:shadow-lg transition-all">
                  Explore Reports
                </button>
                <button className="border-2 border-[#126F77] text-[#126F77] px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg font-semibold hover:bg-[#126F77] hover:text-white transition-all">
                  View Demo
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-2xl">
              {/* <img
                src={reportsImg}
                alt="Reports and Analytics"
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              /> */}
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
                  Smart Reports & Data Insights
                </span>
              </h2>
              <p className="text-base md:text-xl text-[#6B6B6B] mb-6 leading-relaxed">
                DeenNest’s Reports module simplifies performance monitoring and
                decision-making with automated data visualization tools for
                students, staff, and management.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 md:gap-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Custom Report Generation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <PieChart className="w-4 h-4 md:w-5 md:h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Interactive Analytics Charts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Attendance & Performance Trends
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-4 h-4 md:w-5 md:h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Fee & Payroll Summary Reports
                  </span>
                </div>
              </div>

              <h3 className="text-lg md:text-2xl font-semibold text-[#126F77] mb-4">
                Key Benefits:
              </h3>
              <ul className="grid grid-cols-1 gap-4 list-disc list-inside">
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Analyze performance across all departments
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Export reports in multiple formats (PDF, Excel)
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Identify academic and financial trends instantly
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Generate visual dashboards for management
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Save time with automated data syncing
                </li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
                  Empowering Informed Decisions
                </h3>
                <p className="text-[#6B6B6B] text-sm">
                  DeenNest Reports module helps Islamic institutes and madrasas
                  access key data in real time — improving academic performance,
                  financial transparency, and operational efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-4 md:mt-8 text-center">
            <button
              onClick={() => navigate("/features")}
              className="bg-[#126F77] text-white px-2 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer text-sm md:text-base"
            >
              Back to Features
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
