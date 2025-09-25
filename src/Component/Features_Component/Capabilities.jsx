import React from "react";
import {
  Shield,
  Smartphone,
  Globe,
  Archive,
  FileText,
  Settings,
} from "lucide-react";
export default function capabilities() {
  const card = [
    {
      icon: Shield,
      Head: "Data  Security",
      Para: "Enterprise-grade security and data protection",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Smartphone,
      Head: "Mobile Access",
      Para: "Full mobile app for iOS and Android devices",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Globe,
      Head: "Multi-language",
      Para: "Support for Arabic, English, and local languages",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Archive,
      Head: "Data Backup",
      Para: "Automatic daily backups with cloud storage",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: FileText,
      Head: "Document Management",
      Para: "Store and manage all important documents",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Settings,
      Head: "Customization",
      Para: "Flexible settings to match your madrasa's needs",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];
  return (
    // ---------------------
    <div className="text-center mx-auto">
      <div className="flex flex-col items-center mb-8 sm:mb-9 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 mt-12 sm:mt-16 md:mt-18 lg:mt-20 xl:mt-20 2xl:mt-20">
          Additional Capabilities
        </h1>
        <p className="block text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] max-w-2xl">
          Even more features to ensure your madrasa has everything it needs to
          operate efficiently.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 items-center gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-16">
        {card.map((value, index) => {
          return (
            <div
              key={index}
              className="text-card-foreground flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 rounded-xl border-2 border-[#E5E7EB] group bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <div
                className="text-white w-12 sm:w-14 md:w-16 lg:w-16 xl:w-16 2xl:w-16 h-12 sm:h-14 md:h-16 lg:h-16 xl:h-16 2xl:h-16 mt-3 sm:mt-3.5 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 flex items-center justify-center rounded-xl mx-auto mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 transform group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                }}
              >
                <value.icon className="w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8" />
              </div>
              <div>
                <h1 className="font-bold text-[#1A1A1A] mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                  {value.Head}
                </h1>
                <p className="text-muted-foreground mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                  {value.Para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
