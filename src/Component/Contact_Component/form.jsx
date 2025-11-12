import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/img/signup_Imge.png";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column - Premium Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo & Badge */}
          <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-8 cursor-pointer">
            <img
              src={Logo}
              alt="DeenNest Logo"
              className="h-20 w-auto"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl md:text-4xl bg-gradient-to-r from-[#126F77]  to-[#126F77] bg-clip-text text-transparent lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-6 leading-tight">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-[#126f77] bg-clip-text text-transparent">
              Madrasa Management
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-5 md:mb-12 max-w-2xl leading-relaxed">
            Join{" "}
            <span className="font-semibold text-cyan-700">
              5,000+ Islamic institutions{" "}
            </span>
            that trust DeenNest for seamless administration, student tracking,
            and academic excellence.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 sm:gap-4 md:gap-6 md:mb-12 w-full max-w-2xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-2 sm:p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50"
              >
                {/* text-[#EB6319] [#126F77] */}

                <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#126f77] to-[#EB6319] rounded-xl flex items-center justify-center">
                  <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-4 sm:gap-5 md:gap-8 text-center">
            <div>
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-cyan-700">
                5K+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                Madrasas
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-cyan-700">
                50K+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                Students
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-cyan-700">
                99.9%
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                Uptime
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Premium Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="bg-white/90 backdrop-blur-xl rounded-lg sm:rounded-2xl  md:rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#126f77] to-[#EB6319] p-2 sm:p-4 md:p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">
                  Start Your Journey
                </h2>
                <p className="text-sm sm:text-base md:text-xl text-cyan-100 relative z-10">
                  Create your account in 2 minutes
                </p>

                {/* Progress Steps */}
                <div className="flex justify-center mt-6 relative z-10">
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 text-xs sm:text-sm md:text-base  sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
                        currentStep >= 1
                          ? "bg-white text-[#126f77] border-white"
                          : "bg-cyan-500 text-white border-[#126f77]"
                      } transition-all duration-300`}
                    >
                      1
                    </div>
                    <div
                      className={`w-8 sm:w-12 md:w-16 h-1 mx-2 ${
                        currentStep >= 2 ? "bg-[#126f77]/70" : "bg-[#126f77]"
                      } transition-all duration-300`}
                    ></div>
                    <div
                      className={`w-5 h-5 text-xs sm:text-sm md:text-base sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
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
              <div className="p-3 sm:p-5 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 gap-3 sm:gap-5 md:gap-6">
                        {/* Madrasa Name */}
                        <div className="space-y-2">
                          <label className="text-xs md:text-sm font-semibold text-gray-700 flex items-center">
                            <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#126f77]" />
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
                              className="w-full bg-gray-50 border p-1 md:p-0 border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 md:px-12 
                              pl-8 sm:pl-10 md:pl-12 pr-4 py-2 
                              md:py-4 outline-none focus:ring-2
                               focus:ring-[#126f77] focus:border-[#126f77]
                               transition-all duration-200 placeholder-gray-400 [&::placeholder]:text-xs sm:[&::placeholder]:text-sm placeholder-flex flex-row gap-6"
                              required
                            />
                            <Building className="absolute left-2 ms:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          </div>
                        </div>

                        {/* Admin Name */}
                        <div className="space-y-2">
                          <label className="text-xs md:text-sm font-semibold text-gray-700 flex items-center">
                            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#126f77]" />
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
                              className="w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 md:px-12 py-2 md:py-4 outline-none
                               pl-8 sm:pl-10 md:pl-12 pr-4  
                              focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400
                              [&::placeholder]:text-xs sm:[&::placeholder]:text-sm"
                              required
                            />
                            <User className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label className="text-xs md:text-sm font-semibold text-gray-700 flex items-center">
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#126f77]" />
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
                              className="w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4
                               pl-8 sm:pl-10 md:pl-12 pr-4  
                               outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400
                               [&::placeholder]:text-xs sm:[&::placeholder]:text-sm"
                              required
                            />
                            <Mail className="absolute left-2  sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <label className="text-xs md:text-sm font-semibold text-gray-700 flex items-center">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#126f77]" />
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
                              className="w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4
                              pl-8 sm:pl-10 md:pl-12 pr-4  
                              outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400
                                [&::placeholder]:text-xs sm:[&::placeholder]:text-sm"
                              required
                            />
                            <Phone className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Next Button */}
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="w-full bg-gradient-to-r from-[#126f77]/80 to-[#EB6319]/80 text-white font-bold py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 rounded-xl shadow-lg
                         hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 group  cursor-pointer"
                      >
                        <span className="text-sm sm:text-base">Next</span>
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                      </button>
                    </div>
                  )}

                  {/* Step 2: Security & Address */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 gap-3 sm:gap-4 m-1 sm:m-2 md:m-5 md:gap-6">
                        {/* Password */}
                        <div className="space-y-2">
                          <label className="text-xs md:text-sm font-semibold text-gray-700 flex items-center">
                            <UserLock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#126f77]" />
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
                              className="w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4
                              pl-8 sm:pl-10 md:pl-12 pr-4  
                              outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400
                              [&::placeholder]:text-xs sm:[&::placeholder]:text-sm"
                              required
                            />
                            <UserLock className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {showPassword ? (
                                <EyeOff className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                              ) : (
                                <Eye className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                          <label className="text-xs md:text-sm font-semibold text-gray-700 flex items-center">
                            <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 text-[#126f77]" />
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
                              className="w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4
                              pl-8 sm:pl-10 md:pl-12 pr-4  outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400
                               [&::placeholder]:text-xs sm:[&::placeholder]:text-sm"
                              required
                            />
                            <Shield className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                              ) : (
                                <Eye className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                          <label className="text-xs md:text-sm font-semibold text-gray-700 flex items-center">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#126f77]" />
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
                              className="w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4
                              pl-8 sm:pl-10 md:pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400
                               [&::placeholder]:text-xs sm:[&::placeholder]:text-sm"
                              required
                            />
                            <MapPin className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
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
                            className="text-xs sm:text-sm text-gray-600"
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
                          className="flex-1 px-1 py-1 sm:px-3 sm:py-2 md:px-6 md:py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200  cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 gap-2 bg-gradient-to-r from-[#126f77]/80 to-[#EB6319]/90 px-1 py-1 sm:px-3 sm:py-2 rounded-lg md:px-6 md:py-4 text-white
                           font-semibold md:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-70 
                           disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                              Creating Account...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3 h-3 md:w-5 md:h-5 " />
                              Create Account
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>

                {/* Login Link */}
                <div className="text-center mt-4 sm:mt-6 md:mt-8 pt-2 sm:pt-4 md:pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
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
