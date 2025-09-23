import React from "react";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
// import "./animation.css";

export default function Card() {
  const cards = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      title_down: "+1 (555) 123-4567",
      smt: "24/7 Available",
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions anytime",
      title_down: "support@madrasatech.com",
      smt: "Response within 4 hours",
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team in real-time",
      title_down: "Available on website",
      smt: "Mon-Fri, 9AM-6PM EST",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demonstration",
      title_down: "calendly.com/madrasatech",
      smt: "Flexible scheduling",
      gradientFrom: "#EB6319",
      gradientTo: "#126F77",
    },
  ];
  return (
    <div className="mb-20 p-12">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
          Choose Your Preferred Contact Method
        </h1>
        <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
          We offer multiple ways to get in touch. Choose what works best for
          you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative p-8 text-center group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
          >
            <div className="relative mb-6">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg transition-all duration-500 group-hover:scale-110`}
                style={{
                  background: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
                }}
              >
                <card.icon className="w-10 h-10 text-white" />
              </div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#EB6319]/30 rounded-full
                            opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
              ></div>

              {/* Bottom-left bouncing circle */}
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#126F77]/30 rounded-full
                            opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700"
              ></div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#126F77] transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              {card.description}
            </p>
            {/* <div className="flex items-center justify-center text-[#126F77] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              <span className="text-sm font-medium mr-2">Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div> */}
            <span className="text-primary font-semibold mb-2">
              {card.title_down}
            </span>
            <p className="text-sm text-[#6B6B6B] mt-4">{card.smt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
