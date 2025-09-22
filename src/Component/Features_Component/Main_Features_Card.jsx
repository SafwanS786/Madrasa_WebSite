import React from "react";
import {
  Users,
  Calendar,
  Wallet,
  MessageCircle,
  ChartColumn,
  Bell,
  CircleCheckBig,
} from "lucide-react";

export default function Main_Features_Card() {
  const card = [
    {
      icon: Users,
      Head: "Student Management",
      Para: "Complete student information system with profiles, enrollment tracking, and academic history.",
      features: [
        {
          icon_card: CircleCheckBig,
          text: "Student profiles & photos",
        },
        {
          icon_card: CircleCheckBig,
          text: "Enrollment management",
        },
        {
          icon_card: CircleCheckBig,
          text: "Academic history tracking",
        },
        {
          text: "Parent information",
          icon_card: CircleCheckBig,
        },
        {
          text: "Medical records",
          icon_card: CircleCheckBig,
        },
        {
          text: "Emergency contacts",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Calendar,
      Head: "Attendance & Scheduling",
      Para: "Digital attendance tracking with automated reports and smart scheduling capabilities.",
      features: [
        {
          text: "Digital attendance marking",
          icon_card: CircleCheckBig,
        },
        {
          text: "Automated reports",
          icon_card: CircleCheckBig,
        },
        {
          text: "Class scheduling",
          icon_card: CircleCheckBig,
        },
        {
          text: "Absence notifications",
          icon_card: CircleCheckBig,
        },
        {
          text: "Attendance analytics",
          icon_card: CircleCheckBig,
        },
        {
          text: "Parent alerts",
          icon_card: CircleCheckBig,
        },
      ],

      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
    {
      icon: Wallet,
      Head: "Financial Management",
      Para: "Complete fee management system with online payments and detailed financial reporting.",
      features: [
        {
          text: "Fee collection",
          icon_card: CircleCheckBig,
        },
        {
          text: "Online payments",
          icon_card: CircleCheckBig,
        },
        {
          text: "Receipt generation",
          icon_card: CircleCheckBig,
        },
        {
          text: "Expense tracking",
          icon_card: CircleCheckBig,
        },
        {
          text: "Financial reports",
          icon_card: CircleCheckBig,
        },
        {
          text: "Payment reminders",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
    {
      icon: MessageCircle,
      Head: "Communication Portal",
      Para: "Seamless communication between parents, teachers, and administration staff.",
      features: [
        {
          text: "Parent portal",
          icon_card: CircleCheckBig,
        },
        {
          text: "Teacher dashboard",
          icon_card: CircleCheckBig,
        },
        {
          text: "Messaging system",
          icon_card: CircleCheckBig,
        },
        {
          text: "Announcements",
          icon_card: CircleCheckBig,
        },
        {
          text: "Event notifications",
          icon_card: CircleCheckBig,
        },
        {
          text: "Progress updates",
          icon_card: CircleCheckBig,
        },
      ],

      gradientFrom: "#Eb6319",
      gradientTo: "#126f77",
    },
    {
      icon: ChartColumn,
      Head: "Reports & Analytics",
      Para: "Comprehensive reporting and analytics to track performance and make data-driven decisions.",
      features: [
        {
          text: "Student performance reports",
          icon_card: CircleCheckBig,
        },
        {
          text: "Attendance analytics",
          icon_card: CircleCheckBig,
        },
        {
          text: "Financial reports",
          icon_card: CircleCheckBig,
        },
        {
          text: "Custom dashboards",
          icon_card: CircleCheckBig,
        },
        {
          text: "Data export",
          icon_card: CircleCheckBig,
        },
        {
          text: "Trend analysis",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Bell,
      Head: "Notifications & Alerts",
      Para: "Automated SMS and email notifications to keep everyone informed and engaged.",
      features: [
        {
          text: "SMS notifications",
          icon_card: CircleCheckBig,
        },
        {
          text: "Email alerts",
          icon_card: CircleCheckBig,
        },
        {
          text: "Push notifications",
          icon_card: CircleCheckBig,
        },
        {
          text: "Custom alerts",
          icon_card: CircleCheckBig,
        },
        {
          text: "Scheduled messages",
          icon_card: CircleCheckBig,
        },
        {
          text: "Emergency broadcasts",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
  ];
  return (
    <>
      <div className="py-12 px-4 mx-auto w-[80%] ">
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
      </div>
    </>
  );
}
