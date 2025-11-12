import React from "react";
import { Target, CircleCheckBig } from "lucide-react";

export default function Stories() {
  return (
    <>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20">
          <div
            className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 
            rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 
             sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 border border-[#126f77]/20"
          >
            <Target className="w-4 h-4  sm:w-5 sm:h-5 text-[#EB6319]" />

            <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm  text-[#126F77] font-medium">
              Our Mission & Story
            </span>
          </div>
          <h2 className="block text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 leading-tight">
            Empowering Islamic
            <br />
            <span className="bg-gradient-to-r from-[#126f77] to-[#EB6319] bg-clip-text text-transparent">
              Education Worldwide
            </span>
          </h2>
          <p
            className="text-[#6B6B6B] max-w-3xl mx-auto  text-base sm:text-base
           md:text-lg lg:text-xl xl:text-xl 2xl:text-xl leading-relaxed text-start pl-5 md:pl-0"
          >
            We are dedicated to transforming Islamic education through
            innovation and faith helping madrasas manage daily operations
            effortlessly while preserving core Islamic values and strengthening
            educational communities across the globe.
          </p>
        </div>
      </div>
      <div
        className="mb-4 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20 mt-12 p-5 sm:mt-16 md:mt-20 lg:mt-24
        xl:mt-24 2xl:mt-24 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] mx-auto justify-center"
      >
        {/* <div
          className="text-foreground flex  flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6
          rounded-xl border-0 bg-gradient-to-r from-primary/5 to-secondary/5 p-6 sm:p-6 md:p-8"
        >
          <h2
            className="text-foreground  font-bold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl
            mb-2"
          >
            Our Mission
          </h2>
          <h3 className="text-foreground  font-bold text-2xl sm:text-2xl">
            Transforming Islamic education through innovation and faith.
          </h3>
          <p
            className=" text-[#1A1A1A] leading-relaxed text-center max-w-4xl mx-auto text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl
            mb-6"
          >
            DeenNest simplifies madrasa management so educators can focus on
            teaching, values and nurturing future generations. Our platform
            bridges traditional wisdom with modern technology, creating a
            balanced ecosystem for students, parents and maulana to stay
            connected, informed and inspired.
          </p>
          <p className=" text-[#1A1A1A] leading-relaxed text-center max-w-4xl mx-auto text-base sm:text-base md:text-lg lg:text-xl ">
            We believe that true progress in education comes from combining
            knowledge with values and technology with purpose. Every feature we
            build is designed to serve the noble goal of making Islamic learning
            more accessible, efficient and spiritually aligned.
          </p>
          <div
            className="flex  flex-col sm:flex-col md:flex-row md:items-center justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-6 2xl:gap-6 text-sm 
          sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-md"
          >
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-muted-foreground">
              <CircleCheckBig className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Technology with Purpose
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CircleCheckBig className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Preserving Values
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CircleCheckBig className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Global Impact
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
