import React from "react";
import {
  Users,
  Calendar,
  Wallet,
  MessageCircle,
  ChartColumn,
  Bell,
} from "lucide-react";

export default function Main_Features_Card() {
  const card = [
    {
      icon: Users,
      Head: "Student Management",
      Para: "Complete student information system with profiles, enrollment tracking, and academic history.",
      features: [
        "Student profiles & photos",
        "Enrollment management",
        "Academic history tracking",
        "Parent information",
        "Medical records",
        "Emergency contacts",
      ],
    },
    {
      icon: Calendar,
      Head: "Attendance & Scheduling",
      Para: "Digital attendance tracking with automated reports and smart scheduling capabilities.",
      features: [
        "Digital attendance marking",
        "Automated reports",
        "Class scheduling",
        "Absence notifications",
        "Attendance analytics",
        "Parent alerts",
      ],
    },
    {
      icon: Wallet,
      Head: "Financial Management",
      Para: "Complete fee management system with online payments and detailed financial reporting.",
      features: [
        "Fee collection",
        "Online payments",
        "Receipt generation",
        "Expense tracking",
        "Financial reports",
        "Payment reminders",
      ],
    },
    {
      icon: MessageCircle,
      Head: "Communication Portal",
      Para: "Seamless communication between parents, teachers, and administration staff.",
      features: [
        icon:CircleCheckBig, 
        "Parent portal",
        "Teacher dashboard",
        "Messaging system",
        "Announcements",
        "Event notifications",
        "Progress updates",
      ],
    },
    {
      icon: ChartColumn,
      Head: "Reports & Analytics",
      Para: "Comprehensive reporting and analytics to track performance and make data-driven decisions.",
      features: [
        "Student performance reports",
        "Attendance analytics",
        "Financial reports",
        "Custom dashboards",
        "Data export",
        "Trend analysis",
      ],
    },
    {
      icon: Bell,
      Head: "Notifications & Alerts",
      Para: "Automated SMS and email notifications to keep everyone informed and engaged.",
      features: [
        "SMS notifications",
        "Email alerts",
        "Push notifications",
        "Custom alerts",
        "Scheduled messages",
        "Emergency broadcasts",
      ],
    },
  ];
  return (
    <div>
      <h1></h1>
    </div>
  );
}
