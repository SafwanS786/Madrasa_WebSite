import React from "react";
import Cards from "./Features_Card";

export default function Features() {
  return (
    <div className="mt-8 px-4 mx-auto">
      <div className="text-center mb-20">
        <div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 rounded-full
        py-3 px-6 mb-6 border border-[#126f77]/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap w-4 h-4 text-[#EB6319]"
            aria-hidden="true"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
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
      <Cards />
    </div>
  );
}
