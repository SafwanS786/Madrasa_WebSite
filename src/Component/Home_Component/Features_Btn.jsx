import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Features_Btn() {
  const navigate = useNavigate();
  return (
    <div className="text-center lg:mb-16">
      <p className="text-[#6B6B6B] mb-4 text-xs md:text-base">
        Manage, connect and grow your madrasa with ease.
      </p>
      <span
        className="inline-flex gap-1 bg-gradient-to-r from-[#126f77] to-[#EB6319]
       text-white text-xs rounded-full py-2 px-2 md:py-3 md:px-3 md:gap-2 md:text-lg cursor-pointer font-medium hover:shadow-lg"
        onClick={() => navigate("/features")}
      >
        Explore All Features{" "}
        <ArrowRight size={20} className="mt-1 w-3 h-3 md:w-6 md:h-6" />
      </span>
    </div>
  );
}
