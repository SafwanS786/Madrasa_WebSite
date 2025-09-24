// import React from "react";
// import { Star, CircleCheckBig } from "lucide-react";

// export default function Stories_Last_Card() {
//   return (
//     <div className="mb-20 w-[40%] mx-auto  justify-center">
//       <div className="text-card-foreground flex flex-col items-center justify-center gap-6  rounded-xl border-0 bg-gradient-to-r from-primary/5 to-secondary/5 p-8">
//         <div className="flex  items-center justify-center gap-4 mb-4">
//           {Array(5)
//             .fill(0)
//             .map((_, i) => (
//               <Star
//                 className="w-5 h-5 text-secondary"
//                 fill="currentColor"
//                 key={i}
//               />
//             ))}
//           <span className="ml-2 text-2xl font-bold text-foreground">4.9</span>
//         </div>
//         <h3 className="text-xl font-semibold text-foreground mb-2">
//           Trusted by 500+ institutions
//         </h3>
//         <p className="text-muted-foreground mb-6">
//           Join educators worldwide who have transformed their madrasas
//         </p>
//         <div className="flex items-center justify-center gap-6 text-sm">
//           <div className="flex items-center gap-2 text-muted-foreground">
//             <CircleCheckBig className="w-5 h-5 text-primary" />
//             Verified Reviews
//           </div>
//           <div className="flex items-center gap-2 text-muted-foreground">
//             <CircleCheckBig className="w-5 h-5 text-primary" />
//             Real Educators
//           </div>
//           <div className="flex items-center gap-2 text-muted-foreground">
//             <CircleCheckBig className="w-5 h-5 text-primary" />
//             Global Community
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Star, CircleCheckBig } from "lucide-react";

export default function Stories_Last_Card() {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20 w-[40%] mx-auto justify-center">
      {/* Updated: Added responsive margin-bottom */}
      <div className="text-card-foreground flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 rounded-xl border-0 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8 2xl:p-8">
        {/* Updated: Added responsive gap and padding */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
          {/* Updated: Added responsive gap and margin-bottom */}
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 text-secondary"
                fill="currentColor"
                key={i}
              />
            ))}
          <span className="ml-2 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold text-foreground">
            4.9
          </span>
          {/* Updated: Added responsive font sizes for the rating */}
        </div>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold text-foreground mb-2 sm:mb-3 md:mb-3 lg:mb-2 xl:mb-2 2xl:mb-2">
          Trusted by 500+ institutions
        </h3>
        {/* Updated: Added responsive font sizes and margin-bottom */}
        <p className="text-muted-foreground mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">
          Join educators worldwide who have transformed their madrasas
        </p>
        {/* Updated: Added responsive margin-bottom and font sizes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
          {/* Updated: Changed to flex-col on small screens for better stacking, added responsive gap and font sizes */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 text-muted-foreground">
            <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 text-primary" />
            {/* Updated: Added responsive icon sizes */}
            Verified Reviews
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 text-muted-foreground">
            <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 text-primary" />
            Real Educators
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 text-muted-foreground">
            <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 text-primary" />
            Global Community
          </div>
        </div>
      </div>
    </div>
  );
}