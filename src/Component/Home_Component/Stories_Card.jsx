import React from "react";
import { Quote, CircleCheckBig, Star } from "lucide-react";
import Stories_img_1 from "./img/Stories1.jpg";
import Stories_img_2 from "./img/demo2.jpg";
export default function Stories_Card() {
  const Stories_data = [
    {
      icon: Quote,
      icon1: Star,
      title: `"The fee management tools are incredible. We can track payments, send reminders and generate receipts instantly. 
      Our records are more accurate than ever before."`,
      icon2: CircleCheckBig,
      title2: "100% transparent fee tracking",
      Name: "Mo. Abdullah Sahab",
      work: "Principal",
      work_Place: "Dar-e-Arqam Academy India",
      img: Stories_img_1,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Quote,
      icon1: Star,
      title: `"
      DeenNest has completely changed the way our madrasa operates. Attendance, communication, and progress tracking are now effortless. 
      It truly saves us hours every week."`,
      icon2: CircleCheckBig,
      title2: "15+ hours saved weekly",
      Name: "Toshif Shahab",
      work: "Administrator",
      work_Place: "Jamia Arabia Islamia Darul Uloom Bhavnagar Gujarat",
      img: Stories_img_2,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
    {
      icon: Quote,
      icon1: Star,
      title: `"Our Maulanas adapted to DeenNest in just one day. The interface is simple, and student 
      updates are visible to parents in real time. It has brought our whole community closer."`,
      icon2: CircleCheckBig,
      title2: "Better communication & faster updates",
      Name: "Mo. Ayyub",
      work: "Administrator",
      work_Place: "Madrasa-e-Talimul Islam",
      img: Stories_img_1,
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
  ];
  return (
    <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24">
      <div
        className="grid md:grid-cols-3 gap-8 mb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
      xl:grid-cols-3 2xl:grid-cols-3 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8  sm:mb-12 md:mb-16 lg:mb-16 xl:mb-16 2xl:mb-16"
      >
        {Stories_data.map((item, index) => (
          <div key={index} className="relative group rounded-2xl">
            <div
              className="text-[#1A1A1A] flex flex-col gap-2 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 rounded-xl group relative border-0 bg-card 
                  shadow-[0_0_40px_rgba(18,111,119,0.15)] 
                  hover:bg-card/95 h-full mb-4 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8
                  transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#126f77] to-[#eb6319] 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
              ></div>
              <div className="mt-2 flex flex-col sm:mt-3 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4  px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 ">
                <div
                  className="w-12 h-12 rounded-2xl  flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom},${item.gradientTo})`,
                  }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-secondary ">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <item.icon1
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-secondary inline-block mr-1"
                        fill="currentColor"
                      />
                    ))}
                </div>
              </div>
              <p className="text-foreground leading-relaxed p-4 pt-0">
                {item.title}
              </p>
              <div className="w-fit ml-4 inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium ">
                <item.icon2 className="w-3 h-3" />
                {item.title2}
              </div>
              <div className="flex items-center p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4">
                <div className="relative mr-2 sm:mr-3 md:mr-4 lg:mr-4 xl:mr-4 2xl:mr-4">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden ml-2 sm:ml-3 md:ml-4 lg:ml-4 xl:ml-4 2xl:ml-4 
                   sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12"
                  >
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
                  <div className="font-semibold text-foreground text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                    {item.Name}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base ">
                    {item.work}
                  </div>
                  <div className="text-primary font-medium text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
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
