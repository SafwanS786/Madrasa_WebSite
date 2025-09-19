// import React from "react";
// import { Calendar } from "lucide-react";
// export default function ScheduleDemo() {
//   return (
//     <section className="py-20 bg-gradient-to-br  from-[#126F77] via-[#0F5A61] to-[#126F77] relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#EB6319]/20 rounded-full blur-lg animate-bounce"></div>
//         <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-lg transform rotate-45 animate-spin"></div>
//       </div>
//       <div className="mx-auto px-4 relative z-10 flex flex-col justify-center">
//         <div className="max-w-4xl mx-auto text-center mb-12">
//           <div
//             className="flex flex-row gap-4 text-sm text-white
//            bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit"
//           >
//             <Calendar className="w-5 h-5" />
//             <span>Schedule Your Demo</span>
//           </div>
//           <div className="flex flex-col justify-center">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
//               See Our Platform in
//               <span className="block bg-gradient-to-r from-[#EB6319] to-[#FF8C42] bg-clip-text text-transparent">
//                 Action Today
//               </span>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Calendar, CircleCheckBig, Clock, ArrowRight } from "lucide-react";

export default function ScheduleDemo() {
  const card = [
    {
      icon: CircleCheckBig,
      head: "Personalized Walkthrough",
      Para: "Get a customized demo based on your madrasa's specific needs and requirements.",
    },
    {
      icon: Clock,
      head: "Quick 30-Minute Session",
      Para: "See all key features and get your questions answered in just half an hour.",
    },
    {
      icon: ArrowRight,
      head: "Instant Free Trial Access",
      Para: "Start your 30-day free trial immediately after the demo session.",
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-[#126F77] via-[#0F5A61] to-[#126F77] relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#EB6319]/20 rounded-full blur-lg animate-bounce"></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-lg transform rotate-45 animate-spin"
          style={{ animationDuration: "6s" }} // slower spin
        ></div>
      </div>

      {/* Content */}
      <div className="mx-auto px-4 relative z-10 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Badge */}
          <div
            className="flex flex-row gap-2 items-center justify-center text-sm text-white
             bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit mx-auto"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule Your Demo</span>
          </div>

          {/* Heading directly under badge */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            See Our Platform in{" "}
            <span className="block bg-gradient-to-r from-[#EB6319] to-[#FF8C42] bg-clip-text text-transparent">
              Action Today
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Book a personalized demo and discover how our platform can transform
            your madrasa management in just 30 minutes.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-start gap-8">
        <div className="flex flex-col gap-6">
          {card.map((item, index) => (
            <div key={index} className=" p-4 max-w-md">
              <div className="flex flex-row gap-4">
                <div>
                  <item.icon className="w-12 h-12 rounded-lg p-2 items-center flex-shrink-0 text-white bg-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.head}
                  </h3>
                  <p className="text-white/80">{item.Para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-4 text-white bg-white/10 items-center p-12 rounded-2xl border border-white/20">
            <h1 className="text-2xl font-bold mb-2">Ready to Get Started?</h1>
            <p className="text-white/80">
              Choose your preferred time and we'll contact you
            </p>
            <button className="group inline-flex items-center justify-center gap-2 font-medium p-2 w-full rounded-md bg-secondary  group-hover:bg-[#d4540e]">
              Book Demo Now
              <span>
                <ArrowRight size={20} />
              </span>
            </button>
            <p className="text-white/70 text-sm mb-2">Or call us directly:</p>
            <p className="text-lg font-semibold">+1 (555) 123-4567</p>
            <div className="border-t border-white/20 pt-4">
              <p className="text-white/60 text-sm text-center">
                ✓ No commitment required • ✓ Free consultation • ✓<br /> Instant
                setup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
