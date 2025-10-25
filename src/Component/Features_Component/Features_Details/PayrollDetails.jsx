import React from "react";
import { useNavigate } from "react-router-dom";

export default function PayrollDetails() {
  // Sample payroll data
  const payrollData = {
    employeeName: "Maulana Imran Ahmed",
    employeeId: "M-045",
    role: "Teacher (Islamic Studies)",
    salary: "₹45,000/month",
    paymentFrequency: "Monthly",
    lastPaymentDate: "2025-10-15",
    nextPaymentDate: "2025-11-15",
    paymentStatus: "Paid",
    totalEarnings: "₹4,50,000 (YTD)",
    deductions: {
      tax: "₹5,400",
      providentFund: "₹2,250",
    },
    payslips: [
      { month: "September 2025", amount: "₹45,000", date: "2025-09-15" },
      { month: "August 2025", amount: "₹45,000", date: "2025-08-15" },
    ],
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-[#126f77] mb-6">
        Payroll Management Details
      </h1>

      {/* Basic Payroll Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Employee Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {payrollData.employeeName}
          </p>
          <p>
            <span className="font-semibold">Employee ID:</span>{" "}
            {payrollData.employeeId}
          </p>
          <p>
            <span className="font-semibold">Role:</span> {payrollData.role}
          </p>
          <p>
            <span className="font-semibold">Salary:</span> {payrollData.salary}
          </p>
          <p>
            <span className="font-semibold">Payment Frequency:</span>{" "}
            {payrollData.paymentFrequency}
          </p>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Schedule</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Last Payment Date:</span>{" "}
            {payrollData.lastPaymentDate}
          </p>
          <p>
            <span className="font-semibold">Next Payment Date:</span>{" "}
            {payrollData.nextPaymentDate}
          </p>
          <p>
            <span className="font-semibold">Payment Status:</span>{" "}
            {payrollData.paymentStatus}
          </p>
        </div>
      </div>

      {/* Deductions */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Deductions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Tax:</span>{" "}
            {payrollData.deductions.tax}
          </p>
          <p>
            <span className="font-semibold">Provident Fund:</span>{" "}
            {payrollData.deductions.providentFund}
          </p>
        </div>
      </div>

      {/* Payslips */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Payslip History</h2>
        <ul className="space-y-2">
          {payrollData.payslips.map((payslip, index) => (
            <li key={index} className="flex justify-between">
              <span>{payslip.month}</span>
              <span>
                {payslip.amount} - {payslip.date}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Overview & Analytics */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Overview & Analytics</h2>
        <p>
          <span className="font-semibold">Total Earnings (YTD):</span>{" "}
          {payrollData.totalEarnings}
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
