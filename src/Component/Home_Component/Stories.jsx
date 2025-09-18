import React from "react";

import { Users } from "lucide-react";

export default function Stories() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="mx-auto px-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#eb6319]/10 text-[#126f77] rounded-full px-4 py-2 text-sm font-medium mb-6">
          <Users className="w-5 h-5 text-[#126f77]" />
          Customer Stories
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          Loved by educators worldwide
        </h2>
        <p className="text-lg text-[#1A1A1A] max-w-2xl mx-auto mt-6">
          See how madrasas around the globe are transforming their operations
          and improving student outcomes with our platform.
        </p>
      </div>
    </section>
  );
}
