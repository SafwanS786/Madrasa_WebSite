import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { X, Menu } from "lucide-react";
import Deen_Logo from "../Component/Home_Component/img/DeenNest - logo AI-01.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/home", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[70px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Deen_Logo}
            alt="DeenNest Logo"
            className="w-[clamp(130px,12vw,170px)] h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 font-medium text-gray-700">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#126F77] font-semibold border-b-2 border-[#126F77] pb-1 transition-colors"
                      : "text-[#1A1A1A] hover:text-[#126F77] transition-colors"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer">
          <Link to="/form">sign</Link>
        </div>
        {/* Hamburger Button (Mobile only) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4 font-medium text-gray-700">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#126F77] font-semibold border-b-2 border-[#126F77] pb-1 transition-colors"
                    : "text-[#1A1A1A] hover:text-[#126F77] transition-colors"
                }
                onClick={() => setOpen(false)} // close menu when clicking link
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <div className="font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer text-center">
              <Link to="/form" onClick={() => setOpen(false)}>
                Sign
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
