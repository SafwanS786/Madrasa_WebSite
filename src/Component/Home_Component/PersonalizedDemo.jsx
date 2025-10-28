import React from "react";
import { Zap, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PersonalizedDemo() {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 text-center">
      {/* Updated: Added responsive padding for all breakpoints */}
      <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20 2xl:mt-20 bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 relative overflow-hidden">
        {/* Updated: Added responsive margin-top and padding */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-20 2xl:h-20 border-2 border-white rounded-lg rotate-12"></div>
          {/* Updated: Added responsive sizes for the decorative square */}
          <div className="absolute bottom-4 left-4 w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16 border-2 border-white rounded-full"></div>
          {/* Updated: Added responsive sizes for the decorative circle */}
          <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8 bg-white rounded-lg rotate-45"></div>
          {/* Updated: Added responsive sizes for the decorative small square */}
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 2xl:py-2 mb-6">
            {/* Updated: Added responsive padding for the badge */}
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 text-white" />
            {/* Updated: Added responsive icon sizes */}
            <span className="text-white font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">
              Ready to Experience More?
            </span>
            {/* Updated: Added responsive font sizes for the badge text */}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-white mb-4">
            Get a Personalized Demo
          </h3>
          {/* Updated: Added responsive font sizes for the heading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a live demo with our experts and see how our platform can
            transform your madrasa management.
          </p>
          {/* Updated: Added responsive font sizes for the paragraph */}
          <div className="flex flex-row sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {/* Book Live Demo */}
            <button
              className="flex items-center justify-center gap-2 bg-white rounded-md 
                      text-xs sm:text-base md:text-lg font-semibold text-[#126F77] 
                      px-2 sm:px-5 md:px-6 lg:px-7 
                      py-2 sm:py-2.5 md:py-3 
                      shadow-sm hover:shadow-md transition-all duration-300 group w-full sm:w-auto cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <span>Book Live Demo</span>
              <ArrowRight className="h-3 w-3 sm:h-5 sm:w-5 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Watch Video Tour */}
            <button
              className="flex items-center justify-center gap-2 bg-white rounded-md 
                text-xs sm:text-base md:text-lg font-semibold text-[#126F77] 
                px-2 sm:px-5 md:px-6 lg:px-7 
                py-2 sm:py-2.5 md:py-3 
                shadow-sm hover:shadow-md hover:bg-[#126F77] hover:text-white transition-all duration-300 w-full sm:w-auto cursor-pointer"
              onClick={() => navigate("/video-tutorial")}
            >
              <Play className="h-3 w-3 sm:h-5 sm:w-5 md:h-5 md:w-5" />
              <span>Watch Video Tour</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
