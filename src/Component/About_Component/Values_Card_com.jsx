import React from "react";
import { Heart, Lightbulb, Users } from "lucide-react";

export default function Values_Card_com() {
  const data = [
    {
      icon: Heart,
      head: "Education First",
      para: `We believe in the transformative power of education and are passionate about empowering Islamic educational institutions with cutting-edge
       technology that respects traditional values.`,
      gradientFrom: "#126f77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Lightbulb,
      head: "Innovation with Purpose",
      para: `Modern technology meets traditional Islamic wisdom. We innovate not for the
       sake of technology alone, but to genuinely improve educational outcomes and strengthen communities.`,
      gradientFrom: "#eb6319",
      gradientTo: "#D4540E",
    },
    {
      icon: Users,
      head: "Community Building",
      para: `Strong educational communities are built on trust, communication, 
      and shared values. Our platform helps strengthen bonds between students, families, teachers, and administrators.`,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
  ];

  return (
    <div className="w-full   to-white">
      <div className="max-w-6xl  h-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:scale-105 min-h-[300px]"
            >
              {/* Icon wrapper */}
              <div className="relative">
                <div
                  className="w-20 h-20 flex items-center justify-center shadow-lg rounded-2xl mb-6
                  transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  <Icon className="w-10 h-10 text-white" />
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
              <h3 className="text-2xl font-bold  mb-4 text-center group-hover:text-[#126f77] transition-colors duration-300">
                {item.head}
              </h3>
              <p className="text-md text-muted-foreground text-center mt-4 leading-relaxed">
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
