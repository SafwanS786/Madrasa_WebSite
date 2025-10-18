import React from "react";
import {
  Users,
  Calendar,
  Wallet,
  MessageCircle,
  ChartColumn,
  Bell,
  CircleCheckBig,
  Proportions,
  BookOpenCheck,
  DatabaseZap,
  Podcast,
} from "lucide-react";

export default function Main_Features_Card() {
  const card = [
    {
      icon: Users,
      Head: "Student Management",
      Para: "Manage complete student profiles, enrollment details and academic progress in one easy, centralized platform.",
      features: [
        {
          icon_card: CircleCheckBig,
          text: "Student profiles & photos",
        },
        {
          icon_card: CircleCheckBig,
          text: "Enrollment tracking",
        },
        {
          icon_card: CircleCheckBig,
          text: "Academic history",
        },
        {
          icon_card: CircleCheckBig,
          text: "Parent & guardian details",
        },
      ],
      // gradientFrom: "#126F77",
      // gradientTo: "#0F5A61",
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
    {
      icon: Calendar,
      Head: "Maulana & Staff Management",
      Para: "Maintain teacher and staff records, attendance and payroll—ensuring transparency and smooth academic coordination.",
      features: [
        {
          text: "Personal profiles & contact info",
          icon_card: CircleCheckBig,
        },
        {
          text: "Attendance tracking",
          icon_card: CircleCheckBig,
        },
        {
          text: " Payroll details",
          icon_card: CircleCheckBig,
        },
        {
          text: " Role & subject assignment",
          icon_card: CircleCheckBig,
        },
      ],

      // gradientFrom: "#EB6319",
      // gradientTo: "#D4540E",
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
    {
      icon: Wallet,
      Head: "Parent Management",
      Para: "Keep parents connected with real-time updates on attendance, fees and important notifications from admin.",
      features: [
        {
          text: "Parent profiles",
          icon_card: CircleCheckBig,
        },
        {
          text: " Linked student data",
          icon_card: CircleCheckBig,
        },
        {
          text: " Attendance & report sharing",
          icon_card: CircleCheckBig,
        },
        {
          text: " View child reviews",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
    {
      icon: MessageCircle,
      Head: " Fees Management",
      Para: "Simplify fee collection and tracking with automatic receipts, due date reminders and instant financial summaries.",
      features: [
        {
          text: " Fee collection & receipts",
          icon_card: CircleCheckBig,
        },
        {
          text: " Receipt generation",
          icon_card: CircleCheckBig,
        },
        {
          text: " Due date reminders",
          icon_card: CircleCheckBig,
        },
        {
          text: " Summary reports",
          icon_card: CircleCheckBig,
        },
      ],

      gradientFrom: "#Eb6319",
      gradientTo: "#126f77",
    },
    {
      icon: ChartColumn,
      Head: "Payroll Management",
      Para: "Manage maulana and staff salaries, payslips and secure record maintenance.",
      features: [
        {
          text: " Salary setup & management",
          icon_card: CircleCheckBig,
        },
        {
          text: " Payment tracking",
          icon_card: CircleCheckBig,
        },
        {
          text: " Payroll slips",
          icon_card: CircleCheckBig,
        },
        {
          text: " Overview & analytics",
          icon_card: CircleCheckBig,
        },
      ],
      // gradientFrom: "#126F77",
      // gradientTo: "#0F5A61",
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
    {
      icon: Bell,
      Head: "Attendance Management",
      Para: "Record daily attendance digitally and generate reports for students, maulana and staff without manual effort.",
      features: [
        {
          text: "Daily attendance marking",
          icon_card: CircleCheckBig,
        },
        {
          text: " Reports by class or date",
          icon_card: CircleCheckBig,
        },
        {
          text: " Absence tracking",
          icon_card: CircleCheckBig,
        },
        {
          text: " Exportable reports",
          icon_card: CircleCheckBig,
        },
      ],
      // gradientFrom: "#EB6319",
      // gradientTo: "#D4540E",
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
    {
      icon: Proportions,
      Head: "Reports & Analytics",
      Para: "Generate insightful reports to monitor student attendance trends, fees & payroll history and overall academic progress.",
      features: [
        {
          text: "Fee & payroll summaries",
          icon_card: CircleCheckBig,
        },
        {
          text: "Student performance trends",
          icon_card: CircleCheckBig,
        },
        {
          text: " Absence tracking",
          icon_card: CircleCheckBig,
        },
        {
          text: "Overdue fees report",
          icon_card: CircleCheckBig,
        },
      ],
      // gradientFrom: "#EB6319",
      // gradientTo: "#D4540E",
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
    {
      icon: BookOpenCheck,
      Head: "Remarks & Complaints",
      Para: "Record and track complaints, feedback or maintenance issues efficiently with clear categories, priorities and status updates.",
      features: [
        {
          text: " Add new remarks or complaints",
          icon_card: CircleCheckBig,
        },
        {
          text: "Assign category, priority & location",
          icon_card: CircleCheckBig,
        },
        {
          text: "Track resolution status in real-time",
          icon_card: CircleCheckBig,
        },
        {
          text: "Maintain a transparent record for review",
          icon_card: CircleCheckBig,
        },
      ],
      // gradientFrom: "#EB6319",
      // gradientTo: "#D4540E",
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
  ];
  return (
    <>
      {/* <div className="py-12 px-4 mx-auto w-[80%] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {card.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 min-h-[300px] rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group relative"
              >
                <div className="flex flex-row gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl
                 flex items-center justify-center flex-shrink-0 shadow-lg text-white
                  group-hover:shadow-xl transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(to right,${item.gradientFrom},${item.gradientTo})`,
                    }}
                  >
                    <item.icon className="w-8 h-8  " />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold group-hover:text-[#126F77]">
                      {item.Head}
                    </h1>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      {item.Para}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gary-700"
                    >
                      <CircleCheckBig className="w-4 h-4 text-[#126f77]" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-12 xl:py-12 2xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8">
          {card.map((item, index) => {
            return (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 2xl:p-6 min-h-[200px]  rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group relative"
              >
                {/*  min-h-[250px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[300px] xl:min-h-[300px] 2xl:min-h-[300px] */}
                <div className="flex flex-col justify-center items-center md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
                  <div
                    className="w-12 sm:w-14 md:w-16 lg:w-16 xl:w-16 2xl:w-16 h-12 sm:h-14 md:h-16 lg:h-16 xl:h-16 2xl:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-white group-hover:shadow-xl transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(to right,${item.gradientFrom},${item.gradientTo})`,
                    }}
                  >
                    <item.icon className="w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold group-hover:text-[#126F77]">
                      {item.Head}
                    </h1>
                    <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] leading-relaxed">
                      {item.Para}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 mt-6 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 text-gray-700 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm"
                    >
                      <CircleCheckBig className="w-3 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-4 h-3 sm:h-4 md:h-4 lg:h-4 xl:h-4 2xl:h-4 text-[#126f77]" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
