import React from "react";
import { Globe } from "lucide-react";

export default function Global() {
  return (
    <div className="text-center mt-8 sm:mt-12 md:mt-14 lg:mt-16 mx-auto w-[77%]">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4 sm:p-6 md:p-7 lg:p-8 border border-primary/10">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center items-center">
          <div className="flex flex-row gap-4 bg-white p-2 px-3 rounded-2xl">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="text-primary font-medium">Global Impact</span>
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">
            Transforming Islamic Education Worldwide
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm  sm:text-sm ms:text-base">
            Join us in our mission to modernize madrasa education while
            preserving traditional values and teaching excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
