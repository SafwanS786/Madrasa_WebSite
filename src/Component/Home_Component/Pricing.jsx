import React from "react";
import {
  Sparkles,
  Check,
  ArrowRight,
  Users,
  Star,
  ArrowRightIcon,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import if using React Router

export default function Pricing() {
  const navigate = useNavigate();
  const renderFeatureList = (features) => (
    <div className="space-y-2 mb-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 p-2 text-gray-700">
          <Check className="w-5 h-5 text-green-500" />
          <span className="text-sm font-medium">{feature}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#eb6319]/10 text-[#126f77] rounded-full py-1 px-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            One plan, made simple
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            No hidden fees. No complicated tiers. Start free for 15 days and
            upgrade anytime to continue using all features your madrasa needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Plan Tile */}
          <div className="bg-white border border-[#f2f2f2] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-[#126f77] mb-2">Free Plan</h3>
            <div className="text-4xl font-bold text-[#126f77] mb-2 inline-flex flex-row gap-1 items-end">
              <h1>₹0</h1>
              <p className="text-gray-600 text-base">/ for 15 days</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Try all features free for 15 days. No credit card required.
            </p>
            <button className="bg-[#126f77] text-white text-base font-semibold px-2 py-1 rounded-lg cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Standard Plan Tile */}
          <div className="bg-white border border-[#f2f2f2] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Standard Plan
            </h3>
            <div className="text-4xl font-bold text-[#126f77] mb-2 inline-flex flex-row gap-1 items-end">
              <h1>₹300</h1>
              <p className="text-gray-600 text-base">/ per student / year</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              A complete yearly plan for madrasas of every size—simple, secure
              and scalable.
            </p>
            <button className="bg-[#126f77] text-white text-base font-semibold px-2 py-1 rounded-lg cursor-pointer">
              Get Started
            </button>
          </div>
          <div
            className="inline-flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => navigate("/pricing")}
          >
            <p className="font-semibold">Learn more on our pricing page</p>
            <ArrowRightIcon size={18} />
          </div>
        </div>

        {/* Trust Badge and Custom Plan */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
            <Users className="w-6 h-6 text-[#126f77]" />
            <span className="text-lg font-bold text-gray-800">
              Trusted by 500+ institutions worldwide
            </span>
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
          <div className="mt-6">
            <p className="text-gray-600 mb-6">
              Need a custom plan for your institution?
            </p>
            <Link
              to="/contact" // Redirect to contact/sales page
              className="text-[#126f77] px-3 py-2 border border-[#126f77] hover:text-white rounded-lg hover:bg-[#126f77] font-medium"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
