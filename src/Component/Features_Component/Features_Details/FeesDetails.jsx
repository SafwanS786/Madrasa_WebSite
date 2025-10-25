import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeesDetails() {
  // Sample fees data
  const feesData = {
    studentName: "Ali Khan",
    rollNumber: "23",
    feeType: "Tuition Fee",
    amount: "₹5,000",
    dueDate: "2025-11-10",
    status: "Pending",
    lastPayment: "₹4,500 (2025-09-15)",
    receipts: [
      { id: "R001", date: "2025-09-15", amount: "₹4,500" },
      { id: "R002", date: "2025-08-10", amount: "₹5,000" },
    ],
    summary: {
      totalDue: "₹5,000",
      totalPaid: "₹9,500",
      pendingAmount: "₹500",
    },
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-[#126f77] mb-6">
        Fees Management Details
      </h1>

      {/* Basic Fee Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Fee Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Student Name:</span>{" "}
            {feesData.studentName}
          </p>
          <p>
            <span className="font-semibold">Roll Number:</span>{" "}
            {feesData.rollNumber}
          </p>
          <p>
            <span className="font-semibold">Fee Type:</span> {feesData.feeType}
          </p>
          <p>
            <span className="font-semibold">Amount:</span> {feesData.amount}
          </p>
          <p>
            <span className="font-semibold">Due Date:</span> {feesData.dueDate}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {feesData.status}
          </p>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <p>
          <span className="font-semibold">Last Payment:</span>{" "}
          {feesData.lastPayment}
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Receipts</h3>
        <ul className="space-y-2">
          {feesData.receipts.map((receipt, index) => (
            <li key={index} className="flex justify-between">
              <span>Receipt #{receipt.id}</span>
              <span>{receipt.date} - {receipt.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reminders */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Due Date Reminders</h2>
        <p>
          Next due date for {feesData.feeType}: <strong>{feesData.dueDate}</strong>
        </p>
        <p className="mt-2 text-red-600">
          <span className="font-semibold">Alert:</span> Payment is due in{" "}
          {calculateDaysUntilDue(feesData.dueDate)} days!
        </p>
      </div>

      {/* Summary */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Financial Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Total Due:</span>{" "}
            {feesData.summary.totalDue}
          </p>
          <p>
            <span className="font-semibold">Total Paid:</span>{" "}
            {feesData.summary.totalPaid}
          </p>
          <p>
            <span className="font-semibold">Pending Amount:</span>{" "}
            {feesData.summary.pendingAmount}
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

// Helper function to calculate days until due date
function calculateDaysUntilDue(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);
  const difference = due.getTime() - today.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return days > 0 ? days : 0; // Return 0 if past due
}