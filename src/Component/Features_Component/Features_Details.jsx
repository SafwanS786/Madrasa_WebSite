import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeatureDetails({ data }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Top section */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-8">
            <div className="flex-1 text-left">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                  {data.title}
                </span>
              </h1>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#126f77] to-[#eb6319] bg-clip-text text-transparent mb-6">
                {data.subtitle}
              </h2>
              <p className="text-lg text-[#6B6B6B] mb-8">{data.description}</p>
              <div className="flex gap-4">
                <button
                  className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-8 py-3 
                  rounded-lg font-semibold hover:shadow-lg cursor-pointer"
                  onClick={() => navigate("/sign_up")}
                >
                  Start Free Trial
                </button>
                <button
                  className="border-2 border-[#126F77] text-[#126F77] px-8 py-3
                   rounded-lg font-semibold hover:bg-[#126F77] hover:text-white cursor-pointer"
                  onClick={() => navigate("/video-tutorial")}
                >
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl">
              <img
                src={data.image}
                alt={data.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-8 px-8 mx-auto max-w-7xl">
        <h3 className="text-2xl font-semibold text-[#126F77] mb-6">
          Key Capabilities:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.keyCapabilities.map((item, i) => (
            <div key={i}>
              <div className="flex gap-3 items-start">
                <img src={item.icon} alt="" className="w-7 h-7" />
                <div>
                  <h1 className="text-xl bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                    {item.title}
                  </h1>
                  <p className="text-[#6B6B6B] max-w-md">{item.head}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#126F77] mb-4">
            Why It Matters
          </h3>
          <p className="text-[#6b6b6b] font-semibold">{data.why}</p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/features")}
            className="bg-[#126F77] text-white px-8 py-3 rounded-lg hover:bg-[#0E575D]
             transition-colors cursor-pointer"
          >
            Back to Features
          </button>
        </div>
      </div>
    </>
  );
}
