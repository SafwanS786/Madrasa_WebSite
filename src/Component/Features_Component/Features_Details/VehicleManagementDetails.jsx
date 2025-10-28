// // import React from 'react';
// // import { Bus, User, Wrench, Activity, Phone, Calendar, CheckCircle } from 'lucide-react';

// // export default function VehicleManagementDetails() {
// //   const vehicleData = {
// //     id: 'V-001',
// //     registration: 'MH-12-AB-1234',
// //     type: 'Bus',
// //     capacity: '50 seats',
// //     status: 'Active'
// //   };

// //   const driverData = {
// //     name: 'Rahul Sharma',
// //     contact: '+91-9876543213'
// //   };

// //   const maintenance = {
// //     last: '2025-09-30',
// //     next: '2025-12-30'
// //   };

// //   const usageHistory = [
// //     { date: '2025-10-20', description: 'School to City', status: 'Completed' },
// //     { date: '2025-10-18', description: 'Field Trip', status: 'Completed' }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-300 p-6">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 flex items-center gap-6">
// //           <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center">
// //             <Bus className="w-8 h-8 text-white" />
// //           </div>
// //           <div>
// //             <h1 className="text-3xl font-bold text-gray-800">Vehicle Management Dashboard</h1>
// //             <p className="text-gray-500 mt-1">Complete overview of vehicle {vehicleData.id}</p>
// //           </div>
// //         </div>

// //         {/* Cards Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// //           {/* Vehicle Information Card */}
// //           <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
// //             <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-gray-100">
// //               <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
// //                 <Bus className="w-5 h-5 text-white" />
// //               </div>
// //               <h2 className="text-xl font-semibold text-gray-800">Vehicle Information</h2>
// //             </div>
// //             <div className="space-y-3">
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium">Vehicle ID</span>
// //                 <span className="text-gray-800 text-sm font-semibold">{vehicleData.id}</span>
// //               </div>
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium">Registration Number</span>
// //                 <span className="text-gray-800 text-sm font-semibold">{vehicleData.registration}</span>
// //               </div>
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium">Type</span>
// //                 <span className="text-gray-800 text-sm font-semibold">{vehicleData.type}</span>
// //               </div>
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium">Capacity</span>
// //                 <span className="text-gray-800 text-sm font-semibold">{vehicleData.capacity}</span>
// //               </div>
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium">Status</span>
// //                 <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
// //                   {vehicleData.status}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Driver Information Card */}
// //           <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
// //             <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-gray-100">
// //               <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
// //                 <User className="w-5 h-5 text-white" />
// //               </div>
// //               <h2 className="text-xl font-semibold text-gray-800">Driver Information</h2>
// //             </div>
// //             <div className="space-y-3">
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium">Driver Name</span>
// //                 <span className="text-gray-800 text-sm font-semibold">{driverData.name}</span>
// //               </div>
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium">Contact</span>
// //                 <span className="text-gray-800 text-sm font-semibold flex items-center gap-2">
// //                   <Phone className="w-4 h-4" />
// //                   {driverData.contact}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Maintenance Schedule Card */}
// //           <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
// //             <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-gray-100">
// //               <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
// //                 <Wrench className="w-5 h-5 text-white" />
// //               </div>
// //               <h2 className="text-xl font-semibold text-gray-800">Maintenance Schedule</h2>
// //             </div>
// //             <div className="space-y-3">
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
// //                   <Calendar className="w-4 h-4" />
// //                   Last Maintenance
// //                 </span>
// //                 <span className="text-gray-800 text-sm font-semibold">{maintenance.last}</span>
// //               </div>
// //               <div className="flex justify-between items-center py-2">
// //                 <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
// //                   <Calendar className="w-4 h-4" />
// //                   Next Maintenance
// //                 </span>
// //                 <span className="text-gray-800 text-sm font-semibold">{maintenance.next}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Usage History */}
// //         <div className="bg-white rounded-2xl shadow-2xl p-6">
// //           <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-gray-100">
// //             <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
// //               <Activity className="w-5 h-5 text-white" />
// //             </div>
// //             <h2 className="text-xl font-semibold text-gray-800">Usage History</h2>
// //           </div>
// //           <div className="space-y-3">
// //             {usageHistory.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-l-4 border-purple-600"
// //               >
// //                 <div>
// //                   <div className="text-gray-800 font-semibold text-sm">{item.date}</div>
// //                   <div className="text-gray-600 text-sm mt-1">{item.description}</div>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-4 h-4 text-green-500" />
// //                   <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
// //                     {item.status}
// //                   </span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import VehicleImg from "../../../assets/img/Vehicle.png"; // 🚘 Add your image path here

// export default function VehicleManagementDetails() {
//   const navigate = useNavigate();

//   const vehicleData = {
//     vehicleId: "VH-001",
//     vehicleName: "School Bus - A1",
//     vehicleType: "Bus",
//     registrationNo: "GJ05AB1234",
//     driverName: "Mohammed Asif",
//     contactNumber: "+91-9876543210",
//     route: "Route 3 - Jamnagar to Campus",
//     capacity: "40 Students",
//     status: "Active",
//     lastService: "2025-09-20",
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 sm:p-10">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl sm:text-4xl font-bold text-[#126F77] mb-3">
//           Vehicle Management Details
//         </h1>
//         <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
//           Manage and track all institutional vehicles efficiently — from driver
//           information to routes, capacity, and maintenance schedules.
//         </p>
//       </div>

//       {/* Image & Info Section */}
//       <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
//         {/* Left Side Image */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={VehicleImg}
//             alt="Vehicle Management"
//             className="rounded-2xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-500"
//           />
//         </div>

//         {/* Right Side Info */}
//         <div className="w-full md:w-1/2 space-y-4 text-gray-700">
//           <h2 className="text-2xl font-semibold text-[#126F77] mb-2">
//             Vehicle Information
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <p>
//               <span className="font-semibold">Vehicle ID:</span>{" "}
//               {vehicleData.vehicleId}
//             </p>
//             <p>
//               <span className="font-semibold">Name:</span>{" "}
//               {vehicleData.vehicleName}
//             </p>
//             <p>
//               <span className="font-semibold">Type:</span>{" "}
//               {vehicleData.vehicleType}
//             </p>
//             <p>
//               <span className="font-semibold">Registration No:</span>{" "}
//               {vehicleData.registrationNo}
//             </p>
//             <p>
//               <span className="font-semibold">Driver Name:</span>{" "}
//               {vehicleData.driverName}
//             </p>
//             <p>
//               <span className="font-semibold">Contact No:</span>{" "}
//               {vehicleData.contactNumber}
//             </p>
//             <p>
//               <span className="font-semibold">Route:</span> {vehicleData.route}
//             </p>
//             <p>
//               <span className="font-semibold">Capacity:</span>{" "}
//               {vehicleData.capacity}
//             </p>
//             <p>
//               <span className="font-semibold">Status:</span>{" "}
//               <span
//                 className={`font-semibold ${
//                   vehicleData.status === "Active"
//                     ? "text-green-600"
//                     : "text-red-500"
//                 }`}
//               >
//                 {vehicleData.status}
//               </span>
//             </p>
//             <p>
//               <span className="font-semibold">Last Serviced:</span>{" "}
//               {vehicleData.lastService}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Back Button */}
//       <div className="mt-10 text-center">
//         <button
//           onClick={() => navigate("/features")}
//           className="bg-gradient-to-r from-[#126F77] to-[#0E575D] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//         >
//           Back to Features
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";
import {
  Sparkles,
  TrendingUp,
  Truck,
  ClipboardCheck,
  MapPin,
  Wrench,
  UserCheck,
  Clock,
} from "lucide-react";
import vehicleImg from "../../../assets/img/Vehicle.png"; // 🚘 Add your image path here

import { useNavigate } from "react-router-dom";

export default function VehicleManagementDetails() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative overflow-hidden mt-10 md:mt-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-64 sm:w-80 md:w-88 lg:w-96 h-64 sm:h-80 md:h-88 lg:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Header Section */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
            {/* Left Text Section */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 text-start">
                <span className="inline">Vehicle </span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  Management
                </span>
                <br /> System
              </h1>

              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                Streamline your institute’s transportation operations — manage
                vehicles, drivers, routes, and maintenance schedules with ease.
                Ensure safety, efficiency, and accurate record-keeping from a
                single platform.
              </p>

              {/* Buttons */}
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

            {/* Right Image Section */}
            <div className="flex-1 w-full max-w-2xl">
              <img
                src={vehicleImg}
                alt="Vehicle Management"
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
                  Complete Vehicle Management Solution
                </span>
              </h2>

              <p className="text-base md:text-xl text-[#6B6B6B] mb-6 leading-relaxed">
                DeenNest’s Vehicle Management System provides institutions with
                a centralized platform to handle all transport operations — from
                route planning and driver details to maintenance tracking and
                safety management.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 md:gap-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Vehicle Registration & Details
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Maintenance & Service Tracking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Route & Stop Management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Driver & Helper Records
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-sm md:text-base lg:text-lg">
                    Trip Scheduling & Timings
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="w-4 h-4 md:w-6 md:h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B] text-base lg:text-lg">
                    Repair History & Alerts
                  </span>
                </div>
              </div>

              {/* Key Benefits */}
              <h3 className="text-lg md:text-2xl font-semibold text-[#126F77] mb-4">
                Key Benefits:
              </h3>
              <ul className="grid grid-cols-1 gap-4 list-disc list-inside">
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Centralized transport management system
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Automated route and timing planning
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Real-time vehicle tracking & maintenance records
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Improved safety and communication
                </li>
                <li className="text-sm md:text-base lg:text-lg text-[#6B6B6B]">
                  Detailed driver logs & document storage
                </li>
              </ul>

              {/* Highlight Box */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
                  Designed for Educational Institutions
                </h3>
                <p className="text-[#6B6B6B] text-sm md:text-base">
                  Whether it’s managing a fleet of buses or coordinating daily
                  routes, DeenNest’s Vehicle Management module simplifies
                  transportation for schools, madrasas, and colleges — ensuring
                  safety, transparency, and operational efficiency.
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
    </>
  );
}
