import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { X, Menu, ChevronDown } from "lucide-react";
import Deen_Logo from "../Component/Home_Component/img/DeenNest - logo AI-01.png";

export default function Header() {
  const [open, setOpen] = useState(false); // Mobile menu state
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open (index or null)
  const dropdownRef = useRef(null);
  const location = useLocation();

  const links = [
    { path: "/home", label: "Home" },
    {
      path: "/features",
      label: "Features",
      // children: [
      //   {
      //     path: "/features/details",
      //     label: "Features_Details",
      //   },
      // ],
    },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <li
                key={i}
                className="relative group"
                ref={link.label === "Features" ? dropdownRef : null}
              >
                {link.children ? (
                  <>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => {
                        const isChildActive = link.children.some((child) =>
                          location.pathname.startsWith(child.path)
                        );
                        return `${
                          isActive || isChildActive
                            ? "text-[#126F77] font-semibold border-b-2 border-[#126F77] pb-1"
                            : "text-[#1A1A1A]"
                        } hover:text-[#126F77] transition-colors flex items-center gap-1`;
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className="transition-transform group-hover:rotate-180"
                      />
                    </NavLink>
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 overflow-hidden">
                      {link.children.map((child, j) => (
                        <li key={j}>
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 ${
                                isActive
                                  ? "bg-[#126F77] text-white"
                                  : "text-[#1A1A1A] hover:bg-[#126F77] hover:text-white"
                              } transition-colors`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden md:block font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer">
          <Link to="/form">Sign</Link>
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
              {link.children ? (
                <>
                  {/* Parent toggle for mobile */}
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === i ? null : i)
                    }
                    className="w-full text-left flex items-center justify-between text-[#1A1A1A] hover:text-[#126F77] transition-colors"
                    aria-expanded={openDropdown === i}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {/* Nested sub-list */}
                  <ul
                    className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
                      openDropdown === i
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* Add the main Features link */}
                    <li>
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block py-2 text-[#126F77] font-semibold"
                            : "block py-2 text-[#1A1A1A] hover:text-[#126F77]"
                        }
                        onClick={() => {
                          setOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        Features Overview
                      </NavLink>
                    </li>
                    
                    {/* Child links */}
                    {link.children.map((child, j) => (
                      <li key={j}>
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            isActive
                              ? "block py-2 text-[#126F77] font-semibold"
                              : "block py-2 text-[#1A1A1A] hover:text-[#126F77]"
                          }
                          onClick={() => {
                            setOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#126F77] font-semibold border-b-2 border-[#126F77] pb-1 transition-colors"
                      : "text-[#1A1A1A] hover:text-[#126F77] transition-colors"
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              )}
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