import React, { use, useEffect, useState } from "react";
import { Award, Globe, TrendingUp, Users, Building2, Star } from "lucide-react";

export default function Card() {
  const [years, setYears] = useState(0);
  const [countries, setCountries] = useState(0);
  const [success, setSuccess] = useState(0);
  const [student, setStudent] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    const Counter_Time = (end, setTimer, duration = 3000) => {
      let start = 0;
      const increment = Math.floor(duration / end);
      let counterTime = setInterval(() => {
        start += 1;
        setTimer(start);
        if (start === end) {
          clearInterval(counterTime);
        }
      }, increment);
    };
    // const end =

    Counter_Time(10, setYears);
    Counter_Time(25, setCountries);
    Counter_Time(500, setSuccess);
    Counter_Time(50, setStudent);
    Counter_Time(99, setUptime);
    Counter_Time(5, setRating);
  }, []);
  const Details = [
    {
      icon: Award,
      Number_up: years,
      sign: "+",
      Text: "Years Experience",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Globe,
      Number_up: countries,
      sign: "+",
      Text: "Countries Served",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: TrendingUp,
      Number_up: success,
      sign: "+",
      Text: "Success Stories",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Users,
      Number_up: student,
      sign: "K+",
      Text: "Students Managed",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Building2,
      Number_up: uptime === 99 ? "99.9" : uptime,
      sign: "%",
      Text: "Uptime Guarantee",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Star,
      Number_up: rating === 5 ? "4.5/9" : rating,
      sign: "+",
      Text: "Customer Rating",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];
  return (
    <div
      className="bg-gradient-to-br from-[#F8F9FA] to-white text-center py-8 
    sm:py-12 md:py-16 lg:py-20 xl:py-20 2xl:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-16 2xl:px-16 "
    >
      <h1 className="font-bold text-[#1A1A1A] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl  mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
        Our Impact in Numbers
      </h1>
      <p
        className=" text-[#6B6B6B] max-w-2xl mx-auto  text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg
      mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6"
      >
        A decade of dedication to Islamic education has created meaningful
        impact worldwide.
      </p>
      <div
        //     className="
        //     text-card-foreground flex flex-col gap-6 rounded-xl border
        //    text-center p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 mt-12 sm:mt-16 md:mt-18 lg:mt-20 xl:mt-20 2xl:mt-20"
        //  "
      >
        {Details.map((value, index) => {
          return (
            <div
              className="text-card-foreground flex flex-col gap-4 sm:gap-5 md:gap-6 rounded-xl border border-gray-200
       text-center items-center r p-6 sm:p-6 md:p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              key={index}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                }}
              >
                <value.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {value.Number_up}
                {value.sign}
              </div>
              <div className=" text-[#6B6B6B] text-sm sm:text-sm md:text-base font-medium">
                {value.Text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
