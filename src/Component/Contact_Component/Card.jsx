import React from "react";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";

export default function Card() {
  const cards = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team for quick help.",
      title_down: "+91 (7575068585)",
      smt_Head: " Available: ",
      smt: "  Mon-Fri,10 AM - 6 PM IST",
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Mail,
      title: "Email Support",
      description:
        "Send us your questions anytime and get a detailed response.",
      title_down: "support@deennest.com",
      smt_Head: " Response time: ",
      smt: " Within 24 hours on working days",
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team in real-time instant answers.",
      title_down: "http://deennest.com/",
      smt_Head: " Hours: ",
      smt: "Mon-Fri, 9AM-6PM EST",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Calendar,
      title: "Schedule a Demo",
      description:
        "Book a personalized walkthrough of DeenNest with our product expert.",
      title_down: "http://calendly.com/deennest",
      smt_Head: " Availability: ",
      smt: "Flexible  time slots",
      gradientFrom: "#EB6319",
      gradientTo: "#126F77",
    },
  ];
  return (
    <div className="mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12">
      <div className="text-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
          Choose How You’d Like to Reach Us
        </h1>
        <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
          We offer multiple ways to connect — choose the one that’s most
          convenient for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 mt-12 sm:mt-16 md:mt-18 lg:mt-20 xl:mt-20 2xl:mt-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative p-4 sm:p-5 md:p-6 lg:p-8 xl:p-8 2xl:p-8 text-center group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
            aria-label={card.title}
          >
            <div className="relative mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
              <div
                className="w-16 sm:w-18 md:w-20 lg:w-20 xl:w-20 2xl:w-20 h-16 sm:h-18 md:h-20 lg:h-20 xl:h-20 2xl:h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
                }}
              >
                <card.icon className="w-8 sm:w-9 md:w-10 lg:w-10 xl:w-10 2xl:w-10 h-8 sm:h-9 md:h-10 lg:h-10 xl:h-10 2xl:h-10 text-white" />
              </div>
              <div className="absolute -top-2 sm:-top-2.5 -right-2 sm:-right-2.5 w-3 sm:w-3.5 md:w-4 lg:w-4 xl:w-4 2xl:w-4 h-3 sm:h-3.5 md:h-4 lg:h-4 xl:h-4 2xl:h-4 bg-[#EB6319]/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 sm:-bottom-2.5 -left-2 sm:-left-2.5 w-2 sm:w-2.5 md:w-3 lg:w-3 xl:w-3 2xl:w-3 h-2 sm:h-2.5 md:h-3 lg:h-3 xl:h-3 2xl:h-3 bg-[#126F77]/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700"></div>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold text-[#1A1A1A] mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 group-hover:text-[#126F77] transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] leading-relaxed mb-6 sm:mb-7 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
              {card.description}
            </p>

            <div className="">
              <h2 className="inline font-semibold">{card.smt_Head}</h2>
              <p className="inline text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-[#6B6B6B] mt-4 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4">
                {card.smt}
              </p>
            </div>
            <div className="mt-5">
              <span
                className="text-primary font-semibold mb-2 sm:mb-2.5 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 
              text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base cursor-pointer"
              >
                {card.title_down}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
