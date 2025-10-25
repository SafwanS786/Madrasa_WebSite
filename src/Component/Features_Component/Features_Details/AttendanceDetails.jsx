import React from "react";
import { useNavigate } from "react-router-dom";

export default function AttendanceDetails() {
  // Sample attendance data
  const attendanceData = {
    studentName: "Ali Khan",
    rollNumber: "23",
    class: "8th Grade",
    currentMonth: "October 2025",
    attendanceRecords: [
      { date: "2025-10-01", status: "Present" },
      { date: "2025-10-02", status: "Absent" },
      { date: "2025-10-03", status: "Present" },
      { date: "2025-10-04", status: "Present" },
      { date: "2025-10-05", status: "Absent" },
    ],
    attendancePercentage: "90%",
    absenceCount: 2,
    reportDate: "2025-10-25",
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-[#126f77] mb-6">
        Attendance Management Details
      </h1>

      {/* Basic Attendance Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Student Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {attendanceData.studentName}
          </p>
          <p>
            <span className="font-semibold">Roll Number:</span>{" "}
            {attendanceData.rollNumber}
          </p>
          <p>
            <span className="font-semibold">Class:</span> {attendanceData.class}
          </p>
          <p>
            <span className="font-semibold">Current Month:</span>{" "}
            {attendanceData.currentMonth}
          </p>
        </div>
      </div>

      {/* Attendance Records */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Attendance Records</h2>
        <ul className="space-y-2">
          {attendanceData.attendanceRecords.map((record, index) => (
            <li key={index} className="flex justify-between">
              <span>{record.date}</span>
              <span
                className={
                  record.status === "Present"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {record.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Attendance Summary */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Attendance Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Attendance Percentage:</span>{" "}
            {attendanceData.attendancePercentage}
          </p>
          <p>
            <span className="font-semibold">Absence Count:</span>{" "}
            {attendanceData.absenceCount}
          </p>
        </div>
      </div>

      {/* Report Information */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Report Details</h2>
        <p>
          <span className="font-semibold">Generated On:</span>{" "}
          {attendanceData.reportDate}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Export Option:</span> Available
          (PDF/CSV)
        </p>
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
