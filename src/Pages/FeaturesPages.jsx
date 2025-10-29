import React from "react";
import Features from "../Component/Features_Component/Features";
import Main_Features_Card from "../Component/Features_Component/Main_Features_Card";
import Capabilities from "../Component/Features_Component/Capabilities";
import Features_Last_Card from "../Component/Features_Component/Features_Last_Card";
import FeaturesDetails from "../Component/Features_Component/FeaturesDetails";

export default function FeaturesPages() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white via-[#F8F9FA] to-white">
        <FeaturesDetails />
        <section className="xl:py-24">
          <Features />
          <Main_Features_Card />
          <Capabilities />
          <Features_Last_Card />
          {/* <FeaturesDetails /> */}
        </section>
      </div>
    </div>
  );
}
