import React from "react";
import { Star, Shield, Zap, Settings } from "lucide-react";
export default function Trusted() {
  const data = [
    {
      icon: Shield,
      Title: "Enterprise Security",
      Desc: "Bank-level encryption and cloud infrastructure protecting your sensitive data 24/7.",
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Zap,
      Title: "Lightning Fast",
      Desc: "Intuitive design with zero learning curve. Get up and running in minutes, not days.",
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
    {
      icon: Settings,
      Title: "Fully Customizable",
      Desc: "Flexible platform that adapts to your madrasa's unique teaching methods and requirements.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];
  return (
    <div className="text-center">
      <div className="rounded-full flex flex-row items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 py-3 px-6 mx-auto border border-[#126f77]/20 w-fit">
        <Star className="w-4 h-4 text-[#EB6319]" />
        <span className="text-[#126F77] font-medium">Trusted Worldwide</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6 text-[#1A1A1A] leading-tight font-sen">
        Trusted by
        <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
          Modern Madrasas
        </span>
      </h1>
      <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
        Join hundreds of forward-thinking institutions that have revolutionized
        their management with our cutting-edge platform.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-12  ">
        {data.map((item, index) => (
          <div
            className="text-card-foreground flex flex-col gap-6 rounded-xl group border border-gray-200  bg-white relative p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            key={index}
          >
            <div className="p-8 text-center">
              <div className="mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r from-[#126F77] to-[#0F5A61] rounded-2xl flex items-center
                 justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#126F77] transition-colors duration-300">
                {item.Title}
              </h2>
              <p className="text-[#6B6B6B] mt-4 leading-relaxed">{item.Desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#6B6B6B] mb-4 mt-20">
        Trusted by institutions in over 25 countries
      </p>
      <div className="flex flex-row gap-2 justify-center text-[#EB6319]">
        <Star className=" fill-current" fill="currentColor" />
        <Star className="fill-current" fill="currentColor" />
        <Star className="fill-current" fill="currentColor" />
        <Star className="fill-current" fill="currentColor" />
        <Star className="fill-current" fill="currentColor" />
        <span className="ml-2 text-[#126F77] font-semibold">
          4.9/5 Customer Satisfaction
        </span>
      </div>
    </div>
  );
}
