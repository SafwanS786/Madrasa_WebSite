import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserLock,
  Eye,
  EyeOff,
  Mail,
  Phone,
  User,
  Building,
  Sparkles,
  Users,
  BookOpen,
  Shield,
  Award,
} from "lucide-react";
import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";
import Login_img from "../../assets/img/login_img.png";

export default function Login() {
  const [formData, setFormData] = useState({
    madrasaName: "",
    adminName: "",
    email: "",
    phone: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.madrasaName.trim()) {
      newErrors.madrasaName = "Madrasa name is required";
    }
    if (!formData.adminName.trim()) {
      newErrors.adminName = "Admin name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setSuccessMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login successful", formData);
      setSuccessMessage("Login successful! Redirecting to dashboard...");
    } catch (error) {
      console.error("Login failed", error);
      setErrors({ submit: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 flex items-center justify-center p-4 md:p-0 relative overflow-hidden">
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
          <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-8">
            <img src={Logo} alt="DeenNest Logo" className="h-14 w-auto" />
          </div>

          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl md:text-4xl bg-gradient-to-r from-[#126F77] to-[#126F77] bg-clip-text text-transparent lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-6 leading-tight">
            Welcome Back to{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-[#126f77] bg-clip-text text-transparent">
              DeenNest
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-5 md:mb-12 max-w-2xl leading-relaxed">
            Login to manage students, staff, attendance, fees, and all your
            madrasa operations from one powerful dashboard.
          </p>

          <div className="w-full max-w-sm lg:max-w-md">
            <img
              src={Login_img}
              alt="Login Illustration"
              className="w-full h-auto max-h-[35vh] object-contain transform hover:scale-105 transition-transform duration-500"
            />
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

        {/* Right Column - Premium Login Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="bg-white/90 backdrop-blur-xl rounded-lg sm:rounded-2xl md:rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#126f77] to-[#EB6319] p-2  md:p-3 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">
                  Login to Your Account
                </h2>
                <p className="text-sm sm:text-base md:text-xl text-cyan-100 relative z-10">
                  Enter your credentials to continue
                </p>
              </div>

              {/* Form Content */}
              <div className="p-3 sm:p-5 md:p-6">
                {successMessage && (
                  <p className="text-green-600 text-sm text-center mb-4 animate-fadeIn">
                    {successMessage}
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                        placeholder="Enter Madrasa name"
                        value={formData.madrasaName}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border p-1 md:p-0 border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 md:px-12 pl-8 sm:pl-10 md:pl-12 pr-4 py-2 md:py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 [&::placeholder]:text-xs sm:[&::placeholder]:text-sm ${
                          errors.madrasaName ? "border-red-500" : ""
                        }`}
                        required
                      />
                      <Building className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    {errors.madrasaName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.madrasaName}
                      </p>
                    )}
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
                        placeholder="Enter Admin name"
                        value={formData.adminName}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4 pl-8 sm:pl-10 md:pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 [&::placeholder]:text-xs sm:[&::placeholder]:text-sm ${
                          errors.adminName ? "border-red-500" : ""
                        }`}
                        required
                      />
                      <User className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    {errors.adminName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.adminName}
                      </p>
                    )}
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
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4 pl-8 sm:pl-10 md:pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 [&::placeholder]:text-xs sm:[&::placeholder]:text-sm ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        required
                      />
                      <Mail className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
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
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4 pl-8 sm:pl-10 md:pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 [&::placeholder]:text-xs sm:[&::placeholder]:text-sm ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        required
                      />
                      <Phone className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

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
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl px-4 py-2 md:px-12 md:py-4 pl-8 sm:pl-10 md:pl-12 pr-12 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 [&::placeholder]:text-xs sm:[&::placeholder]:text-sm ${
                          errors.password ? "border-red-500" : ""
                        }`}
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
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#126f77] text-[#126f77] border-gray-300 rounded focus:ring-[#126f77]"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="text-xs sm:text-sm text-gray-600"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-[#126f77] hover:text-cyan-700 font-medium underline text-xs sm:text-sm"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#126f77]/80 to-[#EB6319]/80 text-white font-bold py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                        Login
                      </>
                    )}
                  </button>

                  {errors.submit && (
                    <p className="text-red-500 text-xs text-center mt-2">
                      {errors.submit}
                    </p>
                  )}
                </form>

                {/* Signup Link */}
                <div className="text-center mt-4 sm:mt-6 md:mt-8 pt-2 sm:pt-4 md:pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    Don't have an account?{" "}
                    <Link
                      to="/sign_up"
                      className="text-[#126f77] font-semibold hover:text-[#126f77]/80 hover:underline transition-all"
                    >
                      Sign Up Here
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
