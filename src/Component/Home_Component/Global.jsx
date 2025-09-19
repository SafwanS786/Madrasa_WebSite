import React from "react";
import { Globe } from "lucide-react";

export default function Global() {
  return (
    <div className="text-center mt-16 mx-auto w-[77%]">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/10">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-row gap-4 bg-white p-2 px-3 rounded-2xl">
            <Globe className="w-5 h-5 text-secondary" />
            <span className="text-primary font-medium">Global Impact</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Transforming Islamic Education Worldwide
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our mission to digitize and modernize Islamic education while
            preserving traditional values and teaching methods.
          </p>
        </div>
      </div>
    </div>
  );
}
