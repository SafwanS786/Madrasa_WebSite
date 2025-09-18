import React, { useEffect, useState } from "react";
import { ArrowRight, Target } from "lucide-react";
export default function Mission() {
  const [year, setYear] = useState(0);
  const [countries, setCountries] = useState(0);
  const [stories, setStories] = useState(0);

  useEffect(() => {
    const animateCounter = (end, setState, duration = 2000) => {
      let start = 0;
      // const end = 10;
      // const duration = 2000;
      const increment = Math.floor(duration / end);

      let counter = setInterval(() => {
        start += 1;
        setState(start);
        if (start === end) {
          clearInterval(counter);
        }
      }, increment);
    };
    //     return () => clearInterval(counter);
    animateCounter(10, setYear);
    animateCounter(25, setCountries);
    animateCounter(500, setStories);
  }, []);
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F8F9FA] to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-6 h-6 bg-[#EB6319]/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-[#126F77]/30 rounded-full animate-bounce"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-full px-6 py-3 mb-6 border border-[#126F77]/20">
            <Target className="w-5 h-5 text-[#126F77]" />
            <p className="text-primary font-medium">Our Mission</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            <span className="block">About</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6 mt-8">
              We are dedicated to empowering Islamic education with technology.
              Our mission is to simplify madrasa operations so educators can
              focus on what truly matters—teaching and learning.
            </p>
            <p className="text-xl text-[#6B6B6B] leading-relaxed mb-8">
              Founded by educators who understand the unique needs of Islamic
              institutions, we combine decades of experience with cutting-edge
              technology to serve the global Muslim community.
            </p>
            <button
              className="group inline-flex items-center justify-center gap-2 border-2 px-8 py-2 rounded-md
             text-primary border-primary hover:bg-primary hover:text-white"
            >
              Read More About Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="flex flex-row justify-center gap-40 mt-20">
            <div>
              <h1
                className="text-center group text-4xl md:text-5xl 
            font-bold bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent mb-2 hover:scale-110 transition-transform duration-300"
              >
                {year}+
              </h1>
              <p className="text-[#6B6B6B] text-sm font-medium">
                Years Experience
              </p>
            </div>
            <div>
              <h1
                className="text-center group text-4xl md:text-5xl 
            font-bold bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent mb-2 hover:scale-110 transition-transform duration-300"
              >
                {countries}+
              </h1>
              <p className="text-[#6B6B6B] text-sm font-medium">
                Countries Served
              </p>
            </div>
            <div>
              <h1
                className="text-center group text-4xl md:text-5xl 
            font-bold bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent mb-2 hover:scale-110 transition-transform duration-300 "
              >
                {stories}+
              </h1>
              <p className="text-[#6B6B6B] text-sm font-medium">
                Success Stories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
