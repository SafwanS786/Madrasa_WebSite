import React from "react";
import {
  Users,
  Calendar,
  Wallet,
  MessageCircle,
  ChartColumn,
  Bell,
  CircleCheckBig,
  Shield,
  Smartphone,
  Globe,
  Archive,
  FileText,
  Settings,
  Zap,
  ArrowRight,
  Play,
  Crown,
} from "lucide-react";

export default function FeaturesDetails() {
  const mainFeatures = [
    {
      icon: Users,
      head: "Student Management",
      overview:
        "Complete student information system with profiles, enrollment tracking, and academic history.",
      details:
        "Our Student Management module provides a centralized platform to handle all student-related data efficiently. It ensures that administrators, teachers, and parents have access to accurate and up-to-date information, reducing administrative burdens and improving decision-making.",
      subFeatures: [
        {
          text: "Student profiles & photos",
          detail:
            "Create detailed profiles including personal details, photographs, and customizable fields to capture unique information about each student.",
        },
        {
          text: "Enrollment management",
          detail:
            "Streamline the enrollment process with online forms, document uploads, and automated approval workflows for new admissions.",
        },
        {
          text: "Academic history tracking",
          detail:
            "Maintain a complete record of grades, courses, achievements, and disciplinary actions throughout the student's journey.",
        },
        {
          text: "Parent information",
          detail:
            "Link student profiles to parent/guardian details, including contact information and relationship status for better communication.",
        },
        {
          text: "Medical records",
          detail:
            "Securely store health information, allergies, vaccination records, and medical history with privacy controls.",
        },
        {
          text: "Emergency contacts",
          detail:
            "Manage multiple emergency contacts with priority levels and instant access during critical situations.",
        },
      ],
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Calendar,
      head: "Attendance & Scheduling",
      overview:
        "Digital attendance tracking with automated reports and smart scheduling capabilities.",
      details:
        "This module revolutionizes how madrasas handle daily attendance and class timetables. With real-time tracking and intelligent analytics, it helps identify patterns and improve student engagement.",
      subFeatures: [
        {
          text: "Digital attendance marking",
          detail:
            "Use mobile apps or web interfaces for quick, paperless attendance recording with biometric or RFID integration options.",
        },
        {
          text: "Automated reports",
          detail:
            "Generate daily, weekly, or monthly reports on attendance rates, tardiness, and absences with customizable filters.",
        },
        {
          text: "Class scheduling",
          detail:
            "Create flexible timetables with conflict detection, room allocation, and teacher availability considerations.",
        },
        {
          text: "Absence notifications",
          detail:
            "Send instant alerts to parents and administrators for unexcused absences or late arrivals.",
        },
        {
          text: "Attendance analytics",
          detail:
            "Visualize trends with charts and graphs to spot chronic absenteeism or class-specific issues.",
        },
        {
          text: "Parent alerts",
          detail:
            "Provide parents with real-time updates on their child's attendance via app notifications or SMS.",
        },
      ],
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
    {
      icon: Wallet,
      head: "Financial Management",
      overview:
        "Complete fee management system with online payments and detailed financial reporting.",
      details:
        "Handle all financial aspects of your madrasa with precision and transparency. This system integrates seamlessly with banking services to ensure secure transactions and accurate accounting.",
      subFeatures: [
        {
          text: "Fee collection",
          detail:
            "Set up custom fee structures, track payments, and handle partial or installment payments efficiently.",
        },
        {
          text: "Online payments",
          detail:
            "Integrate with popular payment gateways for secure credit card, bank transfer, or mobile wallet transactions.",
        },
        {
          text: "Receipt generation",
          detail:
            "Automatically generate and email digital receipts with customizable templates and tax information.",
        },
        {
          text: "Expense tracking",
          detail:
            "Record and categorize expenses, with approval workflows and integration to accounting software.",
        },
        {
          text: "Financial reports",
          detail:
            "Produce balance sheets, income statements, and cash flow reports with real-time data.",
        },
        {
          text: "Payment reminders",
          detail:
            "Schedule automated reminders for due payments via email, SMS, or app notifications.",
        },
      ],
      gradientFrom: "#126f77",
      gradientTo: "#Eb6319",
    },
    {
      icon: MessageCircle,
      head: "Communication Portal",
      overview:
        "Seamless communication between parents, teachers, and administration staff.",
      details:
        "Foster better relationships and keep everyone informed with our intuitive communication tools. This portal ensures timely updates and collaborative discussions.",
      subFeatures: [
        {
          text: "Parent portal",
          detail:
            "Dedicated dashboard for parents to view student progress, attendance, and school announcements.",
        },
        {
          text: "Teacher dashboard",
          detail:
            "Tools for teachers to post updates, grade assignments, and communicate with parents directly.",
        },
        {
          text: "Messaging system",
          detail:
            "Secure in-app messaging with group chats, file sharing, and read receipts.",
        },
        {
          text: "Announcements",
          detail:
            "Broadcast school-wide or class-specific announcements with scheduling options.",
        },
        {
          text: "Event notifications",
          detail:
            "Create and manage events with RSVPs, reminders, and calendar integration.",
        },
        {
          text: "Progress updates",
          detail:
            "Share regular updates on student performance with comments and attachments.",
        },
      ],
      gradientFrom: "#Eb6319",
      gradientTo: "#126f77",
    },
    {
      icon: ChartColumn,
      head: "Reports & Analytics",
      overview:
        "Comprehensive reporting and analytics to track performance and make data-driven decisions.",
      details:
        "Turn data into insights with powerful analytics tools. This module helps madrasa administrators optimize operations and improve educational outcomes.",
      subFeatures: [
        {
          text: "Student performance reports",
          detail:
            "Detailed reports on grades, test scores, and progress over time with comparative analysis.",
        },
        {
          text: "Attendance analytics",
          detail:
            "Advanced metrics on attendance patterns, correlations with performance, and predictive alerts.",
        },
        {
          text: "Financial reports",
          detail:
            "In-depth financial overviews including revenue trends and expense breakdowns.",
        },
        {
          text: "Custom dashboards",
          detail:
            "Build personalized dashboards with widgets for key metrics and visualizations.",
        },
        {
          text: "Data export",
          detail:
            "Export reports in PDF, Excel, or CSV formats for further analysis or sharing.",
        },
        {
          text: "Trend analysis",
          detail:
            "Identify long-term trends in enrollment, performance, and finances with AI-powered insights.",
        },
      ],
      gradientFrom: "#126F77",
      gradientTo: "#0F5A61",
    },
    {
      icon: Bell,
      head: "Notifications & Alerts",
      overview:
        "Automated SMS and email notifications to keep everyone informed and engaged.",
      details:
        "Stay connected with automated, customizable notifications. This system ensures critical information reaches the right people at the right time.",
      subFeatures: [
        {
          text: "SMS notifications",
          detail:
            "Send text messages for urgent updates, integrated with major SMS providers.",
        },
        {
          text: "Email alerts",
          detail:
            "Automated emails with templates for various scenarios like fee due or event reminders.",
        },
        {
          text: "Push notifications",
          detail:
            "Real-time app notifications for mobile users with customizable preferences.",
        },
        {
          text: "Custom alerts",
          detail:
            "Set up rule-based alerts for specific triggers like low attendance or overdue payments.",
        },
        {
          text: "Scheduled messages",
          detail:
            "Plan and schedule messages in advance for holidays, exams, or regular updates.",
        },
        {
          text: "Emergency broadcasts",
          detail:
            "One-click broadcasting for urgent situations with priority delivery.",
        },
      ],
      gradientFrom: "#EB6319",
      gradientTo: "#D4540E",
    },
  ];

  const additionalCapabilities = [
    {
      icon: Shield,
      head: "Data Security",
      overview: "Enterprise-grade security and data protection",
      details:
        "We prioritize the security of your data with advanced encryption, regular audits, and compliance with international standards like GDPR and ISO 27001. Role-based access controls ensure only authorized users can view sensitive information.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Smartphone,
      head: "Mobile Access",
      overview: "Full mobile app for iOS and Android devices",
      details:
        "Access all features on the go with our native mobile apps. Features include offline mode for attendance marking, real-time sync, and intuitive interfaces optimized for smaller screens.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Globe,
      head: "Multi-language",
      overview: "Support for Arabic, English, and local languages",
      details:
        "Our platform supports multiple languages with right-to-left text handling for Arabic. Easily switch languages and customize terminology to match your madrasa's preferences.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Archive,
      head: "Data Backup",
      overview: "Automatic daily backups with cloud storage",
      details:
        "Daily automated backups stored securely in the cloud with version history. Quick restore options and geo-redundant storage ensure data availability even in disasters.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: FileText,
      head: "Document Management",
      overview: "Store and manage all important documents",
      details:
        "Centralized repository for certificates, contracts, and reports with version control, search functionality, and secure sharing options.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
    {
      icon: Settings,
      head: "Customization",
      overview: "Flexible settings to match your madrasa's needs",
      details:
        "Tailor the platform with custom fields, workflows, and themes. API integrations allow connection to third-party tools for extended functionality.",
      gradientFrom: "#126F77",
      gradientTo: "#EB6319",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="relative overflow-hidden mt-10">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-20 2xl:top-20 left-10 sm:left-12 md:left-16 lg:left-20 xl:left-20 2xl:left-20 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 2xl:bottom-20 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-20 2xl:right-20 w-64 sm:w-80 md:w-88 lg:w-96 xl:w-96 2xl:w-96 h-64 sm:h-80 md:h-88 lg:h-96 xl:h-96 2xl:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 border border-[#126f77]/20 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
              <Zap className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-[#EB6319]" />
              <span className="text-[#126F77] font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                In-Depth Feature Details
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
              Dive Deeper into Our
              <br />
              <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              Explore detailed explanations of each feature and how they empower
              modern madrasas to operate more efficiently and effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Main Features Sections */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-12 xl:py-12 2xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
        {mainFeatures.map((feature, index) => (
          <section
            key={index}
            className="mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20 border-b border-[#E5E7EB] pb-8 sm:pb-10 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12"
          >
            <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
              <div
                className="w-16 sm:w-20 md:w-24 lg:w-24 xl:w-24 2xl:w-24 h-16 sm:h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl text-white"
                style={{
                  background: `linear-gradient(to right, ${feature.gradientFrom}, ${feature.gradientTo})`,
                }}
              >
                <feature.icon className="w-8 sm:w-10 md:w-12 lg:w-12 xl:w-12 2xl:w-12 h-8 sm:h-10 md:h-12 lg:h-12 xl:h-12 2xl:h-12" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
                  {feature.head}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-relaxed">
                  {feature.overview}
                </p>
                <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mb-6 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10 leading-relaxed">
                  {feature.details}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
                  {feature.subFeatures.map((sub, i) => (
                    <li key={i} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CircleCheckBig className="w-5 sm:w-6 md:w-6 lg:w-6 xl:w-6 2xl:w-6 h-5 sm:h-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 text-[#126f77]" />
                        <span className="font-semibold text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">
                          {sub.text}
                        </span>
                      </div>
                      <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] pl-8 leading-relaxed">
                        {sub.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Additional Capabilities Section */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-12 xl:py-12 2xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
            Additional Capabilities in Detail
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
            Discover the supporting features that enhance the core functionality
            of our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
          {additionalCapabilities.map((cap, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
            >
              <div
                className="w-16 sm:w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20 h-16 sm:h-20 md:h-20 lg:h-20 xl:h-20 2xl:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 shadow-xl text-white group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(to right, ${cap.gradientFrom}, ${cap.gradientTo})`,
                }}
              >
                <cap.icon className="w-8 sm:w-10 md:w-10 lg:w-10 xl:w-10 2xl:w-10 h-8 sm:h-10 md:h-10 lg:h-10 xl:h-10 2xl:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-center">
                {cap.head}
              </h3>
              <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-relaxed text-center">
                {cap.overview}
              </p>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] leading-relaxed">
                {cap.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-16 text-center mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20">
        <div className="bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 sm:top-3 md:top-4 lg:top-4 xl:top-4 2xl:top-4 right-2 sm:right-3 md:right-4 lg:right-4 xl:right-4 2xl:right-4 w-12 sm:w-16 md:w-20 lg:w-20 xl:w-20 2xl:w-20 h-12 sm:h-16 md:h-20 lg:h-20 xl:h-20 2xl:h-20 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-4 xl:bottom-4 2xl:bottom-4 left-2 sm:left-3 md:left-4 lg:left-4 xl:left-4 2xl:left-4 w-10 sm:w-12 md:w-16 lg:w-16 xl:w-16 2xl:w-16 h-10 sm:h-12 md:h-16 lg:h-16 xl:h-16 2xl:h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8 bg-white rounded-lg rotate-45"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
              <Crown className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-white" />
              <span className="text-white font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                Ready to Transform Your Madrasa?
              </span>
            </div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-white mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
              Experience All Features in Detail
            </h3>
            <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 max-w-2xl mx-auto">
              Start your free trial today and explore how these detailed
              features can revolutionize your madrasa management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
              <button className="bg-white rounded-md p-1.5 sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 text-[#126F77] font-bold inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 group">
                Start Free Trial
                <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
                  <ArrowRight
                    size={15}
                    className="font-bold h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5"
                  />
                </span>
              </button>
              <button className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white rounded-md p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 2xl:p-3 text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
                <span>
                  <Play
                    size={15}
                    className="inline-block h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5"
                  />
                </span>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// import React from "react";
// import {
//   CheckCircle,
//   FileText,
//   Users,
//   CreditCard,
//   Bell,
//   BarChart3,
//   Shield,
//   Smartphone,
//   Globe,
//   Cloud,
//   Settings,
//   Zap,
//   ArrowRight,
//   Play,
//   Crown,
// } from "lucide-react";

// export default function FeaturesDetails() {
//   const mainFeatures = [
//     {
//       icon: FileText,
//       head: "Online Application Forms",
//       overview: "Streamlined digital form submission for student admissions.",
//       details: "Our online application system eliminates the need for physical paperwork and long queues. Students can easily fill out admission forms from any device, upload required documents, and track their application status in real-time.",
//       subFeatures: [
//         {
//           text: "No waiting in long lines",
//           detail: "Students can apply from anywhere, anytime without visiting the campus physically."
//         },
//                {
//           text: "Digital form processing",
//           detail: "Completely paperless admission process with automated form validation and error checking."
//         },
//         {
//           text: "Document upload system",
//           detail: "Secure upload of required documents like transcripts, certificates, and identification proofs."
//         },
//         {
//           text: "Application tracking",
//           detail: "Real-time status updates for applicants throughout the admission process."
//         },
//         {
//           text: "Auto-save functionality",
//           detail: "Forms are automatically saved, allowing students to complete applications in multiple sessions."
//         },
//         {
//           text: "Mobile-friendly forms",
//           detail: "Optimized for all devices including smartphones, tablets, and desktops."
//         },
//       ],
//       gradientFrom: "#126F77",
//       gradientTo: "#0F5A61",
//     },
//     {
//       icon: Users,
//       head: "Staff & Resource Management",
//       overview: "Reduce administrative workload and optimize staff utilization.",
//       details: "Automate routine administrative tasks and reduce dependency on additional staff. The system intelligently manages resources and streamlines operations for maximum efficiency.",
//       subFeatures: [
//         {
//           text: "Reduced staff requirements",
//           detail: "Automation of repetitive tasks minimizes the need for additional administrative personnel."
//         },
//         {
//           text: "Easy inquiry follow-up",
//           detail: "Systematic tracking and management of student inquiries with automated reminders."
//         },
//         {
//           text: "Seamless student transfer",
//           detail: "Easy migration of admitted students to official school records with data validation."
//         },
//         {
//           text: "User-friendly interface",
//           detail: "Intuitive design that requires minimal training for both staff and students."
//         },
//         {
//           text: "Role-based access",
//           detail: "Different access levels for administrators, staff, and applicants with appropriate permissions."
//         },
//         {
//           text: "Workflow automation",
//           detail: "Automated processes for application review, approval, and communication."
//         },
//       ],
//       gradientFrom: "#EB6319",
//       gradientTo: "#D4540E",
//     },
//     {
//       icon: CreditCard,
//       head: "Secure Fee Collection",
//       overview: "Fast and secure online payment processing for admission fees.",
//       details: "Multiple payment gateway integration ensures quick and secure collection of admission fees. The system supports various payment methods while maintaining the highest security standards.",
//       subFeatures: [
//         {
//           text: "Quick fee processing",
//           detail: "Instant payment processing with immediate confirmation and receipt generation."
//         },
//         {
//           text: "Multiple payment options",
//           detail: "Support for credit/debit cards, net banking, UPI, and digital wallets."
//         },
//         {
//           text: "Secure transactions",
//           detail: "Bank-level encryption and PCI DSS compliance for all financial transactions."
//         },
//         {
//           text: "Automated receipts",
//           detail: "Instant generation of digital payment receipts and fee confirmation."
//         },
//         {
//           text: "Payment tracking",
//           detail: "Real-time monitoring of payment status and automated reconciliation."
//         },
//         {
//           text: "Refund management",
//           detail: "Streamlined process for handling refunds and payment disputes."
//         },
//       ],
//       gradientFrom: "#126f77",
//       gradientTo: "#Eb6319",
//     },
//     {
//       icon: Bell,
//       head: "Inquiry Management",
//       overview: "Efficient handling and tracking of new student inquiries.",
//       details: "Comprehensive system to manage prospective student inquiries from initial contact through admission decision. Never miss a potential student with organized follow-up and communication tools.",
//       subFeatures: [
//         {
//           text: "Centralized inquiry database",
//           detail: "All prospective student information stored in one easily accessible location."
//         },
//         {
//           text: "Rapid response system",
//           detail: "Quick handling and assignment of new inquiries to appropriate staff members."
//         },
//         {
//           text: "Follow-up automation",
//           detail: "Scheduled reminders and automated follow-up messages to engage prospects."
//         },
//         {
//           text: "Conversion tracking",
//           detail: "Monitor inquiry-to-application conversion rates and optimize processes."
//         },
//         {
//           text: "Communication history",
//           detail: "Complete record of all interactions with each prospective student."
//         },
//         {
//           text: "Performance analytics",
//           detail: "Track inquiry sources and effectiveness of different recruitment channels."
//         },
//       ],
//       gradientFrom: "#Eb6319",
//       gradientTo: "#126f77",
//     },
//     {
//       icon: BarChart3,
//       head: "Automated Merit System",
//       overview: "Intelligent merit list generation and admission automation.",
//       details: "Automatically create and manage student merit lists based on customizable criteria. The system ensures fair and transparent admission decisions while saving administrative time.",
//       subFeatures: [
//         {
//           text: "Automatic merit lists",
//           detail: "System-generated merit lists based on academic scores, entrance tests, and other criteria."
//         },
//         {
//           text: "Customizable criteria",
//           detail: "Flexible weightage system for different selection parameters as per institution needs."
//         },
//         {
//           text: "Instant admission letters",
//           detail: "Automated generation and distribution of admission offer letters to selected candidates."
//         },
//         {
//           text: "Waitlist management",
//           detail: "Efficient handling of waitlisted candidates with automatic promotions as seats become available."
//         },
//         {
//           text: "Category-wise selection",
//           detail: "Support for different reservation categories and quota management."
//         },
//         {
//           text: "Real-time updates",
//           detail: "Immediate reflection of admission status changes across the system."
//         },
//       ],
//       gradientFrom: "#126F77",
//       gradientTo: "#0F5A61",
//     },
//     {
//       icon: FileText,
//       head: "Document Management",
//       overview: "Centralized storage and management of admission documents.",
//       details: "Secure digital repository for all admission-related documents with easy retrieval and management capabilities. Ensure compliance and maintain organized records throughout the admission cycle.",
//       subFeatures: [
//         {
//           text: "Digital document storage",
//           detail: "Secure cloud-based storage for all application documents and supporting materials."
//         },
//         {
//           text: "Document verification",
//           detail: "Tools for verifying authenticity of submitted documents and certificates."
//         },
//         {
//           text: "Version control",
//           detail: "Maintain different versions of documents with proper audit trails."
//         },
//         {
//           text: "Easy retrieval",
//           detail: "Quick search and access to any student's documents when needed."
//         },
//         {
//           text: "Compliance management",
//           detail: "Ensure all required documents are collected as per regulatory requirements."
//         },
//         {
//           text: "Backup and archive",
//           detail: "Automatic backup and long-term archiving of admission records."
//         },
//       ],
//       gradientFrom: "#EB6319",
//       gradientTo: "#D4540E",
//     },
//   ];

//   const additionalCapabilities = [
//     {
//       icon: Shield,
//       head: "Data Security",
//       overview: "Enterprise-grade security and data protection",
//       details: "We prioritize the security of your data with advanced encryption, regular audits, and compliance with international standards. Role-based access controls ensure only authorized users can view sensitive information.",
//       gradientFrom: "#126F77",
//       gradientTo: "#EB6319",
//     },
//     {
//       icon: Smartphone,
//       head: "Mobile Access",
//       overview: "Full mobile app for iOS and Android devices",
//       details: "Access all features on the go with our native mobile apps. Features include offline mode, real-time sync, and intuitive interfaces optimized for smaller screens.",
//       gradientFrom: "#126F77",
//       gradientTo: "#EB6319",
//     },
//     {
//       icon: Globe,
//       head: "Multi-platform Support",
//       overview: "Cloud-based access from any device",
//       details: "Our platform works seamlessly on desktop, tablet, and mobile devices with responsive design that adapts to any screen size.",
//       gradientFrom: "#126F77",
//       gradientTo: "#EB6319",
//     },
//     {
//       icon: Cloud,
//       head: "Cloud Backup",
//       overview: "Automatic daily backups with cloud storage",
//       details: "Daily automated backups stored securely in the cloud with version history. Quick restore options ensure data availability even in emergencies.",
//       gradientFrom: "#126F77",
//       gradientTo: "#EB6319",
//     },
//     {
//       icon: Settings,
//       head: "Customization",
//       overview: "Flexible settings to match your institution's needs",
//       details: "Tailor the platform with custom fields, workflows, and admission criteria. API integrations allow connection to existing systems.",
//       gradientFrom: "#126F77",
//       gradientTo: "#EB6319",
//     },
//     {
//       icon: BarChart3,
//       head: "Analytics & Reporting",
//       overview: "Comprehensive reports and admission analytics",
//       details: "Generate detailed reports on admission trends, conversion rates, and demographic analysis to make data-driven decisions.",
//       gradientFrom: "#126F77",
//       gradientTo: "#EB6319",
//     },
//   ];

//   return (
//     <>
//       {/* Header Section */}
//       <div className="relative overflow-hidden mt-10">
//         <div className="absolute inset-0">
//           <div className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-20 2xl:top-20 left-10 sm:left-12 md:left-16 lg:left-20 xl:left-20 2xl:left-20 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-80 bg-[#126F77]/5 rounded-full blur-3xl animate-pulse"></div>
//           <div
//             className="absolute bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-20 2xl:bottom-20 right-10 sm:right-12 md:right-16 lg:right-20 xl:right-20 2xl:right-20 w-64 sm:w-80 md:w-88 lg:w-96 xl:w-96 2xl:w-96 h-64 sm:h-80 md:h-88 lg:h-96 xl:h-96 2xl:h-96 bg-[#EB6319]/5 rounded-full blur-3xl animate-pulse"
//             style={{ animationDelay: "1s" }}
//           ></div>
//         </div>
//         <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 relative z-10">
//           <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20">
//             <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 border border-[#126f77]/20 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
//               <Zap className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-[#EB6319]" />
//               <span className="text-[#126F77] font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
//                 Online Student Admission System
//               </span>
//             </div>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold font-sen text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-tight">
//               Streamline Your Admission Process
//               <br />
//               <span className="block bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
//                 With Digital Excellence
//               </span>
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
//               CAMPUSDEAN's online student admission management system automates and simplifies the entire admission process for schools, colleges, universities, and training institutes. Experience faster, smarter, and safer student admissions.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Features Sections */}
//       <div className="py-8 sm:py-10 md:py-12 lg:py-12 xl:py-12 2xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
//         {mainFeatures.map((feature, index) => (
//           <section
//             key={index}
//             className="mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20 border-b border-[#E5E7EB] pb-8 sm:pb-10 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12"
//           >
//             <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
//               <div
//                 className="w-16 sm:w-20 md:w-24 lg:w-24 xl:w-24 2xl:w-24 h-16 sm:h-20 md:h-24 lg:h-24 xl:h-24 2xl:h-24 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl text-white"
//                 style={{
//                   background: `linear-gradient(to right, ${feature.gradientFrom}, ${feature.gradientTo})`,
//                 }}
//               >
//                 <feature.icon className="w-8 sm:w-10 md:w-12 lg:w-12 xl:w-12 2xl:w-12 h-8 sm:h-10 md:h-12 lg:h-12 xl:h-12 2xl:h-12" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
//                   {feature.head}
//                 </h2>
//                 <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-relaxed">
//                   {feature.overview}
//                 </p>
//                 <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mb-6 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10 leading-relaxed">
//                   {feature.details}
//                 </p>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
//                   {feature.subFeatures.map((sub, i) => (
//                     <li key={i} className="flex flex-col gap-2">
//                       <div className="flex items-center gap-2 text-gray-700">
//                         <CheckCircle className="w-5 sm:w-6 md:w-6 lg:w-6 xl:w-6 2xl:w-6 h-5 sm:h-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 text-[#126f77]" />
//                         <span className="font-semibold text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">{sub.text}</span>
//                       </div>
//                       <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] pl-8 leading-relaxed">
//                         {sub.detail}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>

//       {/* Additional Capabilities Section */}
//       <div className="py-8 sm:py-10 md:py-12 lg:py-12 xl:py-12 2xl:py-12 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mx-auto max-w-7xl">
//         <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-20">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
//             System Capabilities
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
//             Powerful features that support the core admission management functionality and ensure smooth operations.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
//           {additionalCapabilities.map((cap, index) => (
//             <div
//               key={index}
//               className="p-6 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
//             >
//               <div
//                 className="w-16 sm:w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20 h-16 sm:h-20 md:h-20 lg:h-20 xl:h-20 2xl:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 shadow-xl text-white group-hover:scale-110 transition-transform duration-300"
//                 style={{
//                   background: `linear-gradient(to right, ${cap.gradientFrom}, ${cap.gradientTo})`,
//                 }}
//               >
//                 <cap.icon className="w-8 sm:w-10 md:w-10 lg:w-10 xl:w-10 2xl:w-10 h-8 sm:h-10 md:h-10 lg:h-10 xl:h-10 2xl:h-10" />
//               </div>
//               <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-center">
//                 {cap.head}
//               </h3>
//               <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#6B6B6B] mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 leading-relaxed text-center">
//                 {cap.overview}
//               </p>
//               <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base text-[#6B6B6B] leading-relaxed">
//                 {cap.details}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-16 text-center mb-12 sm:mb-16 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20">
//         <div className="bg-gradient-to-r from-[#126F77] to-[#EB6319] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 relative overflow-hidden">
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-2 sm:top-3 md:top-4 lg:top-4 xl:top-4 2xl:top-4 right-2 sm:right-3 md:right-4 lg:right-4 xl:right-4 2xl:right-4 w-12 sm:w-16 md:w-20 lg:w-20 xl:w-20 2xl:w-20 h-12 sm:h-16 md:h-20 lg:h-20 xl:h-20 2xl:h-20 border-2 border-white rounded-lg rotate-12"></div>
//             <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-4 xl:bottom-4 2xl:bottom-4 left-2 sm:left-3 md:left-4 lg:left-4 xl:left-4 2xl:left-4 w-10 sm:w-12 md:w-16 lg:w-16 xl:w-16 2xl:w-16 h-10 sm:h-12 md:h-16 lg:h-16 xl:h-16 2xl:h-16 border-2 border-white rounded-full"></div>
//             <div className="absolute top-1/2 left-1/4 w-6 sm:w-7 md:w-8 lg:w-8 xl:w-8 2xl:w-8 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-8 2xl:h-8 bg-white rounded-lg rotate-45"></div>
//           </div>
//           <div className="relative z-10">
//             <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
//               <Crown className="w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 text-white" />
//               <span className="text-white font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
//                 Trusted by 100+ Institutions
//               </span>
//             </div>
//             <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-white mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
//               Ready to Transform Your Admission Process?
//             </h3>
//             <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 max-w-2xl mx-auto">
//               Join over 100 schools, colleges, and institutions that rely on CAMPUSDEAN for efficient student admission management.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
//               <button className="bg-white rounded-md p-1.5 sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2 text-[#126F77] font-bold inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 2xl:py-3 group">
//                 Request Demo
//                 <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2">
//                   <ArrowRight
//                     size={15}
//                     className="font-bold h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5"
//                   />
//                 </span>
//               </button>
//               <button className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 bg-white rounded-md p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 2xl:p-3 text-[#126F77] font-semibold hover:bg-[#126F77] hover:text-white">
//                 <span>
//                   <Play
//                     size={15}
//                     className="inline-block h-4 sm:h-4 md:h-5 lg:h-5 xl:h-5 2xl:h-5 w-4 sm:w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5"
//                   />
//                 </span>
//                 Watch Video
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
