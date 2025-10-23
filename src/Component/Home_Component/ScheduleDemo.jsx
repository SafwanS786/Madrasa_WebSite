import React from "react";
import { Calendar, CircleCheckBig, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ScheduleDemo() {
  const navigate = useNavigate();
  const card = [
    {
      icon: CircleCheckBig,
      head: "Personalized Walkthrough",
      Para: "Get a live demo tailored to your madrasa’s setup, needs, and teaching style.",
    },
    {
      icon: Clock,
      head: "Quick 30-Minute Session",
      Para: "See how everything works and get all your questions answered in one short session.",
    },
    {
      icon: ArrowRight,
      head: "Instant Free Trial Access",
      Para: "Start your free 15-day trial right after your demo no long forms or waiting.",
    },
  ];
  return (
    <section className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-20 2xl:py-20 bg-gradient-to-br from-[#126F77] via-[#0F5A61] to-[#126F77] relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-20 2xl:top-20 left-10 sm:left-12 md:left-16 lg:left-20 xl:left-20 2xl:left-20 w-24 sm:w-28 md:w-32 lg:w-32 xl:w-32 2xl:w-32 h-24 sm:h-28 md:h-32 lg:h-32 xl:h-32 2xl:h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 2xl:bottom-20 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-20 2xl:right-20 w-16 sm:w-20 md:w-24 lg:w-24 xl:w-24 2xl:w-24 h-16 sm:h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 bg-[#EB6319]/20 rounded-full blur-lg animate-bounce"></div>
        <div
          className="absolute top-1/2 left-1/4 w-12 sm:w-14 md:w-16 lg:w-16 xl:w-16 2xl:w-16 h-12 sm:h-14 md:h-16 lg:h-16 xl:h-16 2xl:h-16 bg-white/10 rounded-lg transform rotate-45 animate-spin"
          style={{ animationDuration: "6s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 relative z-10 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-12 2xl:mb-12">
          {/* Badge */}
          <div className="flex flex-row gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 items-center justify-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-white bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-3.5 md:px-4 lg:px-4 xl:px-4 2xl:px-4 py-1.5 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 w-fit mx-auto">
            <Calendar className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5" />
            <span>Schedule Your Demo</span>
          </div>

          {/* Heading directly under badge */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
            See DeenNest in
            <span className="block bg-gradient-to-r from-[#EB6319] to-[#FF8C42] bg-clip-text text-transparent">
              Action Today
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Book a personalized demo and explore how DeenNest can simplify and
            organize your madrasa management — all in just 30 minutes.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center items-start gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
          {card.map((item, index) => (
            <div
              key={index}
              className="p-3 sm:p-3.5 md:p-4 lg:p-4 xl:p-4 2xl:p-4 max-w-md"
            >
              <div className="flex flex-row gap-3 sm:gap-3.5 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
                <div>
                  <item.icon className="w-10 sm:w-11 md:w-12 lg:w-12 xl:w-12 2xl:w-12 h-10 sm:h-11 md:h-12 lg:h-12 xl:h-12 2xl:h-12 rounded-lg p-1.5 sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 items-center flex-shrink-0 text-white bg-secondary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                    {item.head}
                  </h3>
                  <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-white/80">
                    {item.Para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 text-white bg-white/10 items-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 rounded-2xl border border-white/20">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2">
              Ready to Get Started?
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-white/80">
              Choose your preferred time, and <br /> our team will connect with
              you shortly.
            </p>
            <button onClick={() => navigate("/contact")} className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 font-medium p-1.5 sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 w-full rounded-md bg-secondary hover:bg-[#d4540e]">
              Book Demo Now
              <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
                <ArrowRight
                  size={20}
                  className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 font-bold"
                />
              </span>
            </button>
            <p className="text-white/70 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2">
              Or call us directly:
            </p>
            <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-semibold">
              <a href="tel:+917575068585">+91 7575 06 8585</a>
            </p>
            <div className="border-t border-white/20 pt-2 sm:pt-3 md:pt-4 lg:pt-4 xl:pt-4 2xl:pt-4">
              <p className="text-white/60 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-center">
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
