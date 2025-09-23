import React from "react";
import { Building2, MapPin, Phone, Mail } from "lucide-react";

export default function Global_Office() {
  const card_office = [
    {
      icon: Building2,
      Name: "New York",
      loc: MapPin,
      Ph: Phone,
      Ml: Mail,
      Add: `123 Business Ave, Suite 400
            New York, NY 10001`,
      call: `+1 (555) 123-4567`,
      mail: "ny@madrasatech.com",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Building2,
      Name: "London",
      loc: MapPin,
      Ph: Phone,
      Ml: Mail,
      Add: `45 Tech Street, Floor 3
            London, EC1A 1BB, UK`,
      call: `+44 20 7123 4567`,
      mail: "uk@madrasatech.com",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Building2,
      Name: "Dubai",
      loc: MapPin,
      Ph: Phone,
      Ml: Mail,
      Add: `Dubai Internet City
        Building 12, Office 301
            Dubai, UAE`,
      call: `+971 4 123 4567`,
      mail: "me@madrasatech.com",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Our Global Offices
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            We have offices around the world to better serve our global
            community.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-16">
        {card_office.map((value, index) => {
          return (
            <div
              className="text-card-foreground flex flex-col gap-6 rounded-xl 
          border border-gray-200 p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              key={index}
            >
              <div className="flex flex-row gap-4">
                <div
                  className="w-20 h-20 rounded-full flex  items-center text-white justify-center"
                  style={{
                    background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                  }}
                >
                  <value.icon className="w-10 h-10"/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
