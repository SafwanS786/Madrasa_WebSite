import React from "react";
import Home from "../Component/Home_Component/Home";
import Features from "../Component/Home_Component/Features";
import Features_Card from "../Component/Home_Component/Features_Card";
import Features_Btn from "../Component/Home_Component/Features_Btn";
import Trusted from "../Component/Home_Component/Trusted";
import Platform from "../Component/Home_Component/PlatForm";
export default function HomePages() {
  return (
    <div>
      <Home />
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden">
        <Features />
        <Features_Card />
        <Features_Btn />
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden">
        <Trusted />
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden">
        <Platform />
      </section>
    </div>
  );
}
