import React from "react";
import { Heart, Lightbulb, Users } from "lucide-react";

export default function Mission_Card() {
  const data = [
    {
      icon: Heart,
      head: "Education First",
      para: "Empowering Islamic education with smart, easy-to-use digital tools built for modern learning.",
      gradientFrom: "#126f77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Lightbulb,
      head: "Innovation",
      para: "Bringing the best of modern technology together with timeless Islamic values and wisdom.",
      gradientFrom: "#eb6319",
      gradientTo: "#D4540E",
    },
    {
      icon: Users,
      head: "Community",
      para: "Strengthening the bond between maulana, students, and families through connected, meaningful communication.",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
  ];

  return (
    <div className="w-full   to-white">
      <div className="max-w-6xl  h-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative flex flex-col items-center  p-4 sm:p-5 md:p-6 rounded-2xl shadow-md
               hover:shadow-xl transition-all duration-500 bg-white hover:scale-105 min-h-[250px] sm:min-h-[280px] md:min-h-[300px]"
            >
              {/* Icon wrapper */}
              <div className="relative">
                <div
                  className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center shadow-lg rounded-2xl mb-6
                  transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
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
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-center group-hover:text-[#126f77] transition-colors duration-300">
                {item.head}
              </h3>
              <p className="text-md text-muted-foreground text-center mt-2 sm:mt-3 md:mt-4 leading-relaxed">
                {item.para}
              </p>

              {/* Decorative bubbles */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
