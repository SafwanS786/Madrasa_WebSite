import React from "react";
import {
  ArrowRight,
  Users,
  Calendar,
  Wallet,
  MessageCircle,
} from "lucide-react";
// import "./animation.css";

export default function Features_Card() {
  const cards = [
    {
      title: "Student Records",
      description:
        "Comprehensive student information management with easy search and filtering capabilities.",
      icon: Users,
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      title: "Attendance & Reports",
      description:
        "Digital attendance tracking with automated reports and parent notifications.",
      icon: Calendar,
      gradientFrom: "#EB6319",
      gradientTo: "#FF9F43",
    },
    {
      title: "Fee & Finance Tracking",
      description:
        "Complete financial management with fee collection, receipts, and expense tracking.",
      icon: Wallet,
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      title: "Parent & Teacher Portal",
      description:
        "Seamless communication between parents, teachers, and administration staff.",
      icon: MessageCircle,
      gradientFrom: "#EB6319",
      gradientTo: "#126F77",
    },
  ];
  return (
    <div className="mb-20 p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
              {card.description}
            </p>
            <div className="flex items-center justify-center text-[#126F77] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              <span className="text-sm font-medium mr-2">Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          // new che
          // <div
          //   key={index}
          //   className="relative group rounded-2xl overflow-hidden"
          // >
          //   {/* 🌈 Gradient Border */}
          //   <div className="absolute inset-0 rounded-2xl p-[2px] animate-shine">
          //     <div className="w-full h-full bg-white rounded-2xl"></div>
          //   </div>

          //   {/* 📦 Card Content */}
          //   <div className="relative p-8 text-center z-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
          //     <div
          //       className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110"
          //       style={{
          //         background: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
          //       }}
          //     >
          //       <card.icon className="w-10 h-10 text-white" />
          //     </div>
          //     <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#126F77] transition-colors duration-300">
          //       {card.title}
          //     </h3>
          //     <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
          //       {card.description}
          //     </p>
          //     <div className="flex items-center justify-center text-[#126F77] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
          //       <span className="text-sm font-medium mr-2">Learn More</span>
          //       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
}
//------------------------------------------------/New code/
// import React from "react";

// export default function Features_Card() {
//   const cards = [
//     {
//       title: "Student Records",
//       description:
//         "Comprehensive student information management with easy search and filtering capabilities.",
//       icon: "users",
//       gradientFrom: "#126F77",
//       gradientTo: "#0F5A61",
//     },
//     {
//       title: "Attendance & Reports",
//       description:
//         "Digital attendance tracking with automated reports and parent notifications.",
//       icon: "calendar",
//       gradientFrom: "#EB6319",
//       gradientTo: "#FF9F43",
//     },
//     {
//       title: "Fee & Finance Tracking",
//       description:
//         "Complete financial management with fee collection, receipts, and expense tracking.",
//       icon: "file-text",
//       gradientFrom: "#0F5A61",
//       gradientTo: "#126F77",
//     },
//     {
//       title: "Parent & Teacher Portal",
//       description:
//         "Seamless communication between parents, teachers, and administration staff.",
//       icon: "bell",
//       gradientFrom: "#FF6B4A",
//       gradientTo: "#EB6319",
//     },
//   ];

//   return (
//     <div className="mb-20">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="relative group rounded-2xl overflow-hidden"
//           >
//             {/* 🌈 Gradient Border */}
//             <div
//               className="absolute inset-0 p-[2px] rounded-2xl"
//               style={{
//                 background: `linear-gradient(90deg, ${card.gradientFrom}, ${card.gradientTo})`,
//               }}
//             >
//               <div className="w-full h-full bg-white rounded-2xl"></div>
//             </div>

//             {/* ✨ Hover glow */}
//             <div
//               className="absolute inset-0 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"
//               style={{
//                 background: `linear-gradient(90deg, ${card.gradientFrom}, ${card.gradientTo})`,
//               }}
//             ></div>

//             {/* 📦 Card Content */}
//             <div className="relative p-8 text-center z-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
//               <div className="relative mb-6">
//                 <div
//                   className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg transition-all duration-500 group-hover:scale-110"
//                   style={{
//                     background: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
//                   }}
//                 >
//                   {/* SVG Icon (dynamic per card) */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-16 h-16 text-white"
//                   >
//                     {card.icon === "users" && (
//                       <>
//                         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                         <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
//                         <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                         <circle cx="9" cy="7" r="4"></circle>
//                       </>
//                     )}
//                   </svg>
//                 </div>
//               </div>

//               <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#126F77] transition-colors duration-300">
//                 {card.title}
//               </h3>
//               <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
//                 {card.description}
//               </p>
//               <div className="flex items-center justify-center text-[#126F77] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
//                 <span className="text-sm font-medium mr-2">Learn More</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                 >
//                   <path d="M5 12h14"></path>
//                   <path d="m12 5 7 7-7 7"></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
