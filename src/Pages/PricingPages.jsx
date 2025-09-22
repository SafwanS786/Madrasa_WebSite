import React from "react";
import Pricing from "../Component/Pricing_Component/Pricing";
import Pricing_Card from "../Component/Pricing_Component/Pricing_Card";
import PricingExplanation from "../Component/Pricing_Component/PricingExplanation";
export default function PricingPages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F8F9FA] to-white">
      <Pricing />
      <Pricing_Card />
      <PricingExplanation />
    </div>
  );
}
