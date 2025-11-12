// import React, { useState, useEffect, useRef } from "react";
// import { NavLink, Link, useLocation } from "react-router-dom";
// import {
//   X,
//   Menu,
//   ChevronDown,
//   UserLock,
//   UserPlus,
//   ChevronUp,
// } from "lucide-react";
// import Deen_Logo from "../Component/Home_Component/img/DeenNest - logo AI-01.png";
// import { useNavigate } from "react-router-dom";

// export default function Header() {
//   const [open, setOpen] = useState(false); // Mobile menu state
//   const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open (index or null)
//   const [isVisible, setisVisible] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   const links = [
//     {
//       path: "/features",
//       label: "Features",
//       // children:[{

//       //   path:"/featuresdetails",
//       //   label:"Details",
//       // }
//       // ]
//     },
//     { path: "/pricing", label: "Pricing" },
//     { path: "/about", label: "About Us" },
//     { path: "/contact", label: "Contact Us" },
//   ];

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   const navigate = useNavigate();
//   // Handle scroll to show/hide arrow button
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         // Show button after scrolling 300px
//         setisVisible(true);
//       } else {
//         setisVisible(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
//       <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[70px]">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={Deen_Logo}
//             alt="DeenNest Logo"
//             className="w-[clamp(130px,12vw,170px)] h-auto cursor-pointer"
//             onClick={() => navigate("/")}
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden xl:flex">
//           <ul className="flex gap-8 font-medium text-gray-700">
//             {links.map((link, i) => (
//               <li
//                 key={i}
//                 className="relative group"
//                 ref={link.label === "Features" ? dropdownRef : null}
//               >
//                 {link.children ? (
//                   <>
//                     <NavLink
//                       to={link.path}
//                       className={({ isActive }) => {
//                         const isChildActive = link.children.some((child) =>
//                           location.pathname.startsWith(child.path)
//                         );
//                         return `${
//                           isActive || isChildActive
//                             ? "text-[#126F77] font-semibold border-b-2 border-[#126F77] pb-1"
//                             : "text-[#1A1A1A]"
//                         } hover:text-[#126F77] transition-colors flex items-center gap-1`;
//                       }}
//                     >
//                       {link.label}
//                       <ChevronDown
//                         size={16}
//                         className="transition-transform group-hover:rotate-180"
//                       />
//                     </NavLink>
//                     <ul
//                       className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity
//                     duration-300 z-50 overflow-hidden"
//                     >
//                       {link.children.map((child, j) => (
//                         <li key={j}>
//                           <NavLink
//                             to={child.path}
//                             className={({ isActive }) =>
//                               `block px-4 py-2 ${
//                                 isActive
//                                   ? "bg-[#126F77] text-white"
//                                   : "text-[#1A1A1A] hover:bg-[#126F77] hover:text-white"
//                               } transition-colors`
//                             }
//                           >
//                             {child.label}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 ) : (
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-[#126F77] font-semibold border-b-2 border-[#126F77] pb-1 transition-colors"
//                         : "text-[#1A1A1A] hover:text-[#126F77] transition-colors"
//                     }
//                   >
//                     {link.label}
//                   </NavLink>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* <div className="flex flex-row gap-2 justify-between ">
//           <button
//             className="sm:block hidden md:flex font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer text-center"
//             onClick={() => navigate("/form")}
//           >
//             <UserPlus className="inline-block mr-2" size={18} />
//             Sign Up
//           </button>
//           <button
//             className="sm:block hidden md:block font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer text-center "
//             onClick={() => navigate("/login")}
//           >
//             <UserLock className="inline-block mr-2" size={18} />
//             Login
//           </button>
//         </div> */}
//         <div className="hidden xl:flex flex-row gap-2 justify-between">
//           <button
//             className="flex items-center font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer text-center"
//             onClick={() => navigate("/form")}
//           >
//             <UserPlus className="mr-2" size={18} />
//             Sign Up
//           </button>
//           <button
//             className="flex items-center font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer text-center"
//             onClick={() => navigate("/login")}
//           >
//             <UserLock className="mr-2" size={18} />
//             Login
//           </button>
//         </div>

//         {/* Hamburger Button (Mobile only) */}
//         <button
//           className="xl:hidden text-gray-700"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle Menu"
//         >
//           {open ? (
//             <X size={28} className="opacity-100 animate-fadeIn" />
//           ) : (
//             <Menu size={28} className="opacity-100 animate-fadeIn" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={`xl:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
//           open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col p-4 gap-4 font-medium text-gray-700">
//           {links.map((link, i) => (
//             <li key={i}>
//               {link.children ? (
//                 <>
//                   {/* Parent toggle for mobile */}
//                   <button
//                     onClick={() =>
//                       setOpenDropdown(openDropdown === i ? null : i)
//                     }
//                     className="w-full text-left flex items-center justify-between text-[#1A1A1A] hover:text-[#126F77] transition-colors"
//                     aria-expanded={openDropdown === i}
//                   >
//                     {link.label}
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform ${
//                         openDropdown === i ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {/* Nested sub-list */}
//                   <ul
//                     className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
//                       openDropdown === i
//                         ? "max-h-96 opacity-100"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     {/* Add the main Features link */}
//                     <li>
//                       <NavLink
//                         to={link.path}
//                         className={({ isActive }) =>
//                           isActive
//                             ? "block py-2 text-[#126F77] font-semibold"
//                             : "block py-2 text-[#1A1A1A] hover:text-[#126F77]"
//                         }
//                         onClick={() => {
//                           setOpen(false);
//                           setOpenDropdown(null);
//                         }}
//                       >
//                         Features Overview
//                       </NavLink>
//                     </li>

//                     {/* Child links */}
//                     {link.children.map((child, j) => (
//                       <li key={j}>
//                         <NavLink
//                           to={child.path}
//                           className={({ isActive }) =>
//                             isActive
//                               ? "block py-2 text-[#126F77] font-semibold"
//                               : "block py-2 text-[#1A1A1A] hover:text-[#126F77]"
//                           }
//                           onClick={() => {
//                             setOpen(false);
//                             setOpenDropdown(null);
//                           }}
//                         >
//                           {child.label}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               ) : (
//                 <NavLink
//                   to={link.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-[#126F77] font-semibold border-b-2 border-[#126F77] pb-1 transition-colors"
//                       : "text-[#1A1A1A] hover:text-[#126F77] transition-colors"
//                   }
//                   onClick={() => setOpen(false)}
//                 >
//                   {link.label}
//                 </NavLink>
//               )}
//             </li>
//           ))}
//           <li>
//             <div className="flex flex-row gap-2 justify-between">
//               <div className="font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer text-center">
//                 <Link to="/form" onClick={() => setOpen(false)}>
//                   Sign
//                 </Link>
//               </div>
//               <div className="font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer text-center">
//                 <Link to="/" onClick={() => setOpen(false)}>
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-[#126F77] text-white p-3 rounded-full shadow-lg hover:bg-[#0E575D]
//                 transition-all duration-200 ease-out hover:translate-y-[-4px] cursor-pointer z-60"
//           style={{
//             boxShadow: "0 8px 16px rgba(3, 4, 28, 0.3)",
//             lineHeight: "44px",
//             textAlign: "center",
//           }}
//           aria-label="Scroll to Top"
//         >
//           <ChevronUp size={24} />
//         </button>
//       )}
//       <style>
//         {`

//           @keyframes fadeIn {
//             from { opacity: 0; transform: scale(0.8); }
//             to { opacity: 1; transform: scale(1); }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.3s ease-in-out;
//             }
//         `}
//       </style>
//     </header>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  UserPlus,
  UserLock,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // ← UPDATED: router hooks
import Deen_Logo from "../Component/Home_Component/img/DeenNest - logo AI-01.png";

export default function EnhancedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const location = useLocation(); // ← UPDATED: for active state
  const navigate = useNavigate(); // ← UPDATED: for button navigation

  const navigationLinks = [
    { path: "/features", label: "Features" },
    { path: "/about", label: "About Us" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  /* --------------------------------------------------------------
     Close mobile menu when clicking outside
  -------------------------------------------------------------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle Menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* --------------------------------------------------------------
     Scroll handling (header shrink + scroll-to-top)
  -------------------------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrollTopVisible(scrollY > 300);
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false); // ← UPDATED: helper

  return (
    <>
      {/* ====================== HEADER ====================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200/50"
            : "bg-white shadow-md border-b border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[75px]">
          {/* ---------- LOGO ---------- */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="flex items-center">
                <img
                  src={Deen_Logo}
                  alt="DeenNest Logo"
                  className="w-[clamp(130px,12vw,170px)] h-auto cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          </div>

          {/* ---------- DESKTOP NAVIGATION ---------- */}
          <nav className="hidden xl:flex">
            <ul className="flex gap-2 font-medium">
              {navigationLinks.map((link, index) => (
                <li key={index} className="relative group">
                  {/* ← UPDATED: NavLink + active detection */}
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-5 py-2.5 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-[#126F77] font-semibold"
                          : "text-gray-700 hover:text-[#126F77]"
                      }`
                    }
                  >
                    <span className="relative z-10">{link.label}</span>

                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#126F77]/10 to-[#0E575D]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />

                    {/* Active/Hover indicator */}
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-[#126F77] via-[#0E575D] to-[#126F77] rounded-full transition-all duration-300 ${
                        location.pathname === link.path
                          ? "w-3/4 opacity-100"
                          : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100"
                      }`}
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- DESKTOP AUTH BUTTONS ---------- */}
          <div className="hidden xl:flex flex-row gap-4">
            {/* Sign Up */}
            <button
              onClick={() => navigate("/sign_up")} // ← UPDATED: navigation
              className="group relative px-7 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#126F77] via-[#0E575D] to-[#126F77] bg-size-200 animate-gradient" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 group-hover:translate-x-full transform" />
              <div className="relative z-10 flex items-center gap-2 text-white ">
                <UserPlus className="w-5 h-5" />
                <span>Sign Up</span>
              </div>
            </button>

            {/* Login */}
            <button
              onClick={() => navigate("/login")} // ← UPDATED: navigation
              className="group relative px-7 py-3 rounded-full font-semibold border-2 border-[#126F77] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#126F77] to-[#0E575D] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative z-10 flex items-center gap-2 text-[#126F77] group-hover:text-white transition-colors duration-300">
                <UserLock className="w-5 h-5" />
                <span>Login</span>
              </div>
            </button>
          </div>

          {/* ---------- HAMBURGER (mobile) ---------- */}
          <button
            className="xl:hidden relative w-12 h-12 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "top-1/2 rotate-45 -translate-y-1/2"
                    : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "top-1/2 -rotate-45 -translate-y-1/2"
                    : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* ====================== MOBILE MENU ====================== */}
        <div
          ref={mobileMenuRef}
          className={`xl:hidden bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col p-4 gap-2 font-medium">
            {navigationLinks.map((link, index) => (
              <li
                key={index}
                style={{
                  animation: isMobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                    : "none",
                }}
              >
                {/* ← UPDATED: NavLink + close on click */}
                <NavLink
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `w-full block py-4 px-5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#126F77]/15 to-[#0E575D]/10 text-[#126F77] font-semibold shadow-sm"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[#126F77] hover:translate-x-2"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* ----- Mobile Auth Buttons ----- */}
            <li className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  navigate("/sign_up");
                  closeMobileMenu();
                }}
                className="sm:flex-1 group relative font-semibold py-2 sm:py-2 sm:px-1 md:py-4 md:px-2 
                rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#126F77] via-[#0E575D] to-[#126F77] bg-size-200 animate-gradient" />
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Sign Up
                </span>
              </button>
              <button
                onClick={() => {
                  navigate("/login");
                  closeMobileMenu();
                }}
                className="sm:flex-1 font-semibold border-2 border-[#126F77] text-[#126F77] py-2 sm:py-2 sm:px-1 md:py-4 md:px-2 rounded-full
                 hover:bg-[#126F77] hover:text-white transition-all duration-300 hover:shadow-lg flex items-center 
                justify-center gap-2 cursor-pointer"
              >
                <UserLock className="w-5 h-5" />
                Login
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* ====================== SCROLL-TO-TOP ====================== */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-2xl shadow-2xl transition-all duration-500 z-50 group ${
          isScrollTopVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-0 pointer-events-none"
        }`}
        aria-label="Scroll to Top"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#126F77] via-[#0E575D] to-[#0A4B4F] rounded-2xl transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 rounded-2xl bg-[#126F77] animate-ping opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 group-hover:translate-x-full transform rounded-2xl" />
        <ChevronUp
          size={10}
          className="relative z-10 text-white transition-transform duration-300 group-hover:-translate-y-1 w-4 h-4 md:w-7 md:h-7"
        />
      </button>

      {/* ====================== ANIMATIONS ====================== */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </>
  );
}
