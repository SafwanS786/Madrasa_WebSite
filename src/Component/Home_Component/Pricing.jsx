// import React, { Fragment } from "react";
// import { Sparkles, Check, ArrowRight } from "lucide-react";
// export default function Pricing() {
//   const Pr_data = [
//     {
//       icon: Check,
//       title: "Unlimited students & teachers",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },
//     {
//       icon: Check,
//       title: "Complete attendance tracking",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },
//     {
//       icon: Check,
//       title: "Financial management & fee tracking",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },
//     {
//       icon: Check,
//       title: "Parent & teacher communication",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },
//     {
//       icon: Check,
//       title: "Advanced reports & analytics",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },
//     {
//       icon: Check,
//       title: "SMS & email notifications",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },

//     {
//       icon: Check,
//       title: "24/7 priority support",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },
//     {
//       icon: Check,
//       title: "Mobile app access",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },
//     {
//       icon: Check,
//       title: "Enterprise-grade security",
//       gradientFrom: "#126f77",
//       gradientTo: "#eb6319",
//     },
//   ];
//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto px-4">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 text-[#126f77] rounded-full py-3 px-6 mb-6 ">
//             <Sparkles className="w-6 h-6 text-primary" />
//             <span className="text-md text-primary font-medium">
//               Simple Pricing
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold font-sen text-[#1A1A1A] mb-6 leading-tight">
//             One plan, everything included
//           </h2>
//           <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
//             No hidden fees, no complicated tiers. Just one comprehensive plan
//             with everything your madrasa needs to succeed.
//           </p>
//         </div>
//         <div className="max-w-lg mx-auto">
//           <div className="text-card-foreground flex flex-col gap-6 rounded-xl relative border-0 shadow-[0_0_50px_rgba(18,111,119,0.1)] bg-card">
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#126f77] to-[#eb6319] rounded-t-lg"></div>
//             <div className="text-center mb-8">
//               <div className="flex items-center justify-center mb-4 mt-8">
//                 <span className="text-5xl font-bold text-foreground">$59</span>
//                 <div className="ml-2 text-muted-foreground ">
//                   <div className="text-lg">/month</div>
//                 </div>
//               </div>
//               <div className="inline-flex items-center gap-2 bg-[#eb6319]/10 text-[#eb6319] px-3 p-1 rounded-full text-sm font-medium">
//                 40% off first 3 months
//               </div>
//               <div className="space-y-4 mb-8 ml-8 mt-8 ">
//                 {Pr_data.map((data, index) => (
//                   <div className="flex items-center gap-3" key={index}>
//                     <div
//                       className="w-5 h-5 rounded-full flex items-center justify-center text-white"
//                       style={{
//                         background: `linear-gradient(to right,${data.gradientFrom},${data.gradientTo})`,
//                       }}
//                     >
//                       <data.icon className="w-3 h-3" />
//                     </div>
//                     <span className="text-[#1A1A1A]">{data.title}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 className="group w-[90%] inline-flex gap-2 justify-center whitespace-nowrap font-medium text-lg bg-gradient-to-r from-[#126f77] to-[#EB6319]
//                text-white rounded-md py-3 px-6 items-center cursor-pointer transition-all duration-300 hover:from-[#126f77]/90 hover:to-[#EB6319]/90"
//               >
//                 Start Free Trial
//                 <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
//               </button>
//               <div className="mt-6 space-y-2 text-[#6B6B6B]">
//                 <p className="text-sm text-muted-foreground ">
//                   ✓ 30-day free trial • ✓ No setup fees • ✓ Cancel anytime
//                 </p>
//                 <p className="text-sm text-muted-foreground">
//                   Trusted by 500+ institutions worldwide
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <p className="text-muted-foreground mb-4">
//               Need a custom plan for your institution?
//             </p>
//             <button className="rounded-md border border-[#126f77] text-[#126f77] p-1 font-semibold px-2 hover:bg-[#126f77] hover:text-white">
//               Contact Sales
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
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
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-24 2xl:py-24">
      {/* Updated: Added responsive padding for the section */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Updated: Added responsive padding for the container */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-16 2xl:mb-16">
          {/* Updated: Added responsive margin-bottom */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#EB6319]/10 text-[#126f77] rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-6">
            {/* Updated: Added responsive padding for the badge */}
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 text-primary" />
            {/* Updated: Added responsive icon sizes */}
            <span className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg text-primary font-medium">
              Simple Pricing
            </span>
            {/* Updated: Added responsive font sizes for the badge text */}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold font-sen text-[#1A1A1A] mb-6 leading-tight">
            One plan, everything included
          </h2>
          {/* Updated: Added responsive font sizes for the heading */}
          <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            No hidden fees, no complicated tiers. Just one comprehensive plan
            with everything your madrasa needs to succeed.
          </p>
          {/* Updated: Added responsive font sizes for the paragraph */}
        </div>
        <div className="max-w-lg mx-auto">
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl relative border-0 shadow-[0_0_50px_rgba(18,111,119,0.1)] bg-card">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#126f77] to-[#eb6319] rounded-t-lg"></div>
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8">
              {/* Updated: Added responsive margin-bottom */}
              <div className="flex items-center justify-center mb-4 mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8">
                {/* Updated: Added responsive margin-top */}
                <span className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-foreground">
                  $59
                </span>
                {/* Updated: Added responsive font sizes for the price */}
                <div className="ml-2 text-muted-foreground">
                  <div className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
                    /month
                  </div>
                  {/* Updated: Added responsive font sizes for the "/month" text */}
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#eb6319]/10 text-[#eb6319] px-3 p-1 sm:p-1 md:p-1 lg:p-1 xl:p-1 2xl:p-1 rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base font-medium">
                40% off first 3 months
              </div>
              {/* Updated: Added responsive padding and font sizes for the discount badge */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4 xl:space-y-4 2xl:space-y-4 mb-4 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 ml-4 sm:ml-6 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8">
                {/* Updated: Added responsive spacing and margins */}
                {Pr_data.map((data, index) => (
                  <div
                    className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3"
                    key={index}
                  >
                    {/* Updated: Added responsive gap for the feature items */}
                    <div
                      className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 rounded-full flex items-center justify-center text-white"
                      style={{
                        background: `linear-gradient(to right,${data.gradientFrom},${data.gradientTo})`,
                      }}
                    >
                      <data.icon className="w-3 h-3 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-3 2xl:h-3" />
                      {/* Updated: Added responsive icon sizes */}
                    </div>
                    <span className="text-[#1A1A1A] text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                      {data.title}
                    </span>
                    {/* Updated: Added responsive font sizes for the feature text */}
                  </div>
                ))}
              </div>
              <button className="group w-[90%] inline-flex gap-2 justify-center whitespace-nowrap font-medium text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl bg-gradient-to-r from-[#126f77] to-[#EB6319] text-white rounded-md py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 items-center cursor-pointer transition-all duration-300 hover:from-[#126f77]/90 hover:to-[#EB6319]/90">
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                {/* Updated: Added responsive font and icon sizes for the button */}
              </button>
              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 space-y-2 text-[#6B6B6B]">
                {/* Updated: Added responsive margin-top */}
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-muted-foreground">
                  ✓ 30-day free trial • ✓ No setup fees • ✓ Cancel anytime
                </p>
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-muted-foreground">
                  Trusted by 500+ institutions worldwide
                </p>
                {/* Updated: Added responsive font sizes for the footer text */}
              </div>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12">
            {/* Updated: Added responsive margin-top */}
            <p className="text-muted-foreground mb-4 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
              Need a custom plan for your institution?
            </p>
            {/* Updated: Added responsive font sizes */}
            <button className="rounded-md border border-[#126f77] text-[#126f77] p-1 sm:p-1 md:p-1 lg:p-1 xl:p-1 2xl:p-1 font-semibold px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 hover:bg-[#126f77] hover:text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
              Contact Sales
            </button>
            {/* Updated: Added responsive padding and font sizes for the button */}
          </div>
        </div>
      </div>
    </section>
  );
}
