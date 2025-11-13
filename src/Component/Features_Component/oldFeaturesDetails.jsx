// // FeaturesDetails.jsx
// import React, { useState } from "react";
// import {
//   Users,
//   UserCheck,
//   Bus,
//   CreditCard,
//   BookOpen,
//   Calendar,
//   MessageSquare,
//   BarChart3,
//   Shield,
//   Download,
//   Phone,
//   Mail,
//   Clock,
//   CheckCircle,
// } from "lucide-react";

// export default function FeaturesDetails() {
//   const [activeFeature, setActiveFeature] = useState("student");

//   const features = {
//     student: {
//       title: "Student Management",
//       icon: <Users className="w-8 h-8" />,
//       description:
//         "Complete student lifecycle management from admission to graduation",
//       image: "/images/student-management.png",
//       features: [
//         "Digital admission forms and registration",
//         "Student profile with photo and details",
//         "Academic history and progress tracking",
//         "Parent/guardian information management",
//         "Document upload and management",
//         "Attendance tracking and reports",
//         "Performance analytics",
//         "Batch and section management",
//       ],
//       benefits: [
//         "Reduce paperwork by 90%",
//         "Instant access to student records",
//         "Automated attendance calculations",
//         "Easy communication with parents",
//       ],
//     },

//     maulana: {
//       title: "Maulana & Staff Management",
//       icon: <UserCheck className="w-8 h-8" />,
//       description: "Efficient management of teaching and non-teaching staff",
//       image: "/images/staff-management.png",
//       features: [
//         "Staff profile management",
//         "Attendance and leave management",
//         "Salary and payroll processing",
//         "Class and subject allocation",
//         "Performance tracking",
//         "Document management",
//         "Work schedule management",
//         "Staff communication portal",
//       ],
//       benefits: [
//         "Streamlined payroll processing",
//         "Automated attendance tracking",
//         "Easy staff performance monitoring",
//         "Efficient resource allocation",
//       ],
//     },

//     vehicle: {
//       title: "Vehicle Tracking",
//       icon: <Bus className="w-8 h-8" />,
//       description: "Smart transportation management for student safety",
//       image: "/images/vehicle-tracking.png",
//       features: [
//         "Real-time vehicle location tracking",
//         "Route optimization and management",
//         "Driver and attendant details",
//         "Fuel consumption monitoring",
//         "Maintenance scheduling",
//         "Student pickup/drop tracking",
//         "Parent notifications",
//         "Emergency alerts system",
//       ],
//       benefits: [
//         "Enhanced student safety",
//         "Optimized fuel costs",
//         "Real-time parent updates",
//         "Reduced operational costs",
//       ],
//     },

//     fees: {
//       title: "Fee Management",
//       icon: <CreditCard className="w-8 h-8" />,
//       description: "Automated fee collection and financial management",
//       image: "/images/fee-management.png",
//       features: [
//         "Multiple fee structure support",
//         "Online payment integration",
//         "Automated fee reminders",
//         "Discount and concession management",
//         "Receipt generation",
//         "Due date tracking",
//         "Financial reports",
//         "Tax and compliance management",
//       ],
//       benefits: [
//         "99% payment accuracy",
//         "Reduced late payments",
//         "Automated receipt generation",
//         "Comprehensive financial reports",
//       ],
//     },

//     academic: {
//       title: "Academic Management",
//       icon: <BookOpen className="w-8 h-8" />,
//       description: "Complete academic planning and execution",
//       image: "/images/academic-management.png",
//       features: [
//         "Curriculum planning",
//         "Timetable management",
//         "Exam and assessment scheduling",
//         "Grade book and report cards",
//         "Subject management",
//         "Homework and assignment tracking",
//         "Progress reports",
//         "Certificate generation",
//       ],
//       benefits: [
//         "Streamlined academic planning",
//         "Automated report generation",
//         "Easy progress tracking",
//         "Efficient timetable management",
//       ],
//     },

//     attendance: {
//       title: "Attendance System",
//       icon: <Calendar className="w-8 h-8" />,
//       description: "Smart attendance tracking for students and staff",
//       image: "/images/attendance-system.png",
//       features: [
//         "Biometric/QR code attendance",
//         "Daily, monthly, yearly reports",
//         "Leave application and approval",
//         "SMS/email notifications to parents",
//         "Holiday calendar management",
//         "Late arrival tracking",
//         "Attendance analytics",
//         "Automated absence alerts",
//       ],
//       benefits: [
//         "98% attendance accuracy",
//         "Instant parent notifications",
//         "Reduced manual work",
//         "Comprehensive reporting",
//       ],
//     },

//     communication: {
//       title: "Communication Portal",
//       icon: <MessageSquare className="w-8 h-8" />,
//       description: "Seamless communication between institute and parents",
//       image: "/images/communication-portal.png",
//       features: [
//         "Bulk SMS and email",
//         "Mobile app notifications",
//         "Announcements and notices",
//         "Parent-teacher meeting scheduling",
//         "Circular management",
//         "Event notifications",
//         "Emergency alerts",
//         "Two-way communication",
//       ],
//       benefits: [
//         "Instant communication",
//         "Reduced communication gap",
//         "Timely updates",
//         "Enhanced parent engagement",
//       ],
//     },

//     analytics: {
//       title: "Analytics & Reports",
//       icon: <BarChart3 className="w-8 h-8" />,
//       description: "Data-driven insights for better decision making",
//       image: "/images/analytics-reports.png",
//       features: [
//         "Real-time dashboard",
//         "Performance analytics",
//         "Financial reports",
//         "Attendance trends",
//         "Student progress reports",
//         "Staff performance reports",
//         "Custom report builder",
//         "Export to PDF/Excel",
//       ],
//       benefits: [
//         "Data-driven decisions",
//         "Performance insights",
//         "Easy report generation",
//         "Comprehensive analytics",
//       ],
//     },
//   };

//   const currentFeature = features[activeFeature];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Powerful Features for Your{" "}
//             <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
//               Islamic Institute
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover how DeenNest can transform your madrasa management with
//             comprehensive, easy-to-use features designed specifically for
//             Islamic educational institutions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                 All Features
//               </h3>
//               <div className="space-y-2">
//                 {Object.entries(features).map(([key, feature]) => (
//                   <button
//                     key={key}
//                     onClick={() => setActiveFeature(key)}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
//                       activeFeature === key
//                         ? "bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white shadow-lg"
//                         : "text-gray-700 hover:bg-gray-50 hover:shadow-md"
//                     }`}
//                   >
//                     <div
//                       className={`p-2 rounded-lg ${
//                         activeFeature === key ? "bg-white/20" : "bg-gray-100"
//                       }`}
//                     >
//                       {React.cloneElement(feature.icon, {
//                         className: `w-5 h-5 ${
//                           activeFeature === key
//                             ? "text-white"
//                             : "text-[#126F77]"
//                         }`,
//                       })}
//                     </div>
//                     <span className="font-medium">{feature.title}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               {/* Feature Header */}
//               <div className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] p-8 text-white">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-white/20 rounded-xl">
//                     {currentFeature.icon}
//                   </div>
//                   <div>
//                     <h2 className="text-3xl font-bold">
//                       {currentFeature.title}
//                     </h2>
//                     <p className="text-white/80 text-lg mt-2">
//                       {currentFeature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Feature Content */}
//               <div className="p-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   {/* Features List */}
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                       Key Features
//                     </h3>
//                     <div className="space-y-4">
//                       {currentFeature.features.map((feature, index) => (
//                         <div key={index} className="flex items-center gap-3">
//                           <CheckCircle className="w-6 h-6 text-[#EB6319] flex-shrink-0" />
//                           <span className="text-gray-700 text-lg">
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Benefits */}
//                     <div className="mt-8 p-6 bg-gradient-to-r from-[#EB6319]/10 to-[#126F77]/10 rounded-2xl">
//                       <h4 className="text-xl font-bold text-gray-900 mb-4">
//                         Key Benefits
//                       </h4>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {currentFeature.benefits.map((benefit, index) => (
//                           <div key={index} className="flex items-center gap-2">
//                             <Shield className="w-5 h-5 text-[#126F77]" />
//                             <span className="text-gray-700">{benefit}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Visual Section */}
//                   <div className="space-y-6">
//                     {/* Demo Image/Video Placeholder */}
//                     <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
//                       <div className="text-center">
//                         <div className="w-20 h-20 bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-full flex items-center justify-center mx-auto mb-4">
//                           <BarChart3 className="w-10 h-10 text-white" />
//                         </div>
//                         <p className="text-gray-600">
//                           Interactive Demo Available
//                         </p>
//                         <button className="mt-4 bg-gradient-to-r from-[#EB6319] to-[#FF8C42] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
//                           Live Preview
//                         </button>
//                       </div>
//                     </div>

//                     {/* Quick Actions */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                       <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl transition-all duration-200">
//                         <Download className="w-5 h-5" />
//                         <span>PDF Guide</span>
//                       </button>
//                       <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl transition-all duration-200">
//                         <Phone className="w-5 h-5" />
//                         <span>Demo Call</span>
//                       </button>
//                       <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl transition-all duration-200">
//                         <Mail className="w-5 h-5" />
//                         <span>Get Quote</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Stats */}
//                 <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
//                   <div className="text-center p-6 bg-gray-50 rounded-2xl">
//                     <div className="text-2xl font-bold text-[#126F77]">90%</div>
//                     <div className="text-gray-600">Time Saved</div>
//                   </div>
//                   <div className="text-center p-6 bg-gray-50 rounded-2xl">
//                     <div className="text-2xl font-bold text-[#126F77]">99%</div>
//                     <div className="text-gray-600">Accuracy</div>
//                   </div>
//                   <div className="text-center p-6 bg-gray-50 rounded-2xl">
//                     <div className="text-2xl font-bold text-[#126F77]">
//                       24/7
//                     </div>
//                     <div className="text-gray-600">Support</div>
//                   </div>
//                   <div className="text-center p-6 bg-gray-50 rounded-2xl">
//                     <div className="text-2xl font-bold text-[#126F77]">
//                       500+
//                     </div>
//                     <div className="text-gray-600">Users</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// src/Component/Common/FeatureDetails.jsx