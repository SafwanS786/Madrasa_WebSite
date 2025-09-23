import React from "react";
import { Target, CircleCheckBig } from "lucide-react";

export default function Stories() {
  return (
    <>
      <div className="mt-8 px-4 mx-auto">
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 rounded-full
          py-3 px-6 mb-6 border border-[#126f77]/20"
          >
            <Target className="w-5 h-5 text-[#EB6319]" />

            <span className="text-sm text-[#126F77] font-medium">
              Our Mission & Story
            </span>
          </div>
          <h2 className="block text-4xl md:text-6xl font-bold font-sen text-[#1A1A1A] mb-6 leading-tight">
            Empowering Islamic
            <br />
            <span className="bg-gradient-to-r from-[#126f77] to-[#EB6319] bg-clip-text text-transparent">
              Education Worldwide
            </span>
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
            We are dedicated to transforming Islamic education through
            technology while preserving traditional values and strengthening
            educational communities around the world.
          </p>
        </div>
      </div>
      <div className="mb-20 mt-50 w-[60%] mx-auto  justify-center">
        <div className="text-foreground flex flex-col items-center justify-center gap-6  rounded-xl border-0 bg-gradient-to-r from-primary/5 to-secondary/5 p-8">
          {/* <div className="flex  items-center justify-center gap-4 mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  key={i}
                />
              ))}
            <span className="ml-2 text-2xl font-bold text-foreground">4.9</span>
          </div> */}
          <h2 className="text-foreground text-3xl md:text-4xl font-bold  mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-[#1A1A1A] leading-relaxed text-center mb-8 max-w-4xl mx-auto">
            To simplify madrasa operations through innovative technology,
            enabling educators to focus on what truly matters—nurturing young
            minds, preserving Islamic values, and building stronger educational
            communities that bridge traditional wisdom with modern excellence.
          </p>
          <div className="flex items-center justify-center gap-6 text-md">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CircleCheckBig className="w-5 h-5 text-primary" />
              Technology with Purpose
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CircleCheckBig className="w-5 h-5 text-primary" />
              Preserving Values
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CircleCheckBig className="w-5 h-5 text-primary" />
              Global Impact
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
