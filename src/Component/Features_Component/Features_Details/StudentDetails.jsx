// import React from "react";
// import { useNavigate } from "react-router-dom";
// export default function StudentDetails() {
//   // Sample student data
//   const student = {
//     name: "Ali Khan",
//     age: 14,
//     class: "8th Grade",
//     rollNumber: "23",
//     admissionDate: "2023-04-15",
//     parentName: "Mr. Ahmed Khan",
//     contact: "+91-9876543210",
//     address: "123, Green Street, Delhi",
//     attendance: "92%",
//     grades: {
//       Math: "A",
//       Science: "B+",
//       English: "A",
//       History: "B",
//     },
//   };
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-5xl mx-auto p-6 sm:p-8">
//       <h1 className="text-3xl font-bold text-[#126f77] mb-6">
//         Student Details
//       </h1>

//       {/* Basic Info */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <p>
//             <span className="font-semibold">Name:</span> {student.name}
//           </p>
//           <p>
//             <span className="font-semibold">Age:</span> {student.age}
//           </p>
//           <p>
//             <span className="font-semibold">Class:</span> {student.class}
//           </p>
//           <p>
//             <span className="font-semibold">Roll Number:</span>{" "}
//             {student.rollNumber}
//           </p>
//           <p>
//             <span className="font-semibold">Admission Date:</span>{" "}
//             {student.admissionDate}
//           </p>
//         </div>
//       </div>

//       {/* Parent Info */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">
//           Parent / Guardian Details
//         </h2>
//         <p>
//           <span className="font-semibold">Name:</span> {student.parentName}
//         </p>
//         <p>
//           <span className="font-semibold">Contact:</span> {student.contact}
//         </p>
//         <p>
//           <span className="font-semibold">Address:</span> {student.address}
//         </p>
//       </div>

//       {/* Attendance */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Attendance</h2>
//         <p>{student.attendance}</p>
//       </div>

//       {/* Grades */}
//       <div className="bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-semibold mb-4">Grades</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {Object.entries(student.grades).map(([subject, grade], index) => (
//             <div
//               key={index}
//               className="bg-[#f0fdf4] p-4 rounded-xl text-center shadow-sm"
//             >
//               <p className="font-semibold">{subject}</p>
//               <p className="text-lg text-[#126f77] font-bold">{grade}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-8 text-center">
//         <button
//           onClick={() => navigate("/features")}
//           className="bg-[#126F77] text-white px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-lg
//            hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer"
//         >
//           Back to Features
//         </button>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function ProfessionalDetails() {
//   // Sample professional data (e.g., admin or staff profile)
//   const professional = {
//     fullName: "Imran Ahmed",
//     role: "Institute Administrator",
//     employeeId: "ADM-101",
//     email: "imran.ahmed@deennest.com",
//     phone: "+91-9876543214",
//     department: "Administration",
//     joinDate: "2019-06-10",
//     status: "Active",
//     responsibilities: [
//       "Oversee institute operations",
//       "Manage staff and student records",
//       "Handle financial reporting",
//     ],
//     recentActivity: [
//       { action: "Updated student attendance", date: "2025-10-24" },
//       { action: "Approved payroll for October", date: "2025-10-23" },
//     ],
//     accessLevel: "Full Admin",
//   };
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-6xl mx-auto p-6 sm:p-8 bg-gray-50 min-h-screen">
//       <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#126f77]">
//         {/* Header Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//           <div>
//             <h1 className="text-4xl font-bold text-[#126f77] mb-2">
//               Professional Profile
//             </h1>
//             <p className="text-gray-600 text-lg">
//               {professional.role} - {professional.employeeId}
//             </p>
//           </div>
//           <div className="mt-4 sm:mt-0">
//             <span
//               className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
//                 professional.status === "Active"
//                   ? "bg-green-100 text-green-800"
//                   : "bg-red-100 text-red-800"
//               }`}
//             >
//               {professional.status}
//             </span>
//           </div>
//         </div>

//         {/* Profile Summary */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-gray-100 p-6 rounded-xl">
//             <h2 className="text-xl font-semibold text-[#126f77] mb-4">
//               Contact Information
//             </h2>
//             <div className="space-y-2">
//               <p>
//                 <span className="font-medium text-gray-700">Email:</span>{" "}
//                 <a
//                   href={`mailto:${professional.email}`}
//                   className="text-blue-600 hover:underline"
//                 >
//                   {professional.email}
//                 </a>
//               </p>
//               <p>
//                 <span className="font-medium text-gray-700">Phone:</span>{" "}
//                 <a
//                   href={`tel:${professional.phone}`}
//                   className="text-blue-600 hover:underline"
//                 >
//                   {professional.phone}
//                 </a>
//               </p>
//               <p>
//                 <span className="font-medium text-gray-700">Department:</span>{" "}
//                 {professional.department}
//               </p>
//               <p>
//                 <span className="font-medium text-gray-700">Join Date:</span>{" "}
//                 {professional.joinDate}
//               </p>
//             </div>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-xl">
//             <h2 className="text-xl font-semibold text-[#126f77] mb-4">
//               Responsibilities
//             </h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//               {professional.responsibilities.map((resp, index) => (
//                 <li key={index}>{resp}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-gray-100 p-6 rounded-xl mb-8">
//           <h2 className="text-xl font-semibold text-[#126f77] mb-4">
//             Recent Activity
//           </h2>
//           <ul className="space-y-3">
//             {professional.recentActivity.map((activity, index) => (
//               <li key={index} className="flex justify-between text-gray-700">
//                 <span>{activity.action}</span>
//                 <span className="text-sm text-gray-500">{activity.date}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Actions Section */}
//         <div className="bg-gray-100 p-6 rounded-xl">
//           <h2 className="text-xl font-semibold text-[#126f77] mb-4">Actions</h2>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={() => alert("Edit profile initiated")}
//               className="bg-[#126F77] text-white px-6 py-2 rounded-lg hover:bg-[#0E575D] transition-colors duration-300"
//             >
//               Edit Profile
//             </button>
//             <button
//               onClick={() => alert("Access log viewed")}
//               className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
//             >
//               View Access Log
//             </button>
//           </div>
//         </div>

//         {/* Navigation Back Button */}
//         <div className="mt-8 text-center">
//           <button
//             onClick={() => navigate("/features")}
//             className="bg-[#126F77] text-white px-6 py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer"
//           >
//             Back to Features
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Book,
  Award,
  GraduationCap,
  Clock,
  TrendingUp,
  FileText,
  Download,
  Edit,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Users,
  BarChart3,
  Target,
  Star,
} from "lucide-react";

export default function StudentDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  // Sample student data
  const student = {
    id: "STU-2025-001",
    name: "Aisha Rahman",
    email: "aisha.rahman@deennest.edu",
    phone: "+91-9876543210",
    address: "Mumbai, Maharashtra, India",
    enrollmentDate: "2024-01-15",
    program: "Islamic Studies - Advanced",
    batch: "Batch 2024-A",
    status: "Active",
    profileImage: "👩‍🎓",
    guardian: {
      name: "Mohammed Rahman",
      relationship: "Father",
      phone: "+91-9876543211",
    },
  };

  const academicInfo = {
    currentSemester: "Semester 3",
    gpa: "3.8",
    attendance: "92%",
    completedCourses: 12,
    ongoingCourses: 5,
    creditsEarned: 48,
  };

  const courses = [
    {
      name: "Tafsir Studies",
      instructor: "Dr. Ahmed Khan",
      progress: 85,
      grade: "A",
      status: "ongoing",
    },
    {
      name: "Hadith Sciences",
      instructor: "Prof. Fatima Ali",
      progress: 92,
      grade: "A+",
      status: "ongoing",
    },
    {
      name: "Arabic Grammar",
      instructor: "Sheikh Yusuf",
      progress: 78,
      grade: "B+",
      status: "ongoing",
    },
    {
      name: "Islamic History",
      instructor: "Dr. Sarah Ibrahim",
      progress: 95,
      grade: "A+",
      status: "ongoing",
    },
    {
      name: "Fiqh Fundamentals",
      instructor: "Mufti Abdullah",
      progress: 88,
      grade: "A",
      status: "ongoing",
    },
  ];

  const achievements = [
    {
      title: "Quran Memorization Certificate",
      date: "2024-06-15",
      type: "certificate",
    },
    { title: "Best Student Award", date: "2024-08-20", type: "award" },
    {
      title: "Arabic Speaking Competition - 1st Place",
      date: "2024-09-10",
      type: "award",
    },
    {
      title: "Hadith Studies Excellence",
      date: "2024-10-05",
      type: "certificate",
    },
  ];

  const attendanceData = [
    { month: "June", percentage: 95 },
    { month: "July", percentage: 90 },
    { month: "August", percentage: 88 },
    { month: "September", percentage: 94 },
    { month: "October", percentage: 92 },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "courses", label: "Courses", icon: Book },
    { id: "performance", label: "Performance", icon: BarChart3 },
    { id: "achievements", label: "Achievements", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                onClick={() => navigate("/features")}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-3xl font-bold">Student Details</h1>
                <p className="text-emerald-100 mt-1">
                  DeenNest Islamic Academy
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-semibold">
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Student Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-6xl shadow-lg">
                {student.profileImage}
              </div>
              <span
                className={`mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
                  student.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <CheckCircle className="w-4 h-4 inline mr-1" />
                {student.status}
              </span>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {student.name}
                </h2>
                <p className="text-gray-600 mb-4">{student.id}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm">{student.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm">{student.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm">{student.address}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      Academic Info
                    </span>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    {student.program}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{student.batch}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      Guardian
                    </span>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    {student.guardian.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {student.guardian.relationship} • {student.guardian.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {academicInfo.gpa}
            </p>
            <p className="text-xs text-gray-600 mt-1">GPA</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {academicInfo.attendance}
            </p>
            <p className="text-xs text-gray-600 mt-1">Attendance</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <Book className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {academicInfo.ongoingCourses}
            </p>
            <p className="text-xs text-gray-600 mt-1">Ongoing</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8 text-teal-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {academicInfo.completedCourses}
            </p>
            <p className="text-xs text-gray-600 mt-1">Completed</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-amber-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {achievements.length}
            </p>
            <p className="text-xs text-gray-600 mt-1">Achievements</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {academicInfo.creditsEarned}
            </p>
            <p className="text-xs text-gray-600 mt-1">Credits</p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-emerald-600 border-b-2 border-emerald-600 bg-white"
                        : "text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      Enrollment Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Enrollment Date</span>
                        <span className="font-semibold text-gray-800">
                          {student.enrollmentDate}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Semester</span>
                        <span className="font-semibold text-gray-800">
                          {academicInfo.currentSemester}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Credits</span>
                        <span className="font-semibold text-gray-800">
                          {academicInfo.creditsEarned}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Recent Activity
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm text-gray-800 font-medium">
                            Assignment Submitted
                          </p>
                          <p className="text-xs text-gray-600">
                            Tafsir Studies - 2 days ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm text-gray-800 font-medium">
                            Quiz Completed
                          </p>
                          <p className="text-xs text-gray-600">
                            Hadith Sciences - 5 days ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm text-gray-800 font-medium">
                            Certificate Earned
                          </p>
                          <p className="text-xs text-gray-600">
                            Arabic Grammar - 1 week ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === "courses" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Ongoing Courses
                </h3>
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800">
                          {course.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Instructor: {course.instructor}
                        </p>
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">
                              Progress
                            </span>
                            <span className="text-xs font-semibold text-gray-800">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">
                            {course.grade}
                          </div>
                          <div className="text-xs text-gray-600">Grade</div>
                        </div>
                        <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                          {course.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Performance Tab */}
            {activeTab === "performance" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Attendance Trend
                  </h3>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                    <div className="space-y-4">
                      {attendanceData.map((data, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-gray-700">
                              {data.month}
                            </span>
                            <span className="text-sm font-bold text-gray-800">
                              {data.percentage}%
                            </span>
                          </div>
                          <div className="w-full bg-white rounded-full h-3 shadow-inner">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all"
                              style={{ width: `${data.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 text-center">
                    <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-gray-800">A+</p>
                    <p className="text-sm text-gray-600 mt-2">Average Grade</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 text-center">
                    <Clock className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-gray-800">98%</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Assignment Rate
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 text-center">
                    <Target className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-gray-800">Top 5%</p>
                    <p className="text-sm text-gray-600 mt-2">Class Ranking</p>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === "achievements" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Awards & Certificates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          {achievement.type === "certificate" ? (
                            <FileText className="w-6 h-6 text-white" />
                          ) : (
                            <Award className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {achievement.date}
                          </p>
                          <span className="inline-block mt-2 px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-xs font-semibold">
                            {achievement.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
