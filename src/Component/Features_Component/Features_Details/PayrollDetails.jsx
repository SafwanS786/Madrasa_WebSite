// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function PayrollDetails() {
//   // Sample payroll data
//   const payrollData = {
//     employeeName: "Maulana Imran Ahmed",
//     employeeId: "M-045",
//     role: "Teacher (Islamic Studies)",
//     salary: "₹45,000/month",
//     paymentFrequency: "Monthly",
//     lastPaymentDate: "2025-10-15",
//     nextPaymentDate: "2025-11-15",
//     paymentStatus: "Paid",
//     totalEarnings: "₹4,50,000 (YTD)",
//     deductions: {
//       tax: "₹5,400",
//       providentFund: "₹2,250",
//     },
//     payslips: [
//       { month: "September 2025", amount: "₹45,000", date: "2025-09-15" },
//       { month: "August 2025", amount: "₹45,000", date: "2025-08-15" },
//     ],
//   };
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-5xl mx-auto p-6 sm:p-8">
//       <h1 className="text-3xl font-bold text-[#126f77] mb-6">
//         Payroll Management Details
//       </h1>

//       {/* Basic Payroll Info */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Employee Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Name:</span>{" "}
//             {payrollData.employeeName}
//           </p>
//           <p>
//             <span className="font-semibold">Employee ID:</span>{" "}
//             {payrollData.employeeId}
//           </p>
//           <p>
//             <span className="font-semibold">Role:</span> {payrollData.role}
//           </p>
//           <p>
//             <span className="font-semibold">Salary:</span> {payrollData.salary}
//           </p>
//           <p>
//             <span className="font-semibold">Payment Frequency:</span>{" "}
//             {payrollData.paymentFrequency}
//           </p>
//         </div>
//       </div>

//       {/* Payment Schedule */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Payment Schedule</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Last Payment Date:</span>{" "}
//             {payrollData.lastPaymentDate}
//           </p>
//           <p>
//             <span className="font-semibold">Next Payment Date:</span>{" "}
//             {payrollData.nextPaymentDate}
//           </p>
//           <p>
//             <span className="font-semibold">Payment Status:</span>{" "}
//             {payrollData.paymentStatus}
//           </p>
//         </div>
//       </div>

//       {/* Deductions */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Deductions</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Tax:</span>{" "}
//             {payrollData.deductions.tax}
//           </p>
//           <p>
//             <span className="font-semibold">Provident Fund:</span>{" "}
//             {payrollData.deductions.providentFund}
//           </p>
//         </div>
//       </div>

//       {/* Payslips */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Payslip History</h2>
//         <ul className="space-y-2">
//           {payrollData.payslips.map((payslip, index) => (
//             <li key={index} className="flex justify-between">
//               <span>{payslip.month}</span>
//               <span>
//                 {payslip.amount} - {payslip.date}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Overview & Analytics */}
//       <div className="bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-semibold mb-4">Overview & Analytics</h2>
//         <p>
//           <span className="font-semibold">Total Earnings (YTD):</span>{" "}
//           {payrollData.totalEarnings}
//         </p>
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
import { CreditCard, FileText, TrendingUp, Shield, Users, Calculator } from "lucide-react";
// import payrollImg from "../../assets/img/payroll-management.png";

export default function PayrollDetails() {
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Payroll <br />
                <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  Management
                </span>
                <br /> System
              </h1>

              <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Streamline salary processing for Maulana and staff with automated payroll, 
                tax calculations, and comprehensive financial reporting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Start Free Trial
                </button>
                <button className="border-2 border-[#126F77] text-[#126F77] px-8 py-3 rounded-lg font-semibold hover:bg-[#126F77] hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl">
              {/* <img 
                src={payrollImg} 
                alt="Payroll Management" 
                className="w-full rounded-2xl shadow-2xl"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
        <section className="mb-16 border-b border-[#E5E7EB] pb-12">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Automated Payroll Processing
                </span>
              </h2>
              <p className="text-xl text-[#6B6B6B] mb-6 leading-relaxed">
                Simplify your payroll operations with our automated system that handles salary calculations, 
                deductions, tax compliance, and payment processing for all staff members.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B]">Salary Setup & Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B]">Payment Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B]">Payroll Slips</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B]">Overview & Analytics</span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-[#126F77] mb-4">
                Key Benefits:
              </h3>
              <ul className="grid grid-cols-1 gap-4 list-disc list-inside">
                <li className="text-lg text-[#6B6B6B]">
                  Automated salary calculations with customizable pay structures
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Digital payroll slips and payment records
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Tax compliance and deduction management
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Real-time payment tracking and status updates
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Comprehensive payroll reports and analytics
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Secure and confidential financial data handling
                </li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#126F77] mb-3">
                  Financial Transparency
                </h3>
                <p className="text-[#6B6B6B]">
                  Maintain complete financial transparency with detailed payroll records, 
                  automated calculations, and comprehensive reporting that ensures accuracy 
                  and compliance with financial regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}