import React from "react";
import { NavLink } from "react-router-dom";
import Deen_Logo from "../Component/Home_Component/img/DeenNest - logo AI-01.png";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full flex flex-row justify-between p-8 gap-2 h-[70px] bg-white shadow-md font-sen border-b border-gray-200">
      <div className="flex items-center">
        <img
          src={Deen_Logo}
          alt="Deen_Nest_Logo"
          className="w-[clamp(80px,10vw,180px)] h-auto"
        />
        {/* <h1 className="text-[#1A1A1A] font-semibold mt-4">
          Madrasa Management System
        </h1> */}
      </div>
      <nav>
        <ul className="flex gap-6 font-medium text-gray-700">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-[#126F77] font-bold transition-colors"
                  : "text-[#1A1A1A] hover:text-[#126F77] transition-colors cursor-pointer"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive
                  ? "text-[#126F77] font-bold transition-colors"
                  : "text-[#1A1A1A] hover:text-[#126F77] transition-colors cursor-pointer"
              }
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-[#126F77] font-bold transition-colors"
                  : "text-[#1A1A1A] hover:text-[#126F77] transition-colors cursor-pointer"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#126F77] font-bold transition-colors"
                  : "text-[#1A1A1A] hover:text-[#126F77] transition-colors"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#126F77] font-bold transition-colors"
                  : "text-[#1A1A1A] hover:text-[#126F77] transition-colors cursor-pointer"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
