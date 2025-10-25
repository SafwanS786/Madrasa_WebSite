import React from "react";
import Stories from "../Component/About_Component/Stories";
import Card from "../Component/About_Component/Card";
import Values from "../Component/About_Component/Values";
import Values_Card_com from "../Component/About_Component/Values_Card_com";
import Journey from "../Component/About_Component/Journey";
import Team from "../Component/About_Component/Team";
import Last_Card from "../Component/About_Component/Last_Card";
import Vision from "../Component/About_Component/Vision";

export default function AboutPages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F8F9FA] to-white">
      <div className="pt-5 lg:pt-24 relative overflow-hidden">
        <section>
          <Stories />
          <Vision />
          <Card />
          <Values />
          <Values_Card_com />
          <Journey />
          <Team />
        </section>
      </div>
      <Last_Card />
    </div>
  );
}
