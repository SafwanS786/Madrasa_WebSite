// import React, { useState, useEffect, useRef } from "react";
// import { NavLink, Link, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

// import { X, Menu, ChevronDown } from "lucide-react";
// import Deen_Logo from "../Component/Home_Component/img/DeenNest - logo AI-01.png";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [featuresOpen, setFeaturesOpen] = useState(false); // Features dropdown state
//   const dropdownRef = useRef(null); // Ref for outside click detection
//   const location = useLocation(); // To check active routes
//   const links = [
//     { path: "/home", label: "Home" },
//     {
//       path: "/features",
//       label: "Features",
//       children: [
//         { path: "/features/student-management", label: "Student Management" },
//         {
//           path: "/features/attendance-scheduling",
//           label: "Attendance & Scheduling",
//         },
//         {
//           path: "/features/financial-management",
//           label: "Financial Management",
//         },
//         {
//           path: "/features/communication-portal",
//           label: "Communication Portal",
//         },
//         { path: "/features/reports-analytics", label: "Reports & Analytics" },
//         {
//           path: "/features/notifications-alerts",
//           label: "Notifications & Alerts",
//         },
//         // Add more sub-features as needed
//       ],
//     },
//     { path: "/pricing", label: "Pricing" },
//     { path: "/about", label: "About Us" },
//     { path: "/contact", label: "Contact Us" },
//   ];
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setFeaturesOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
//       <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[70px]">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={Deen_Logo}
//             alt="DeenNest Logo"
//             className="w-[clamp(130px,12vw,170px)] h-auto"
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex">
//           <ul className="flex gap-8 font-medium text-gray-700">
//             {links.map((link, i) => (
//               <li key={i} className="relative group">
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
//                       onClick={() => setFeaturesOpen(!featuresOpen)}
//                     >
//                       {link.label}
//                       <ChevronDown
//                         size={16}
//                         className="transition-transform group-hover:rotate-180"
//                       />
//                     </NavLink>
//                     <ul
//                       className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity
//                         duration-300 z-50 overflow-hidden"
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
//         <div className="hidden md:block font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer">
//           <Link to="/form">sign</Link>
//         </div>
//         {/* Hamburger Button (Mobile only) */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle Menu"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
//           open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col p-4 gap-4 font-medium text-gray-700">
//           {links.map((link, i) => (
//             <li key={i} className="">
//               {link.children ? (
//                 <>
//                 <button
//                     onClick={() => setFeaturesOpen(!featuresOpen)}
//                     className="w-full text-left flex items-center justify-between text-[#1A1A1A] hover:text-[#126F77] transition-colors"
//                     aria-expanded={featuresOpen}
//                   >
//                     {link.label}
//                     <ChevronDown size={16} className={`transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
//                   </button>
//                   <ul
//                     className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
//                       featuresOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                     }`}
//                   >
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
//                             setOpen(false); // Close mobile menu
//                             setFeaturesOpen(false); // Close dropdown
//                           }}
//                         >
//                           {child.label}
//                           </NavLink>
//                           </li>
//                     ))}
//                   </ul>
//                 </>
//               ) : (
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-[#126F77] font-semibold border-b-2 border-[#126F77] pb-1 transition-colors"
//                     : "text-[#1A1A1A] hover:text-[#126F77] transition-colors"
//                 }
//                 onClick={() => setOpen(false)} // close menu when clicking link
//               >
//                 {link.label}
//               </NavLink>
//           ))}
//           <li>
//             <div className="font-semibold border border-primary px-6 bg-primary text-white py-2 rounded-2xl cursor-pointer text-center">
//               <Link to="/form" onClick={() => setOpen(false)}>
//                 Sign
//               </Link>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }