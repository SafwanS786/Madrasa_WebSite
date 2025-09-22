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
    <div className="mx-auto px-4 py-4 mb-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 text-[#126f77] rounded-full py-3 px-6 mb-6 ">
          <Sparkles className="w-6 h-6 text-secondary" />
          <span className="text-md text-primary font-medium">
            Complete Management System
          </span>
        </div>
        {/* <h2 className="text-4xl md:text-5xl font-bold font-sen text-[#1A1A1A] mb-6 leading-tight">
          One plan, everything included
        </h2>
        <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
          No hidden fees, no complicated tiers. Just one comprehensive plan with
          everything your madrasa needs to succeed.
        </p> */}
      </div>
      <div className="w-[50%] mx-auto">
        <div className="text-card-foreground flex flex-col gap-6 rounded-xl relative border-0 shadow-[0_0_50px_rgba(18,111,119,0.1)]  bg-card">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#126f77] to-[#eb6319] rounded-t-lg"></div>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4 mt-8">
              <span className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                $59
              </span>
              <div className="ml-2 text-muted-foreground">
                <div className="text-lg">
                  /month <br />
                  <p className="line-through">$99</p>
                </div>
                {/* <sub className="text-md line-through">$99</sub> */}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#eb6319]/10 text-[#eb6319] px-3 p-1 rounded-full text-sm font-medium">
              <Star className="w-5 h-5" />
              <span className="font-semibold text-md">
                Limited Time: Save 40%
              </span>
            </div>
            <h3 className="mt-6 text-[#6B6B6B] text-xl leading-relaxed max-w-2xl text-center mx-auto">
              Everything your madrasa needs to operate efficiently and
              effectively, all in one comprehensive platform.
            </h3>
            <div className="space-y-4 mb-8 ml-8 mt-20 grid grid-cols-2">
              {Pr_data.map((data, index) => (
                <div
                  className="flex items-center gap-4 group rounded-2xl"
                  key={index}
                  style={{
                    background: `linear-gradient(to right,${data.gradientFrom},${data.gradientTo})`,
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: data.gradientColor,
                      //   `linear-gradient(to right,${data.gradientColor})`,
                    }}
                  >
                    <data.icon className="w-3 h-3" />
                  </div>
                  <span
                    className="text-[#1A1A1A] text-lg font-medium px-2 py-1  group-hover:text-primary"
                    // style={{
                    //   background:
                    //     data.gradientFrom && data.gradientTo
                    //       ? `linear-gradient(to right,${data.gradientFrom},${data.gradientTo})`
                    //       : "",
                    //   //   color: "#1A1A1A",
                    // }}
                  >
                    {data.title}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="group w-[90%] inline-flex gap-2 justify-center whitespace-nowrap font-medium text-lg bg-gradient-to-r  from-[#EB6319] to-[#D4540E]
               text-white rounded-md py-3 px-6 items-center cursor-pointer transition-all duration-300 hover:from-[#D4540E] hover:to-[#EB6319] "
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="mt-6 space-y-2 text-[#6B6B6B]">
              {/* <p className="text-sm text-muted-foreground "></p> */}

              <div className="flex flex-row items-center justify-center gap-12">
                <div className="flex gap-2 text-[#6B6B6B] mb-3">
                  <Check className="text-primary" />
                  30-day free trial
                </div>
                <div className="flex  gap-2 text-[#6B6B6B] mb-3">
                  <Check className="text-primary" />
                  No setup fees
                </div>
                <div className="flex  gap-2 text-[#6B6B6B] mb-3">
                  <Check className="text-primary" />
                  Cancel anytime
                </div>
              </div>
              <p className="text-md text-muted-foreground">
                Join 500+ institutions already transforming their management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
