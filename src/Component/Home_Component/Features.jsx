import React from "react";
import { Zap } from "lucide-react";

export default function Features() {
  return (
    <div className="mt-8 px-4 mx-auto">
      <div className="text-center mb-20">
        <div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 rounded-full
        py-3 px-6 mb-6 border border-[#126f77]/20"
        >
          <Zap className="w-5 h-5 text-[#EB6319]" />

          <span className="text-sm text-[#126F77] font-medium">
            Powerful Features
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-sen text-[#1A1A1A] mb-6 leading-tight">
          Everything You Need to
          <br />
          <span className="block bg-gradient-to-r from-[#126f77] to-[#EB6319] bg-clip-text text-transparent">
            {" "}
            Manage Your Madrasa
          </span>
        </h2>
        <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
          Our comprehensive platform provides all the tools you need to
          streamline operations, enhance learning, and build stronger
          educational communities.
        </p>
      </div>
    </div>
  );
}
