import React from "react";
import { Star, CircleCheckBig } from "lucide-react";

export default function Stories_Last_Card() {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20 p-4 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto">
      <div className="text-card-foreground flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 rounded-xl border-0 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 sm:p-6 md:p-8">
        {/* Rating Stars */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                className="w-4 h-4 sm:w-5 sm:h-5 text-secondary"
                fill="currentColor"
                key={i}
              />
            ))}
          <span className="ml-2 text-lg sm:text-xl md:text-2xl font-bold text-foreground">
            4.9 / 5 Customer Satisfaction
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
          Trusted by 500+ institutions
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base">
          Join educators worldwide who’ve transformed their madrasas with
          DeenNest.
        </p>

        {/* Features */}
        <div className="flex flex-row  sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            Verified Reviews
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            Real Educators
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            Global Community
          </div>
        </div>
      </div>
    </div>
  );
}
