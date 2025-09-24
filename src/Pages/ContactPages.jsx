import React from "react";
import Contact_First_Part from "../Component/Contact_Component/Contact_First_Part";
import Card from "../Component/Contact_Component/Card";
import Message_Form from "../Component/Contact_Component/Message_Form";
import Global_Office from "../Component/Contact_Component/Global_Office";
import Freq_Asked_Ques from "../Component/Contact_Component/Freq_Asked_Ques";

export default function ContactPages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F8F9FA] to-white">
      <section className="py-24 relative overflow-hidden">
        <Contact_First_Part />
        <Card />
        <Message_Form />
        <Global_Office />
      </section>
        <Freq_Asked_Ques />
    </div>
  );
}
