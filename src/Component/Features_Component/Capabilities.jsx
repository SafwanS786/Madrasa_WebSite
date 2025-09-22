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
    <div className="text-center mx-auto">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 mt-20">
          Additional Capabilities
        </h1>
        <p className=" block text-lg text-[#6B6B6B] max-w-2xl">
          Even more features to ensure your madrasa has everything it needs to
          operate efficiently.
        </p>
      </div>
      <div className="grid grid-cols-3 items-center gap-8 px-16">
        {card.map((value, index) => {
          return (
            <div
              key={index}
              className="text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-[#E5E7EB] group bg-white transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <div
                className="text-white w-16 h-16 mt-4 flex items-center justify-center rounded-xl mx-auto mb-2 transform group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                }}
              >
                <value.icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-bold text-[#1A1A1A] mb-2 text-lg">
                  {value.Head}
                </h1>
                <p className="text-muted-foreground mb-4">{value.Para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
