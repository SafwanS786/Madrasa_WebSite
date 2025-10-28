// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // export default function StudentDetails() {
// //   // Sample student data
// //   const student = {
// //     name: "Ali Khan",
// //     age: 14,
// //     class: "8th Grade",
// //     rollNumber: "23",
// //     admissionDate: "2023-04-15",
// //     parentName: "Mr. Ahmed Khan",
// //     contact: "+91-9876543210",
// //     address: "123, Green Street, Delhi",
// //     attendance: "92%",
// //     grades: {
// //       Math: "A",
// //       Science: "B+",
// //       English: "A",
// //       History: "B",
// //     },
// //   };
// //   const navigate = useNavigate();

// //   return (
// //     <div className="max-w-5xl mx-auto p-6 sm:p-8">
// //       <h1 className="text-3xl font-bold text-[#126f77] mb-6">
// //         Student Details
// //       </h1>

// //       {/* Basic Info */}
// //       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
// //         <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           <p>
// //             <span className="font-semibold">Name:</span> {student.name}
// //           </p>
// //           <p>
// //             <span className="font-semibold">Age:</span> {student.age}
// //           </p>
// //           <p>
// //             <span className="font-semibold">Class:</span> {student.class}
// //           </p>
// //           <p>
// //             <span className="font-semibold">Roll Number:</span>{" "}
// //             {student.rollNumber}
// //           </p>
// //           <p>
// //             <span className="font-semibold">Admission Date:</span>{" "}
// //             {student.admissionDate}
// //           </p>
// //         </div>
// //       </div>

// //       {/* Parent Info */}
// //       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
// //         <h2 className="text-xl font-semibold mb-4">
// //           Parent / Guardian Details
// //         </h2>
// //         <p>
// //           <span className="font-semibold">Name:</span> {student.parentName}
// //         </p>
// //         <p>
// //           <span className="font-semibold">Contact:</span> {student.contact}
// //         </p>
// //         <p>
// //           <span className="font-semibold">Address:</span> {student.address}
// //         </p>
// //       </div>

// //       {/* Attendance */}
// //       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
// //         <h2 className="text-xl font-semibold mb-4">Attendance</h2>
// //         <p>{student.attendance}</p>
// //       </div>

// //       {/* Grades */}
// //       <div className="bg-white shadow-lg rounded-2xl p-6">
// //         <h2 className="text-xl font-semibold mb-4">Grades</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //           {Object.entries(student.grades).map(([subject, grade], index) => (
// //             <div
// //               key={index}
// //               className="bg-[#f0fdf4] p-4 rounded-xl text-center shadow-sm"
// //             >
// //               <p className="font-semibold">{subject}</p>
// //               <p className="text-lg text-[#126f77] font-bold">{grade}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div className="mt-8 text-center">
// //         <button
// //           onClick={() => navigate("/features")}
// //           className="bg-[#126F77] text-white px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-lg
// //            hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer"
// //         >
// //           Back to Features
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function ProfessionalDetails() {
// //   // Sample professional data (e.g., admin or staff profile)
// //   const professional = {
// //     fullName: "Imran Ahmed",
// //     role: "Institute Administrator",
// //     employeeId: "ADM-101",
// //     email: "imran.ahmed@deennest.com",
// //     phone: "+91-9876543214",
// //     department: "Administration",
// //     joinDate: "2019-06-10",
// //     status: "Active",
// //     responsibilities: [
// //       "Oversee institute operations",
// //       "Manage staff and student records",
// //       "Handle financial reporting",
// //     ],
// //     recentActivity: [
// //       { action: "Updated student attendance", date: "2025-10-24" },
// //       { action: "Approved payroll for October", date: "2025-10-23" },
// //     ],
// //     accessLevel: "Full Admin",
// //   };
// //   const navigate = useNavigate();

// //   return (
// //     <div className="max-w-6xl mx-auto p-6 sm:p-8 bg-gray-50 min-h-screen">
// //       <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#126f77]">
// //         {/* Header Section */}
// //         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
// //           <div>
// //             <h1 className="text-4xl font-bold text-[#126f77] mb-2">
// //               Professional Profile
// //             </h1>
// //             <p className="text-gray-600 text-lg">
// //               {professional.role} - {professional.employeeId}
// //             </p>
// //           </div>
// //           <div className="mt-4 sm:mt-0">
// //             <span
// //               className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
// //                 professional.status === "Active"
// //                   ? "bg-green-100 text-green-800"
// //                   : "bg-red-100 text-red-800"
// //               }`}
// //             >
// //               {professional.status}
// //             </span>
// //           </div>
// //         </div>

// //         {/* Profile Summary */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// //           <div className="bg-gray-100 p-6 rounded-xl">
// //             <h2 className="text-xl font-semibold text-[#126f77] mb-4">
// //               Contact Information
// //             </h2>
// //             <div className="space-y-2">
// //               <p>
// //                 <span className="font-medium text-gray-700">Email:</span>{" "}
// //                 <a
// //                   href={`mailto:${professional.email}`}
// //                   className="text-blue-600 hover:underline"
// //                 >
// //                   {professional.email}
// //                 </a>
// //               </p>
// //               <p>
// //                 <span className="font-medium text-gray-700">Phone:</span>{" "}
// //                 <a
// //                   href={`tel:${professional.phone}`}
// //                   className="text-blue-600 hover:underline"
// //                 >
// //                   {professional.phone}
// //                 </a>
// //               </p>
// //               <p>
// //                 <span className="font-medium text-gray-700">Department:</span>{" "}
// //                 {professional.department}
// //               </p>
// //               <p>
// //                 <span className="font-medium text-gray-700">Join Date:</span>{" "}
// //                 {professional.joinDate}
// //               </p>
// //             </div>
// //           </div>
// //           <div className="bg-gray-100 p-6 rounded-xl">
// //             <h2 className="text-xl font-semibold text-[#126f77] mb-4">
// //               Responsibilities
// //             </h2>
// //             <ul className="list-disc list-inside space-y-2 text-gray-700">
// //               {professional.responsibilities.map((resp, index) => (
// //                 <li key={index}>{resp}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Recent Activity */}
// //         <div className="bg-gray-100 p-6 rounded-xl mb-8">
// //           <h2 className="text-xl font-semibold text-[#126f77] mb-4">
// //             Recent Activity
// //           </h2>
// //           <ul className="space-y-3">
// //             {professional.recentActivity.map((activity, index) => (
// //               <li key={index} className="flex justify-between text-gray-700">
// //                 <span>{activity.action}</span>
// //                 <span className="text-sm text-gray-500">{activity.date}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Actions Section */}
// //         <div className="bg-gray-100 p-6 rounded-xl">
// //           <h2 className="text-xl font-semibold text-[#126f77] mb-4">Actions</h2>
// //           <div className="flex flex-col sm:flex-row gap-4">
// //             <button
// //               onClick={() => alert("Edit profile initiated")}
// //               className="bg-[#126F77] text-white px-6 py-2 rounded-lg hover:bg-[#0E575D] transition-colors duration-300"
// //             >
// //               Edit Profile
// //             </button>
// //             <button
// //               onClick={() => alert("Access log viewed")}
// //               className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
// //             >
// //               View Access Log
// //             </button>
// //           </div>
// //         </div>

// //         {/* Navigation Back Button */}
// //         <div className="mt-8 text-center">
// //           <button
// //             onClick={() => navigate("/features")}
// //             className="bg-[#126F77] text-white px-6 py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer"
// //           >
// //             Back to Features
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   User,
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Calendar,
// //   Book,
// //   Award,
// //   GraduationCap,
// //   Clock,
// //   TrendingUp,
// //   FileText,
// //   Download,
// //   Edit,
// //   ArrowLeft,
// //   CheckCircle,
// //   AlertCircle,
// //   BookOpen,
// //   Users,
// //   BarChart3,
// //   Target,
// //   Star,
// // } from "lucide-react";

// // export default function StudentDetailsPage() {
// //   const [activeTab, setActiveTab] = useState("overview");
// //   const navigate = useNavigate();

// //   // Sample student data
// //   const student = {
// //     id: "STU-2025-001",
// //     name: "Aisha Rahman",
// //     email: "aisha.rahman@deennest.edu",
// //     phone: "+91-9876543210",
// //     address: "Mumbai, Maharashtra, India",
// //     enrollmentDate: "2024-01-15",
// //     program: "Islamic Studies - Advanced",
// //     batch: "Batch 2024-A",
// //     status: "Active",
// //     profileImage: "👩‍🎓",
// //     guardian: {
// //       name: "Mohammed Rahman",
// //       relationship: "Father",
// //       phone: "+91-9876543211",
// //     },
// //   };

// //   const academicInfo = {
// //     currentSemester: "Semester 3",
// //     gpa: "3.8",
// //     attendance: "92%",
// //     completedCourses: 12,
// //     ongoingCourses: 5,
// //     creditsEarned: 48,
// //   };

// //   const courses = [
// //     {
// //       name: "Tafsir Studies",
// //       instructor: "Dr. Ahmed Khan",
// //       progress: 85,
// //       grade: "A",
// //       status: "ongoing",
// //     },
// //     {
// //       name: "Hadith Sciences",
// //       instructor: "Prof. Fatima Ali",
// //       progress: 92,
// //       grade: "A+",
// //       status: "ongoing",
// //     },
// //     {
// //       name: "Arabic Grammar",
// //       instructor: "Sheikh Yusuf",
// //       progress: 78,
// //       grade: "B+",
// //       status: "ongoing",
// //     },
// //     {
// //       name: "Islamic History",
// //       instructor: "Dr. Sarah Ibrahim",
// //       progress: 95,
// //       grade: "A+",
// //       status: "ongoing",
// //     },
// //     {
// //       name: "Fiqh Fundamentals",
// //       instructor: "Mufti Abdullah",
// //       progress: 88,
// //       grade: "A",
// //       status: "ongoing",
// //     },
// //   ];

// //   const achievements = [
// //     {
// //       title: "Quran Memorization Certificate",
// //       date: "2024-06-15",
// //       type: "certificate",
// //     },
// //     { title: "Best Student Award", date: "2024-08-20", type: "award" },
// //     {
// //       title: "Arabic Speaking Competition - 1st Place",
// //       date: "2024-09-10",
// //       type: "award",
// //     },
// //     {
// //       title: "Hadith Studies Excellence",
// //       date: "2024-10-05",
// //       type: "certificate",
// //     },
// //   ];

// //   const attendanceData = [
// //     { month: "June", percentage: 95 },
// //     { month: "July", percentage: 90 },
// //     { month: "August", percentage: 88 },
// //     { month: "September", percentage: 94 },
// //     { month: "October", percentage: 92 },
// //   ];

// //   const tabs = [
// //     { id: "overview", label: "Overview", icon: User },
// //     { id: "courses", label: "Courses", icon: Book },
// //     { id: "performance", label: "Performance", icon: BarChart3 },
// //     { id: "achievements", label: "Achievements", icon: Award },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
// //       {/* Header */}
// //       <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
// //         <div className="max-w-7xl mx-auto px-6 py-6">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center gap-4">
// //               <button
// //                 className="p-2 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
// //                 onClick={() => navigate("/features")}
// //               >
// //                 <ArrowLeft className="w-5 h-5" />
// //               </button>
// //               <div>
// //                 <h1 className="text-3xl font-bold">Student Details</h1>
// //                 <p className="text-emerald-100 mt-1">
// //                   DeenNest Islamic Academy
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="flex gap-3">
// //               <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
// //                 <Download className="w-4 h-4" />
// //                 Export
// //               </button>
// //               <button className="flex items-center gap-2 px-4 py-2 bg-white text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-semibold">
// //                 <Edit className="w-4 h-4" />
// //                 Edit Profile
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-6 py-8">
// //         {/* Student Profile Card */}
// //         <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
// //           <div className="flex flex-col md:flex-row gap-8">
// //             <div className="flex flex-col items-center">
// //               <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-6xl shadow-lg">
// //                 {student.profileImage}
// //               </div>
// //               <span
// //                 className={`mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
// //                   student.status === "Active"
// //                     ? "bg-green-100 text-green-700"
// //                     : "bg-gray-100 text-gray-700"
// //                 }`}
// //               >
// //                 <CheckCircle className="w-4 h-4 inline mr-1" />
// //                 {student.status}
// //               </span>
// //             </div>

// //             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <h2 className="text-3xl font-bold text-gray-800 mb-2">
// //                   {student.name}
// //                 </h2>
// //                 <p className="text-gray-600 mb-4">{student.id}</p>

// //                 <div className="space-y-3">
// //                   <div className="flex items-center gap-3 text-gray-700">
// //                     <Mail className="w-5 h-5 text-emerald-600" />
// //                     <span className="text-sm">{student.email}</span>
// //                   </div>
// //                   <div className="flex items-center gap-3 text-gray-700">
// //                     <Phone className="w-5 h-5 text-emerald-600" />
// //                     <span className="text-sm">{student.phone}</span>
// //                   </div>
// //                   <div className="flex items-center gap-3 text-gray-700">
// //                     <MapPin className="w-5 h-5 text-emerald-600" />
// //                     <span className="text-sm">{student.address}</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="space-y-4">
// //                 <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-100">
// //                   <div className="flex items-center gap-2 mb-2">
// //                     <GraduationCap className="w-5 h-5 text-emerald-600" />
// //                     <span className="text-sm font-semibold text-gray-700">
// //                       Academic Info
// //                     </span>
// //                   </div>
// //                   <p className="text-gray-800 font-semibold">
// //                     {student.program}
// //                   </p>
// //                   <p className="text-sm text-gray-600 mt-1">{student.batch}</p>
// //                 </div>

// //                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
// //                   <div className="flex items-center gap-2 mb-2">
// //                     <Users className="w-5 h-5 text-blue-600" />
// //                     <span className="text-sm font-semibold text-gray-700">
// //                       Guardian
// //                     </span>
// //                   </div>
// //                   <p className="text-gray-800 font-semibold">
// //                     {student.guardian.name}
// //                   </p>
// //                   <p className="text-sm text-gray-600 mt-1">
// //                     {student.guardian.relationship} • {student.guardian.phone}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Quick Stats */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
// //           <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center justify-between mb-2">
// //               <Target className="w-8 h-8 text-emerald-600" />
// //             </div>
// //             <p className="text-2xl font-bold text-gray-800">
// //               {academicInfo.gpa}
// //             </p>
// //             <p className="text-xs text-gray-600 mt-1">GPA</p>
// //           </div>

// //           <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center justify-between mb-2">
// //               <CheckCircle className="w-8 h-8 text-blue-600" />
// //             </div>
// //             <p className="text-2xl font-bold text-gray-800">
// //               {academicInfo.attendance}
// //             </p>
// //             <p className="text-xs text-gray-600 mt-1">Attendance</p>
// //           </div>

// //           <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center justify-between mb-2">
// //               <Book className="w-8 h-8 text-purple-600" />
// //             </div>
// //             <p className="text-2xl font-bold text-gray-800">
// //               {academicInfo.ongoingCourses}
// //             </p>
// //             <p className="text-xs text-gray-600 mt-1">Ongoing</p>
// //           </div>

// //           <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center justify-between mb-2">
// //               <BookOpen className="w-8 h-8 text-teal-600" />
// //             </div>
// //             <p className="text-2xl font-bold text-gray-800">
// //               {academicInfo.completedCourses}
// //             </p>
// //             <p className="text-xs text-gray-600 mt-1">Completed</p>
// //           </div>

// //           <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center justify-between mb-2">
// //               <Award className="w-8 h-8 text-amber-600" />
// //             </div>
// //             <p className="text-2xl font-bold text-gray-800">
// //               {achievements.length}
// //             </p>
// //             <p className="text-xs text-gray-600 mt-1">Achievements</p>
// //           </div>

// //           <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center justify-between mb-2">
// //               <Star className="w-8 h-8 text-yellow-600" />
// //             </div>
// //             <p className="text-2xl font-bold text-gray-800">
// //               {academicInfo.creditsEarned}
// //             </p>
// //             <p className="text-xs text-gray-600 mt-1">Credits</p>
// //           </div>
// //         </div>

// //         {/* Tabs Navigation */}
// //         <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
// //           <div className="border-b border-gray-200 bg-gray-50">
// //             <div className="flex overflow-x-auto">
// //               {tabs.map((tab) => {
// //                 const Icon = tab.icon;
// //                 return (
// //                   <button
// //                     key={tab.id}
// //                     onClick={() => setActiveTab(tab.id)}
// //                     className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
// //                       activeTab === tab.id
// //                         ? "text-emerald-600 border-b-2 border-emerald-600 bg-white"
// //                         : "text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     <Icon className="w-5 h-5" />
// //                     {tab.label}
// //                   </button>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           <div className="p-8">
// //             {/* Overview Tab */}
// //             {activeTab === "overview" && (
// //               <div className="space-y-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
// //                     <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                       <Calendar className="w-5 h-5 text-emerald-600" />
// //                       Enrollment Information
// //                     </h3>
// //                     <div className="space-y-3">
// //                       <div className="flex justify-between">
// //                         <span className="text-gray-600">Enrollment Date</span>
// //                         <span className="font-semibold text-gray-800">
// //                           {student.enrollmentDate}
// //                         </span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span className="text-gray-600">Current Semester</span>
// //                         <span className="font-semibold text-gray-800">
// //                           {academicInfo.currentSemester}
// //                         </span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span className="text-gray-600">Total Credits</span>
// //                         <span className="font-semibold text-gray-800">
// //                           {academicInfo.creditsEarned}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
// //                     <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                       <TrendingUp className="w-5 h-5 text-blue-600" />
// //                       Recent Activity
// //                     </h3>
// //                     <div className="space-y-3">
// //                       <div className="flex items-start gap-3">
// //                         <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
// //                         <div>
// //                           <p className="text-sm text-gray-800 font-medium">
// //                             Assignment Submitted
// //                           </p>
// //                           <p className="text-xs text-gray-600">
// //                             Tafsir Studies - 2 days ago
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="flex items-start gap-3">
// //                         <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
// //                         <div>
// //                           <p className="text-sm text-gray-800 font-medium">
// //                             Quiz Completed
// //                           </p>
// //                           <p className="text-xs text-gray-600">
// //                             Hadith Sciences - 5 days ago
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="flex items-start gap-3">
// //                         <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
// //                         <div>
// //                           <p className="text-sm text-gray-800 font-medium">
// //                             Certificate Earned
// //                           </p>
// //                           <p className="text-xs text-gray-600">
// //                             Arabic Grammar - 1 week ago
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Courses Tab */}
// //             {activeTab === "courses" && (
// //               <div className="space-y-4">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">
// //                   Ongoing Courses
// //                 </h3>
// //                 {courses.map((course, index) => (
// //                   <div
// //                     key={index}
// //                     className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
// //                   >
// //                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
// //                       <div className="flex-1">
// //                         <h4 className="text-lg font-bold text-gray-800">
// //                           {course.name}
// //                         </h4>
// //                         <p className="text-sm text-gray-600 mt-1">
// //                           Instructor: {course.instructor}
// //                         </p>
// //                         <div className="mt-3">
// //                           <div className="flex items-center justify-between mb-1">
// //                             <span className="text-xs text-gray-600">
// //                               Progress
// //                             </span>
// //                             <span className="text-xs font-semibold text-gray-800">
// //                               {course.progress}%
// //                             </span>
// //                           </div>
// //                           <div className="w-full bg-gray-200 rounded-full h-2">
// //                             <div
// //                               className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all"
// //                               style={{ width: `${course.progress}%` }}
// //                             ></div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                       <div className="flex items-center gap-4">
// //                         <div className="text-center">
// //                           <div className="text-2xl font-bold text-emerald-600">
// //                             {course.grade}
// //                           </div>
// //                           <div className="text-xs text-gray-600">Grade</div>
// //                         </div>
// //                         <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
// //                           {course.status}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}

// //             {/* Performance Tab */}
// //             {activeTab === "performance" && (
// //               <div className="space-y-6">
// //                 <div>
// //                   <h3 className="text-xl font-bold text-gray-800 mb-4">
// //                     Attendance Trend
// //                   </h3>
// //                   <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
// //                     <div className="space-y-4">
// //                       {attendanceData.map((data, index) => (
// //                         <div key={index}>
// //                           <div className="flex items-center justify-between mb-2">
// //                             <span className="text-sm font-semibold text-gray-700">
// //                               {data.month}
// //                             </span>
// //                             <span className="text-sm font-bold text-gray-800">
// //                               {data.percentage}%
// //                             </span>
// //                           </div>
// //                           <div className="w-full bg-white rounded-full h-3 shadow-inner">
// //                             <div
// //                               className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all"
// //                               style={{ width: `${data.percentage}%` }}
// //                             ></div>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 text-center">
// //                     <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
// //                     <p className="text-3xl font-bold text-gray-800">A+</p>
// //                     <p className="text-sm text-gray-600 mt-2">Average Grade</p>
// //                   </div>
// //                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 text-center">
// //                     <Clock className="w-10 h-10 text-purple-600 mx-auto mb-3" />
// //                     <p className="text-3xl font-bold text-gray-800">98%</p>
// //                     <p className="text-sm text-gray-600 mt-2">
// //                       Assignment Rate
// //                     </p>
// //                   </div>
// //                   <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 text-center">
// //                     <Target className="w-10 h-10 text-amber-600 mx-auto mb-3" />
// //                     <p className="text-3xl font-bold text-gray-800">Top 5%</p>
// //                     <p className="text-sm text-gray-600 mt-2">Class Ranking</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Achievements Tab */}
// //             {activeTab === "achievements" && (
// //               <div className="space-y-4">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">
// //                   Awards & Certificates
// //                 </h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   {achievements.map((achievement, index) => (
// //                     <div
// //                       key={index}
// //                       className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow"
// //                     >
// //                       <div className="flex items-start gap-4">
// //                         <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
// //                           {achievement.type === "certificate" ? (
// //                             <FileText className="w-6 h-6 text-white" />
// //                           ) : (
// //                             <Award className="w-6 h-6 text-white" />
// //                           )}
// //                         </div>
// //                         <div className="flex-1">
// //                           <h4 className="font-bold text-gray-800">
// //                             {achievement.title}
// //                           </h4>
// //                           <p className="text-sm text-gray-600 mt-1">
// //                             {achievement.date}
// //                           </p>
// //                           <span className="inline-block mt-2 px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-xs font-semibold">
// //                             {achievement.type}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   User,
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Calendar,
// //   Book,
// //   Award,
// //   GraduationCap,
// //   Clock,
// //   TrendingUp,
// //   FileText,
// //   Download,
// //   Edit,
// //   ArrowLeft,
// //   CheckCircle,
// //   Users,
// //   BarChart3,
// //   Target,
// //   Star,
// //   Shield,
// //   BookOpen,
// //   Camera,
// //   MessageCircle,
// //   CreditCard,
// //   Activity,
// //   Crown,
// //   Sparkles,
// //   School,
// //   Home,
// //   Heart,
// // } from "lucide-react";

// // export default function StudentDetails() {
// //   const [activeTab, setActiveTab] = useState("overview");
// //   const navigate = useNavigate();

// //   // Comprehensive student data
// //   const student = {
// //     id: "STU-2024-001",
// //     name: "Aisha Rahman",
// //     arabicName: "عائشة رحمان",
// //     email: "aisha.rahman@deennest.edu",
// //     phone: "+91-9876543210",
// //     address: "123 Islamic Street, Mumbai, Maharashtra, India",
// //     enrollmentDate: "2024-01-15",
// //     dateOfBirth: "2008-03-15",
// //     age: 16,
// //     gender: "Female",
// //     program: "Advanced Islamic Studies",
// //     specialization: "Quran Memorization & Tafsir",
// //     batch: "Batch 2024-A",
// //     class: "Grade 10 - Section B",
// //     status: "Active",
// //     profileImage: "👩‍🎓",

// //     // Academic Details
// //     academic: {
// //       currentSemester: "Semester 3",
// //       gpa: "3.8",
// //       cgpa: "3.7",
// //       attendance: "92%",
// //       completedCourses: 12,
// //       ongoingCourses: 5,
// //       creditsEarned: 48,
// //       totalCredits: 60,
// //       classRank: 5,
// //       totalStudents: 45,
// //     },

// //     // Guardian Information
// //     guardian: {
// //       name: "Mohammed Rahman",
// //       relationship: "Father",
// //       phone: "+91-9876543211",
// //       email: "m.rahman@email.com",
// //       occupation: "Business Owner",
// //       address: "Same as student",
// //     },

// //     // Islamic Progress
// //     islamicProgress: {
// //       quranMemorization: "15 Juz",
// //       lastRevision: "Juz 14",
// //       tajweedLevel: "Advanced",
// //       arabicProficiency: "Intermediate",
// //       islamicKnowledge: "Excellent",
// //     },
// //   };

// //   // Courses Data
// //   const courses = [
// //     {
// //       id: "QUR-101",
// //       name: "Quran Memorization (Hifz)",
// //       arabicName: "حفظ القرآن الكريم",
// //       instructor: "Shaykh Ahmed Al-Misri",
// //       progress: 75,
// //       grade: "A+",
// //       status: "ongoing",
// //       credits: 4,
// //       schedule: "Mon, Wed, Fri - 8:00 AM",
// //       room: "Masjid Hall",
// //     },
// //     {
// //       id: "TAF-201",
// //       name: "Tafsir Studies",
// //       arabicName: "علم التفسير",
// //       instructor: "Dr. Fatima Abdullah",
// //       progress: 85,
// //       grade: "A",
// //       status: "ongoing",
// //       credits: 3,
// //       schedule: "Tue, Thu - 10:00 AM",
// //       room: "Classroom 101",
// //     },
// //     {
// //       id: "HAD-301",
// //       name: "Hadith Sciences",
// //       arabicName: "علم الحديث",
// //       instructor: "Prof. Yusuf Khan",
// //       progress: 92,
// //       grade: "A+",
// //       status: "ongoing",
// //       credits: 3,
// //       schedule: "Mon, Wed - 2:00 PM",
// //       room: "Library Hall",
// //     },
// //     {
// //       id: "ARA-102",
// //       name: "Arabic Grammar",
// //       arabicName: "قواعد اللغة العربية",
// //       instructor: "Ustadh Ibrahim",
// //       progress: 78,
// //       grade: "B+",
// //       status: "ongoing",
// //       credits: 3,
// //       schedule: "Sat, Sun - 9:00 AM",
// //       room: "Language Lab",
// //     },
// //     {
// //       id: "FIQ-202",
// //       name: "Fiqh Fundamentals",
// //       arabicName: "أصول الفقه",
// //       instructor: "Mufti Abdullah",
// //       progress: 88,
// //       grade: "A",
// //       status: "ongoing",
// //       credits: 3,
// //       schedule: "Tue, Thu - 4:00 PM",
// //       room: "Classroom 102",
// //     },
// //   ];

// //   // Islamic Achievements
// //   const achievements = [
// //     {
// //       id: "ACH-001",
// //       title: "Quran Memorization Certificate - 15 Juz",
// //       arabicTitle: "شهادة حفظ القرآن - 15 جزء",
// //       date: "2024-06-15",
// //       type: "certificate",
// //       level: "Advanced",
// //       issuedBy: "DeenNest Islamic Academy",
// //       description: "Completed memorization of 15 Juz with excellent tajweed",
// //     },
// //     {
// //       id: "ACH-002",
// //       title: "Best Student Award - Academic Excellence",
// //       arabicTitle: "جائزة أفضل طالب - التميز الأكاديمي",
// //       date: "2024-08-20",
// //       type: "award",
// //       level: "Institute Level",
// //       issuedBy: "Islamic Education Board",
// //       description: "Recognized for outstanding academic performance",
// //     },
// //     {
// //       id: "ACH-003",
// //       title: "Arabic Speaking Competition - 1st Place",
// //       arabicTitle: "مسابقة الخطابة العربية - المركز الأول",
// //       date: "2024-09-10",
// //       type: "award",
// //       level: "Regional",
// //       issuedBy: "Arabic Language Association",
// //       description: "Won first prize in regional Arabic speech competition",
// //     },
// //     {
// //       id: "ACH-004",
// //       title: "Hadith Studies Excellence Certificate",
// //       arabicTitle: "شهادة التميز في علم الحديث",
// //       date: "2024-10-05",
// //       type: "certificate",
// //       level: "Advanced",
// //       issuedBy: "DeenNest Islamic Academy",
// //       description: "Excellence in Hadith memorization and understanding",
// //     },
// //   ];

// //   // Attendance Data
// //   const attendanceData = [
// //     { month: "June 2024", present: 28, absent: 2, percentage: 93 },
// //     { month: "July 2024", present: 26, absent: 4, percentage: 87 },
// //     { month: "August 2024", present: 29, absent: 1, percentage: 97 },
// //     { month: "September 2024", present: 27, absent: 3, percentage: 90 },
// //     { month: "October 2024", present: 25, absent: 5, percentage: 83 },
// //   ];

// //   // Performance Metrics
// //   const performanceMetrics = {
// //     academic: {
// //       averageGrade: "A+",
// //       assignmentCompletion: 98,
// //       quizPerformance: 95,
// //       participation: 90,
// //     },
// //     islamic: {
// //       quranRecitation: 92,
// //       prayerAttendance: 96,
// //       islamicEtiquette: 94,
// //       communityService: 88,
// //     },
// //   };

// //   const tabs = [
// //     { id: "overview", label: "Overview", icon: User },
// //     { id: "academic", label: "Academic", icon: Book },
// //     { id: "islamic", label: "Islamic Progress", icon: BookOpen },
// //     { id: "attendance", label: "Attendance", icon: Calendar },
// //     { id: "performance", label: "Performance", icon: BarChart3 },
// //     { id: "achievements", label: "Achievements", icon: Award },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
// //       {/* Header */}
// //       <div className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white shadow-2xl">
// //         <div className="max-w-7xl mx-auto px-6 py-6">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center gap-4">
// //               <button
// //                 className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 cursor-pointer hover:scale-110"
// //                 onClick={() => navigate("/features")}
// //               >
// //                 <ArrowLeft className="w-6 h-6" />
// //               </button>
// //               <div>
// //                 <h1 className="text-3xl font-bold">Student Management</h1>
// //                 <p className="text-blue-100 mt-1 flex items-center gap-2">
// //                   <School className="w-4 h-4" />
// //                   DeenNest Islamic Academy - Comprehensive Student Profile
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="flex gap-3">
// //               <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 hover:scale-105">
// //                 <Download className="w-4 h-4" />
// //                 Export Report
// //               </button>
// //               <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#126F77] hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg">
// //                 <Edit className="w-4 h-4" />
// //                 Edit Profile
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-6 py-8">
// //         {/* Student Profile Header */}
// //         <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-200">
// //           <div className="flex flex-col lg:flex-row gap-8">
// //             {/* Profile Image & Basic Info */}
// //             <div className="flex flex-col items-center lg:items-start">
// //               <div className="relative">
// //                 <div className="w-40 h-40 bg-gradient-to-br from-[#126F77] to-[#0F5A61] rounded-3xl flex items-center justify-center text-6xl shadow-2xl">
// //                   {student.profileImage}
// //                 </div>
// //                 <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg">
// //                   <CheckCircle className="w-6 h-6" />
// //                 </div>
// //               </div>

// //               <div className="text-center lg:text-left mt-6">
// //                 <h2 className="text-3xl font-bold text-gray-800">
// //                   {student.name}
// //                 </h2>
// //                 <p className="text-xl text-[#126F77] font-arabic mt-2">
// //                   {student.arabicName}
// //                 </p>
// //                 <p className="text-gray-600 mt-1">{student.id}</p>

// //                 <div className="flex items-center gap-2 mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
// //                   <CheckCircle className="w-4 h-4" />
// //                   {student.status} Student
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Detailed Information */}
// //             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
// //               {/* Personal Information */}
// //               <div className="space-y-6">
// //                 <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
// //                   <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                     <User className="w-5 h-5 text-[#126F77]" />
// //                     Personal Information
// //                   </h3>
// //                   <div className="space-y-3">
// //                     <div className="flex justify-between">
// //                       <span className="text-gray-600">Date of Birth</span>
// //                       <span className="font-semibold text-gray-800">
// //                         {student.dateOfBirth}
// //                       </span>
// //                     </div>
// //                     <div className="flex justify-between">
// //                       <span className="text-gray-600">Age</span>
// //                       <span className="font-semibold text-gray-800">
// //                         {student.age} years
// //                       </span>
// //                     </div>
// //                     <div className="flex justify-between">
// //                       <span className="text-gray-600">Gender</span>
// //                       <span className="font-semibold text-gray-800">
// //                         {student.gender}
// //                       </span>
// //                     </div>
// //                     <div className="flex justify-between">
// //                       <span className="text-gray-600">Enrollment Date</span>
// //                       <span className="font-semibold text-gray-800">
// //                         {student.enrollmentDate}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Contact Information */}
// //                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
// //                   <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                     <Mail className="w-5 h-5 text-[#126F77]" />
// //                     Contact Information
// //                   </h3>
// //                   <div className="space-y-3">
// //                     <div className="flex items-center gap-3 text-gray-700">
// //                       <Mail className="w-4 h-4 text-[#126F77]" />
// //                       <span className="text-sm">{student.email}</span>
// //                     </div>
// //                     <div className="flex items-center gap-3 text-gray-700">
// //                       <Phone className="w-4 h-4 text-[#126F77]" />
// //                       <span className="text-sm">{student.phone}</span>
// //                     </div>
// //                     <div className="flex items-start gap-3 text-gray-700">
// //                       <MapPin className="w-4 h-4 text-[#126F77] mt-1" />
// //                       <span className="text-sm">{student.address}</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Academic & Guardian Info */}
// //               <div className="space-y-6">
// //                 {/* Academic Information */}
// //                 <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
// //                   <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                     <GraduationCap className="w-5 h-5 text-[#126F77]" />
// //                     Academic Information
// //                   </h3>
// //                   <div className="space-y-2">
// //                     <p className="text-gray-800 font-semibold">
// //                       {student.program}
// //                     </p>
// //                     <p className="text-sm text-gray-600">
// //                       {student.specialization}
// //                     </p>
// //                     <div className="flex items-center justify-between mt-3">
// //                       <span className="text-gray-600">Class</span>
// //                       <span className="font-semibold text-gray-800">
// //                         {student.class}
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <span className="text-gray-600">Batch</span>
// //                       <span className="font-semibold text-gray-800">
// //                         {student.batch}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Guardian Information */}
// //                 <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100">
// //                   <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                     <Users className="w-5 h-5 text-[#126F77]" />
// //                     Guardian Information
// //                   </h3>
// //                   <div className="space-y-2">
// //                     <p className="text-gray-800 font-semibold">
// //                       {student.guardian.name}
// //                     </p>
// //                     <p className="text-sm text-gray-600">
// //                       {student.guardian.relationship}
// //                     </p>
// //                     <div className="flex items-center justify-between mt-3">
// //                       <span className="text-gray-600">Phone</span>
// //                       <span className="font-semibold text-gray-800">
// //                         {student.guardian.phone}
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <span className="text-gray-600">Occupation</span>
// //                       <span className="font-semibold text-gray-800">
// //                         {student.guardian.occupation}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Quick Stats */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
// //           {[
// //             {
// //               icon: Target,
// //               value: student.academic.gpa,
// //               label: "GPA",
// //               color: "emerald",
// //             },
// //             {
// //               icon: CheckCircle,
// //               value: student.academic.attendance,
// //               label: "Attendance",
// //               color: "blue",
// //             },
// //             {
// //               icon: Book,
// //               value: student.academic.ongoingCourses,
// //               label: "Ongoing",
// //               color: "purple",
// //             },
// //             {
// //               icon: BookOpen,
// //               value: student.academic.completedCourses,
// //               label: "Completed",
// //               color: "teal",
// //             },
// //             {
// //               icon: Award,
// //               value: achievements.length,
// //               label: "Achievements",
// //               color: "amber",
// //             },
// //             {
// //               icon: Star,
// //               value: student.academic.creditsEarned,
// //               label: "Credits",
// //               color: "yellow",
// //             },
// //           ].map((stat, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
// //             >
// //               <div className="flex items-center justify-between mb-3">
// //                 <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
// //               </div>
// //               <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
// //               <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Tabs Navigation */}
// //         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
// //           <div className="border-b border-gray-200 bg-gray-50">
// //             <div className="flex overflow-x-auto">
// //               {tabs.map((tab) => {
// //                 const Icon = tab.icon;
// //                 return (
// //                   <button
// //                     key={tab.id}
// //                     onClick={() => setActiveTab(tab.id)}
// //                     className={`flex items-center gap-3 px-8 py-5 font-semibold transition-all duration-300 whitespace-nowrap ${
// //                       activeTab === tab.id
// //                         ? "text-[#126F77] border-b-2 border-[#126F77] bg-white shadow-sm"
// //                         : "text-gray-600 hover:text-[#126F77] hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     <Icon className="w-5 h-5" />
// //                     {tab.label}
// //                   </button>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           <div className="p-8">
// //             {/* Overview Tab */}
// //             {activeTab === "overview" && (
// //               <div className="space-y-8">
// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //                   {/* Academic Summary */}
// //                   <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
// //                     <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
// //                       <GraduationCap className="w-6 h-6 text-[#126F77]" />
// //                       Academic Summary
// //                     </h3>
// //                     <div className="space-y-4">
// //                       {[
// //                         {
// //                           label: "Current Semester",
// //                           value: student.academic.currentSemester,
// //                         },
// //                         { label: "CGPA", value: student.academic.cgpa },
// //                         {
// //                           label: "Class Rank",
// //                           value: `${student.academic.classRank}/${student.academic.totalStudents}`,
// //                         },
// //                         {
// //                           label: "Credits Progress",
// //                           value: `${student.academic.creditsEarned}/${student.academic.totalCredits}`,
// //                         },
// //                       ].map((item, index) => (
// //                         <div
// //                           key={index}
// //                           className="flex justify-between items-center py-2 border-b border-blue-100"
// //                         >
// //                           <span className="text-gray-600">{item.label}</span>
// //                           <span className="font-semibold text-gray-800">
// //                             {item.value}
// //                           </span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* Islamic Progress Summary */}
// //                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
// //                     <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
// //                       <BookOpen className="w-6 h-6 text-[#126F77]" />
// //                       Islamic Progress
// //                     </h3>
// //                     <div className="space-y-4">
// //                       {[
// //                         {
// //                           label: "Quran Memorization",
// //                           value: student.islamicProgress.quranMemorization,
// //                         },
// //                         {
// //                           label: "Tajweed Level",
// //                           value: student.islamicProgress.tajweedLevel,
// //                         },
// //                         {
// //                           label: "Arabic Proficiency",
// //                           value: student.islamicProgress.arabicProficiency,
// //                         },
// //                         {
// //                           label: "Islamic Knowledge",
// //                           value: student.islamicProgress.islamicKnowledge,
// //                         },
// //                       ].map((item, index) => (
// //                         <div
// //                           key={index}
// //                           className="flex justify-between items-center py-2 border-b border-green-100"
// //                         >
// //                           <span className="text-gray-600">{item.label}</span>
// //                           <span className="font-semibold text-gray-800">
// //                             {item.value}
// //                           </span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Recent Activity */}
// //                 <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
// //                   <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
// //                     <Activity className="w-6 h-6 text-[#126F77]" />
// //                     Recent Activity
// //                   </h3>
// //                   <div className="space-y-4">
// //                     {[
// //                       {
// //                         action: "Submitted Tafsir Assignment",
// //                         course: "QUR-101",
// //                         time: "2 hours ago",
// //                         status: "completed",
// //                       },
// //                       {
// //                         action: "Completed Quran Revision",
// //                         course: "HIFZ",
// //                         time: "1 day ago",
// //                         status: "completed",
// //                       },
// //                       {
// //                         action: "Arabic Quiz Attempt",
// //                         course: "ARA-102",
// //                         time: "2 days ago",
// //                         status: "graded",
// //                       },
// //                       {
// //                         action: "Parent-Teacher Meeting",
// //                         course: "General",
// //                         time: "1 week ago",
// //                         status: "attended",
// //                       },
// //                     ].map((activity, index) => (
// //                       <div
// //                         key={index}
// //                         className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
// //                       >
// //                         <div className="flex items-center gap-4">
// //                           <div
// //                             className={`w-3 h-3 rounded-full ${
// //                               activity.status === "completed"
// //                                 ? "bg-green-500"
// //                                 : activity.status === "graded"
// //                                 ? "bg-blue-500"
// //                                 : "bg-purple-500"
// //                             }`}
// //                           ></div>
// //                           <div>
// //                             <p className="font-semibold text-gray-800">
// //                               {activity.action}
// //                             </p>
// //                             <p className="text-sm text-gray-600">
// //                               {activity.course} • {activity.time}
// //                             </p>
// //                           </div>
// //                         </div>
// //                         <span
// //                           className={`px-3 py-1 rounded-full text-xs font-semibold ${
// //                             activity.status === "completed"
// //                               ? "bg-green-100 text-green-800"
// //                               : activity.status === "graded"
// //                               ? "bg-blue-100 text-blue-800"
// //                               : "bg-purple-100 text-purple-800"
// //                           }`}
// //                         >
// //                           {activity.status}
// //                         </span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Academic Tab */}
// //             {activeTab === "academic" && (
// //               <div className="space-y-6">
// //                 <h3 className="text-2xl font-bold text-gray-800 mb-6">
// //                   Current Courses
// //                 </h3>
// //                 <div className="grid gap-6">
// //                   {courses.map((course, index) => (
// //                     <div
// //                       key={index}
// //                       className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
// //                     >
// //                       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
// //                         <div className="flex-1">
// //                           <div className="flex items-center gap-4 mb-3">
// //                             <div className="w-12 h-12 bg-gradient-to-br from-[#126F77] to-[#0F5A61] rounded-xl flex items-center justify-center">
// //                               <Book className="w-6 h-6 text-white" />
// //                             </div>
// //                             <div>
// //                               <h4 className="text-xl font-bold text-gray-800">
// //                                 {course.name}
// //                               </h4>
// //                               <p className="text-sm text-[#126F77] font-arabic">
// //                                 {course.arabicName}
// //                               </p>
// //                               <p className="text-sm text-gray-600 mt-1">
// //                                 Instructor: {course.instructor}
// //                               </p>
// //                             </div>
// //                           </div>

// //                           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// //                             <div>
// //                               <span className="text-gray-600">Course ID:</span>
// //                               <p className="font-semibold">{course.id}</p>
// //                             </div>
// //                             <div>
// //                               <span className="text-gray-600">Credits:</span>
// //                               <p className="font-semibold">{course.credits}</p>
// //                             </div>
// //                             <div>
// //                               <span className="text-gray-600">Schedule:</span>
// //                               <p className="font-semibold">{course.schedule}</p>
// //                             </div>
// //                             <div>
// //                               <span className="text-gray-600">Room:</span>
// //                               <p className="font-semibold">{course.room}</p>
// //                             </div>
// //                           </div>

// //                           <div className="mt-4">
// //                             <div className="flex items-center justify-between mb-2">
// //                               <span className="text-sm text-gray-600">
// //                                 Progress
// //                               </span>
// //                               <span className="text-sm font-semibold text-gray-800">
// //                                 {course.progress}%
// //                               </span>
// //                             </div>
// //                             <div className="w-full bg-gray-200 rounded-full h-3">
// //                               <div
// //                                 className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] h-3 rounded-full transition-all duration-1000"
// //                                 style={{ width: `${course.progress}%` }}
// //                               ></div>
// //                             </div>
// //                           </div>
// //                         </div>

// //                         <div className="flex flex-col items-center gap-3">
// //                           <div className="text-center">
// //                             <div className="text-3xl font-bold text-[#126F77]">
// //                               {course.grade}
// //                             </div>
// //                             <div className="text-sm text-gray-600">Grade</div>
// //                           </div>
// //                           <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
// //                             {course.status}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             {/* Add other tabs (Islamic, Attendance, Performance, Achievements) following similar structure */}
// //             {/* Islamic Progress Tab */}
// //             {activeTab === "islamic" && (
// //               <div className="space-y-6">
// //                 <h3 className="text-2xl font-bold text-gray-800 mb-6">
// //                   Islamic Development
// //                 </h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   {/* Quran Progress */}
// //                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
// //                     <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                       <BookOpen className="w-5 h-5 text-[#126F77]" />
// //                       Quran Memorization Progress
// //                     </h4>
// //                     <div className="space-y-4">
// //                       <div className="text-center">
// //                         <div className="text-4xl font-bold text-[#126F77]">
// //                           {student.islamicProgress.quranMemorization}
// //                         </div>
// //                         <p className="text-gray-600">Memorized</p>
// //                       </div>
// //                       <div className="bg-white rounded-xl p-4">
// //                         <div className="flex justify-between text-sm mb-2">
// //                           <span>Progress to Completion</span>
// //                           <span>25%</span>
// //                         </div>
// //                         <div className="w-full bg-gray-200 rounded-full h-2">
// //                           <div
// //                             className="bg-green-500 h-2 rounded-full"
// //                             style={{ width: "25%" }}
// //                           ></div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Islamic Skills */}
// //                   <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
// //                     <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                       <Star className="w-5 h-5 text-[#126F77]" />
// //                       Islamic Skills Assessment
// //                     </h4>
// //                     <div className="space-y-3">
// //                       {[
// //                         {
// //                           skill: "Tajweed",
// //                           level: student.islamicProgress.tajweedLevel,
// //                           progress: 85,
// //                         },
// //                         {
// //                           skill: "Arabic Language",
// //                           level: student.islamicProgress.arabicProficiency,
// //                           progress: 70,
// //                         },
// //                         {
// //                           skill: "Fiqh Knowledge",
// //                           level: "Intermediate",
// //                           progress: 65,
// //                         },
// //                         {
// //                           skill: "Hadith Memorization",
// //                           level: "Advanced",
// //                           progress: 80,
// //                         },
// //                       ].map((item, index) => (
// //                         <div key={index}>
// //                           <div className="flex justify-between text-sm mb-1">
// //                             <span className="text-gray-700">{item.skill}</span>
// //                             <span className="font-semibold">{item.level}</span>
// //                           </div>
// //                           <div className="w-full bg-gray-200 rounded-full h-2">
// //                             <div
// //                               className="bg-blue-500 h-2 rounded-full transition-all duration-500"
// //                               style={{ width: `${item.progress}%` }}
// //                             ></div>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Achievements Tab */}
// //             {activeTab === "achievements" && (
// //               <div className="space-y-6">
// //                 <h3 className="text-2xl font-bold text-gray-800 mb-6">
// //                   Awards & Certificates
// //                 </h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   {achievements.map((achievement, index) => (
// //                     <div
// //                       key={index}
// //                       className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
// //                     >
// //                       <div className="flex items-start gap-4">
// //                         <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
// //                           {achievement.type === "certificate" ? (
// //                             <FileText className="w-8 h-8 text-white" />
// //                           ) : (
// //                             <Award className="w-8 h-8 text-white" />
// //                           )}
// //                         </div>
// //                         <div className="flex-1">
// //                           <h4 className="text-lg font-bold text-gray-800">
// //                             {achievement.title}
// //                           </h4>
// //                           <p className="text-sm text-[#126F77] font-arabic mt-1">
// //                             {achievement.arabicTitle}
// //                           </p>
// //                           <p className="text-sm text-gray-600 mt-2">
// //                             {achievement.description}
// //                           </p>
// //                           <div className="flex items-center justify-between mt-3">
// //                             <span className="text-sm text-gray-500">
// //                               {achievement.date}
// //                             </span>
// //                             <span className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-xs font-semibold">
// //                               {achievement.type}
// //                             </span>
// //                           </div>
// //                           <div className="mt-2">
// //                             <span className="text-xs text-gray-500">
// //                               Issued by: {achievement.issuedBy}
// //                             </span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Users,
//   UserCheck,
//   BookOpen,
//   Calendar,
//   FileText,
//   Shield,
//   TrendingUp,
//   BarChart3,
//   MessageCircle,
//   Download,
//   Camera,
//   Phone,
//   Mail,
//   MapPin,
//   CheckCircle,
//   ArrowLeft,
//   Star,
//   Award,
//   Clock,
//   Target,
//   Heart,
//   School,
//   GraduationCap,
// } from "lucide-react";

// export default function StudentManagementDetails() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("overview");

//   const features = [
//     {
//       icon: Users,
//       title: "Complete Student Profiles",
//       description:
//         "Comprehensive digital profiles with photos, personal information, and academic details",
//       benefits: [
//         "Quick access to student information",
//         "Photo identification",
//         "Complete personal records",
//       ],
//     },
//     {
//       icon: BookOpen,
//       title: "Enrollment Tracking",
//       description:
//         "Streamlined admission process from application to enrollment with real-time status updates",
//       benefits: [
//         "Digital application forms",
//         "Automated enrollment workflow",
//         "Real-time status tracking",
//       ],
//     },
//     {
//       icon: BarChart3,
//       title: "Academic History",
//       description:
//         "Complete academic journey tracking including courses, grades, and performance analytics",
//       benefits: [
//         "Lifetime academic records",
//         "Performance trends",
//         "Progress monitoring",
//       ],
//     },
//     {
//       icon: UserCheck,
//       title: "Parent & Guardian Management",
//       description:
//         "Maintain complete parent/guardian information with communication preferences and access levels",
//       benefits: [
//         "Multiple guardian support",
//         "Communication preferences",
//         "Access control management",
//       ],
//     },
//     {
//       icon: Calendar,
//       title: "Attendance Management",
//       description:
//         "Digital attendance tracking with automated reports and parent notifications",
//       benefits: [
//         "Quick mark attendance",
//         "Automated absence alerts",
//         "Attendance analytics",
//       ],
//     },
//     {
//       icon: FileText,
//       title: "Document Management",
//       description:
//         "Secure storage and management of student documents, certificates, and academic records",
//       benefits: [
//         "Digital document storage",
//         "Easy retrieval system",
//         "Secure access control",
//       ],
//     },
//   ];

//   const benefits = [
//     {
//       icon: TrendingUp,
//       title: "90% Time Saved",
//       description: "Reduce administrative work with automated processes",
//     },
//     {
//       icon: Shield,
//       title: "100% Data Security",
//       description: "Bank-level security for all student information",
//     },
//     {
//       icon: Star,
//       title: "Improved Efficiency",
//       description: "Streamlined operations for better institute management",
//     },
//     {
//       icon: Heart,
//       title: "Enhanced Experience",
//       description: "Better experience for students, parents, and staff",
//     },
//   ];

//   const tabs = [
//     { id: "overview", label: "Overview", icon: Users },
//     { id: "features", label: "Features", icon: CheckCircle },
//     { id: "benefits", label: "Benefits", icon: Star },
//     { id: "integration", label: "Integration", icon: Target },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white shadow-2xl">
//         <div className="max-w-7xl mx-auto px-6 py-8">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <button
//                 className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 cursor-pointer hover:scale-110"
//                 onClick={() => navigate("/features")}
//               >
//                 <ArrowLeft className="w-6 h-6" />
//               </button>
//               <div>
//                 <h1 className="text-4xl font-bold">Student Management</h1>
//                 <p className="text-blue-100 mt-2 text-lg">
//                   Complete student lifecycle management from admission to
//                   graduation
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <button className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 hover:scale-105">
//                 <Download className="w-5 h-5" />
//                 Brochure
//               </button>
//               <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#126F77] hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg">
//                 <Phone className="w-5 h-5" />
//                 Get Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Main Content */}
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-8">
//           {/* Tabs Navigation */}
//           <div className="border-b border-gray-200 bg-gray-50">
//             <div className="flex overflow-x-auto">
//               {tabs.map((tab) => {
//                 const Icon = tab.icon;
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`flex items-center gap-3 px-8 py-5 font-semibold transition-all duration-300 whitespace-nowrap ${
//                       activeTab === tab.id
//                         ? "text-[#126F77] border-b-2 border-[#126F77] bg-white shadow-sm"
//                         : "text-gray-600 hover:text-[#126F77] hover:bg-gray-100"
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     {tab.label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="p-8">
//             {/* Overview Tab */}
//             {activeTab === "overview" && (
//               <div className="space-y-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   <div>
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6">
//                       Transform Your Student Management
//                     </h2>
//                     <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                       DeenNest's Student Management module provides Islamic
//                       educational institutions with a comprehensive platform to
//                       manage every aspect of student lifecycle - from admission
//                       and enrollment to academic tracking and graduation.
//                     </p>

//                     <div className="space-y-4">
//                       <div className="flex items-center gap-3">
//                         <CheckCircle className="w-6 h-6 text-green-500" />
//                         <span className="text-gray-700">
//                           Centralized student database
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <CheckCircle className="w-6 h-6 text-green-500" />
//                         <span className="text-gray-700">
//                           Automated enrollment process
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <CheckCircle className="w-6 h-6 text-green-500" />
//                         <span className="text-gray-700">
//                           Real-time academic tracking
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <CheckCircle className="w-6 h-6 text-green-500" />
//                         <span className="text-gray-700">
//                           Parent communication portal
//                         </span>
//                       </div>
//                     </div>

//                     <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
//                       <h3 className="text-xl font-bold text-gray-800 mb-3">
//                         Perfect For
//                       </h3>
//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div className="flex items-center gap-2">
//                           <School className="w-4 h-4 text-[#126F77]" />
//                           <span>Madrasas</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <GraduationCap className="w-4 h-4 text-[#126F77]" />
//                           <span>Islamic Schools</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <BookOpen className="w-4 h-4 text-[#126F77]" />
//                           <span>Quran Academies</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Users className="w-4 h-4 text-[#126F77]" />
//                           <span>Islamic Colleges</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//                       Key Statistics
//                     </h3>
//                     <div className="space-y-6">
//                       {[
//                         {
//                           value: "90%",
//                           label: "Reduction in Administrative Work",
//                         },
//                         {
//                           value: "500+",
//                           label: "Institutions Using This Feature",
//                         },
//                         { value: "24/7", label: "Access to Student Records" },
//                         { value: "100%", label: "Data Security & Privacy" },
//                       ].map((stat, index) => (
//                         <div key={index} className="text-center">
//                           <div className="text-3xl font-bold text-[#126F77]">
//                             {stat.value}
//                           </div>
//                           <div className="text-gray-600 text-sm mt-1">
//                             {stat.label}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Features Tab */}
//             {activeTab === "features" && (
//               <div className="space-y-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-8">
//                   Comprehensive Student Management Features
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
//                     >
//                       <div className="w-14 h-14 bg-gradient-to-r from-[#126F77] to-[#0F5A61] rounded-2xl flex items-center justify-center mb-4">
//                         <feature.icon className="w-7 h-7 text-white" />
//                       </div>

//                       <h3 className="text-xl font-bold text-gray-800 mb-3">
//                         {feature.title}
//                       </h3>

//                       <p className="text-gray-600 mb-4 leading-relaxed">
//                         {feature.description}
//                       </p>

//                       <ul className="space-y-2">
//                         {feature.benefits.map((benefit, benefitIndex) => (
//                           <li
//                             key={benefitIndex}
//                             className="flex items-center gap-2 text-sm text-gray-700"
//                           >
//                             <CheckCircle className="w-4 h-4 text-green-500" />
//                             {benefit}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Benefits Tab */}
//             {activeTab === "benefits" && (
//               <div className="space-y-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-8">
//                   Benefits for Your Institution
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {benefits.map((benefit, index) => (
//                     <div
//                       key={index}
//                       className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
//                     >
//                       <div className="flex items-center gap-4 mb-4">
//                         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
//                           <benefit.icon className="w-8 h-8 text-[#126F77]" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800">
//                           {benefit.title}
//                         </h3>
//                       </div>
//                       <p className="text-gray-600 leading-relaxed">
//                         {benefit.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Success Metrics */}
//                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//                     Real Results from Islamic Institutions
//                   </h3>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                     {[
//                       { value: "75%", label: "Faster Enrollment" },
//                       { value: "95%", label: "Parent Satisfaction" },
//                       { value: "60%", label: "Time Saved" },
//                       { value: "100%", label: "Data Accuracy" },
//                     ].map((metric, index) => (
//                       <div key={index} className="text-center">
//                         <div className="text-3xl font-bold text-[#126F77]">
//                           {metric.value}
//                         </div>
//                         <div className="text-gray-600 text-sm mt-1">
//                           {metric.label}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Integration Tab */}
//             {activeTab === "integration" && (
//               <div className="space-y-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-8">
//                   Seamless Integration with Other Modules
//                 </h2>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   <div>
//                     <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                       Student Management works seamlessly with all other
//                       DeenNest modules to provide a unified platform for your
//                       Islamic educational institution.
//                     </p>

//                     <div className="space-y-4">
//                       {[
//                         {
//                           module: "Attendance Management",
//                           benefit: "Automatic attendance tracking",
//                         },
//                         {
//                           module: "Fee Management",
//                           benefit: "Integrated fee records",
//                         },
//                         {
//                           module: "Academic Management",
//                           benefit: "Seamless grade tracking",
//                         },
//                         {
//                           module: "Communication Portal",
//                           benefit: "Direct parent communication",
//                         },
//                         {
//                           module: "Reporting & Analytics",
//                           benefit: "Comprehensive student reports",
//                         },
//                       ].map((integration, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
//                         >
//                           <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
//                           <div>
//                             <div className="font-semibold text-gray-800">
//                               {integration.module}
//                             </div>
//                             <div className="text-sm text-gray-600">
//                               {integration.benefit}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
//                     <h3 className="text-xl font-bold text-gray-800 mb-6">
//                       Ready to Transform Your Student Management?
//                     </h3>
//                     <div className="space-y-4">
//                       <button className="w-full bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
//                         Start Free Trial
//                       </button>
//                       <button className="w-full border-2 border-[#126F77] text-[#126F77] py-4 rounded-xl font-semibold hover:bg-[#126F77] hover:text-white transition-all duration-300">
//                         Schedule Demo
//                       </button>
//                     </div>
//                     <div className="mt-6 text-center">
//                       <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
//                         <Clock className="w-4 h-4" />
//                         <span>Setup takes less than 15 minutes</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] rounded-3xl p-8 text-white text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Revolutionize Student Management?
//           </h2>
//           <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
//             Join 500+ Islamic institutions using DeenNest to streamline their
//             student management processes.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-[#126F77] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
//               Start Free Trial
//             </button>
//             <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#126F77] transition-colors">
//               Watch Demo Video
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import {
  Sparkles,
  TrendingUp,
  Star,
  CircleCheckBig,
  Users,
  BookOpen,
  UserCheck,
  Calendar,
} from "lucide-react";
import studentImg from "../../../assets/img/student.png";
import { useNavigate } from "react-router-dom";
export default function StudentDetails() {
  const navigate = useNavigate();
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
                Student <br />
                <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  Management
                </span>
                <br /> System
              </h1>

              <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Complete student lifecycle management from admission to
                graduation. Track academic progress, manage profiles, and
                maintain comprehensive records in one platform.
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
              <img
                src={studentImg}
                alt="Student Management"
                className="w-full rounded-2xl shadow-2xl"
              />
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
                  Complete Student Management Solution
                </span>
              </h2>
              <p className="text-xl text-[#6B6B6B] mb-6 leading-relaxed">
                DeenNest's Student Management system provides Islamic
                educational institutions with a comprehensive platform to manage
                every aspect of student lifecycle - from admission and
                enrollment to academic tracking and graduation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B]">
                    Student Profiles & Photos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B]">Enrollment Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B]">Academic History</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-[#126F77]" />
                  <span className="text-[#6B6B6B]">
                    Parent & Guardian Details
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-[#126F77] mb-4">
                Key Benefits:
              </h3>
              <ul className="grid grid-cols-1 gap-4 list-disc list-inside">
                <li className="text-lg text-[#6B6B6B]">
                  Centralized student database with complete profiles
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Automated enrollment and admission process
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Real-time academic progress tracking
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Parent and guardian communication portal
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Document management for certificates and records
                </li>
                <li className="text-lg text-[#6B6B6B]">
                  Attendance and performance analytics
                </li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#126F77] mb-3">
                  Perfect For Islamic Institutions
                </h3>
                <p className="text-[#6B6B6B]">
                  Whether you run a Madrasa, Islamic school, Quran academy, or
                  Islamic college, our Student Management system is designed to
                  meet your specific needs while maintaining Islamic values and
                  educational standards.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => navigate("/features")}
              className="bg-[#126F77] text-white px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer"
            >
              Back to Features
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
