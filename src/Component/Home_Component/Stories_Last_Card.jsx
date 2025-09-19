import React from "react";
import { Star, CircleCheckBig } from "lucide-react";

export default function Stories_Last_Card() {
  return (
    <div className="mb-20 w-[40%] mx-auto  justify-center">
      <div className="text-card-foreground flex flex-col items-center justify-center gap-6  rounded-xl border-0 bg-gradient-to-r from-primary/5 to-secondary/5 p-8">
        <div className="flex  items-center justify-center gap-4 mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                className="w-5 h-5 text-secondary"
                fill="currentColor"
                key={i}
              />
            ))}
          <span className="ml-2 text-2xl font-bold text-foreground">4.9</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Trusted by 500+ institutions
        </h3>
        <p className="text-muted-foreground mb-6">
          Join educators worldwide who have transformed their madrasas
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CircleCheckBig className="w-5 h-5 text-primary" />
            Verified Reviews
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CircleCheckBig className="w-5 h-5 text-primary" />
            Real Educators
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CircleCheckBig className="w-5 h-5 text-primary" />
            Global Community
          </div>
        </div>
      </div>
    </div>
  );
}
