import React from "react";
import { useNavigate } from "react-router-dom";

export default function MaulanaDetails() {
  // Sample Maulana/Staff data
  const maulana = {
    name: "Maulana Imran Ahmed",
    age: 38,
    role: "Teacher (Islamic Studies)",
    employeeId: "M-045",
    joiningDate: "2019-06-10",
    contact: "+91-9876543211",
    address: "456, Blue Avenue, Mumbai",
    qualifications: "M.A. in Islamic Studies, B.Ed.",
    subjectsTaught: ["Quran Recitation", "Hadith", "Arabic"],
    attendance: "95%",
    payroll: {
      salary: "₹45,000/month",
      lastPaid: "2025-10-15",
      status: "Active",
    },
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-[#126f77] mb-6">
        Maulana & Staff Details
      </h1>

      {/* Basic Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Name:</span> {maulana.name}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {maulana.age}
          </p>
          <p>
            <span className="font-semibold">Role:</span> {maulana.role}
          </p>
          <p>
            <span className="font-semibold">Employee ID:</span>{" "}
            {maulana.employeeId}
          </p>
          <p>
            <span className="font-semibold">Joining Date:</span>{" "}
            {maulana.joiningDate}
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p>
          <span className="font-semibold">Contact:</span> {maulana.contact}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {maulana.address}
        </p>
      </div>

      {/* Qualifications & Subjects */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Qualifications & Subjects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Qualifications:</span>{" "}
            {maulana.qualifications}
          </p>
          <div>
            <span className="font-semibold">Subjects Taught:</span>
            <ul className="list-disc list-inside mt-2">
              {maulana.subjectsTaught.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Attendance */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Attendance</h2>
        <p>{maulana.attendance}</p>
      </div>

      {/* Payroll */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Payroll Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Salary:</span>{" "}
            {maulana.payroll.salary}
          </p>
          <p>
            <span className="font-semibold">Last Paid:</span>{" "}
            {maulana.payroll.lastPaid}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            {maulana.payroll.status}
          </p>
        </div>
      </div>

      {/* Navigation Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/features")}
          className="bg-[#126F77] text-white px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-lg hover:bg-[#0E575D] transition-colors duration-300 cursor-pointer"
        >
          Back to Features
        </button>
      </div>
    </div>
  );
}
