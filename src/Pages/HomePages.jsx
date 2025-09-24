import React from "react";
import Home from "../Component/Home_Component/Home";
import Features from "../Component/Home_Component/Features";
import Features_Card from "../Component/Home_Component/Features_Card";
import Features_Btn from "../Component/Home_Component/Features_Btn";
import Trusted from "../Component/Home_Component/Trusted";
import Platform from "../Component/Home_Component/PlatForm";
import PersonalizedDemo from "../Component/Home_Component/PersonalizedDemo";
import Pricing from "../Component/Home_Component/Pricing";
import Stories from "../Component/Home_Component/Stories";
import Stories_Card from "../Component/Home_Component/Stories_Card";
import Stories_Last_Card from "../Component/Home_Component/Stories_Last_Card";
import Mission from "../Component/Home_Component/Mission";
import ScheduleDemo from "../Component/Home_Component/ScheduleDemo";
export default function HomePages() {
  return (
    <div>
      <Home />
      <section className="py-10 lg:py-24 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden">
        <Features />
        <Features_Card />
        <Features_Btn />
      </section>
      <section className="py-10 lg:py-24 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden">
        <Trusted />
      </section>
      <section className="py-10 md:py-24 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden">
        <Platform />
        <PersonalizedDemo />
      </section>
      <Pricing />
      <Stories />
      <Stories_Card />
      <Stories_Last_Card />
      <Mission />
      <ScheduleDemo />
    </div>
  );
}
