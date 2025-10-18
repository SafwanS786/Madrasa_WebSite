import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, Star, CheckCircle } from "lucide-react";

export default function Freq_Asked_Ques() {
  // const [count, setCount] = useState(0);

  // const handleCount = () => {
  //   setCount((prev) => prev + 1);
  // };
  // useEffect(() => {
  //   // handleCount();
  //   console.log("Safwan");
  // }, []);

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
    // <div className="text-center mt-20">
    //   <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
    //     Frequently Asked Questions
    //   </h1>
    //   <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    //     Quick answers to common questions. Can't find what you're looking for?
    //     Contact us directly.
    //   </p>
    //   <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-20 text-center items-center ">
    //     {Question.map((value, index) => (
    //       <div
    //         className=" p-4 border border-gray-200 h-[150px] rounded-xl hover:shadow-xl transition duration-500"
    //         key={index}
    //       >
    //         <div className="flex justify-center items-start gap-6 ">
    //           <div className="text-left">
    //             <div className="font-semibold text-lg text-foreground mb-3">
    //               {value.Que}
    //             </div>
    //             <div className="text-muted-foreground mt-8">{value.Ans}</div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="bg-gradient-to-r from-[#126F77] to-[#EB6319]  p-12 relative overflow-hidden mt-20">
    //     <div className="max-w-4xl mx-auto mt-8">
    //       <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
    //         <Star className="w-5 h-5 text-white" />
    //         <span className="text-white font-medium">
    //           Ready to Get Started?
    //         </span>
    //       </div>
    //       <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
    //         Let's Transform Your Madrasa Together
    //       </h3>
    //       <p className="text-xl text-white/90 mb-8 leading-relaxed">
    //         Don't wait—start your journey toward better madrasa management
    //         today. Our team is ready to help you every step of the way.
    //       </p>
    //     </div>
    //     <div className="flex flex-row justify-center items-center gap-4">
    //       <button className=" bg-white rounded-md p-2 text-[#126F77] font-bold flex items-center gap-2 px-6 py-3 group ">
    //         Start Free Trial
    //         <span className="inline-block leading-none transform transition-all duration-300 group-hover:translate-x-2">
    //           <ArrowRight size={15} className="font-bold h-5 w-5" />
    //         </span>
    //       </button>
    //       <button className="flex items-center justify-center gap-3 bg-white px-6 rounded-md p-3 text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
    //         <span className="">
    //           <Calendar className="inline-block h-5 w-5" />
    //         </span>
    //         Schedule Demo
    //       </button>
    //     </div>
    //     <div className="flex flex-row justify-center gap-12 mt-6">
    //       <div className="flex gap-2 justify-center items-center mt-6">
    //         <div className="text-white">
    //           <CheckCircle className="w-5 h-5" />
    //         </div>
    //         <div>
    //           <span className="text-white">No Credit Card Required</span>
    //         </div>
    //       </div>
    //       <div className="flex gap-2 justify-center items-center mt-6">
    //         <div className="text-white">
    //           <CheckCircle className="w-5 h-5" />
    //         </div>
    //         <div>
    //           <span className="text-white">30-Day Free Trial</span>
    //         </div>
    //       </div>
    //       <div className="flex gap-2 justify-center items-center mt-6">
    //         <div className="text-white">
    //           <CheckCircle className="w-5 h-5" />
    //         </div>
    //         <div>
    //           <span className="text-white">Setup Support Included</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="text-center p-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20 2xl:mt-20">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
        Frequently Asked Questions
      </h1>
      {/* <h2>{count}</h2>
      <button onClick={handleCount}>Count</button> */}
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
      <div className="bg-gradient-to-r from-[#126F77] to-[#EB6319] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 relative overflow-hidden mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20 2xl:mt-20">
        <div className="max-w-4xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
            <Star className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-white" />
            <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-white font-medium">
              Ready to Get Started?
            </span>
          </div>
          <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
            Let's Transform Your Madrasa Together
          </h3>
          <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 leading-relaxed">
            Don't wait—start your journey toward better madrasa management
            today. Our team is ready to help you every step of the way.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
          <button
            className="bg-white rounded-md px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 text-[#126F77] font-bold text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 group hover:scale-105 transition-all duration-300"
            aria-label="Start Free Trial"
          >
            Start Free Trial
            <span className="inline-block leading-none transform transition-all duration-300 group-hover:translate-x-2">
              <ArrowRight className="h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5" />
            </span>
          </button>
          <button
            className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 bg-white px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-md text-[#126F77] font-semibold text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg hover:bg-[#126F77] hover:text-white hover:scale-105 transition-all duration-300"
            aria-label="Schedule Demo"
          >
            <Calendar className="h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5" />
            Schedule Demo
          </button>
        </div>
        {/* <div className="flex flex-col sm:flex-row justify-center  bg-amber-600 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-12 2xl:gap-12 mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6">
          <div className="flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 justify-center">
            <CheckCircle className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-white" />
            <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-white">
              No Credit Card Required
            </span>
          </div>
          <div className="flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 justify-center">
            <CheckCircle className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-white" />
            <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-white">
              30-Day Free Trial
            </span>
          </div>
          <div className="flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 justify-center ">
            <CheckCircle className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-white" />
            <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-white">
              Setup Support Included
            </span>
          </div>
        </div> */}
        <div className="flex flex-col gap-3 md:flex-row  flex-wrap justify-center items-center md:gap-12 mt-6">
          <div className="flex gap-2 items-center text-white ">
            <CheckCircle className="w-5 h-5" />
            <span className="text-white">No Credit Card Required</span>
          </div>
          <div className="flex gap-2 text-white items-center ">
            <CheckCircle className="w-5 h-5" />
            <span className="text-white">30-Day Free Trial</span>
          </div>
          <div className="flex gap-2 text-white items-center ">
            <CheckCircle className="w-5 h-5" />
            <span className="text-white">Setup Support Included</span>
          </div>
        </div>
      </div>
    </div>
  );
}
