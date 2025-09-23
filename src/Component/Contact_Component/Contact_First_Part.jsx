import React from "react";
import { Headphones } from "lucide-react";
export default function Contact_First_Part() {
  return (
    <>
      <div className="mt-8 px-4 mx-auto ">
        <div className="text-center mb-20 mx-auto px-4 relative z-10">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 rounded-full
          py-3 px-6 mb-6 border border-[#126f77]/20"
          >
            <Headphones className="w-5 h-5 text-[#EB6319]" />

            <span className="text-sm text-[#126F77] font-medium">
              We're Here to Help
            </span>
          </div>
          <h2 className="block text-4xl md:text-6xl font-bold font-sen text-[#1A1A1A] mb-6 leading-tight">
            Get in Touch
            <br />
            <span className="bg-gradient-to-r from-[#126f77] to-[#EB6319] bg-clip-text text-transparent">
              With Our Team
            </span>
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
            Have questions about our platform? Need help getting started? Our
            dedicated support team is ready to assist you every step of the way.
          </p>
        </div>
      </div>
    </>
  );
}
