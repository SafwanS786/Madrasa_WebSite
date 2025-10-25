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
// }
import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/img/signup_Imge.png";
import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";

export default function SignupForm() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="max-w-full w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center relative z-10">
        {/* Left Column - Content */}
        <div className="w-full ">
          <div className="text-center lg:text-left">
            {/* Logo */}

            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 leading-tight">
              Start Managing Your Institute{" "}
              <span className="text-[#126f77]">Free Now!</span>
            </h3>
            <p className="text-center ">
              {" "}
              DeenNest is a 100% free online management software for a lifetime
              with no limitations.
            </p>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={Img}
                alt="Institute Management Illustration"
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full h-full ">
          <div className="mb-8  lg:justify-start"></div>
          <div className="">
            {/* Header */}

            <div className="text-center mb-8 flex flex-col items-center gap-5  justify-center">
              <img
                src={Logo}
                alt="DeenNest Logo"
                className="h-12 sm:h-16 md:h-20"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Register your account
              </h2>
            </div>

            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    Madrasa Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Madrasa name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    Admin Name<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Admin name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    Email Address<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    Phone Number<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-[#126f77] border-gray-300 rounded focus:ring-[#126f77] mt-1 accent-[#126f77]"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-[#126f77] hover:text-[#126f77]/80 font-medium underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-[#126f77] hover:text-[#126f77]/80 font-medium underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#126f77] to-cyan-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl 
                  transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Continue to Address</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <Link
                  to="/login"
                  className="flex items-center justify-center px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  Already have account?
                </Link>
              </div>
            </form>

            <div className="absolute -top-40 right-5 flex items-center gap-2 ">
              <p className="text-center text-sm text-gray-600">
                have an account?
                <Link
                  to="/login"
                  className="text-white bg-[#126f77] px-2 py-1 rounded-full items-center"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles for the animated background */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
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
