import React from "react";
import { Heart, Lightbulb, Users, Shrimp } from "lucide-react";

export default function Values_Card_com() {
  const data = [
    {
      icon: Heart,
      head: "Education First",
      title: "We believe in the power of education to change lives.",
      para: `DeenNest is dedicated to helping Islamic institutions grow with modern tools that respect and preserve traditional values.`,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Lightbulb,
      head: "Innovation with Purpose",
      title: "Technology should serve faith, not replace it.",
      para: ` Our goal is to create smart solutions that simplify madrasa management and strengthen learning communities.`,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Users,
      head: "Community Building",
      title: "We grow stronger together.",
      para: ` DeenNest connects maulana, parents and students through a single platform that builds trust, communication and unity.`,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Shrimp,
      head: "Integrity & Trust",
      title: "Faith and honesty are at the heart of everything we build.",
      para: ` We ensure every feature, update and interaction reflects transparency, reliability and responsibility toward our users and their mission.`,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
  ];

  return (
    <div className="w-full  py-8 sm:py-12 md:py-16 lg:py-20  px-4 sm:px-6 md:px-8 to-white">
      <div className="max-w-6xl  h-full mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative flex flex-col items-center p-4 sm:p-5 md:p-6 
              rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:scale-105 min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px]"
            >
              {/* Icon wrapper */}
              <div className="relative">
                <div
                  className=" w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center shadow-lg rounded-2xl mb-4 sm:mb-5 md:mb-6
                  transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-30 w-4 h-4 bg-[#EB6319]/30 rounded-full
                  opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
                />
                <div
                  className="absolute -bottom-2 -left-30 w-3 h-3 bg-[#126F77]/30 rounded-full 
                  opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700"
                />
              </div>

              {/* Card content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold  mb-3 sm:mb-3.5 md:mb-4 text-center group-hover:text-[#126f77] transition-colors duration-300">
                {item.head}
              </h3>
              <p className="text-sm sm:text-sm md:text-base lg:text-md xl:text-md text-muted-foreground text-center mt-3 sm:mt-3.5 md:mt-4 leading-relaxed">
                {item.para}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
