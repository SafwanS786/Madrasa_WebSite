import { createContext, useContext } from "react";

const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
  const allFeatures = {
    student: {
      title: "Student Management System",
      subtitle: "Simplify Student Records with One Unified Platform",
      image: "../../src/assets/img/student.png",
      description:
        "DeenNest’s Student Management System helps Islamic institutions manage every stage of a student’s journey - from admission to attendance - in one secure, easy-to-use dashboard.",
      keyCapabilities: [
        {
          icon: "../../src/assets/img/complete.png",
          title: "Complete Student Profiles",
          head: "Maintain student details, photos, contact info and enrollment data in one place.",
        },
        {
          icon: "../../src/assets/img/Admission.png",
          title: "Admission & Enrollment Tracking",
          head: "Automate registration, assign classes and generate admission records.",
        },
        {
          icon: "../../src/assets/img/Parenticon.jpg",
          title: "Parent & Guardian Details",
          head: " Store and manage parent or guardian contact information for communication and updates.",
        },
        {
          icon: "../../src/assets/img/history.jpg",
          title: "Academic History",
          head: "Maintain each student’s learning timeline and class participation records.",
        },
        {
          icon: "../../src/assets/img/document.png",
          title: "Document Management",
          head: " Upload and store essential student documents safely in the cloud.",
        },
      ],
      why: "A well-organized student database reduces paperwork, saves time for Maulanas and administrators and ensures that every student’s record remains accessible, accurate and secure.",
    },
    maulana: {
      title: "Maulana & Staff Management",
      subtitle: "Streamline Staff Records and Academic Coordination",
      image: "../../src/assets/img/student.png",
      description:
        "DeenNest’s Maulana & Staff Management system enables madrasas to manage all teacher and staff information — from attendance and payroll to subject allocations — in one organized dashboard.",
      keyCapabilities: [
        {
          icon: "../../src/assets/img/personalP.png",
          title: "Personal Profiles",
          head: "Store each Maulana’s and staff member’s details, including contact information, joining date and role.",
        },
        {
          icon: "../../src/assets/img/Time.jpg", // replace with your attendance icon
          title: "Attendance Tracking",
          head: "Record daily attendance and maintain monthly presence reports digitally.",
        },
        {
          icon: "../../src/assets/img/payroll1.jpg", // replace with your payroll icon
          title: "Payroll Management",
          head: "Track salary components, deductions and payment history with ease.",
        },
        {
          icon: "../assets/img/subjecticon.jpg", // replace with your role/subject icon
          title: "Role & Subject Assignment",
          head: "Assign subjects, classes or administrative roles to Maulanas and staff efficiently.",
        },
        {
          icon: "../assets/img/document.png", // replace with your document icon
          title: "Document Management",
          head: "Keep ID proofs, experience certificates and employment records secure and easy to access.",
        },
      ],

      why: "By digitizing staff and Maulana records, DeenNest helps institutions ensure payroll transparency, improve coordination between departments and build a more accountable academic environment.",
    },
  };
  return (
    <FeatureContext.Provider value={allFeatures}>
      {children}
    </FeatureContext.Provider>
  );
};
export const useFeature = () => useContext(FeatureContext);
