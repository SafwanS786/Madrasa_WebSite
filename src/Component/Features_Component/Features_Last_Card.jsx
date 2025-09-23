import React from "react";
import { Zap, ArrowRight, Play, Crown } from "lucide-react";
// import { LeftArrow } from "react-icons/bi";

export default function Features_Last_Card() {
  return (
    <div className="px-16 text-center">
      <div className="mt-20  bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-lg rotate-45"></div>
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Ready to Transform Your Madrasa?
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience All Features
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how these powerful features can
            transform your madrasa management.
          </p>
          <div className="flex flex-row justify-center gap-4">
            <button className="bg-white rounded-md p-2 text-[#126F77] font-bold  inline-flex  items-center gap-2 px-6 py-3 group">
              Start Free Trial
              <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
                <ArrowRight size={15} className="font-bold h-5 w-5" />
              </span>
            </button>
            <button className="flex items-center gap-2 bg-white  rounded-md p-3 text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
              <span className="">
                <Play size={15} className="inline-block" />
              </span>
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
