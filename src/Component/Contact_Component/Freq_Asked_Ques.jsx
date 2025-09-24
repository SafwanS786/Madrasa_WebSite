import React from "react";
import { ArrowRight, Calendar, Star, CheckCircle } from "lucide-react";

export default function Freq_Asked_Ques() {
  const Question = [
    {
      Que: "How quickly can we get started?",
      Ans: "Most institutions can be up and running within 24-48 hours of signing up.",
    },
    {
      Que: "Do you provide training?",
      Ans: "Yes, we provide comprehensive training and onboarding for all new customers.",
    },
    {
      Que: "What kind of support do you offer?",
      Ans: "We offer 24/7 support via phone, email, and live chat, plus dedicated success managers.",
    },
    {
      Que: "Can you help migrate our existing data?",
      Ans: "Absolutely! Our team will help you migrate all your existing data at no extra cost.",
    },
  ];
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Quick answers to common questions. Can't find what you're looking for?
        Contact us directly.
      </p>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-20 text-center items-center ">
        {Question.map((value, index) => (
          <div
            className=" p-4 border border-gray-200 h-[150px] rounded-xl hover:shadow-xl transition duration-500"
            key={index}
          >
            <div className="flex justify-center items-start gap-6 ">
              <div className="text-left">
                <div className="font-semibold text-lg text-foreground mb-3">
                  {value.Que}
                </div>
                <div className="text-muted-foreground mt-8">{value.Ans}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-[#126F77] to-[#EB6319]  p-12 relative overflow-hidden mt-20">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Ready to Get Started?
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Transform Your Madrasa Together
          </h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Don't wait—start your journey toward better madrasa management
            today. Our team is ready to help you every step of the way.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <button className=" bg-white rounded-md p-2 text-[#126F77] font-bold flex items-center gap-2 px-6 py-3 group ">
            Start Free Trial
            <span className="inline-block leading-none transform transition-all duration-300 group-hover:translate-x-2">
              <ArrowRight size={15} className="font-bold h-5 w-5" />
            </span>
          </button>
          <button className="flex items-center justify-center gap-3 bg-white px-6 rounded-md p-3 text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
            <span className="">
              <Calendar className="inline-block h-5 w-5" />
            </span>
            Schedule Demo
          </button>
        </div>
        <div className="flex flex-row justify-center gap-12 mt-6">
          <div className="flex gap-2 justify-center items-center mt-6">
            <div className="text-white">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white">No Credit Card Required</span>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center mt-6">
            <div className="text-white">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white">30-Day Free Trial</span>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center mt-6">
            <div className="text-white">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white">Setup Support Included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
