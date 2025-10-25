import React, { useEffect, useState } from "react";
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
    <div className="text-center p-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20 2xl:mt-20">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
        Frequently Asked Questions
      </h1>
      <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
        Quick answers to common questions. Can't find what you're looking for?
        Contact us directly.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20 2xl:mt-20">
        {Question.map((value, index) => (
          <div
            className="p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 2xl:p-6 border border-gray-200 h-auto sm:h-[140px] md:h-[150px] lg:h-[150px] xl:h-[150px] 2xl:h-[150px] rounded-xl hover:shadow-xl transition-all duration-500 hover:scale-105"
            key={index}
            aria-label={`Question: ${value.Que}`}
          >
            <div className="flex justify-center items-start gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
              <div className="text-left">
                <div className="font-semibold text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#1A1A1A] mb-2 sm:mb-2.5 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3">
                  {value.Que}
                </div>
                <div className="text-[#6B6B6B] text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8">
                  {value.Ans}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
