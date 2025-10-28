// import React from "react";
// import circle from "../../assets/img/circle.png";
// import tri1 from "../../assets/img/tri1.png";
// import tri2 from "../../assets/img/tri2.png";
// import tri3 from "../../assets/img/tri3.png";
// import tri4 from "../../assets/img/tri4.png";
// import tri5 from "../../assets/img/tri5.png";
// import sq from "../../assets/img/sq.png";
// import laptop from "../../assets/img/laptop.png";
// import mobile1 from "../../assets/img/mobile1.png";
// import "./HeroSection.css";

// export default function HeroSection() {
//   return (
//     <div className="relative overflow-hidden bg-[#021B79] text-white py-20">
//       {/* Floating shapes */}
//       <div className="trops trops-1">
//         <img src={circle} alt="circle" />
//       </div>
//       <div className="trops trops-2">
//         <img src={tri1} alt="tri1" />
//       </div>
//       <div className="trops trops-3">
//         <img src={tri2} alt="tri2" />
//       </div>
//       <div className="trops trops-4">
//         <img src={tri3} alt="tri3" />
//       </div>
//       <div className="trops trops-5">
//         <img src={tri4} alt="tri4" />
//       </div>
//       <div className="trops trops-6">
//         <img src={tri5} alt="tri5" />
//       </div>
//       <div className="trops trops-7">
//         <img src={sq} alt="sq" />
//       </div>

//       <div className="container mx-auto text-center relative z-10 px-4">
//         <h1 className="text-4xl font-bold mb-4">
//           Free Online School Management Software.
//         </h1>
//         <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
//           Manage your school, college, or any educational center with eSkooly.
//           It’s 100% free for a lifetime with no limitations.
//         </p>

//         <div className="flex justify-center gap-4 mb-8">
//           <button className="bg-[#007BFF] text-white px-6 py-3 rounded-lg shadow hover:bg-[#0066d6]">
//             Sign Up Now, It’s Free
//           </button>
//           <button className="bg-white text-[#021B79] px-6 py-3 rounded-lg shadow">
//             Learn More
//           </button>
//         </div>

//         <div className="relative flex justify-center">
//           <img src={laptop} alt="laptop" className="w-[600px] drop-shadow-xl" />
//           <img
//             src={mobile1}
//             alt="mobile"
//             className="absolute w-[180px] bottom-0 right-[35%] levitate"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import {
  Sparkles,
  TrendingUp,
  CircleCheckBig,
  Play,
  Users,
  BookOpen,
  Shield,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import laptop from "../../assets/img/laptop.png";
import mobile1 from "../../assets/img/mobile1.png";
import "./HeroSection.css";

export default function HeroSection() {
  const navigate = useNavigate();
  const words = ["Madrasa", "School", "Institute", "Academy"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[index % words.length];

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, words]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-[#0F5A61] via-[#126F77] to-[#0B4A50] px-4 sm:px-8 lg:px-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Islamic Patterns */}
        <div className="absolute top-10 left-10 w-20 h-20 opacity-10 animate-float-slow">
          <div className="text-4xl">☪</div>
        </div>
        <div className="absolute top-20 right-20 w-16 h-16 opacity-10 animate-float-medium">
          <div className="text-3xl">🕌</div>
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 opacity-10 animate-float-slow">
          <div className="text-5xl">📖</div>
        </div>
        <div className="absolute bottom-10 right-10 w-18 h-18 opacity-10 animate-float-medium">
          <div className="text-4xl">☪</div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-[#EB6319]/20 to-[#126F77]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-[#126F77]/20 to-[#EB6319]/30 rounded-full blur-3xl animate-pulse"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-[#EB6319]/30 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 border-2 border-white/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Sparkles className="text-[#EB6319] w-5 h-5" />
            <span className="text-sm font-semibold">
              Trusted by 500+ Islamic Institutions
            </span>
            <TrendingUp className="text-[#EB6319] w-5 h-5" />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Modern Management for{" "}
              <span className="bg-gradient-to-r from-[#EB6319] to-[#FF8C42] bg-clip-text text-transparent animate-pulse">
                {displayText}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Streamline your Islamic educational institution with DeenNest.
              Complete solution for student management, attendance, fees, and
              communication.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
            <div className="flex items-center gap-3 text-white/90">
              <Users className="w-6 h-6 text-[#EB6319]" />
              <span className="font-medium">Student Management</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <BookOpen className="w-6 h-6 text-[#EB6319]" />
              <span className="font-medium">Academic Tracking</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Shield className="w-6 h-6 text-[#EB6319]" />
              <span className="font-medium">Secure & Reliable</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/form")}
              className="group relative bg-gradient-to-r from-[#EB6319] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#EB6319] text-white font-semibold py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                Start Free Trial
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>

            <button
              onClick={() => navigate("/video-tutorial")}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                <Play size={20} />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-8 h-8 bg-gradient-to-r from-[#EB6319] to-[#FF8C42] rounded-full border-2 border-white"
                  ></div>
                ))}
              </div>
              <div className="text-white/80">
                <div className="font-semibold">500+ Institutions</div>
                <div className="text-sm">Trust DeenNest</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-[#EB6319] text-[#EB6319]"
                  />
                ))}
              </div>
              <span className="text-white/80 text-sm">4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Right Content - Device Showcase */}
        <div className="relative">
          {/* Main Laptop */}
          <div className="relative z-20 transform hover:scale-105 transition-transform duration-500">
            <img
              src={laptop}
              alt="DeenNest Dashboard"
              className="w-full max-w-2xl mx-auto drop-shadow-2xl"
            />

            {/* Floating Mobile */}
            <div className="absolute -bottom-8 -right-8 lg:-right-4 xl:-right-8">
              <img
                src={mobile1}
                alt="DeenNest Mobile App"
                className="w-32 lg:w-40 xl:w-48 levitate drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20 animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#126F77] to-[#0F5A61] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold">98%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20 animate-float-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#EB6319] to-[#FF8C42] rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold">1.2K+</div>
                <div className="text-white/70 text-sm">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
