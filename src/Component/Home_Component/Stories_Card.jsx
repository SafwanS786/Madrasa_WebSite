import React from "react";
import { Quote, CircleCheckBig, Star } from "lucide-react";
import Stories_img_1 from "./img/Stories1.jpg";
import Stories_img_2 from "./img/demo2.jpg";
export default function Stories_Card() {
  const Stories_data = [
    {
      icon: Quote,
      icon1: Star,
      title: `"This system has completely revolutionized our madrasa operations. The attendance tracking and parent communication features have saved us countless hours every week."`,
      icon2: CircleCheckBig,
      title2: "15+ hours saved weekly",
      Name: "Ahmad Hassan",
      work: "Principal",
      work_Place: "Al-Noor Islamic Academy",
      img: Stories_img_1,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Quote,
      icon1: Star,
      title: `"The financial management features are simply outstanding. We can track fees, generate receipts, and maintain completely transparent records with ease."`,
      icon2: CircleCheckBig,
      title2: "100% fee collection rate",
      Name: "Fatima Al-Zahra",
      work: "Administrator",
      work_Place: "Masjid Al-Falah School",
      img: Stories_img_2,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Quote,
      icon1: Star,
      title: `"The user-friendly interface meant our entire staff could learn the system quickly. The student records system has transformed our workflow completely."`,
      icon2: CircleCheckBig,
      title2: "100% fee collection rate",
      Name: "Fatima Al-Zahra",
      work: "Administrator",
      work_Place: "Masjid Al-Falah School",
      img: Stories_img_1,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
  ];
  return (
    <div className="mb-20 px-16">
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {Stories_data.map((item, index) => (
          <div key={index} className="relative group rounded-2xl">
            <div
              className="text-[#1A1A1A] flex flex-col gap-6 rounded-xl group relative border-0 bg-card 
                  shadow-[0_0_40px_rgba(18,111,119,0.15)] 
                  hover:bg-card/95 h-full mb-8
                  transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#126f77] to-[#eb6319] 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
              ></div>
              <div className="mt-4 flex flex-col px-6 ">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom},${item.gradientTo})`,
                  }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-secondary">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <item.icon1
                        key={i}
                        className="w-4 h-4 text-secondary inline-block mr-1"
                        fill="currentColor"
                      />
                    ))}
                </div>
              </div>
              <p className="text-foreground leading-relaxed p-4">
                {item.title}
              </p>
              {/* <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 rounded-t-lg"
              ></div> */}
              <div className="w-fit ml-4 inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium ">
                <item.icon2 className="w-3 h-3" />
                {item.title2}
              </div>
              <div className="flex items-center">
                <div className="relative mr-4">
                  <div className="ml-4 w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={item.img}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <item.icon2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {item.Name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.work}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {item.work_Place}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
