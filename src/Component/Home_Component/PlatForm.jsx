import React from "react";
import { Play, Monitor, Users, ChartColumn } from "lucide-react";
import demo1 from "../Home_Component/img/demo1.jpg";
import demo2 from "../Home_Component/img/demo2.jpg";
import demo3 from "../Home_Component/img/demo3.jpg";

export default function Platform() {
  const cardsDemo = [
    {
      icon: demo1,
      title: "Dashboard Overview",
      Desc: "Get a complete view of your madrasa’s daily operations, attendance and activities all in one dashboard.",
      Refr_btn: "View Demo",
      Arrow_icon: "→",
      Play_Icon: Monitor,
      gradientFrom: "#126F77",
      gradientTo: "#0f5A61",
    },
    {
      icon: demo2,
      title: "Student Management",
      Desc: "Easily manage student profiles, progress and attendance with simple, organized tools for smooth record keeping.",
      Refr_btn: "View Demo",
      Arrow_icon: "→",
      Play_Icon: Users,
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
    {
      icon: demo3,
      title: "Analytics & Reports",
      Desc: "Gain deeper insights into performance and trends with powerful, easy-to-read reports and analytics.",
      Refr_btn: "View Demo",
      Arrow_icon: "→",
      Play_Icon: ChartColumn,
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];

  return (
    <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      {/* Updated: Added responsive padding for all breakpoints */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 rounded-full px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 mb-6 border border-[#126f77]/20">
        {/* Updated: Added responsive padding and height for the badge */}
        <Play
          size={16}
          className="text-[#EB6319] w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5"
        />
        {/* Updated: Added responsive icon sizes */}
        <span className="text-[#126F77] font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">
          Experience DeenNest Live
        </span>
        {/* Updated: Added responsive font sizes for the badge text */}
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mb-6 text-[#1A1A1A] leading-tight font-sen">
        See Our Platform
        <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
          In Action
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed mb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        Experience how DeenNest simplifies madrasa operations with real-time
        dashboards, student tracking and smart analytics.
      </p>
      {/* Updated: Added responsive padding for the paragraph */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Updated: Added md:grid-cols-2, xl/2xl:grid-cols-3, and responsive gap/padding */}
        {cardsDemo.map((item, index) => (
          <div
            className="text-card-foreground flex flex-col gap-6 rounded-xl group relative overflow-hidden border-0 bg-white 
          shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            key={index}
          >
            <div className="relative h-48 sm:h-48 md:h-48 lg:h-48 xl:h-48 2xl:h-48 overflow-hidden">
              {/* Updated: Added responsive height for the image container */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#126F77] to-[#0F5A61] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  {/* Updated: Added responsive sizes for the play button container */}
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8 text-[#126f77] ml-1" />
                  {/* Updated: Added responsive sizes for the play icon */}
                </div>
              </div>
              <div
                className="absolute top-4 left-4 w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12 bg-gradient-to-r rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                }}
              >
                <item.Play_Icon className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 text-white" />
                {/* Updated: Added responsive sizes for the icon container and icon */}
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 2xl:p-6 text-left">
              {/* Updated: Added responsive padding for the card content */}
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#126F77] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg text-[#6B6B6B]">
                {item.Desc}
              </p>
              <div className="flex items-center text-[#126F77] group-hover:text-[#EB6319] transition-colors cursor-pointer mt-3">
                <span className="font-medium mr-2 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                  {item.Refr_btn}
                </span>
                {/* Updated: Added responsive font sizes for the button text */}
                <span className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
                  {item.Arrow_icon}
                </span>
                {/* Updated: Added responsive font sizes for the arrow */}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#126F77] to-[#0F5A61] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
