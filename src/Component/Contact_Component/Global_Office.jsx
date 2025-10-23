import React from "react";
import { Building2, MapPin, Phone, Mail } from "lucide-react";

export default function Global_Office() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-20 2xl:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8">
        {/* Map and Base Location Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-16 2xl:mb-16">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
            Our Global Headquarters
          </h2>
          <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-6">
            We’re based in Gujarat, India, serving madrasas and institutions
            worldwide through our digital platform.
          </p>
          <div className="flex flex-row justify-between gap-2 items-center">
            <div className="flex-2">
              <div className="w-full max-w-full mx-auto mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.293087690479!2d72.15123481112651!3d21.768914961862574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bf50bbaf949%3A0x725ed89f137e40a!2sZiaat%20Technolabs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1760862740238!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-bold">Our Office</h1>
              <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg max-w-2xl text-[#6B6B6B] mx-auto">
                104, 4th Floor, Meghani Luxe, Meghani Circle, Bhavnagar,
                Gujarat, India – 364001
              </p>
            </div>
          </div>
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-16 2xl:px-16"></div>
      </div>
    </section>
  );
}
