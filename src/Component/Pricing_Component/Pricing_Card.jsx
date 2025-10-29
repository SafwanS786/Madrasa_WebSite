import React from "react";
import { Sparkles, Check, ArrowRight, Star, Users } from "lucide-react";
import { Link } from "react-router-dom"; // Import if using React Router for navigation

export default function Pricing_Card() {
  const freeFeatures = [
    "Full access to all modules",
    "Add unlimited students and teachers",
    "Explore mobile and PWA access",
    "Create, manage and test reports",
    "Option to upgrade anytime",
  ];

  const standardFeatures = [
    "Unlimited teachers & staff",
    "Complete attendance and student tracking",
    "Financial & fee management system",
    "Parent and Maulana communication",
    "Reports & analytics",
    "Notifications and reminders",
    "Mobile & PWA access",
    "Priority support",
    "Secure cloud hosting",
  ];

  const renderFeatureList = (features, isStandard = false) => (
    <div className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:shadow-md ${
            isStandard
              ? "bg-gradient-to-r from-[#126f77]/10 to-[#eb6319]/10"
              : "bg-gray-50"
          }`}
        >
          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className="text-gray-700 font-medium text-sm md:text-base lg:text-lg text-start">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mx-auto px-4 py-8 md:py-16 max-w-7xl">
      {/* Header Badge */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#126f77]/10 to-[#eb6319]/10 text-[#126f77] rounded-full py-2 px-4">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium">
            Complete Management System
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free Plan Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
          <h3 className="text-base md:text-xl font-bold text-gray-800 mb-4">
            Free Plan
          </h3>
          <div className="flex justify-center mb-4 items-end">
            <span className="text-4xl font-bold text-green-600">₹0</span>
            <span className="ml-2 text-gray-500">/ for 15 days</span>
          </div>
          <p className="text-gray-600 mb-6">
            Try all features free for 15 days. No credit card required.
          </p>
          {renderFeatureList(freeFeatures)}
          <Link
            to="/contact" // Redirect to customer onboarding form
            className="w-full inline-flex items-center justify-center gap-2
             bg-green-600 text-white font-semibold py-1 px-3 md:py-3 md:px-6 rounded-md hover:bg-green-700 transition-colors"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex flex-col gap-1 items-center text-start mt-6 text-xs text-gray-500">
            <div>
              <p className="flex justify-center gap-2 mb-2 ">
                <Check className="w-4 h-4 text-green-500" />
                No setup fees
              </p>
            </div>
            <div>
              <p className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Upgrade anytime
              </p>
            </div>
          </div>
        </div>

        {/* Standard Plan Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center relative overflow-hidden md:hover:shadow-xl transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#126f77] to-[#eb6319]"></div>
          <h3 className="text-base md:text-xl font-bold text-gray-800 mb-4">
            Standard Plan
          </h3>
          <div className="flex justify-center mb-4 items-end">
            <span className="text-4xl font-bold text-[#126f77]">₹300</span>
            <span className="ml-2 text-gray-500 ">/ per student / year</span>
          </div>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            A complete yearly plan for madrasas of every size—simple, secure and
            scalable.
          </p>
          {renderFeatureList(standardFeatures, true)}
          <Link
            to="/checkout" // Redirect to checkout for purchase
            className="w-full inline-flex items-center justify-center gap-2
             bg-gradient-to-r from-[#eb6319] to-[#126f77] text-white font-semibold py-1 px-3 md:py-3 md:px-6 rounded-md hover:from-[#126f77] hover:to-[#eb6319] transition-all"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="mt-6 text-xs text-gray-500">
            <p className="flex items-center justify-center gap-2 mb-2">
              <Check className="w-4 h-4 text-green-500" />
              No setup fees
            </p>
            <p className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Cancel anytime
            </p>
          </div>
        </div>
      </div>

      {/* Join 500+ Trust Badge - Made Better! */}
      <div className="text-center mt-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
        <div className="inline-flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
          <Users className="w-6 h-6 md:w-7 md:h-7  text-[#126f77]" />
          <span className="text-sm md:text-base lg:text-lg font-bold text-gray-800">
            Join 500+ madrasas already transforming their management with
            DeenNest
          </span>
          <Star className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 fill-current" />
        </div>
      </div>
    </div>
  );
}
