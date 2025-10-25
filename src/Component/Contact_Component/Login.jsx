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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
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

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Handle successful login here
      console.log("Login successful", formData);
      // Redirect or show success message
    } catch (error) {
      console.error("Login failed", error);
      setErrors({ submit: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] to-[#E8F4F8] p-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Left Column - Illustration & Info */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start">
          <div className="mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Welcome Back to <span className="text-[#0F4C75]">DeenNest</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
              Login to manage students, staff, attendance, fees, and all your
              madrasa operations efficiently from one dashboard.
            </p>
          </div>

          <div className="w-full max-w-md lg:max-w-lg">
            <img
              src={Login_img}
              alt="Login Illustration"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-[#0F4C75] font-bold text-xl">500+</div>
              <div className="text-gray-600 text-sm">Madrasas</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-[#0F4C75] font-bold text-xl">10K+</div>
              <div className="text-gray-600 text-sm">Students</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-[#0F4C75] font-bold text-xl">99%</div>
              <div className="text-gray-600 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="">
            {/* bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 */}
            <div className="p-8 sm:p-10 md:p-12">
              <div className="text-center mb-8">
                <img
                  src={Logo}
                  alt="DeenNest Logo"
                  className="h-12 sm:h-16 md:h-20 mx-auto mb-4"
                />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Login to Your Account
                </h2>
                <p className="text-gray-600 mt-2">
                  Enter your credentials to access your dashboard
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Madrasa Name */}
                <div className="space-y-2">
                  <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
                    <Building className="w-4 h-4 mr-2 text-[#0F4C75]" />
                    Madrasa Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="madrasaName"
                    placeholder="Enter Madrasa Name"
                    value={formData.madrasaName}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 outline-none border transition-all ${
                      errors.madrasaName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
                    }`}
                    required
                  />
                  {errors.madrasaName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.madrasaName}
                    </p>
                  )}
                </div>

                {/* Admin Name */}
                <div className="space-y-2">
                  <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
                    <User className="w-4 h-4 mr-2 text-[#0F4C75]" />
                    Admin Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="adminName"
                    placeholder="Enter Admin Name"
                    value={formData.adminName}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 outline-none border transition-all ${
                      errors.adminName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
                    }`}
                    required
                  />
                  {errors.adminName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.adminName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-[#0F4C75]" />
                    Email <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 outline-none border transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-[#0F4C75]" />
                    Phone Number <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 outline-none border transition-all ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
                    <UserLock className="w-4 h-4 mr-2 text-[#0F4C75]" />
                    Password <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 pr-12 outline-none border transition-all ${
                        errors.password
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
                      }`}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#0F4C75] focus:ring-[#0F4C75] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#0F4C75] font-medium hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0F4C75] to-[#3282B8]
                   text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all
                    duration-200 disabled:opacity-70 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                      Logging in...
                    </>
                  ) : (
                    <>
                      <UserLock className="w-5 h-5" /> Login
                    </>
                  )}
                </button>

                {errors.submit && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    {errors.submit}
                  </p>
                )}

                {/* Signup Link */}
                <p className="text-center text-gray-600 mt-4">
                  Don't have an account?
                  <Link
                    to="/form"
                    className="text-[#0F4C75] font-medium hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
