import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReportsDetails() {
  // Sample reports data
  const reportsData = {
    studentName: "Ali Khan",
    rollNumber: "23",
    class: "8th Grade",
    reportDate: "2025-10-25",
    feeSummary: {
      totalDue: "₹5,000",
      totalPaid: "₹9,500",
      overdue: "₹500",
    },
    payrollSummary: {
      totalSalary: "₹45,000",
      totalPaid: "₹4,50,000 (YTD)",
      pending: "₹0",
    },
    performanceTrends: {
      math: "85% (Up 5%)",
      science: "78% (Down 2%)",
      english: "90% (Up 3%)",
    },
    absenceTracking: {
      totalAbsences: 2,
      recentAbsences: ["2025-10-02", "2025-10-05"],
    },
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-[#126f77] mb-6">
        Reports & Analytics Details
      </h1>

      {/* Basic Report Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Student Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {reportsData.studentName}
          </p>
          <p>
            <span className="font-semibold">Roll Number:</span>{" "}
            {reportsData.rollNumber}
          </p>
          <p>
            <span className="font-semibold">Class:</span> {reportsData.class}
          </p>
          <p>
            <span className="font-semibold">Report Date:</span>{" "}
            {reportsData.reportDate}
          </p>
        </div>
      </div>

      {/* Fee Summary */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Fee Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Total Due:</span>{" "}
            {reportsData.feeSummary.totalDue}
          </p>
          <p>
            <span className="font-semibold">Total Paid:</span>{" "}
            {reportsData.feeSummary.totalPaid}
          </p>
          <p className="text-red-600">
            <span className="font-semibold">Overdue:</span>{" "}
            {reportsData.feeSummary.overdue}
          </p>
        </div>
      </div>

      {/* Payroll Summary */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Payroll Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Total Salary:</span>{" "}
            {reportsData.payrollSummary.totalSalary}
          </p>
          <p>
            <span className="font-semibold">Total Paid (YTD):</span>{" "}
            {reportsData.payrollSummary.totalPaid}
          </p>
          <p>
            <span className="font-semibold">Pending:</span>{" "}
            {reportsData.payrollSummary.pending}
          </p>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Performance Trends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(reportsData.performanceTrends).map(
            ([subject, trend], index) => (
              <div
                key={index}
                className="bg-[#f0fdf4] p-4 rounded-xl text-center shadow-sm"
              >
                <p className="font-semibold">{subject}</p>
                <p className="text-lg text-[#126f77] font-bold">{trend}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Absence Tracking */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Absence Tracking</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Total Absences:</span>{" "}
            {reportsData.absenceTracking.totalAbsences}
          </p>
          <p>
            <span className="font-semibold">Recent Absences:</span>{" "}
            {reportsData.absenceTracking.recentAbsences.join(", ")}
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
