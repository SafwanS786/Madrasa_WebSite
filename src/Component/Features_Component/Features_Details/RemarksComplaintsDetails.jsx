// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function RemarksComplaintsDetails() {
//   // Sample remarks/complaints data
//   const complaintData = {
//     id: "C-001",
//     title: "Classroom Maintenance Issue",
//     description: "The classroom lights are flickering and need repair.",
//     category: "Infrastructure",
//     priority: "High",
//     location: "Room 101",
//     submittedBy: "Maulana Imran Ahmed",
//     submittedDate: "2025-10-20",
//     status: "In Progress",
//     resolutionNotes: "Electrician assigned, expected completion by 2025-10-27",
//     history: [
//       { date: "2025-10-20", action: "Complaint submitted" },
//       { date: "2025-10-22", action: "Assigned to maintenance team" },
//     ],
//   };
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-5xl mx-auto p-6 sm:p-8">
//       <h1 className="text-3xl font-bold text-[#126f77] mb-6">
//         Remarks & Complaints Details
//       </h1>

//       {/* Basic Complaint Info */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Complaint Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">ID:</span> {complaintData.id}
//           </p>
//           <p>
//             <span className="font-semibold">Title:</span> {complaintData.title}
//           </p>
//           <p>
//             <span className="font-semibold">Description:</span>{" "}
//             {complaintData.description}
//           </p>
//           <p>
//             <span className="font-semibold">Category:</span>{" "}
//             {complaintData.category}
//           </p>
//           <p>
//             <span className="font-semibold">Priority:</span>{" "}
//             {complaintData.priority}
//           </p>
//           <p>
//             <span className="font-semibold">Location:</span>{" "}
//             {complaintData.location}
//           </p>
//         </div>
//       </div>

//       {/* Submission Details */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Submission Details</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Submitted By:</span>{" "}
//             {complaintData.submittedBy}
//           </p>
//           <p>
//             <span className="font-semibold">Submitted Date:</span>{" "}
//             {complaintData.submittedDate}
//           </p>
//         </div>
//       </div>

//       {/* Status & Resolution */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Status & Resolution</h2>
//         <p>
//           <span className="font-semibold">Status:</span> {complaintData.status}
//         </p>
//         <p className="mt-2">
//           <span className="font-semibold">Resolution Notes:</span>{" "}
//           {complaintData.resolutionNotes}
//         </p>
//       </div>

//       {/* History */}
//       <div className="bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-semibold mb-4">Complaint History</h2>
//         <ul className="space-y-2">
//           {complaintData.history.map((entry, index) => (
//             <li key={index} className="flex justify-between">
//               <span>{entry.date}</span>
//               <span>{entry.action}</span>
//             </li>
//           ))}
//         </ul>
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
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function RemarksComplaintsDetails() {
//   const navigate = useNavigate();

//   // Sample complaint data
//   const complaintData = {
//     id: "C-001",
//     title: "Classroom Maintenance Issue",
//     description: "The classroom lights are flickering and need repair.",
//     category: "Infrastructure",
//     priority: "High",
//     location: "Room 101",
//     submittedBy: "Maulana Imran Ahmed",
//     submittedDate: "2025-10-20",
//     status: "In Progress",
//     resolutionNotes: "Electrician assigned, expected completion by 2025-10-27",
//     history: [
//       { date: "2025-10-20", action: "Complaint submitted" },
//       { date: "2025-10-22", action: "Assigned to maintenance team" },
//     ],
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 sm:p-8">
//       <h1 className="text-3xl font-bold text-[#126f77] mb-6 text-center">
//         Remarks & Complaints Details
//       </h1>

//       {/* Complaint Info */}
//       <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//         <h2 className="text-xl font-semibold mb-4 text-[#126f77]">
//           Complaint Information
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//           <p>
//             <span className="font-semibold">Complaint ID:</span>{" "}
//             {complaintData.id}
//           </p>
//           <p>
//             <span className="font-semibold">Title:</span> {complaintData.title}
//           </p>
//           <p className="sm:col-span-2">
//             <span className="font-semibold">Description:</span>{" "}
//             {complaintData.description}
//           </p>
//           <p>
//             <span className="font-semibold">Category:</span>{" "}
//             {complaintData.category}
//           </p>
//           <p>
//             <span className="font-semibold">Priority:</span>{" "}
//             {complaintData.priority}
//           </p>
//           <p>
//             <span className="font-semibold">Location:</span>{" "}
//             {complaintData.location}
//           </p>
//         </div>
//       </div>

//       {/* Submission Details */}
//       <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//         <h2 className="text-xl font-semibold mb-4 text-[#126f77]">
//           Submission Details
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//           <p>
//             <span className="font-semibold">Submitted By:</span>{" "}
//             {complaintData.submittedBy}
//           </p>
//           <p>
//             <span className="font-semibold">Submitted Date:</span>{" "}
//             {complaintData.submittedDate}
//           </p>
//         </div>
//       </div>

//       {/* Status & Resolution */}
//       <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//         <h2 className="text-xl font-semibold mb-4 text-[#126f77]">
//           Status & Resolution
//         </h2>
//         <p className="text-gray-700">
//           <span className="font-semibold">Status:</span>{" "}
//           <span
//             className={`font-semibold ${
//               complaintData.status === "Resolved"
//                 ? "text-green-600"
//                 : "text-orange-500"
//             }`}
//           >
//             {complaintData.status}
//           </span>
//         </p>
//         <p className="mt-2 text-gray-700">
//           <span className="font-semibold">Resolution Notes:</span>{" "}
//           {complaintData.resolutionNotes}
//         </p>
//       </div>

//       {/* Complaint History */}
//       <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//         <h2 className="text-xl font-semibold mb-4 text-[#126f77]">
//           Complaint History
//         </h2>
//         <ul className="divide-y divide-gray-200">
//           {complaintData.history.map((entry, index) => (
//             <li
//               key={index}
//               className="flex justify-between py-2 text-gray-700 text-sm sm:text-base"
//             >
//               <span>{entry.date}</span>
//               <span>{entry.action}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Back Button */}
//       <div className="mt-8 text-center">
//         <button
//           onClick={() => navigate("/features")}
//           className="bg-gradient-to-r from-[#126F77] to-[#0E575D] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
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
  MessageCircle,
  AlertCircle,
  ClipboardList,
  Users,
  CheckCircle,
} from "lucide-react";

export default function RemarksComplaintsDetails() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        {/* Background Gradient Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 text-start">
                <span className="inline">Remarks & </span>
                <span className="hidden md:block"></span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Complaints
                </span>{" "}
                <br /> Management
              </h1>

              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                Keep track of teacher remarks, student complaints, and their
                resolutions in one place. DeenNest’s Remarks & Complaints module
                ensures transparent communication between teachers, students,
                and administration — helping maintain discipline and support.
              </p>

              <div className="flex flex-row sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg font-semibold hover:shadow-lg transition-all">
                  Explore Features
                </button>
                <button className="border-2 border-[#126F77] text-[#126F77] px-2 py-1 rounded-md md:px-8 md:py-3 md:rounded-lg font-semibold hover:bg-[#126F77] hover:text-white transition-all">
                  View Demo
                </button>
              </div>
            </div>

            {/* Right Side Image Placeholder */}
            <div className="flex-1 w-full max-w-2xl">
              {/* Add image later if needed */}
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
                  Transparent Communication for a Peaceful Campus
                </span>
              </h2>

              <p className="text-base md:text-xl text-[#6B6B6B] mb-6 leading-relaxed">
                DeenNest’s Remarks & Complaints Management system allows staff,
                parents, and students to record, review, and resolve issues
                efficiently. Track remarks, handle complaints, and ensure a
                respectful and accountable environment.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 md:gap-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm sm:text-base">
                    Teacher & Admin Remarks Logs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm sm:text-base">
                    Student & Parent Complaints Tracking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ClipboardList className="w-5 h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm sm:text-base">
                    Complaint Resolution Workflow
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm sm:text-base">
                    Multi-role Access (Teachers, Admins, Students)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm sm:text-base">
                    Automated Updates & Status Reports
                  </span>
                </div>
              </div>

              <h3 className="text-lg md:text-2xl font-semibold text-[#126F77] mb-4">
                Key Benefits:
              </h3>
              <ul className="grid grid-cols-1 gap-4 list-disc list-inside">
                <li className="text-[#6B6B6B] text-sm sm:text-base">
                  Strengthen communication between staff and parents
                </li>
                <li className="text-[#6B6B6B] text-sm sm:text-base">
                  Track complaint history with full transparency
                </li>
                <li className="text-[#6B6B6B] text-sm sm:text-base">
                  Build accountability through digital records
                </li>
                <li className="text-[#6B6B6B] text-sm sm:text-base">
                  Manage remarks, actions, and resolutions efficiently
                </li>
                <li className="text-[#6B6B6B] text-sm sm:text-base">
                  Generate reports for disciplinary committees
                </li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
                  Building a Positive & Accountable Learning Environment
                </h3>
                <p className="text-[#6B6B6B] text-sm md:text-base">
                  The Remarks & Complaints module helps educators maintain
                  harmony in classrooms. It promotes positive behaviour and
                  provides a structured way to handle issues — ensuring fairness
                  and care in every step.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6 md:mt-10 text-center">
            <button
              onClick={() => navigate("/features")}
              className="bg-[#126F77] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 text-sm md:text-base"
            >
              Back to Features
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
