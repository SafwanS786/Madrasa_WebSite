import React, { useState, useEffect } from "react";
import arrow from "../Home_component/img/downarrow.svg"; // your down arrow image

export default function Footer_Acc({ title, children }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop: always open
  if (!isMobile) {
    return (
      <div className="text-white">
        <h4 className="font-semibold mb-4">{title}</h4>
        <div className="py-2">{children}</div>
      </div>
    );
  }

  // Mobile: accordion
  return (
    <div className=" text-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left font-semibold py-2"
      >
        {title}
        <img
          style={{
            color: "#FFF",
            backgroundColor: "aliceblue",
            border: "1px solid white",

            borderRadius: "30px",
          }}
          src={arrow}
          alt="Toggle"
          className={`w-4 h-4 transition-transform duration-300 text-white ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="py-2">{children}</div>}
    </div>
  );
}
