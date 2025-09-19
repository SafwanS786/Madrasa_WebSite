// import React from "react";
// import { Heart, Lightbulb, Users } from "lucide-react";
// import { Fragment } from "react";

// export default function Mission_Card() {
//   const data = [
//     {
//       icon: Heart,
//       head: "Education First",
//       Para: "Passionate about empowering Islamic education with cutting-edge technology",
//       gradientFrom: "#126f77",
//       gradientTo: "#0F5A61",
//     },
//     {
//       icon: Lightbulb,
//       head: "Innovation",
//       Para: "Modern technology meets traditional Islamic wisdom and values",
//       gradientFrom: "#eb6319",
//       gradientTo: "#D4540E",
//     },
//     {
//       icon: Users,
//       Head: "Community",
//       Para: "Building stronger bonds between students, teachers, and families",
//       gradientFrom: "#126f77",
//       gradientTo: "#Eb6319",
//     },
//   ];
//   return (
//     <div>
//       {/* className="mx-auto bg-gradient-to-b from-white via-[#F8F9FA] to-white relative overflow-hidden */}
//       <div className="flex flex-row  justify-center items-center gap-6">
//         {data.map((item, index) => (
//           <Fragment key={index}>
//             <div className="flex flex-col gap-6 ">
//               <div
//                 className="w-20 h-20 flex items-center justify-center mx-auto shadow-lg p-4 rounded-2xl
//                  group-hover:shadow-xl transition-all duration-500 group-hover:scale-100"
//                 style={{
//                   background: `linear-gradient(to right,${item.gradientFrom},${item.gradientTo})`,
//                 }}
//               >
//                 <item.icon className="w-10 h-10 text-white " />
//                 <div
//                   className="absolute -top-2 -right-2 w-4 h-4 bg-[#EB6319]/30
//                 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
//                 ></div>
//                 <div
//                   className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#126F77]/30 rounded-full
//                 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700"
//                 ></div>
//               </div>
//             </div>
//             <div></div>
//             <div></div>
//           </Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Heart, Lightbulb, Users } from "lucide-react";

export default function Mission_Card() {
  const data = [
    {
      icon: Heart,
      head: "Education First",
      para: "Passionate about empowering Islamic education with cutting-edge technology",
      gradientFrom: "#126f77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Lightbulb,
      head: "Innovation",
      para: "Modern technology meets traditional Islamic wisdom and values",
      gradientFrom: "#eb6319",
      gradientTo: "#D4540E",
    },
    {
      icon: Users,
      head: "Community",
      para: "Building stronger bonds between students, teachers, and families",
      gradientFrom: "#126f77",
      gradientTo: "#eb6319",
    },
  ];

  return (
    <div className="w-full   to-white">
      <div className="max-w-6xl  h-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:scale-105 min-h-[300px]"
            >
              {/* Icon wrapper */}
              <div className="relative">
                <div
                  className="w-20 h-20 flex items-center justify-center shadow-lg rounded-2xl mb-6
                  transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-30 w-4 h-4 bg-[#EB6319]/30 rounded-full
                  opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
                />
                <div
                  className="absolute -bottom-2 -left-30 w-3 h-3 bg-[#126F77]/30 rounded-full 
                  opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700"
                />
              </div>

              {/* Card content */}
              <h3 className="text-xl font-bold  mb-4 text-center group-hover:text-[#126f77] transition-colors duration-300">
                {item.head}
              </h3>
              <p className="text-md text-muted-foreground text-center mt-4 leading-relaxed">
                {item.para}
              </p>

              {/* Decorative bubbles */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
