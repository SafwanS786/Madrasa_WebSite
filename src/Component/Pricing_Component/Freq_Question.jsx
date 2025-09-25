import React from "react";
import { CircleQuestionMark, Phone, Mail, MessageCircle } from "lucide-react";

export default function Freq_Question() {
  const Question = [
    {
      icon: CircleQuestionMark,
      Que: "Is there a setup fee?",
      Ans: "No, there are absolutely no setup fees. You only pay the monthly subscription.",
    },
    {
      icon: CircleQuestionMark,
      Que: "Can I cancel anytime?",
      Ans: "Yes, you can cancel your subscription at any time with no penalties or cancellation fees.",
    },
    {
      icon: CircleQuestionMark,
      Que: "What's included in the free trial?",
      Ans: "The 30-day free trial includes access to all features with no limitations. No credit card required.",
    },
    {
      icon: CircleQuestionMark,
      Que: "Do you offer discounts for multiple years?",
      Ans: "Yes, we offer significant discounts for annual payments. Contact our sales team for details.",
    },
    {
      icon: CircleQuestionMark,
      Que: "Is training included?",
      Ans: "Yes, we provide comprehensive training and onboarding support for all new customers.",
    },
    {
      icon: CircleQuestionMark,
      Que: "What kind of support do you provide?",
      Ans: "We offer 24/7 priority support via phone, email, and live chat, plus extensive documentation.",
    },
  ];
  return (
    <>
      <div className="text-center my-16 px-4 ">
        <h1 className="text-4xl md:text-5xl font-bold">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-foreground mt-6 max-w-2xl mx-auto">
          Got questions about our pricing? We've got answers.
        </p>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-20 text-center items-center ">
          {Question.map((value, index) => (
            <div
              className=" p-4 border border-gray-200 h-[150px] rounded-xl hover:shadow-xl transition duration-500"
              key={index}
            >
              <div className="flex justify-center items-start gap-6 ">
                <div className="text-primary shrink-0">
                  <value.icon size={28} strokeWidth={2.2} />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-foreground mb-3">
                    {value.Que}
                  </div>
                  <div className="text-muted-foreground">{value.Ans}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div className="mt-20  bg-gradient-to-r from-[#126F77] to-[#EB6319]  p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-lg rotate-45"></div>
          </div>
          <div className="relative z-10 mb-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white my-8">
              Need a Custom Solution?
            </h3>
            <p className="text-base sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have specific requirements or need volume pricing? Our team is
              here to help create the perfect solution for your institution.
            </p>
            <div className="flex flex-row justify-center gap-4">
              <button className="bg-white rounded-md p-2 text-[#126F77] font-bold text-base sm:text-lg  flex items-center gap-2 px-6 py-3 group">
                <span className="inline-block transform transition-all duration-300 group-hover:-translate-x-2">
                  <Phone
                    size={15}
                    className="font-bold h-4 w-4 sm:h-5 sm:w-5 md:w-6 md:h-6"
                  />
                </span>
                Call Sales Team
              </button>
              <button className="flex items-center gap-2 bg-white px-6 rounded-md p-3 text-base sm:text-lg text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
                <span className="">
                  <Mail size={15} className="inline-block" />
                </span>
                Email Us
              </button>
            </div>
            <div className="flex items-center justify-center gap-8 text-white/80 mt-12">
              <div className="flex flex-row items-center gap-2">
                <MessageCircle className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span> Live Chat Available</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Phone className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span> +1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
