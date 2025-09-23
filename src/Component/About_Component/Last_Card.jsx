import { ArrowRight } from "lucide-react";
import React from "react";

export default function Last_Card() {
  return (
    <div>
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#126F77] to-[#EB6319]  p-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-lg rotate-45"></div>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Be part of the transformation in Islamic education. Together, we
              can create stronger educational communities that honor tradition
              while embracing innovation.
            </p>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <button className=" bg-white rounded-md p-2 text-[#126F77] font-bold flex items-center gap-2 px-6 py-3 group ">
              Start Your Journey
              <span className="inline-block leading-none transform transition-all duration-300 group-hover:translate-x-2">
                <ArrowRight size={15} className="font-bold h-5 w-5" />
              </span>
            </button>
            <button className="flex items-center gap-2 bg-white px-6 rounded-md p-3 text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
              {/* <span className=""> */}
              {/* <Mail size={15} className="inline-block" /> */}
              {/* </span> */}
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
