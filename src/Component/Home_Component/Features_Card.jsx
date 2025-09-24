import React from "react";
import {
  ArrowRight,
  Users,
  Calendar,
  Wallet,
  MessageCircle,
} from "lucide-react";
// import "./animation.css";

export default function Features_Card() {
  const cards = [
    {
      title: "Student Records",
      description:
        "Comprehensive student information management with easy search and filtering capabilities.",
      icon: Users,
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      title: "Attendance & Reports",
      description:
        "Digital attendance tracking with automated reports and parent notifications.",
      icon: Calendar,
      gradientFrom: "#EB6319",
      gradientTo: "#FF9F43",
    },
    {
      title: "Fee & Finance Tracking",
      description:
        "Complete financial management with fee collection, receipts, and expense tracking.",
      icon: Wallet,
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      title: "Parent & Teacher Portal",
      description:
        "Seamless communication between parents, teachers, and administration staff.",
      icon: MessageCircle,
      gradientFrom: "#EB6319",
      gradientTo: "#126F77",
    },
  ];
  return (
    <div className="lg:mb-20 p-12 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 sm:gap-8 md:gap-10 lg:gap-12 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative p-8  sm:p-8 text-center group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
          >
            <div className="relative mb-6">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg transition-all duration-500 group-hover:scale-110`}
                style={{
                  background: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
                }}
              >
                <card.icon className="w-10 h-10 text-white" />
              </div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#EB6319]/30 rounded-full
                            opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
              ></div>

              {/* Bottom-left bouncing circle */}
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#126F77]/30 rounded-full
                            opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700"
              ></div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#126F77] transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-[#6B6B6B] text-sm leading-relaxed lg:mb-6">
              {card.description}
            </p>
            <div className="flex items-center justify-center text-[#126F77] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              <span className="text-sm font-medium mr-2">Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
