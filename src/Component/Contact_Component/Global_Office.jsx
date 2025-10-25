import React from "react";
import { Building2, MapPin, Phone, Mail, Smile } from "lucide-react";

export default function Global_Office() {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
          Our Global Headquarters
        </h2>
        <p className="text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
          We’re based in Gujarat, India, serving madrasas and institutions
          worldwide through our digital platform.
        </p>
      </div>

      {/* Map and Office Info */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 px-4 lg:px-16">
        {/* Map Section */}
        <div className="w-full lg:w-2/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.293087690479!2d72.15123481112651!3d21.768914961862574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bf50bbaf949%3A0x725ed89f137e40a!2sZiaat%20Technolabs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1760862740238!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-lg"
          ></iframe>
        </div>

        {/* Office Details */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Building2 size={26} className="text-[#126F77]" />
            <h3 className="text-xl font-bold text-[#1A1A1A]">Our Office</h3>
          </div>
          <p className="text-[#6B6B6B] mb-6 leading-relaxed">
            104, 4th Floor, Meghani Luxe, <br />
            Meghani Circle, Bhavnagar, <br />
            Gujarat, India – 364001
          </p>

          <div className="space-y-3 text-[#6B6B6B]">
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-[#126F77]" />
              Gujarat, India
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-[#126F77]" />
              +91 75750 68585
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-[#126F77]" />
              sales@deennest.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
