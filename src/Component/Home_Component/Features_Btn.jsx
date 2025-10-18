import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Features_Btn() {
  const navigate = useNavigate();
  return (
    <div className="text-center lg:mb-16">
      <p className="text-[#6B6B6B] mb-4">
        Manage, connect and grow your madrasa with ease.
      </p>
      <span
        className="inline-flex gap-2 bg-gradient-to-r from-[#126f77] to-[#EB6319]
       text-white rounded-full py-3 px-3 cursor-pointer font-medium hover:shadow-lg"
        onClick={() => navigate("/features")}
      >
        Explore All Features <ArrowRight size={20} className="mt-1" />
      </span>
    </div>
  );
}
