import React from "react";
import { CircleCheckBig, Mail, Linkedin } from "lucide-react";
import Stories_img_1 from "../Home_Component/img/Stories1.jpg";
import Stories_img_2 from "../Home_Component/img/demo2.jpg";
export default function Stories_Card() {
  const Stories_data = [
    {
      img: Stories_img_1,
      icon: CircleCheckBig,
      Name: "Dr. Ahmad Hassan",
      work: "Founder & CEO",
      title:
        "Former educator with 15+ years in Islamic education administration. PhD in Educational Technology from Stanford University.",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
      icon1: Mail,
      icon2: Linkedin,
    },
    {
      img: Stories_img_2,
      icon: CircleCheckBig,
      Name: "Fatima Al-Zahra",
      work: "Head of Product",
      title:
        "Software engineer turned educator advocate. Masters in Computer Science with specialization in educational platforms.",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
      icon1: Mail,
      icon2: Linkedin,
    },
    {
      img: Stories_img_1,
      icon: CircleCheckBig,
      Name: "Oman Hassan",
      work: "Administrator",
      title:
        "Technology leader with expertise in scalable educational platforms. Former lead engineer at major EdTech companies.",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
      icon1: Mail,
      icon2: Linkedin,
    },
  ];
  return (
    <div className="mb-20 px-16 mt-30">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {Stories_data.map((item, index) => (
          <div key={index} className="relative group rounded-2xl">
            <div
              className="text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 text-center p-8
             bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={item.img}
                    alt="Image"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-full flex items-center justify-center shadow-lg">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#126F77] transition-colors">
                {item.Name}
              </h3>
              <p className="text-[#EB6319] font-semibold mb-4">{item.work}</p>
              <p className="text-muted-foreground leading-relaxed p-4 text-sm">
                {item.title}
              </p>

              <div className="flex justify-center gap-2 ">
                <button className="border border-gray-200 p-2 rounded-lg bg-[#F8F9FA] hover:bg-[#e9ebef]">
                  <item.icon1 className="w-5 h-5" />
                </button>
                <button className="border border-gray-200 p-2 rounded-lg bg-[#F8F9FA] hover:bg-[#e9ebef]">
                  <item.icon2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
