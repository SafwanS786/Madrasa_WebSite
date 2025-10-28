// import React, { useEffect, useState } from "react";

// export default function Loader() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading process
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Adjust timing as needed

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isLoading) return null;

//   return (
//     <>
//       {/* Main Loader */}
//       <div className="fixed inset-0 bg-[#039BE5] z-[999998] flex items-center justify-center transition-transform duration-350 ease-out">
//         <div className="relative w-32 h-32 flex items-center justify-center">
//           {/* Outer Circle */}
//           <div className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 bg-white rounded-full animate-pageLoaderOuter z-[999999]"></div>

//           {/* Inner Circle */}
//           <div className="absolute top-1/2 left-1/2 w-10 h-10 -mt-5 -ml-5 bg-[#039BE5] rounded-full animate-pageLoaderInner z-[999999]"></div>
//         </div>
//       </div>

//       {/* Background Loader */}
//       <div className="fixed inset-0 bg-white z-[999997] opacity-0 transition-opacity duration-350 infraloader-active"></div>
//     </>
//   );
// }
// import React, { useEffect, useState } from "react";

// export default function Loader() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isLoading) return null;

//   return (
//     <>
//       {/* Main Loader */}
//       <div
//         className="fixed inset-0 bg-[#039BE5] z-[999998] flex items-center justify-center"
//         style={{
//           transition: "transform 0.35s ease-out",
//           transform: "translateY(0)",
//         }}
//       >
//         <div className="relative w-32 h-32 flex items-center justify-center">
//           {/* Outer Circle */}
//           <div
//             className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 bg-white rounded-full z-[999999]"
//             style={{
//               animation: "pageLoaderOuter 1.5s infinite ease-in",
//             }}
//           ></div>

//           {/* Inner Circle */}
//           <div
//             className="absolute top-1/2 left-1/2 w-10 h-10 -mt-5 -ml-5 bg-[#039BE5] rounded-full z-[999999]"
//             style={{
//               animation: "pageLoaderInner 1.5s infinite ease-in",
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Background Loader */}
//       <div
//         className="fixed inset-0 bg-white z-[999997]"
//         style={{
//           opacity: 1,
//           transition: "opacity 0.35s",
//         }}
//       ></div>

//       {/* Add inline styles for animations */}
//       <style>
//         {`
//           @keyframes pageLoaderOuter {
//             0% {
//               transform: scale(1);
//               opacity: 1;
//             }
//             40% {
//               transform: scale(0);
//               opacity: 0;
//             }
//             100% {
//               transform: scale(0);
//               opacity: 0;
//             }
//           }

//           @keyframes pageLoaderInner {
//             0% {
//               transform: scale(0);
//               opacity: 0;
//             }
//             40% {
//               transform: scale(0);
//               opacity: 0;
//             }
//             50% {
//               transform: scale(1);
//               opacity: 1;
//             }
//             90% {
//               transform: scale(0);
//               opacity: 0;
//             }
//             100% {
//               transform: scale(0);
//               opacity: 0;
//             }
//           }

//           body.loading {
//             overflow: hidden !important;
//           }

//           * {
//             -webkit-font-smoothing: antialiased;
//             -moz-osx-font-smoothing: grayscale;
//             text-rendering: optimizeLegibility;
//           }

//           a, a:active, i, i:active, div, div:active, div:focus, span:focus, span:active {
//             outline: none !important;
//           }

//           *::-webkit-scrollbar-thumb {
//             border-radius: 5px;
//             background: rgba(0, 0, 0, 0.2);
//           }

//           *::-webkit-scrollbar {
//             width: 10px;
//           }
//         `}
//       </style>
//     </>
//   );
// }
import React from "react";

export default function Loader() {
  return (
    <>
      {/* Main Loader */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-[#126F77] to-[#0F5A61] z-[999998] flex items-center justify-center"
        style={{
          transition: "transform 0.35s ease-out",
          transform: "translateY(0)",
        }}
      >
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer Circle */}
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 bg-white rounded-full z-[999999]"
            style={{
              animation: "pageLoaderOuter 1.5s infinite ease-in",
            }}
          ></div>

          {/* Inner Circle */}
          <div
            className="absolute top-1/2 left-1/2 w-10 h-10 -mt-5 -ml-5 bg-gradient-to-br from-[#EB6319] to-[#FF8C42] rounded-full z-[999999]"
            style={{
              animation: "pageLoaderInner 1.5s infinite ease-in",
            }}
          ></div>
        </div>

        {/* DeenNest Logo/Brand */}
        <div className="absolute bottom-10 text-white text-center">
          <div className="text-2xl font-bold mb-2">DeenNest</div>
          <div className="text-white/80 text-sm">Islamic Management System</div>
        </div>
      </div>

      {/* Background Loader */}
      <div
        className="fixed inset-0 bg-white z-[999997]"
        style={{
          opacity: 1,
          transition: "opacity 0.35s",
        }}
      ></div>

      {/* Add inline styles for animations */}
      <style>
        {`
          @keyframes pageLoaderOuter {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            40% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }

          @keyframes pageLoaderInner {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            40% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
            90% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }

          body.loading {
            overflow: hidden !important;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          a, a:active, i, i:active, div, div:active, div:focus, span:focus, span:active {
            outline: none !important;
          }

          *::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: rgba(0, 0, 0, 0.2);
          }

          *::-webkit-scrollbar {
            width: 10px;
          }
        `}
      </style>
    </>
  );
}
