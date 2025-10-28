// import React from "react";

// import { Link } from "react-router-dom";
// import Img from "../../assets/img/signup_Imge.png";
// export default function form() {
//   return (
//     <div className="flex flex-row gap-2 mx-auto px-4">
//       <div className="flex-2 ">
//         {/* Form Column */}
//         <div className="">
//           <div className="text-center mb-6">
//             <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A1F44]">
//               Register your account
//             </h1>
//           </div>
//           <form className="space-y-4 sm:space-y-5 md:space-y-6">
//             <div className="space-y-2">
//               <label className="text-sm md:text-base font-medium text-[#1A1A1A]">
//                 Your Email *
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="text-sm md:text-base font-medium text-[#1A1A1A]">
//                 Choose Password *
//               </label>
//               <input
//                 type="password"
//                 placeholder="Choose Password"
//                 className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="text-sm md:text-base font-medium text-[#1A1A1A]">
//                 Confirm Password *
//               </label>
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
//                 required
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="h-4 w-4 text-[#126F77]"
//                 required
//               />
//               <label
//                 htmlFor="terms"
//                 className="text-sm md:text-base text-[#1A1A1A]"
//               >
//                 Accept our Terms & Conditions
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full px-6 py-2 bg-[#126F77] text-white font-medium rounded-lg shadow-md hover:bg-[#0f5c63] transition-all hover:scale-105"
//             >
//               Sign up
//             </button>
//             <p className="text-center text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link to="/login" className="text-[#126F77] hover:underline">
//                 Login
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//       <div className="flex-3">
//         <div className="text-center lg:text-left">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
//             Start managing free now!
//           </h2>
//           <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
//             eSkooly is a 100% free online Institute management software for a
//             lifetime with no limitations.
//           </p>
//           <div className="flex justify-center lg:justify-start items-center space-x-4">
//             <img
//               src={Img} // Replace with your illustration image path
//               alt="Illustration"
//               className="w-full max-w-xs sm:max-w-sm md:max-w-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";
// import Img from "../../assets/img/signup_Imge.png";
// import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";

// export default function Form() {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4 relative">
//       <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
//         {/* Right Column - Content */}
//         <div className="w-full lg:w-1/2 max-w-md">
//           <div className="text-center lg:text-left">
//             <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
//               Start managing free now !
//             </h3>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               DeenNest is a 100% free online <strong>Institute</strong>{" "}
//               management software for a lifetime with no limitations.
//             </p>
//             <div className="flex justify-center lg:justify-start">
//               <img
//                 src={Img}
//                 alt="Signup Illustration"
//                 className="max-w-xs sm:max-w-sm md:max-w-md"
//               />
//             </div>
//           </div>
//         </div>
//         {/* Left Column - Form */}
//         <div className="w-full lg:w-1/2 max-w-md">
//           <div className="text-center mb-8">
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"></h1>

//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
//               Register your account
//             </h2>
//           </div>

//           <form
//             className="bg-white shadow-xl rounded-xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-12 2xl:p-12 space-y-4 sm:space-y-5
//                      md:space-y-6 lg:space-y-6 xl:space-y-6 2xl:space-y-6"
//           >
//             {/* First + Last Name */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm md:text-sm lg:text-base font-medium text-[#1A1A1A]">
//                   Madrasa Name *
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Madrasa name"
//                   className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm md:text-sm lg:text-base  font-medium text-[#1A1A1A]">
//                   Admin Name *
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Admin name"
//                   className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email + Phone */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm md:text-sm lg:text-base  font-medium text-[#1A1A1A]">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm md:text-sm lg:text-base font-medium text-[#1A1A1A]">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex items-end justify-end">
//               <button
//                 className="px-6 py-2 bg-[#126F77] text-white font-medium rounded-lg shadow-md hover:bg-[#0f5c63]
//                          transition-all hover:scale-105  origin-right"
//               >
//                 <Link to="/Address">Next</Link>
//               </button>
//             </div>
//           </form>

//           <div className="absolute top-2.5 right-5 flex items-center gap-2 ">
//             <p className="text-center text-sm text-gray-600">
//               have an account?
//               <Link
//                 to="/login"
//                 className="text-white bg-[#126f77] px-2 py-1 rounded-full items-center"
//               >
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// // }
// import React from "react";
// import { Link } from "react-router-dom";
// import Img from "../../assets/img/signup_Imge.png";
// import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";
// import {
//   UserLock,
//   Eye,
//   EyeOff,
//   Mail,
//   Phone,
//   User,
//   Building,
// } from "lucide-react";

// export default function SignupForm() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center p-4">
//       <div className="max-w-full w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center relative z-10">
//         {/* Left Column - Content */}
//         <div className="w-full ">
//           <div className="text-center lg:text-left">
//             {/* Logo */}

//             <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 leading-tight">
//               Start Managing Your Institute{" "}
//               <span className="text-[#126f77]">Free Now!</span>
//             </h3>
//             <p className="text-center ">
//               {" "}
//               DeenNest is a 100% free online management software for a lifetime
//               with no limitations.
//             </p>

//             {/* Illustration */}
//             <div className="flex justify-center lg:justify-start">
//               <img
//                 src={Img}
//                 alt="Institute Management Illustration"
//                 className="transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Form */}
//         <div className="w-full h-full ">
//           <div className="mb-8  lg:justify-start"></div>
//           <div className="">
//             {/* Header */}

//             <div className="text-center mb-8 flex flex-col items-center gap-5  justify-center">
//               <img
//                 src={Logo}
//                 alt="DeenNest Logo"
//                 className="h-12 sm:h-16 md:h-20"
//               />
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                 Register your account
//               </h2>
//             </div>

//             <form className="space-y-6">
//               {/* Name Fields */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     <Building className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                     Madrasa Name <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter Madrasa name"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     <User className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                     Admin Name<span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter Admin name"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Contact Fields */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     <Mail className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                     Email Address<span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="your@email.com"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     <Phone className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                     Phone Number<span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="+1 234 567 890"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Terms & Conditions */}
//               <div className="flex items-start space-x-3 pt-2">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   className="w-4 h-4 text-[#126f77] border-gray-300 rounded focus:ring-[#126f77] mt-1 accent-[#126f77]"
//                   required
//                 />
//                 <label htmlFor="terms" className="text-sm text-gray-600">
//                   I agree to the{" "}
//                   <Link
//                     to="/terms"
//                     className="text-[#126f77] hover:text-[#126f77]/80 font-medium underline"
//                   >
//                     Terms & Conditions
//                   </Link>{" "}
//                   and{" "}
//                   <Link
//                     to="/privacy"
//                     className="text-[#126f77] hover:text-[#126f77]/80 font-medium underline"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </label>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col  sm:flex-row gap-4 justify-end pt-4">
//                 <Link
//                   to="/login"
//                   className="flex items-center justify-center px-6 py-3.5 border border-gray-300 text-gray-700
//                   font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
//                 >
//                   Already have account?
//                 </Link>
//                 <button
//                   type="submit"
//                   className="bg-gradient-to-r from-[#126f77] to-cyan-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl
//                   transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
//                 >
//                   <span>Next</span>
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </form>

//             <div className="absolute -top-40 right-5 flex items-center gap-2 ">
//               <p className="text-center text-sm text-gray-600">
//                 have an account?
//                 <Link
//                   to="/login"
//                   className="text-white bg-[#126f77] px-2 py-1 rounded-full items-center"
//                 >
//                   Login
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add these styles for the animated background */}
//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/img/signup_Imge.png";
import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";
import {
  UserLock,
  Eye,
  EyeOff,
  Mail,
  Phone,
  User,
  Building,
  MapPin,
  Check,
  Shield,
  Users,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    madrasaName: "",
    adminName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Form submitted:", formData);
    }, 2000);
  };

  const features = [
    { icon: Users, text: "Student Management" },
    { icon: BookOpen, text: "Attendance Tracking" },
    { icon: Shield, text: "Secure Data" },
    { icon: Award, text: "Free Forever" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column - Premium Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo & Badge */}
          <div className="flex items-center gap-3 mb-8">
            <img src={Logo} alt="DeenNest Logo" className="h-14 w-auto" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl bg-gradient-to-r from-[#126F77]  to-[#126F77] bg-clip-text text-transparent lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-[#126f77] bg-clip-text text-transparent">
              Madrasa Management
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Join{" "}
            <span className="font-semibold text-cyan-700">
              5,000+ Islamic institutions
            </span>
            that trust DeenNest for seamless administration, student tracking,
            and academic excellence.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full max-w-2xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50"
              >
                {/* text-[#EB6319] [#126F77] */}

                <div className="w-12 h-12 bg-gradient-to-r from-[#126f77] to-[#EB6319] rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-700">5K+</div>
              <div className="text-gray-600">Madrasas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700">50K+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>

        {/* Right Column - Premium Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#126f77] to-[#EB6319] p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <h2 className="text-3xl font-bold text-white mb-2 relative z-10">
                  Start Your Journey
                </h2>
                <p className="text-cyan-100 relative z-10">
                  Create your account in 2 minutes
                </p>

                {/* Progress Steps */}
                <div className="flex justify-center mt-6 relative z-10">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        currentStep >= 1
                          ? "bg-white text-[#126f77] border-white"
                          : "bg-cyan-500 text-white border-[#126f77]"
                      } transition-all duration-300`}
                    >
                      1
                    </div>
                    <div
                      className={`w-16 h-1 mx-2 ${
                        currentStep >= 2 ? "bg-[#126f77]/70" : "bg-[#126f77]"
                      } transition-all duration-300`}
                    ></div>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        currentStep >= 2
                          ? "bg-[#126f77] text-white border-[#126f77]"
                          : "bg-[#126f77]/50 text-white border-[#126f77]"
                      } transition-all duration-300`}
                    >
                      2
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 gap-6">
                        {/* Madrasa Name */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 flex items-center">
                            <Building className="w-4 h-4 mr-2 text-[#126f77]" />
                            Madrasa Name
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="madrasaName"
                              value={formData.madrasaName}
                              onChange={handleChange}
                              placeholder="Enter Madrasa name"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]
                               transition-all duration-200 placeholder-gray-400"
                              required
                            />
                            <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          </div>
                        </div>

                        {/* Admin Name */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 flex items-center">
                            <User className="w-4 h-4 mr-2 text-[#126f77]" />
                            Admin Name
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="adminName"
                              value={formData.adminName}
                              onChange={handleChange}
                              placeholder="Enter Admin name"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                              required
                            />
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-[#126f77]" />
                            Email Address
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                              required
                            />
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-[#126f77]" />
                            Phone Number
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 234 567 890"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                              required
                            />
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Next Button */}
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="w-full bg-gradient-to-r from-[#126f77]/80 to-[#EB6319]/80 text-white font-bold py-4 px-6 rounded-xl shadow-lg
                         hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 group"
                      >
                        <span>Continue to Security</span>
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      </button>
                    </div>
                  )}

                  {/* Step 2: Security & Address */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 gap-6">
                        {/* Password */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 flex items-center">
                            <UserLock className="w-4 h-4 mr-2 text-[#126f77]" />
                            Password
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="Create secure password"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 pr-12 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                              required
                            />
                            <UserLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                              ) : (
                                <Eye className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 flex items-center">
                            <Shield className="w-4 h-4 mr-2 text-[#126f77]" />
                            Confirm Password{" "}
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              placeholder="Confirm your password"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 pr-12 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                              required
                            />
                            <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="w-5 h-5" />
                              ) : (
                                <Eye className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-[#126f77]" />
                            Institute Address
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="Enter your institute address"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                              required
                            />
                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start space-x-3 pt-4">
                          <input
                            type="checkbox"
                            id="terms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#126f77] text-[#126f77] border-gray-300 rounded focus:ring-[#126f77] mt-1"
                            required
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm text-gray-600"
                          >
                            I agree to the{" "}
                            <Link
                              to="/terms"
                              className="text-[#126f77] hover:text-cyan-700 font-medium underline"
                            >
                              Terms & Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                              to="/privacy"
                              className="text-[#126f77] hover:text-cyan-700 font-medium underline"
                            >
                              Privacy Policy
                            </Link>
                          </label>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 px-6 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 bg-gradient-to-r from-[#126f77]/80 to-[#EB6319]/90 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                              Creating Account...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-5 h-5" />
                              Create Account
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>

                {/* Login Link */}
                <div className="text-center mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-[#126f77] font-semibold hover:text-[#126f77]/80 hover:underline transition-all"
                    >
                      Sign In Here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
// import React from "react";
// import { Link } from "react-router-dom";
// import Img from "../../assets/img/signup_Imge.png";
// import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";

// export default function SignupForm() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-4">
//       <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
//         {/* Left Column - Content */}
//         <div className="w-full lg:w-1/2">
//           <div className="text-center lg:text-left">
//             <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
//               Start Managing Your Institute{" "}
//               <span className="text-[#126f77]">Free Now!</span>
//             </h3>
//             <p className="text-lg text-gray-700 mb-8 text-center lg:text-left">
//               DeenNest is a 100% free online management software for a lifetime
//               with no limitations.
//             </p>

//             {/* Illustration */}
//             <div className="flex justify-center lg:justify-start">
//               <img
//                 src={Img}
//                 alt="Institute Management Illustration"
//                 className="max-w-xs sm:max-w-sm md:max-w-md transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Form */}
//         <div className="w-full lg:w-1/2">
//           <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 transform hover:shadow-2xl transition-all duration-300">
//             {/* Header */}
//             <div className="text-center mb-8 flex flex-col items-center gap-5">
//               <img
//                 src={Logo}
//                 alt="DeenNest Logo"
//                 className="h-12 sm:h-16 md:h-20"
//               />
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                 Register your account
//               </h2>
//             </div>

//             <form className="space-y-6">
//               {/* Name Fields */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     Madrasa Name <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter Madrasa name"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     Admin Name<span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter Admin name"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Contact Fields */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     Email Address<span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="your@email.com"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     Phone Number<span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="+1 234 567 890"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Terms & Conditions */}
//               <div className="flex items-start space-x-3 pt-2">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   className="w-4 h-4 text-[#126f77] border-gray-300 rounded focus:ring-[#126f77] mt-1 accent-[#126f77]"
//                   required
//                 />
//                 <label htmlFor="terms" className="text-sm text-gray-600">
//                   I agree to the{" "}
//                   <Link
//                     to="/terms"
//                     className="text-[#126f77] hover:text-[#126f77]/80 font-medium underline"
//                   >
//                     Terms & Conditions
//                   </Link>{" "}
//                   and{" "}
//                   <Link
//                     to="/privacy"
//                     className="text-[#126f77] hover:text-[#126f77]/80 font-medium underline"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </label>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <button
//                   type="submit"
//                   className="bg-gradient-to-r from-[#126f77] to-cyan-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
//                 >
//                   <span>Continue to Address</span>
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </button>

//                 <Link
//                   to="/login"
//                   className="flex items-center justify-center px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
//                 >
//                   Already have account?
//                 </Link>
//               </div>
//             </form>

//             {/* Login Prompt - Fixed position */}
//             <div className="text-center pt-6 border-t border-gray-200 mt-6">
//               <p className="text-gray-600">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="text-[#126f77] hover:text-[#126f77]/80 font-semibold underline"
//                 >
//                   Login here
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
