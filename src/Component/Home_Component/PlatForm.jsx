import React from "react";
import { Play, Monitor, Users, ChartColumn } from "lucide-react";
import demo1 from "../Home_Component/img/demo1.jpg";
import demo2 from "../Home_Component/img/demo2.jpg";
import demo3 from "../Home_Component/img/demo3.jpg";
export default function platform() {
  const cardsDemo = [
    {
      icon: demo1,
      title: "Dashboard Overview",
      Desc: "Complete overview of your madrasa operations at a glance",
      Refr_btn: "View Demo",
      Arrow_icon: "→",
      Play_Icon: Monitor,
      gradientFrom: "#126F77",
      gradientTo: "0f5A61",
    },
    {
      icon: demo2,
      title: "Student Management",
      Desc: "Comprehensive student records and progress tracking",
      Refr_btn: "View Demo",
      Arrow_icon: "→",
      Play_Icon: Users,
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
    {
      icon: demo3,
      title: "Analytics & Reports",
      Desc: "Powerful insights and detailed reporting capabilities",
      Refr_btn: "View Demo",
      Arrow_icon: "→",
      Play_Icon: ChartColumn,
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 rounded-full px-6 py-3 mb-6 border border-[#126f77]/20">
        <Play size={20} className="text-[#EB6319]" />
        <span className="text-[#126F77] font-medium">Live Demo</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A] leading-tight font-sen">
        See Our Platform
        <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
          In Action
        </span>
      </h1>
      <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed mb-12 px-4">
        Experience the power of our comprehensive madrasa management system
        through interactive demos and real-world scenarios.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-12">
        {cardsDemo.map((item, index) => (
          <div
            className="text-card-foreground flex flex-col gap-6 rounded-xl group relative overflow-hidden border-0 bg-white 
          shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            key={index}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#126F77] to-[#0F5A61] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 text-[#126f77] ml-1" />
                </div>
              </div>
              <div
                className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-[#126F77] to-[#0F5A61] rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(to right,  ${item.gradientFrom}, ${item.gradientTo})`,
                }}
              >
                <item.Play_Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#126F77] transition-colors">
                {item.title}
              </h3>
              <p>{item.Desc}</p>
              <div className="flex items-center text-[#126F77] group-hover:text-[#EB6319] transition-colors cursor-pointer">
                <span className="font-medium mr-2">{item.Refr_btn}</span>
                <span className="text-lg">{item.Arrow_icon}</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#126F77] to-[#0F5A61] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
