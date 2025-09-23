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
    <div className="py-20 px-16 bg-gradient-to-br from-[#F8F9FA] to-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
        Our Impact in Numbers
      </h1>
      <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mt-6">
        A decade of dedication to Islamic education has created meaningful
        impact worldwide.
      </p>
      <div
        //     className="
        //     text-card-foreground flex flex-col gap-6 rounded-xl border
        //    text-center p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group
        className="grid grid-cols-3 gap-4 mt-20"
        //  "
      >
        {Details.map((value, index) => {
          return (
            <div
              className="text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200
       text-center items-center p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              key={index}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {value.Number_up}
                {value.sign}
              </div>
              <div className="text-[#6B6B6B] font-medium">{value.Text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
