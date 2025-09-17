import React from "react";
import { Sparkles } from "lucide-react";
export default function Pricing() {
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-lg"></div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-foreground">$59</span>
                <div className="ml-2 text-muted-foreground ">
                  <div className="text-lg">/month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
