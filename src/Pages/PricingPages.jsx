import React from "react";
import Pricing from "../Component/Pricing_Component/Pricing";
import Pricing_Card from "../Component/Pricing_Component/Pricing_Card";
import PricingExplanation from "../Component/Pricing_Component/PricingExplanation";
import Freq_Question from "../Component/Pricing_Component/Freq_Question";
export default function PricingPages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F8F9FA] to-white">
      <Pricing />
      <Pricing_Card />
      <PricingExplanation />
      <Freq_Question />
    </div>
  );
}
