// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   UserLock,
//   Eye,
//   EyeOff,
//   Mail,
//   Phone,
//   User,
//   Building,
// } from "lucide-react";
// import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";
// import Login_img from "../../assets/img/login_img.png";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     madrasaName: "",
//     adminName: "",
//     email: "",
//     phone: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.madrasaName.trim()) {
//       newErrors.madrasaName = "Madrasa name is required";
//     }

//     if (!formData.adminName.trim()) {
//       newErrors.adminName = "Admin name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Phone number is invalid";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsLoading(true);

//     // Simulate API call
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       // Handle successful login here
//       console.log("Login successful", formData);
//       // Redirect or show success message
//     } catch (error) {
//       console.error("Login failed", error);
//       setErrors({ submit: "Login failed. Please try again." });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] to-[#E8F4F8] p-0 overflow-y-hidden">
//       <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
//         {/* Left Column - Illustration & Info */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start">
//           <div className="mb-8 lg:mb-12">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//               Welcome Back to <span className="text-[#126f77]">DeenNest</span>
//             </h1>
//             <p className="text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
//               Login to manage students, staff, attendance, fees, and all your
//               madrasa operations efficiently from one dashboard.
//             </p>
//           </div>

//           <div className="w-full max-w-md lg:max-w-lg">
//             <img
//               src={Login_img}
//               alt="Login Illustration"
//               className="w-full h-auto transform hover:scale-105 transition-transform duration-500 invert-0"
//               // style={{
//               //   filter:
//               //     "sepia(1) hue-rotate(160deg) saturate(4) brightness(0.9)",
//               // }}
//             />
//           </div>

//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//             <div className="bg-white p-2 rounded-xl shadow-sm">
//               <div className="text-[#0F4C75] font-bold text-xl">500+</div>
//               <div className="text-gray-600 text-sm">Madrasas</div>
//             </div>
//             <div className="bg-white p-2 rounded-xl shadow-sm">
//               <div className="text-[#0F4C75] font-bold text-xl">10K+</div>
//               <div className="text-gray-600 text-sm">Students</div>
//             </div>
//             <div className="bg-white p-2 rounded-xl shadow-sm">
//               <div className="text-[#0F4C75] font-bold text-xl">99%</div>
//               <div className="text-gray-600 text-sm">Satisfaction</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Login Form */}
//         <div
//          className="w-full lg:w-1/2 max-w-md border border-[#f2f2f2] rounded-4xl shadow-2xl"
//          >
//           <div className="">
//             {/* bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 */}
//             <div className="p-2 sm:p-4 md:p-6">
//               <div className="text-center mb-8">
//                 <img
//                   src={Logo}
//                   alt="DeenNest Logo"
//                   className="h-12 sm:h-16 md:h-20 mx-auto mb-4"
//                 />
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Login to Your Account
//                 </h2>
//                 <p className="text-gray-600 mt-2">
//                   Enter your credentials to access your dashboard
//                 </p>
//               </div>

//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 {/* Madrasa Name */}
//                 <div className="space-y-2">
//                   <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
//                     <Building className="w-4 h-4 mr-2 text-[#126f77]" />
//                     Madrasa Name <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="madrasaName"
//                     placeholder="Enter Madrasa Name"
//                     value={formData.madrasaName}
//                     onChange={handleChange}
//                     className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 outline-none border transition-all ${
//                       errors.madrasaName
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
//                     }`}
//                     required
//                   />
//                   {errors.madrasaName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.madrasaName}
//                     </p>
//                   )}
//                 </div>

//                 {/* Admin Name */}
//                 <div className="space-y-2">
//                   <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
//                     <User className="w-4 h-4 mr-2 text-[#126f77]" />
//                     Admin Name <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="adminName"
//                     placeholder="Enter Admin Name"
//                     value={formData.adminName}
//                     onChange={handleChange}
//                     className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 outline-none border transition-all ${
//                       errors.adminName
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
//                     }`}
//                     required
//                   />
//                   {errors.adminName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.adminName}
//                     </p>
//                   )}
//                 </div>

//                 {/* Email */}
//                 <div className="space-y-2">
//                   <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
//                     <Mail className="w-4 h-4 mr-2 text-[#126f77]" />
//                     Email <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 outline-none border transition-all ${
//                       errors.email
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
//                     }`}
//                     required
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* Phone */}
//                 <div className="space-y-2">
//                   <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
//                     <Phone className="w-4 h-4 mr-2 text-[#126f77]" />
//                     Phone Number <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Enter your phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 outline-none border transition-all ${
//                       errors.phone
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
//                     }`}
//                     required
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                   )}
//                 </div>

//                 {/* Password */}
//                 <div className="space-y-2">
//                   <label className="text-sm md:text-base font-medium text-gray-700 flex items-center">
//                     <UserLock className="w-4 h-4 mr-2 text-[#126f77]" />
//                     Password <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       placeholder="Enter your password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       className={`w-full bg-gray-50 rounded-lg p-3 md:p-4 pr-12 outline-none border transition-all ${
//                         errors.password
//                           ? "border-red-500 focus:ring-red-500"
//                           : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77]"
//                       }`}
//                       required
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                       onClick={togglePasswordVisibility}
//                     >
//                       {showPassword ? (
//                         <EyeOff className="w-5 h-5" />
//                       ) : (
//                         <Eye className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                   {errors.password && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.password}
//                     </p>
//                   )}
//                 </div>

//                 {/* Remember Me & Forgot Password */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="rememberMe"
//                       name="rememberMe"
//                       checked={formData.rememberMe}
//                       onChange={handleChange}
//                       className="h-4 w-4  accent-[#126f77]"
//                     />
//                     <label
//                       htmlFor="rememberMe"
//                       className="ml-2 block text-sm text-gray-700 "
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                   <Link
//                     to="/forgot-password"
//                     className="text-sm text-[#126f77] font-medium hover:underline"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#126f77] to-[#EB6319]
//                    text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all
//                     duration-200 disabled:opacity-70 cursor-pointer"
//                 >
//                   {isLoading ? (
//                     <>
//                       <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
//                       Logging in...
//                     </>
//                   ) : (
//                     <>
//                       <UserLock className="w-5 h-5" /> Login
//                     </>
//                   )}
//                 </button>

//                 {errors.submit && (
//                   <p className="text-red-500 text-sm text-center mt-2">
//                     {errors.submit}
//                   </p>
//                 )}

//                 {/* Signup Link */}
//                 <p className="text-center text-gray-600 mt-4">
//                   Don't have an account?
//                   <Link
//                     to="/form"
//                     className="text-[#126f77] font-medium hover:underline"
//                   >
//                     Sign Up
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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
      // Add redirect logic here, e.g., history.push('/dashboard');
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center relative z-10 min-h-0">
        {/* Left Column - Illustration & Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo & Badge */}
          <div className="flex items-center gap-3 mb-8">
            <img src={Logo} alt="DeenNest Logo" className="h-14 w-auto" />
         
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#126f77] to-[#EB6319] bg-clip-text text-transparent mb-6 leading-tight">
            Welcome Back to <span className="text-[#126f77]">DeenNest</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Login to manage students, staff, attendance, fees, and all your
            madrasa operations efficiently from one dashboard.
          </p>

          {/* Illustration */}
          <div className="w-full max-w-sm lg:max-w-md">
            <img
              src={Login_img}
              alt="Login Illustration"
              className="w-full h-auto max-h-[35vh] object-contain transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#126f77]">
                500+
              </div>
              <div className="text-gray-600 text-sm">Madrasas</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#126f77]">
                10K+
              </div>
              <div className="text-gray-600 text-sm">Students</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#126f77]">
                99%
              </div>
              <div className="text-gray-600 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#126f77] to-[#EB6319] p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10">
                  Login to Your Account
                </h2>
                <p className="text-cyan-100 text-sm relative z-10">
                  Enter your credentials to access your dashboard
                </p>
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8">
                {successMessage && (
                  <p className="text-green-600 text-sm text-center mb-4 animate-fadeIn">
                    {successMessage}
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Madrasa Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="madrasaName"
                      className="text-sm font-semibold text-gray-700 flex items-center"
                    >
                      <Building className="w-4 h-4 mr-2 text-[#126f77]" />
                      Madrasa Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="madrasaName"
                        type="text"
                        name="madrasaName"
                        placeholder="Enter Madrasa Name"
                        value={formData.madrasaName}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 ${
                          errors.madrasaName ? "border-red-500" : ""
                        }`}
                        required
                        aria-describedby={
                          errors.madrasaName ? "madrasaName-error" : undefined
                        }
                      />
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    {errors.madrasaName && (
                      <p
                        id="madrasaName-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.madrasaName}
                      </p>
                    )}
                  </div>

                  {/* Admin Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="adminName"
                      className="text-sm font-semibold text-gray-700 flex items-center"
                    >
                      <User className="w-4 h-4 mr-2 text-[#126f77]" />
                      Admin Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="adminName"
                        type="text"
                        name="adminName"
                        placeholder="Enter Admin Name"
                        value={formData.adminName}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 ${
                          errors.adminName ? "border-red-500" : ""
                        }`}
                        required
                        aria-describedby={
                          errors.adminName ? "adminName-error" : undefined
                        }
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    {errors.adminName && (
                      <p
                        id="adminName-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.adminName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2 text-[#126f77]" />
                      Email <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        required
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700 flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2 text-[#126f77]" />
                      Phone Number <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        required
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-700 flex items-center"
                    >
                      <UserLock className="w-4 h-4 mr-2 text-[#126f77]" />
                      Password <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 pr-12 outline-none focus:ring-2 focus:ring-[#126f77] focus:border-[#126f77] transition-all duration-200 placeholder-gray-400 ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        required
                        aria-describedby={
                          errors.password ? "password-error" : undefined
                        }
                      />
                      <UserLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p
                        id="password-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <input
                        id="rememberMe"
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#126f77] border-gray-300 rounded focus:ring-[#126f77]"
                        aria-label="Remember me"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="ml-2 text-gray-600"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-[#126f77] font-semibold hover:text-[#126f77]/80 hover:underline transition-all"
                      aria-label="Forgot password"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#126f77]/80 to-[#EB6319]/80 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-label={isLoading ? "Logging in" : "Login"}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="w-5 h-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Login
                      </>
                    )}
                  </button>

                  {errors.submit && (
                    <p className="text-red-500 text-sm text-center mt-2">
                      {errors.submit}
                    </p>
                  )}

                  {/* Signup Link */}
                  <div className="text-center mt-6 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      Don't have an account?{" "}
                      <Link
                        to="/sign_up"
                        className="text-[#126f77] font-semibold hover:text-[#126f77]/80 hover:underline transition-all"
                        aria-label="Sign up"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
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
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   UserLock,
//   Eye,
//   EyeOff,
//   Mail,
//   Phone,
//   User,
//   Building,
// } from "lucide-react";
// import Logo from "../../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";
// import Login_img from "../../assets/img/login_img.png";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     madrasaName: "",
//     adminName: "",
//     email: "",
//     phone: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.madrasaName.trim()) {
//       newErrors.madrasaName = "Madrasa name is required";
//     }
//     if (!formData.adminName.trim()) {
//       newErrors.adminName = "Admin name is required";
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Phone number is invalid";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsLoading(true);
//     setSuccessMessage("");

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       console.log("Login successful", formData);
//       setSuccessMessage("Login successful! Redirecting to dashboard...");
//       // Add redirect logic here, e.g., history.push('/dashboard');
//     } catch (error) {
//       console.error("Login failed", error);
//       setErrors({ submit: "Login failed. Please try again." });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] to-[#E8F4F8] p-4">
//       <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-center min-h-0">
//         {/* Left Column - Illustration & Info */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start min-h-0">
//           <div className="mb-6 lg:mb-8">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//               Welcome Back to <span className="text-[#126F77]">DeenNest</span>
//             </h1>
//             <p className="text-base text-gray-700 max-w-md mx-auto lg:mx-0">
//               Login to manage students, staff, attendance, fees, and all your
//               madrasa operations efficiently from one dashboard.
//             </p>
//           </div>

//           <div className="w-full max-w-sm lg:max-w-md">
//             <img
//               src={Login_img}
//               alt="Login Illustration"
//               className="w-full h-auto max-h-[35vh] object-contain transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
//             <div className="bg-white p-3 rounded-lg shadow-sm">
//               <div className="text-[#0F4C75] font-bold text-lg">500+</div>
//               <div className="text-gray-600 text-sm">Madrasas</div>
//             </div>
//             <div className="bg-white p-3 rounded-lg shadow-sm">
//               <div className="text-[#0F4C75] font-bold text-lg">10K+</div>
//               <div className="text-gray-600 text-sm">Students</div>
//             </div>
//             <div className="bg-white p-3 rounded-lg shadow-sm">
//               <div className="text-[#0F4C75] font-bold text-lg">99%</div>
//               <div className="text-gray-600 text-sm">Satisfaction</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Login Form */}
//         <div className="w-full lg:w-1/2 max-w-md min-h-0">
//           <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2 Solar System2xl p-6 sm:p-8 md:p-10 border border-gray-100/50">
//             <div className="text-center mb-6">
//               <img
//                 src={Logo}
//                 alt="DeenNest Logo"
//                 className="h-10 sm:h-12 md:h-14 mx-auto mb-4"
//               />
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Login to Your Account
//               </h2>
//               <p className="text-gray-600 text-sm mt-2">
//                 Enter your credentials to access your dashboard
//               </p>
//             </div>

//             {successMessage && (
//               <p className="text-green-500 text-sm text-center mb-4">
//                 {successMessage}
//               </p>
//             )}

//             <form className="space-y-4" onSubmit={handleSubmit} noValidate>
//               {/* Madrasa Name */}
//               <div className="space-y-1">
//                 <label
//                   htmlFor="madrasaName"
//                   className="text-sm font-medium text-gray-700 flex items-center"
//                 >
//                   <Building className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                   Madrasa Name <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   id="madrasaName"
//                   type="text"
//                   name="madrasaName"
//                   placeholder="Enter Madrasa Name"
//                   value={formData.madrasaName}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-50 rounded-lg p-3 outline-none border transition-all duration-300 ${
//                     errors.madrasaName
//                       ? "border-red-500 focus:ring-red-500"
//                       : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77] hover:border-[#126F77]/50"
//                   }`}
//                   required
//                   aria-describedby={errors.madrasaName ? "madrasaName-error" : undefined}
//                 />
//                 {errors.madrasaName && (
//                   <p id="madrasaName-error" className="text-red-500 text-xs mt-1">
//                     {errors.madrasaName}
//                   </p>
//                 )}
//               </div>

//               {/* Admin Name */}
//               <div className="space-y-1">
//                 <label
//                   htmlFor="adminName"
//                   className="text-sm font-medium text-gray-700 flex items-center"
//                 >
//                   <User className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                   Admin Name <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   id="adminName"
//                   type="text"
//                   name="adminName"
//                   placeholder="Enter Admin Name"
//                   value={formData.adminName}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-50 rounded-lg p-3 outline-none border transition-all duration-300 ${
//                     errors.adminName
//                       ? "border-red-500 focus:ring-red-500"
//                       : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77] hover:border-[#126F77]/50"
//                   }`}
//                   required
//                   aria-describedby={errors.adminName ? "adminName-error" : undefined}
//                 />
//                 {errors.adminName && (
//                   <p id="adminName-error" className="text-red-500 text-xs mt-1">
//                     {errors.adminName}
//                   </p>
//                 )}
//               </div>

//               {/* Email */}
//               <div className="space-y-1">
//                 <label
//                   htmlFor="email"
//                   className="text-sm font-medium text-gray-700 flex items-center"
//                 >
//                   <Mail className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                   Email <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-50 rounded-lg p-3 outline-none border transition-all duration-300 ${
//                     errors.email
//                       ? "border-red-500 focus:ring-red-500"
//                       : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77] hover:border-[#126F77]/50"
//                   }`}
//                   required
//                   aria-describedby={errors.email ? "email-error" : undefined}
//                 />
//                 {errors.email && (
//                   <p id="email-error" className="text-red-500 text-xs mt-1">
//                     {errors.email}
//                   </p>
//                 )}
//               </div>

//               {/* Phone */}
//               <div className="space-y-1">
//                 <label
//                   htmlFor="phone"
//                   className="text-sm font-medium text-gray-700 flex items-center"
//                 >
//                   <Phone className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                   Phone Number <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-50 rounded-lg p-3 outline-none border transition-all duration-300 ${
//                     errors.phone
//                       ? "border-red-500 focus:ring-red-500"
//                       : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77] hover:border-[#126F77]/50"
//                   }`}
//                   required
//                   aria-describedby={errors.phone ? "phone-error" : undefined}
//                 />
//                 {errors.phone && (
//                   <p id="phone-error" className="text-red-500 text-xs mt-1">
//                     {errors.phone}
//                   </p>
//                 )}
//               </div>

//               {/* Password */}
//               <div className="space-y-1">
//                 <label
//                   htmlFor="password"
//                   className="text-sm font-medium text-gray-700 flex items-center"
//                 >
//                   <UserLock className="w-4 h-4 mr-2 text-[#0F4C75]" />
//                   Password <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className={`w-full bg-gray-50 rounded-lg p-3 pr-12 outline-none border transition-all duration-300 ${
//                       errors.password
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-200 focus:ring-2 focus:ring-[#126F77] focus:border-[#126F77] hover:border-[#126F77]/50"
//                     }`}
//                     required
//                     aria-describedby={errors.password ? "password-error" : undefined}
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
//                     onClick={togglePasswordVisibility}
//                     aria-label={showPassword ? "Hide password" : "Show password"}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-5 h-5" />
//                     ) : (
//                       <Eye className="w-5 h-5" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p id="password-error" className="text-red-500 text-xs mt-1">
//                     {errors.password}
//                   </p>
//                 )}
//               </div>

//               {/* Remember Me & Forgot Password */}
//               <div className="flex items-center justify-between text-sm">
//                 <div className="flex items-center">
//                   <input
//                     id="rememberMe"
//                     type="checkbox"
//                     name="rememberMe"
//                     checked={formData.rememberMe}
//                     onChange={handleChange}
//                     className="h-4 w-4 text-[#0F4C75] focus:ring-[#0F4C75] border-gray-300 rounded"
//                     aria-label="Remember me"
//                   />
//                   <label htmlFor="rememberMe" className="ml-2 text-gray-700">
//                     Remember me
//                   </label>
//                 </div>
//                 <Link
//                   to="/forgot-password"
//                   className="text-[#0F4C75] font-medium hover:underline"
//                   aria-label="Forgot password"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0F4C75] to-[#3282B8] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
//                 aria-label={isLoading ? "Logging in" : "Login"}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg
//                       className="w-5 h-5 animate-spin text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Logging in...
//                   </>
//                 ) : (
//                   <>
//                     <UserLock className="w-5 h-5" /> Login
//                   </>
//                 )}
//               </button>

//               {errors.submit && (
//                 <p className="text-red-500 text-sm text-center mt-2">
//                   {errors.submit}
//                 </p>
//               )}

//               {/* Signup Link */}
//               <p className="text-center text-gray-600 text-sm mt-4">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/form"
//                   className="text-[#0F4C75] font-medium hover:underline"
//                   aria-label="Sign up"
//                 >
//                   Sign Up
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
