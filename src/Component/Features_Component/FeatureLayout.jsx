// src/components/common/FeatureLayout.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeatureLayout({
  title,
  gradientTitle,
  subtitle,
  description,
  image,
  featureTitle,
  features = [],
  whyTitle,
  whyDescription,
}) {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER SECTION */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="flex-1 text-start">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              {title}{" "}
              <span className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent">
                {gradientTitle}
              </span>
            </h1>
            {subtitle && (
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent mb-6">
                {subtitle}
              </h2>
            )}
            <p className="text-base sm:text-lg text-[#6B6B6B] mb-6 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-row gap-4">
              <button
                className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                onClick={() => navigate("/sign_up")}
              >
                Start Free Trial
              </button>
              <button
                className="border-2 border-[#126F77] text-[#126F77] px-6 py-3 rounded-lg font-semibold hover:bg-[#126F77] hover:text-white transition-all"
                onClick={() => navigate("/video-tutorial")}
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 max-w-xl">
            <img
              src={image}
              alt={title}
              className="w-full rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="py-10 px-6 mx-auto max-w-7xl">
        <h3 className="text-2xl font-semibold text-[#126F77] mb-4">
          {featureTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                {f.icon && <img src={f.icon} alt="icon" className="w-7 h-7" />}
                <h4 className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] bg-clip-text text-transparent text-xl">
                  {f.title}
                </h4>
              </div>
              <p className="text-base text-[#6B6B6B] max-w-md">{f.desc}</p>
            </div>
          ))}
        </div>

        {whyTitle && (
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold text-[#126F77] mb-3">
              {whyTitle}
            </h3>
            <p className="text-[#6B6B6B] font-medium">{whyDescription}</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/features")}
            className="bg-[#126F77] text-white px-8 py-3 rounded-lg hover:bg-[#0E575D] transition-all"
          >
            Back to Features
          </button>
        </div>
      </div>
    </>
  );
}
