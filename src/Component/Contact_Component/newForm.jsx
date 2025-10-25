import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Building, User, Mail, Phone, MapPin, Eye, EyeOff, Check } from "lucide-react";
import Img from "../../assets/img/signup_Imge.png";
import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    madrasaName: "",
    adminName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    country: "",
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateStep1 = () => {
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
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase and numbers";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep2()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Signup successful", formData);
      // Redirect or show success message
    } catch (error) {
      console.error("Signup failed", error);
      setErrors({ submit: "Signup failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const passwordRequirements = [
    { label: "At least 8 characters", met: formData.password.length >= 8 },
    { label: "Uppercase letter", met: /[A-Z]/.test(formData.password) },
    { label: "Lowercase letter", met: /[a-z]/.test(formData.password) },
    { label: "Number", met: /\d/.test(formData.password) }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] to-[#E8F4F8] p-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start">
          <div className="mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Start Managing Your Institute{" "}
              <span className="text-[#126f77]">Free Now!</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
              DeenNest is a 100% free online management software for a lifetime
              with no limitations.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            {[
              "Complete Student Management",
              "Attendance Tracking",
              "Fee Management",
              "Staff Management",
              "Real-time Reports",
              "Unlimited Storage"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#126f77] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="w-full max-w-md lg:max-w-lg">
            <img
              src={Img}
              alt="Institute Management Illustration"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="p-8 sm:p-10 md:p-12">
              {/* Progress Steps */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 1 ? 'bg-[#126f77] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    1
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">Account</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-gray-200">
                  <div className={`h-full bg-[#126f77] transition-all duration-300 ${
                    currentStep >= 2 ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 2 ? 'bg-[#126f77] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">Address</span>
                </div>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <img
                  src={Logo}
                  alt="DeenNest Logo"
                  className="h-12 sm:h-16 md:h-20 mx-auto mb-4"
                />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Register your account
                </h2>
                <p className="text-gray-600 mt-2">
                  {currentStep === 1 ? "Create your account" : "Complete your institute details"}
                </p>
              </div>

              <form onSubmit={currentStep === 1 ? handleNextStep : handleSubmit}>
                {/* Step 1: Account Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    {/* Madrasa Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <Building className="w-4 h-4 mr-2 text-[#126f77]" />
                        Madrasa Name <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="madrasaName"
                        placeholder="Enter Madrasa name"
                        value={formData.madrasaName}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder-gray-400 ${
                          errors.madrasaName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                        }`}
                        required
                      />
                      {errors.madrasaName && (
                        <p className="text-red-500 text-sm mt-1">{errors.madrasaName}</p>
                      )}
                    </div>

                    {/* Admin Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <User className="w-4 h-4 mr-2 text-[#126f77]" />
                        Admin Name <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="adminName"
                        placeholder="Enter Admin name"
                        value={formData.adminName}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder-gray-400 ${
                          errors.adminName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                        }`}
                        required
                      />
                      {errors.adminName && (
                        <p className="text-red-500 text-sm mt-1">{errors.adminName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-[#126f77]" />
                        Email Address <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder-gray-400 ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-[#126f77]" />
                        Phone Number <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder-gray-400 ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                        }`}
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        Password <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 pr-12 outline-none transition-all duration-200 placeholder-gray-400 ${
                            errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                          }`}
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        Confirm Password <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 pr-12 outline-none transition-all duration-200 placeholder-gray-400 ${
                            errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                          }`}
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                      )}
                    </div>

                    {/* Password Requirements */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="text-sm font-medium text-gray-700">Password must contain:</p>
                      {passwordRequirements.map((req, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            req.met ? 'bg-green-500' : 'bg-gray-300'
                          }`}>
                            {req.met && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-sm ${req.met ? 'text-green-600' : 'text-gray-500'}`}>
                            {req.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#126f77] to-cyan-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Continue to Address</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Step 2: Address Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-[#126f77]" />
                        Address <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder-gray-400 ${
                          errors.address ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                        }`}
                        required
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                      )}
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        City <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder-gray-400 ${
                          errors.city ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                        }`}
                        required
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        Country <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Enter your country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 placeholder-gray-400 ${
                          errors.country ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77]'
                        }`}
                        required
                      />
                      {errors.country && (
                        <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                      )}
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start space-x-3 pt-2">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className={`w-4 h-4 mt-1 rounded focus:ring-[#126f77] ${
                          errors.agreeToTerms ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
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
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={handlePreviousStep}
                        className="flex-1 px-6 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 bg-gradient-to-r from-[#126f77] to-cyan-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                            Creating Account...
                          </>
                        ) : (
                          "Create Account"
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>

              {errors.submit && (
                <p className="text-red-500 text-sm text-center mt-4">{errors.submit}</p>
              )}

              {/* Login Link */}
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#126f77] font-medium hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}