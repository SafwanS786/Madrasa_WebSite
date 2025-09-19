import React from "react";
import Logo from "../Component/Home_Component/img/DeenNest - logo AI-01.png";
import { MessageCircle } from "lucide-react";
import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const data = [
    {
      Links: "Features",
    },
    {
      Links: "Pricing",
    },
    {
      Links: "About Us",
    },
    {
      Links: "Contact",
    },
    {
      Links: "FAQs",
    },
  ];
  const Suppot = [
    {
      sp: "Help Center",
    },
    {
      sp: "Documentation",
    },
    {
      sp: "Training",
    },
    {
      sp: "Community",
    },
    {
      sp: "System Status",
    },
  ];
  return (
    <footer className="bg-primary text-white py-2 mx-auto px-10">
      <div className="mx-auto">
        <div className="flex flex-row justify-around gap-2 mb-12">
          <div className="flex flex-col gap-4">
            <img
              src={Logo}
              alt="DeenNest"
              className="w-[clamp(80px,10vw,170px)] h-auto invert brightness-0 sepia saturate-100 hue-rotate-[200deg]"
            />
            <p className="text-white/80 mb-2 max-w-md">
              Empowering Islamic education through modern technology.
              Simplifying madrasa management so educators can focus on teaching
              and nurturing young minds.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
              >
                <Linkedin />
              </a>{" "}
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {data.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.Links}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {Suppot.map((value, index) => (
                <li key={index}>
                  <a
                    href=""
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {value.sp}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            © 2024 Madrasa Management System. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href=""
              className="text-white/80 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href=""
              className="text-white/80 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href=""
              className="text-white/80 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
