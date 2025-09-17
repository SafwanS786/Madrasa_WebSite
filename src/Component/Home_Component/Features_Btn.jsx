import React from "react";
import { ArrowRight } from "lucide-react";
export default function Features_Btn() {
  return (
    <div className="text-center mb-16">
      <p className="text-[#6B6B6B] mb-4">Ready to experience these features</p>
      <span className="inline-flex gap-2 bg-gradient-to-r from-[#126f77] to-[#EB6319] text-white rounded-full py-3 px-3">
        Explore All Features <ArrowRight size={20} className="mt-1" />
      </span>
    </div>
  );
}
