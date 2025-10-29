import React from "react";
import { Users, Zap, Star } from "lucide-react";
export default function PricingExplanation() {
  const card = [
    {
      icon: Users,
      Head: "Simple Per-Student Pricing",
      Para: "Pay only for the number of students you manage. Add more anytime as your madrasa grows.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Zap,
      Head: "Core Features Included",
      Para: "All essential tools are available to every madrasa, with optional flexibility to expand as needed.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Star,
      Head: "Priority Assistance",
      Para: "Get quick help during working hours through chat and email for a smooth experience.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-20 2xl:py-20 text-center">
      <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
        Why Our Pricing Makes Sense
      </h1>
      <p className="text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8">
        We believe in clear, fair pricing that gives your madrasa everything it
        needs—without hidden costs or confusing plans.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-8 2xl:gap-8">
        {card.map((value, index) => (
          <div className="flex justify-center" key={index}>
            <div className="flex flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 rounded-xl p-6 sm:p-8 md:p-10 lg:p-10 xl:p-10 2xl:p-10 text-center border border-gray-200 bg-white hover:shadow-xl transition-shadow w-full sm:w-[90%] md:w-[85%] lg:w-full xl:w-full 2xl:w-full">
              <div
                className="w-10 sm:w-12 md:w-14 lg:w-14 xl:w-14 2xl:w-14 h-10 sm:h-12 md:h-14 lg:h-14 xl:h-14 2xl:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                style={{
                  background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                }}
              >
                <value.icon className="w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8 text-white" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-medium text-[#1A1A1A] mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2">
                {value.Head}
              </h2>
              <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B]">
                {value.Para}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-10 text-center flex justify-center items-center">
        <h3 className="text-base md:text-lg font-medium text-[#1A1A1A]">
          One plan. Clear pricing. Flexibility when you need it.
        </h3>
      </div>
    </div>
  );
}
