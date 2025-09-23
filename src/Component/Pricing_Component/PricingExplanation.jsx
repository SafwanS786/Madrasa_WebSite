import React from "react";
import { Users, Zap, Star } from "lucide-react";
export default function PricingExplanation() {
  const card = [
    {
      icon: Users,
      Head: "Unlimited Users",
      Para: "No per-user fees. Add as many students, teachers, and administrators as you need.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Zap,
      Head: "All Features Included",
      Para: "Access to every feature and capability with no hidden premium tiers or add-ons.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Star,
      Head: "Premium Support",
      Para: "24/7 priority support, training, and dedicated success manager included.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];
  return (
    <div className="mx-auto px-4 py-4 text-center">
      <h1 className="text-3xl font-semibold text-[#1A1A1A] mb-6">
        Why Our Pricing Makes Sense
      </h1>
      <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-8">
        We believe in transparent, fair pricing that provides exceptional value
        for your investment.
      </p>
      <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-2">
        {card.map((value, index) => (
          <div className="flex justify-center" key={index}>
            <div className="flex flex-col items-center gap-4 rounded-xl p-10 text-center border border-gray-200 bg-white hover:shadow-xl transition-shadow w-xl ">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-medium text-[#1A1A1A] mb-2">
                {value.Head}
              </h2>
              <p className="text-[#6B6B6B]">{value.Para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
