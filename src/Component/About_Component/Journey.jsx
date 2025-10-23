import React from "react";

export default function Journey() {
  const JourneyPoint = [
    {
      year: "2024",
      Head: "The Beginning",
      Text: "DeenNest was founded under Ziaat Technolabs Pvt. Ltd., with a vision to bring technology and faith together for better madrasa management.",
    },
    {
      year: "2025",
      Head: "Product Launch",
      Text: "Successfully launched our full platform with PWA and Android apps, empowering madrasas to manage students, maulana, staff and parents seamlessly from anywhere.",
    },
  ];
  return (
    <div className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6">
        Our Journey
      </h1>
      <p className="text-base sm:text-base md:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
        From an inspired idea to a powerful digital platform transforming
        Islamic education across the world.
      </p>
      <div className="max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-18 lg:mt-20">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#126F77] to-[#EB6319]"></div>
          <div className="space-y-12">
            {JourneyPoint.map((value, index) => {
              return (
                <div
                  className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group"
                  key={index}
                >
                  <>
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-full
                flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10"
                    >
                      <span className="text-sm sm:text-base  text-white font-bold">
                        {value.year}
                      </span>
                    </div>
                    <div
                      className="text-card-foreground flex flex-col gap-4 sm:gap-5 md:gap-6 rounded-xl border border-gray-200 flex-1 p-4 sm:p-5 md:p-6 bg-white 
                            hover:shadow-xl transition-shadow group-hover:-translate-y-1"
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-start text-[#1A1A1A] mb-1 sm:mb-1.5 md:mb-2 group-hover:text-[#126F77] transition-colors">
                        {value.Head}
                      </h3>
                      <p className="text-sm sm:text-sm md:text-base text-muted-foreground text-start">
                        {value.Text}
                      </p>
                    </div>
                  </>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
