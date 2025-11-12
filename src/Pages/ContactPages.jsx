import React, { useEffect } from "react";
import Contact_First_Part from "../Component/Contact_Component/Contact_First_Part";
import Card from "../Component/Contact_Component/Card";
import Message_Form from "../Component/Contact_Component/Message_Form";
import Global_Office from "../Component/Contact_Component/Global_Office";
import Freq_Asked_Ques from "../Component/Contact_Component/Freq_Asked_Ques";
import Form1 from "../Component/Contact_Component/form1";
import Last_Card from "../Component/Contact_Component/Last_Card";

export default function ContactPages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F8F9FA] to-white">
      <section className="py-12 lg:py-24 relative overflow-hidden">
        <Contact_First_Part />
        <Card />
        <Message_Form />
        <Last_Card />
      </section>
      <Freq_Asked_Ques />
      <Global_Office />
    </div>
  );
}
