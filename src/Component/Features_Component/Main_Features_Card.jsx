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
  MonitorCog,
  BusFront,
  Star,
  Shell,
  TentTree,
  CopySlash,
  TableProperties,
  DoorOpen,
  BellRing,
  BrickWallShield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Main_Features_Card() {
  const Navigate = useNavigate();
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
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/studentDetails",
      Path: "/studentDetails",
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
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/maulanaDetails",
      Path: "/studentDetails",
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
      // Path: "/parentManagement",
      Path: "/studentDetails",
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
      // Path: "/feesManagement",
      Path: "/studentDetails",
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
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/payrollManagement",
      Path: "/studentDetails",
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
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/attendanceManagement",
      Path: "/studentDetails",
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
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/reportsAnalytics",
      Path: "/studentDetails",
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
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/remarksComplaints",
      Path: "/studentDetails",
    },
    {
      icon: DatabaseZap,
      Head: "Storage Management",
      Para: "Store all your institute documents safely with categorized folders and clear space usage tracking.",
      features: [
        {
          text: "Upload and manage documents",
          icon_card: CircleCheckBig,
        },
        {
          text: " Separate folders per module",
          icon_card: CircleCheckBig,
        },
        {
          text: "File search & manage control",
          icon_card: CircleCheckBig,
        },
        {
          text: " Storage usage analytics",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/storageManagement",
      Path: "/studentDetails",
    },
    {
      icon: BusFront,
      Head: "Vehicle Management",
      Para: "Easily manage all institute vehicles with complete details including type, number, driver name and contact information.",
      features: [
        {
          text: " Add or edit vehicle records instantly",
          icon_card: CircleCheckBig,
        },
        {
          text: "Maintain driver names and phone numbers",
          icon_card: CircleCheckBig,
        },
        {
          text: "Track vehicle active or inactive status",
          icon_card: CircleCheckBig,
        },
        {
          text: " Centralized view for quick updates and management",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/vehicleManagement",
      Path: "/studentDetails",
    },
    {
      icon: Star,
      Head: "Review Management",
      Para: "Simplify student performance reviews with class and subject-based feedback given by Maulana.",
      features: [
        {
          text: " Rate students using a 5-star system",
          icon_card: CircleCheckBig,
        },
        {
          text: " Add personalized comments for each student",
          icon_card: CircleCheckBig,
        },
        {
          text: "Filter reviews by class, subject or Maulana",
          icon_card: CircleCheckBig,
        },
        {
          text: "Filter reviews by class, subject or Maulana",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/reviewManagement",
      Path: "/studentDetails",
    },
    {
      icon: Shell,
      Head: "Notice Management",
      Para: "Send important updates, reminders or announcements instantly to Students, Maulana or Staff from one place.",
      features: [
        {
          text: "Send notices to individual or multiple users",
          icon_card: CircleCheckBig,
        },
        {
          text: "Choose recipient type Student, Maulana, or Staff",
          icon_card: CircleCheckBig,
        },
        {
          text: "Track active or inactive notices",
          icon_card: CircleCheckBig,
        },
        {
          text: "Manage all announcements in one simple dashboard",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/noticeManagement",
      Path: "/studentDetails",
    },
    {
      icon: TentTree,
      Head: "Holiday Management",
      Para: "Easily create and manage holidays for students, Maulana and staff with full date control.",
      features: [
        {
          text: " Add holiday name, start and end dates",
          icon_card: CircleCheckBig,
        },
        {
          text: "Select who the holiday applies to  Students, Maulana or Staff",
          icon_card: CircleCheckBig,
        },
        {
          text: "Set default weekly holidays for the institute",
          icon_card: CircleCheckBig,
        },
        {
          text: "Keep everyone informed with an updated holiday list",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/holidayManagement",
      Path: "/studentDetails",
    },
    {
      icon: CopySlash,
      Head: "Division & Class Management",
      Para: "Create, organize, and manage classes or divisions with assigned subjects, maulana and structured student groups.",
      features: [
        {
          text: "Class and section setup",
          icon_card: CircleCheckBig,
        },
        {
          text: "Assign subjects & teachers",
          icon_card: CircleCheckBig,
        },
        {
          text: " Auto-linked attendance",
          icon_card: CircleCheckBig,
        },
        {
          text: "  Timetable structure",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/divisionClassManagement",
      Path: "/studentDetails",
    },
    {
      icon: TableProperties,
      Head: "Subject Management",
      Para: "Add and manage academic subjects for each class with linked attendance, and maulana assignments.",
      features: [
        {
          text: "Subject creation",
          icon_card: CircleCheckBig,
        },
        {
          text: "Assign maulana",
          icon_card: CircleCheckBig,
        },
        {
          text: "Link to attendance & reports",
          icon_card: CircleCheckBig,
        },
        {
          text: "Update anytime easily",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/subjectManagement",
      Path: "/studentDetails",
    },
    {
      icon: DoorOpen,
      Head: "Donor Management",
      Para: "Keep a clear record of every donor and the students they support to ensure full transparency.",
      features: [
        {
          text: " Add donor name and contact details",
          icon_card: CircleCheckBig,
        },
        {
          text: "Link donors to multiple students they sponsor",
          icon_card: CircleCheckBig,
        },
        {
          text: "View and edit all donor records in one list",
          icon_card: CircleCheckBig,
        },
        {
          text: " Strengthen trust through organized donor management",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/donorManagement",
      Path: "/studentDetails",
    },
    {
      icon: BellRing,
      Head: "Notification Management",
      Para: "Send instant updates and system alerts via email or app to keep everyone informed and engaged.",
      features: [
        {
          text: "App & email alerts",
          icon_card: CircleCheckBig,
        },
        {
          text: " Reminder scheduling",
          icon_card: CircleCheckBig,
        },
        {
          text: "Auto alerts for due dates",
          icon_card: CircleCheckBig,
        },

        {
          text: "Role-based targeting",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/notificationManagement",
      Path: "/studentDetails",
    },
    {
      icon: BrickWallShield,
      Head: "Recent Activity",
      Para: "Track every update happening in your madrasa with clear activity logs for better visibility.",

      features: [
        {
          text: " View actions performed by admins, Maulana or staff",
          icon_card: CircleCheckBig,
        },
        {
          text: "Check time-stamped updates for every module",
          icon_card: CircleCheckBig,
        },
        {
          text: " Monitor changes made across different sections",
          icon_card: CircleCheckBig,
        },
        {
          text: "Keep your operations transparent and well-documented",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/recentActivity",
      Path: "/studentDetails",
    },

    {
      icon: Podcast,
      Head: "Subscription & Billing",
      Para: "Manage your DeenNest plan easily—track renewals, invoices, and available add-ons in one place.",
      features: [
        {
          text: " Active plan details",
          icon_card: CircleCheckBig,
        },
        {
          text: "Add-ons & upgrades",
          icon_card: CircleCheckBig,
        },
        {
          text: " Renewal reminders",
          icon_card: CircleCheckBig,
        },
        {
          text: "Invoice download",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/subscriptionBilling",
      Path: "/studentDetails",
    },
    {
      icon: MonitorCog,
      Head: "Configuration & Settings",
      Para: "Personalize how your madrasa works by enabling, disabling, or editing modules as per your needs.",
      features: [
        {
          text: " Enable/disable modules",
          icon_card: CircleCheckBig,
        },
        {
          text: "Edit forms & fields",
          icon_card: CircleCheckBig,
        },
        {
          text: "Role permissions",
          icon_card: CircleCheckBig,
        },
        {
          text: "Maintain a transparent record for review",
          icon_card: CircleCheckBig,
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
      // Path: "/configurationSettings",
      Path: "/studentDetails",
    },
  ];
  return (
    <>
      <div className="py-8 sm:py-10 md:py-12 lg:py-6 xl:py-12 2xl:py-12 px-4 sm:px-6 md:px-8 lg:px-2 xl:px-8 2xl:px-8 mx-auto w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8">
          {card.map((item, index) => {
            return (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 2xl:p-6 min-h-[200px] rounded-2xl shadow-lg bg-white hover:shadow-2xl
                 transition-all duration-500 transform hover:scale-105 group relative cursor-pointer"
                onClick={() => Navigate(`${item.Path}`)}
              >
                <div className="flex flex-col justify-center items-center  gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 2xl:items-start items-start">
                  <div
                    className="w-12 sm:w-14 md:w-16 lg:w-16 xl:w-16 2xl:w-16 h-12 sm:h-14 md:h-16 lg:h-16 xl:h-16 2xl:h-16 rounded-2xl flex items-center 
                    justify-center flex-shrink-0 shadow-lg text-white group-hover:shadow-xl transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(to right,${item.gradientFrom},${item.gradientTo})`,
                    }}
                  >
                    <item.icon className="w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold lg:h-18 xl:h-auto group-hover:text-[#126F77]">
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
