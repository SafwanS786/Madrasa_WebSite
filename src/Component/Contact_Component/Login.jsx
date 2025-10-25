import React from "react";
import { UserLock } from "lucide-react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-20 2xl:py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8">
          <div className="max-w-4xl mx-auto">
            <form
              className="bg-white shadow-xl rounded-xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-12 2xl:p-12 space-y-4 sm:space-y-5
           md:space-y-6 lg:space-y-6 xl:space-y-6 2xl:space-y-6"
            >
              {/* First + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
                <div className="space-y-2">
                  <label className="text-sm md:text-sm lg:text-base font-medium text-[#1A1A1A]">
                    Madrasa Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Madrasa name"
                    className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm md:text-sm lg:text-base  font-medium text-[#1A1A1A]">
                    Admin Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Admin name"
                    className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
                <div className="space-y-2">
                  <label className="text-sm md:text-sm lg:text-base  font-medium text-[#1A1A1A]">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 outline-none focus:ring-2 focus:ring-[#126F77] transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm md:text-sm lg:text-base font-medium text-[#1A1A1A]">
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
              <div className="flex items-end justify-end">
                <button
                  className="px-6 py-2 bg-[#126F77] text-white font-medium rounded-lg shadow-md hover:bg-[#0f5c63]
               transition-all hover:scale-105  origin-right cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
