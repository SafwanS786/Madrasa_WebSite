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
    // <section className="py-20">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-16">
    //       <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
    //         Our Global Offices
    //       </h2>
    //       <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
    //         We have offices around the world to better serve our global
    //         community.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-3 gap-4 px-16">
    //     {card_office.map((value, index) => {
    //       return (
    //         <div
    //           className="text-card-foreground flex flex-col gap-6 rounded-xl
    //       border border-gray-200 p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    //           key={index}
    //         >
    //           <div className="flex flex-row items-center gap-4 group">
    //             <div
    //               className=" w-14 h-14 rounded-full flex  items-center text-white justify-center"
    //               style={{
    //                 background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
    //               }}
    //             >
    //               <value.icon className="w-8 h-8" />
    //             </div>
    //             <div className="text-xl font-bold  group-hover:text-primary transition-colors">
    //               {value.Name}
    //             </div>
    //           </div>
    //           <div className="space-y-4">
    //             <div className="flex flex-row items-start gap-4 mt-4 ">
    //               <div className="text-primary">
    //                 <value.loc />
    //               </div>
    //               <div className="text-muted-foreground whitespace-pre-line">
    //                 {value.Add}
    //               </div>
    //             </div>
    //             <div className="flex flex-row gap-4 mt-6">
    //               <div className="text-primary">
    //                 <value.Ph className="w-5 h-5" />
    //               </div>
    //               <div className="text-muted-foreground">{value.call}</div>
    //             </div>
    //             <div className="flex flex-row gap-4 mt-2">
    //               <div className="text-primary">
    //                 <value.Ml className="w-5 h-5" />
    //               </div>
    //               <div className="text-muted-foreground">{value.mail}</div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </section>
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-20 2xl:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-16 2xl:mb-16">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
            Our Global Offices
          </h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            We have offices around the world to better serve our global
            community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-16 2xl:px-16">
          {card_office.map((value, index) => (
            <div
              className="text-card-foreground flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 rounded-xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8 2xl:p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              key={index}
              aria-label={`${value.Name} Office`}
            >
              <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 group">
                <div
                  className="w-10 sm:w-12 md:w-14 lg:w-14 xl:w-14 2xl:w-14 h-10 sm:h-12 md:h-14 lg:h-14 xl:h-14 2xl:h-14 rounded-full flex items-center text-white justify-center"
                  style={{
                    background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                  }}
                >
                  <value.icon className="w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8" />
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold group-hover:text-[#126F77] transition-colors">
                  {value.Name}
                </div>
              </div>
              <div className="space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-4 xl:space-y-4 2xl:space-y-4">
                <div className="flex flex-row items-start gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4">
                  <div className="text-primary">
                    <value.loc className="w-4 sm:w-4.5 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4.5 md:h-5 lg:h-5 xl:h-5 2xl:h-5" />
                  </div>
                  <div className="text-muted-foreground whitespace-pre-line text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                    {value.Add}
                  </div>
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6">
                  <div className="text-primary">
                    <value.Ph className="w-4 sm:w-4.5 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4.5 md:h-5 lg:h-5 xl:h-5 2xl:h-5" />
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                    {value.call}
                  </div>
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 mt-2 sm:mt-2.5 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-3">
                  <div className="text-primary">
                    <value.Ml className="w-4 sm:w-4.5 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4.5 md:h-5 lg:h-5 xl:h-5 2xl:h-5" />
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                    {value.mail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
