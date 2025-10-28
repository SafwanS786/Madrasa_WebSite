import React from "react";
import { Star, Shield, Zap, Settings } from "lucide-react";

export default function Trusted() {
  const data = [
    {
      icon: Shield,
      Title: "Enterprise Security",
      Desc: "Your madrasa’s data is encrypted and stored securely with modern protection standards to ensure complete safety and privacy.",
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Zap,
      Title: "Lightning Fast",
      Desc: "Simple, modern and fast—get started in minutes without any technical setup or training required.",
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
    {
      icon: Settings,
      Title: "Fully Customizable",
      Desc: "Every madrasa is unique. DeenNest adapts easily to your workflow, subjects and teaching style.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];

  return (
    <div className="text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div
        className="rounded-full flex flex-row items-center gap-2
       bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 py-2 px-3 md:py-3 md:px-6 mx-auto border border-[#126f77]/20 w-fit"
      >
        <Star className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#EB6319]" />
        {/* Updated: Added sm: and md: classes for responsive Star icon size */}
        <span className="text-[#126F77] font-medium text-sm sm:text-base md:text-lg">
          Trusted Worldwide
        </span>
        {/* Updated: Added responsive font sizes for the "Trusted Worldwide" text */}
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mt-8 mb-6 text-[#1A1A1A] leading-tight font-sen">
        Trusted by
        <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
          Modern Madrasas
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
        Join hundreds of forward-thinking institutions that have revolutionized
        their management with our cutting-edge platform.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Updated: Added md:grid-cols-2 and explicit xl/2xl:grid-cols-3 for clarity */}
        {data.map((item, index) => (
          <div
            className="text-card-foreground flex flex-col gap-6 rounded-xl group border border-gray-200 bg-white relative p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8 2xl:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            key={index}
          >
            {/* Updated: Added responsive padding for smaller screens */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8 2xl:p-8 text-center">
              <div className="mb-6">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-20 2xl:h-20 bg-gradient-to-r rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  {/* Updated: Added responsive sizes for the icon container */}
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 text-white" />
                  {/* Updated: Added responsive icon sizes */}
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#126F77] transition-colors duration-300">
                {item.Title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-[#6B6B6B] mt-4 leading-relaxed">
                {item.Desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#6B6B6B] mb-4 mt-20 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
        Trusted by 500+ institutions across 25+ countries
      </p>
      {/* Updated: Added responsive font sizes for the footer text */}
      <div className="flex flex-row gap-2 justify-center text-[#EB6319]">
        {Array(5)
          .fill(0)
          .map((__, i) => (
            <Star
              className="fill-current w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
              fill="currentColor"
              key={i}
            />
          ))}
        {/* Updated: Added responsive sizes for the Star icons */}
        <span className="ml-2 text-[#126F77] font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
          4.9/5 Customer Satisfaction
        </span>
        {/* Updated: Added responsive font sizes for the satisfaction text */}
      </div>
    </div>
  );
}
