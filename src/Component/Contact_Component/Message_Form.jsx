import React from "react";
import { ArrowRight, Send } from "lucide-react";

export default function Message_Form() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-20 2xl:py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-12 2xl:mb-12">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
              Send Us a Message
            </h1>
            <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Have a question or need help getting started? Send us a message
              and we’ll reply shortly.
            </p>
          </div>

          <form
            className="bg-white shadow-xl rounded-xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-12 2xl:p-12 space-y-4 sm:space-y-5
           md:space-y-6 lg:space-y-6 xl:space-y-6 2xl:space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-[#1A1A1A]">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-[#1A1A1A]">
                  Last Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                  optional
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-[#1A1A1A]">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-[#1A1A1A]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-[#1A1A1A]">
                  Institution / Madrasa Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your madrasa name"
                  className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-[#1A1A1A]">
                  Your Role
                </label>
                <select className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all">
                  <option>Select your role</option>
                  <option>Admin / Principal</option>
                  <option>Maulana / Staff</option>
                  <option>Parent</option>
                  <option>IT / Technical Team</option>
                  <option>Student</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-[#1A1A1A]">
                Purpose / Inquiry Type *
              </label>
              <select
                className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                required
                placeholder="Select what you’d like help with"
              >
                <option>Schedule a Demo</option>
                <option>Need Help with Setup</option>
                <option>Pricing / Subscription Query</option>
                <option>Technical Support</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-[#1A1A1A]">
                Message *
              </label>
              <textarea
                rows={3}
                placeholder="Tell us more about how we can help you..."
                className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 h-24 sm:h-24 md:h-32  outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-3 sm:w-3.5 md:w-4 lg:w-4 xl:w-4 2xl:w-4 h-3 sm:h-3.5 md:h-4 lg:h-4 xl:h-4 2xl:h-4"
              />
              <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-[#333]">
                I'd like to receive updates about new features and educational
                resources
              </span>
            </div>
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-4 2xl:py-4 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white font-medium rounded-lg bg-gradient-to-r from-[#126F77] to-[#EB6319] hover:scale-105 hover:opacity-90 transition-all duration-300"
              aria-label="Send Message"
            >
              <Send className="w-4 sm:w-4 md:w-4.5 lg:w-4.5 xl:w-4.5 2xl:w-4.5 h-4 sm:h-4 md:h-4.5 lg:h-4.5 xl:h-4.5 2xl:h-4.5" />
              Send Message
              <ArrowRight className="w-4 sm:w-4 md:w-4.5 lg:w-4.5 xl:w-4.5 2xl:w-4.5 h-4 sm:h-4 md:h-4.5 lg:h-4.5 xl:h-4.5 2xl:h-4.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
