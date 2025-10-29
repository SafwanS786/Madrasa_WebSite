// import React from "react";
// import Logo1 from "../Component/Home_Component/img/DeenNest - logo AI-01(cr).png";
// import { Facebook, Linkedin, MessageCircle } from "lucide-react";
// import Footer_Acc from "../Component/Home_Component/Footer_Acc";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const quickLinks = [
//     {
//       label: "Features",
//       link: "/features",
//     },
//     {
//       label: "Pricing",
//       link: "/pricing",
//     },
//     {
//       label: "About Us",
//       link: "/about",
//     },
//     {
//       label: "Contact",
//       link: "/contact",
//     },
//     {
//       label: "Documentation",
//       link: "/pricing",
//     },
//     {
//       label: "Training",
//       link: "/features",
//     },
//   ];
//   const supportLinks = [
//     "Privacy Policy",
//     "Terms of Service",
//     "Cookie Policy",
//     "Refund Policy",
//     "Acceptable Use",
//     "Security & Compliance",
//   ];

//   return (
//     <footer className="bg-primary text-white px-6 md:px-10 lg:px-16 lg:py-8">
//       <div className="max-w-7xl lg:max-w-[96rem] mx-auto">
//         {/* Top section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:justify-center lg:items-center gap-6 md:gap-12 mb-12">
//           {/* Logo + description */}
//           <div>
//             <img
//               src={Logo1}
//               alt="DeenNest"
//               className="w-[clamp(120px,12vw,180px)] h-auto mb-4 invert brightness-0 sepia saturate-100 hue-rotate-[200deg] mt-8"
//             />
//             <p className="text-white/80 mb-6 max-w-md">
//               Empowering Islamic education through modern technology.
//               Simplifying madrasa management so Maulana and educators can focus
//               on teaching and nurturing young minds.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
//               >
//                 <Facebook size={20} />
//               </a>
//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="#"
//                 aria-label="Contact Support"
//                 className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EB6319] transition-colors duration-300"
//               >
//                 <MessageCircle size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <Footer_Acc title="Quick Links">
//             <ul className="space-y-2 text-white/80 text-sm ">
//               {quickLinks.map((l, index) => (
//                 <li key={index}>
//                   <Link to={l.link} className="hover:text-white">
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </Footer_Acc>

//           {/* Support */}
//           <Footer_Acc title="Terms Links">
//             <ul className="space-y-2 text-white/80 text-sm">
//               {supportLinks.map((link, index) => (
//                 <li key={index}>
//                   <a href="#" className="hover:text-white">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </Footer_Acc>
//         </div>

//         {/* Bottom section */}
//         <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-white/80 text-sm mb-4 md:mb-0">
//             © {new Date().getFullYear()} DeenNest • All Rights Reserved By Ziaat
//             Technolabs Pvt. Ltd. reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
// import React from "react";
// import {
//   Facebook,
//   Linkedin,
//   MessageCircle,
//   Instagram,
//   Youtube,
//   Twitter,
//   Mail,
//   Phone,
//   MapPin,
//   Star,
//   Users,
//   Award,
//   Shield,
//   ArrowRight
// } from "lucide-react";

// export default function Footer() {
//   const quickLinks = [
//     { label: "Features", link: "/features" },
//     { label: "Pricing", link: "/pricing" },
//     { label: "About Us", link: "/about" },
//     { label: "Contact", link: "/contact" },
//     { label: "Documentation", link: "/pricing" },
//     { label: "Training", link: "/features" },
//   ];

//   const supportLinks = [
//     { label: "Privacy Policy", link: "#" },
//     { label: "Terms of Service", link: "#" },
//     { label: "Cookie Policy", link: "#" },
//     { label: "Refund Policy", link: "#" },
//     { label: "Acceptable Use", link: "#" },
//     { label: "Security & Compliance", link: "#" },
//   ];

//   const socialLinks = [
//     {
//       icon: Facebook,
//       label: "Facebook",
//       url: "https://facebook.com",
//       color: "#1877F2"
//     },
//     {
//       icon: Instagram,
//       label: "Instagram",
//       url: "https://instagram.com",
//       color: "#E4405F"
//     },
//     {
//       icon: Twitter,
//       label: "Twitter/X",
//       url: "https://twitter.com",
//       color: "#1DA1F2"
//     },
//     {
//       icon: Youtube,
//       label: "YouTube",
//       url: "https://youtube.com",
//       color: "#FF0000"
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       url: "https://linkedin.com",
//       color: "#0A66C2"
//     },
//     {
//       icon: MessageCircle,
//       label: "WhatsApp",
//       url: "https://wa.me/1234567890",
//       color: "#25D366"
//     },
//   ];

//   const trustIndicators = [
//     { icon: Users, value: "500+", label: "Active Institutions" },
//     { icon: Star, value: "4.9/5", label: "User Rating" },
//     { icon: Award, value: "98%", label: "Satisfaction Rate" },
//     { icon: Shield, value: "100%", label: "Secure & Safe" },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-[#126F77] via-[#0F5A61] to-[#126F77] text-white">
//       {/* Trust Indicators Section */}
//       <div className="border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {trustIndicators.map((item, index) => (
//               <div
//                 key={index}
//                 className="text-center group hover:transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-[#EB6319] transition-colors duration-300">
//                   <item.icon className="w-8 h-8" />
//                 </div>
//                 <div className="text-2xl md:text-3xl font-bold mb-1">{item.value}</div>
//                 <div className="text-white/70 text-sm">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
//           {/* Logo + Description */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-gradient-to-r from-[#EB6319] to-[#FF8C42] rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">D</span>
//               </div>
//               <span className="text-2xl font-bold">DeenNest</span>
//             </div>
//             <p className="text-white/80 mb-6 leading-relaxed">
//               Empowering Islamic education through modern technology.
//               Simplifying madrasa management so Maulana and educators can focus
//               on teaching and nurturing young minds.
//             </p>

//             {/* Contact Info */}
//             <div className="space-y-3 mb-6">
//               <a
//                 href="mailto:info@deennest.com"
//                 className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
//               >
//                 <Mail className="w-4 h-4 group-hover:text-[#EB6319]" />
//                 <span className="text-sm">info@deennest.com</span>
//               </a>
//               <a
//                 href="tel:+1234567890"
//                 className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
//               >
//                 <Phone className="w-4 h-4 group-hover:text-[#EB6319]" />
//                 <span className="text-sm">+1 (234) 567-890</span>
//               </a>
//               <div className="flex items-start gap-2 text-white/80">
//                 <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                 <span className="text-sm">Kankauli, Maharashtra, India</span>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h3 className="text-sm font-semibold mb-3 text-white/90">Follow Us</h3>
//               <div className="flex flex-wrap gap-3">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.label}
//                     className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group relative"
//                     // style={{
//                     //   '--hover-color': social.color
//                     // } as React.CSSProperties}
//                   >
//                     <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                     <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                       {social.label}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-[#EB6319] rounded-full"></div>
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.link}
//                     className="text-white/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 group"
//                   >
//                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-[#EB6319] rounded-full"></div>
//               Legal & Support
//             </h3>
//             <ul className="space-y-3">
//               {supportLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.link}
//                     className="text-white/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 group"
//                   >
//                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//               <div className="w-1 h-6 bg-[#EB6319] rounded-full"></div>
//               Stay Updated
//             </h3>
//             <p className="text-white/80 text-sm mb-4">
//               Subscribe to our newsletter for updates, tips, and special offers.
//             </p>
//             <div className="flex gap-2 mb-6">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EB6319] transition-all"
//               />
//               <button className="px-4 py-2 bg-gradient-to-r from-[#EB6319] to-[#FF8C42] rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Awards/Badges */}
//             <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//               <div className="flex items-center gap-3 mb-2">
//                 <Award className="w-6 h-6 text-[#EB6319]" />
//                 <span className="font-semibold text-sm">Certified & Trusted</span>
//               </div>
//               <p className="text-white/70 text-xs">
//                 ISO certified and trusted by 500+ Islamic institutions worldwide.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-white/10 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-white/70 text-sm text-center md:text-left">
//               © {new Date().getFullYear()} DeenNest • All Rights Reserved By{" "}
//               <span className="text-white font-semibold">Ziaat Technolabs Pvt. Ltd.</span>
//             </p>
//             <div className="flex items-center gap-4 text-white/70 text-sm">
//               <span className="flex items-center gap-1">
//                 Made with <span className="text-red-400">❤</span> in India
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import Logo1 from "../Component/Home_Component/img/DeenNest - logo AI-01(cr)cpy.png";
import { Link } from "react-router-dom";
import Footer_Acc from "../Component/Home_Component/Footer_Acc";

export default function Footer() {
  const quickLinks = [
    { label: "Features", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "About Us", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Documentation", link: "/documentation" },
    { label: "Training", link: "/training" },
  ];

  const supportLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Refund Policy",
    "Acceptable Use",
    "Security & Compliance",
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      link: "https://facebook.com",
      name: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      link: "https://instagram.com",
      name: "Instagram",
    },
    {
      icon: <Youtube size={20} />,
      link: "https://youtube.com",
      name: "YouTube",
    },
    {
      icon: <Twitter size={20} />,
      link: "https://twitter.com",
      name: "Twitter/X",
    },
    {
      icon: <Linkedin size={20} />,
      link: "https://linkedin.com",
      name: "LinkedIn",
    },
    {
      icon: <MessageCircle size={20} />,
      link: "https://wa.me/919876543210",
      name: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a2f34] to-[#083033] text-white px-6 md:px-10 lg:px-16 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-10">
          {/* Logo and Description */}
          <div>
            <img
              src={Logo1}
              alt="DeenNest"
              className="w-[clamp(140px,14vw,200px)] h-auto mb-5"
            />
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Empowering Islamic education through modern technology.
              Simplifying madrasa management so educators can focus on what
              truly matters — teaching and nurturing young minds.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 bg-white/10 hover:bg-[#EB6319] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <Footer_Acc title="Quick Links">
            <ul className="space-y-2 text-white/80 text-sm">
              {quickLinks.map((l, index) => (
                <li key={index}>
                  <Link
                    to={l.link}
                    className="hover:text-[#EB6319] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Footer_Acc>

          {/* Support & Legal */}
          <Footer_Acc title="Support & Legal">
            <ul className="space-y-2 text-white/80 text-sm">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-[#EB6319] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Footer_Acc>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">DeenNest</span> • All Rights
            Reserved by{" "}
            <span className="font-semibold text-[#EB6319]">
              Ziaat Technolabs Pvt. Ltd.
            </span>
          </p>
          {/*  */}
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EB6319]/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#126F77]/10 blur-3xl rounded-full -z-10"></div>
    </footer>
  );
}
