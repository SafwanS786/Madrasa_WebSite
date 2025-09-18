import React, { Fragment } from "react";
import { Sparkles, Check, ArrowRight } from "lucide-react";
export default function Pricing() {
  const Pr_data = [
    {
      icon: Check,
      title: "Unlimited students & teachers",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Check,
      title: "Complete attendance tracking",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Check,
      title: "Financial management & fee tracking",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Check,
      title: "Parent & teacher communication",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Check,
      title: "Advanced reports & analytics",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Check,
      title: "SMS & email notifications",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },

    {
      icon: Check,
      title: "24/7 priority support",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Check,
      title: "Mobile app access",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Check,
      title: "Enterprise-grade security",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 text-[#126f77] rounded-full py-3 px-6 mb-6 ">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-md text-primary font-medium">
              Simple Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-sen text-[#1A1A1A] mb-6 leading-tight">
            One plan, everything included
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            No hidden fees, no complicated tiers. Just one comprehensive plan
            with everything your madrasa needs to succeed.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl relative border-0 shadow-[0_0_50px_rgba(18,111,119,0.1)] bg-card">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#126f77] to-[#eb6319] rounded-t-lg"></div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4 mt-8">
                <span className="text-5xl font-bold text-foreground">$59</span>
                <div className="ml-2 text-muted-foreground ">
                  <div className="text-lg">/month</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#eb6319]/10 text-[#eb6319] px-3 p-1 rounded-full text-sm font-medium">
                40% off first 3 months
              </div>
              <div className="space-y-4 mb-8 ml-8 mt-8 ">
                {Pr_data.map((data, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white"
                      style={{
                        background: `linear-gradient(to right,${data.gradientFrom},${data.gradientTo})`,
                      }}
                    >
                      <data.icon className="w-3 h-3" />
                    </div>
                    <span className="text-foreground text-[#1A1A1A]">
                      {data.title}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="group w-[90%] inline-flex gap-2 justify-center whitespace-nowrap font-medium text-lg bg-gradient-to-r from-[#126f77] to-[#EB6319]
               text-white rounded-md py-3 px-6 items-center cursor-pointer transition-all duration-300 hover:from-[#126f77]/90 hover:to-[#EB6319]/90"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="mt-6 space-y-2 text-[#6B6B6B]">
                <p className="text-sm text-muted-foreground ">
                  ✓ 30-day free trial • ✓ No setup fees • ✓ Cancel anytime
                </p>
                <p className="text-sm text-muted-foreground">
                  Trusted by 500+ institutions worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4 text-[#6B6B6B]">
              Need a custom plan for your institution?
            </p>
            <button className="rounded-md border border-[#126f77] text-[#126f77] p-1 font-semibold px-2 hover:bg-[#126f77] hover:text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
