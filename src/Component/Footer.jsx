import React from "react";
import Logo1 from "../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import Footer_Acc from "../Component/Home_Component/Footer_Acc";

export default function Footer() {
  const quickLinks = ["Features", "Pricing", "About Us", "Contact", "FAQs"];
  const supportLinks = [
    "Help Center",
    "Documentation",
    "Training",
    "Community",
    "System Status",
  ];

  return (
    <footer className="bg-primary text-white px-6 md:px-10 lg:px-16 lg:py-16">
      <div className="max-w-7xl lg:max-w-[96rem] mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:justify-center lg:items-center gap-6 md:gap-12 mb-12">
          {/* Logo + description */}
          <div>
            <img
              src={Logo1}
              alt="DeenNest"
              className="w-[clamp(120px,12vw,180px)] h-auto mb-4 invert brightness-0 sepia saturate-100 hue-rotate-[200deg] mt-8"
            />
            <p className="text-white/80 mb-6 max-w-md">
              Empowering Islamic education through modern technology.
              Simplifying madrasa management so educators can focus on teaching
              and nurturing young minds.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Contact Support"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <Footer_Acc title="Quick Links">
            <ul className="space-y-2 text-white/80 text-sm ">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Footer_Acc>

          {/* Support */}
          <Footer_Acc title="Support">
            <ul className="space-y-2 text-white/80 text-sm">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Footer_Acc>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DeenNest • All Rights Reserved By Ziaat
            Technolabs Pvt. Ltd. reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/80 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-white/80 hover:text-white mb-8">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
