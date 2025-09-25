import React, { Fragment } from "react";
import { Sparkles, Check, ArrowRight, Star } from "lucide-react";
export default function Pricing_Card() {
  const Pr_data = [
    {
      icon: Check,
      title: "Unlimited students & teachers",
      gradientColor: "#126f77",
      //  gradientTo: "rgba(235, 99, 25, 0.05)",
    },
    {
      icon: Check,
      title: "Complete attendance tracking",
      gradientColor: "#126f77",
      //   flex items-center group/item bg-gradient-to-r from-[#126F77]/5 to-[#EB6319]/5 rounded-lg p-3
    },
    {
      icon: Check,
      title: "Financial management & fee tracking",
      //  gradientFrom:rgba(18, 111, 119, 0.05)
      gradientColor: "#eb6319",
      gradientFrom: "rgba(18, 111, 119, 0.05)",
      gradientTo: "rgba(235, 99, 25, 0.05)",
    },
    {
      icon: Check,
      title: "Parent & teacher communication",
      gradientColor: "#126f77",
      //  gradientTo: "rgba(235, 99, 25, 0.05)",
    },
    {
      icon: Check,
      title: "Advanced reports & analytics",
      //  gradientFrom:rgba(18, 111, 119, 0.05)
      gradientFrom: "rgba(18, 111, 119, 0.05)",
      gradientTo: "rgba(235, 99, 25, 0.05)",
      gradientColor: "#eb6319",
    },
    {
      icon: Check,
      title: "SMS & email notifications",
      gradientColor: "#126f77",
      //  gradientTo: "rgba(235, 99, 25, 0.05)",
    },

    {
      icon: Check,
      title: "24/7 priority support",
      gradientFrom: "rgba(18, 111, 119, 0.05)",
      gradientTo: "rgba(235, 99, 25, 0.05)",
      //  gradientFrom:rgba(18, 111, 119, 0.05)
      gradientColor: "#eb6319",
    },
    {
      icon: Check,
      title: "Mobile app access (iOS & Android)",
      gradientColor: "#126f77",
      //  gradientTo: "rgba(235, 99, 25, 0.05)",
    },
    {
      icon: Check,
      title: "Data backup & security",
      gradientColor: "#126f77",
    },

    {
      icon: Check,
      title: "Multi-language support",
      gradientColor: "#126f77",
      //  gradientTo: "rgba(235, 99, 25, 0.05)",
    },
    {
      icon: Check,
      title: "Document management system",
      gradientColor: "#eb6319",
      //  gradientTo: "rgba(235, 99, 25, 0.05)",
      gradientFrom: "rgba(18, 111, 119, 0.05)",
      gradientTo: "rgba(235, 99, 25, 0.05)",
    },
    {
      icon: Check,
      title: "Custom branding options",
      gradientColor: "#126f77",
      //  gradientTo: "rgba(235, 99, 25, 0.05)",
    },
  ];
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-6 md:py-16 lg:py-20 xl:py-20 2xl:py-20 mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20">
      <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-16 2xl:mb-16">
        <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 text-[#126f77] rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
          <Sparkles className="w-4 sm:w-5 md:w-6 lg:w-6 xl:w-6 2xl:w-6 h-4 sm:h-5 md:h-6 lg:h-6 xl:h-6 2xl:h-6 text-secondary" />
          <span className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-primary font-medium">
            Complete Management System
          </span>
        </div>
      </div>
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] mx-auto">
        <div className="text-card-foreground flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 rounded-xl relative border-0 shadow-[0_0_50px_rgba(18,111,119,0.1)] bg-card">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#126f77] to-[#eb6319] rounded-t-lg"></div>
          <div className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8">
            <div className="flex items-center justify-center mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 mt-6 sm:mt-7 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8">
              <span className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                $59
              </span>
              <div className="ml-1 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2 text-muted-foreground">
                <div className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                  /month <br />
                  <p className="line-through text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                    $99
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-[#eb6319]/10 text-[#eb6319] px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-3 2xl:px-3 py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1 2xl:py-1 rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium">
              <Star className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5" />
              <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                Limited Time: Save 40%
              </span>
            </div>
            <h3 className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 text-[#6B6B6B] text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl leading-relaxed max-w-2xl text-center mx-auto">
              Everything your madrasa needs to operate efficiently and
              effectively, all in one comprehensive platform.
            </h3>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4 xl:space-y-4 2xl:space-y-4 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 ml-4 sm:ml-6 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 mt-12 sm:mt-16 md:mt-18 lg:mt-20 xl:mt-20 2xl:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              {Pr_data.map((data, index) => (
                <div
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 group rounded-2xl p-2 sm:p-2.5 md:p-3 lg:p-3 xl:p-3 2xl:p-3"
                  key={index}
                  style={{
                    background: `linear-gradient(to right,${data.gradientFrom},${data.gradientTo})`,
                  }}
                >
                  <div
                    className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: data.gradientColor,
                    }}
                  >
                    <data.icon className="w-2.5 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-3 h-2.5 sm:h-3 md:h-3 lg:h-3 xl:h-3 2xl:h-3" />
                  </div>
                  <span className="text-[#1A1A1A] text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base font-medium px-1 sm:px-1.5 md:px-2 lg:px-2 xl:px-2 2xl:px-2 py-1 group-hover:text-primary">
                    {data.title}
                  </span>
                </div>
              ))}
            </div>

            <button className="group w-full sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] inline-flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 justify-center whitespace-nowrap font-medium text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg bg-gradient-to-r from-[#EB6319] to-[#D4540E] text-white rounded-md py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 items-center cursor-pointer transition-all duration-300 hover:from-[#D4540E] hover:to-[#EB6319]">
              Start Free Trial
              <ArrowRight className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 ml-1 sm:ml-1.5 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-2 text-[#6B6B6B]">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-12 2xl:gap-12">
                <div className="flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 text-[#6B6B6B] mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                  <Check className="text-primary w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5" />
                  30-day free trial
                </div>
                <div className="flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 text-[#6B6B6B] mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                  <Check className="text-primary w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5" />
                  No setup fees
                </div>
                <div className="flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 text-[#6B6B6B] mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                  <Check className="text-primary w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5" />
                  Cancel anytime
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-muted-foreground">
                Join 500+ institutions already transforming their management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
