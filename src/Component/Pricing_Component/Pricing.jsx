import React from "react";
import { Calculator } from "lucide-react";

export default function Pricing() {
  return (
    <>
      {/* <div className="absolute inset-0 ">
          <div className="absolute top-20 left-20 w-80 h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div> */}
      <div>
        <div className="mx-auto px-4 py-24 relative z-10">
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full
        py-3 px-6 mb-6 border border-[#126f77]/20 gap-2"
            >
              <Calculator className="w-5 h-5 text-[#EB6319]" />

              <span className="text-[#126F77] font-medium">
                Simple & Transparent
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-sen text-[#1A1A1A] mb-6 leading-tight">
              Honest Pricing for
              <br />
              <span
                className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent
               "
              >
                {/* bg-gradient-to-r from-[#126f77] to-[#EB6319] bg-clip-text text-transparent */}
                Every Madrasa
              </span>
            </h1>
            <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              One simple plan with everything you need. No hidden fees, no
              surprises—just powerful features at an honest price that grows
              with your institution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
