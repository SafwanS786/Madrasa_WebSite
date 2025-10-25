import React from "react";
import { useNavigate } from "react-router-dom";

export default function RemarksComplaintsDetails() {
  // Sample remarks/complaints data
  const complaintData = {
    id: "C-001",
    title: "Classroom Maintenance Issue",
    description: "The classroom lights are flickering and need repair.",
    category: "Infrastructure",
    priority: "High",
    location: "Room 101",
    submittedBy: "Maulana Imran Ahmed",
    submittedDate: "2025-10-20",
    status: "In Progress",
    resolutionNotes: "Electrician assigned, expected completion by 2025-10-27",
    history: [
      { date: "2025-10-20", action: "Complaint submitted" },
      { date: "2025-10-22", action: "Assigned to maintenance team" },
    ],
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-[#126f77] mb-6">
        Remarks & Complaints Details
      </h1>

      {/* Basic Complaint Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Complaint Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">ID:</span> {complaintData.id}
          </p>
          <p>
            <span className="font-semibold">Title:</span> {complaintData.title}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {complaintData.description}
          </p>
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {complaintData.category}
          </p>
          <p>
            <span className="font-semibold">Priority:</span>{" "}
            {complaintData.priority}
          </p>
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {complaintData.location}
          </p>
        </div>
      </div>

      {/* Submission Details */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Submission Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Submitted By:</span>{" "}
            {complaintData.submittedBy}
          </p>
          <p>
            <span className="font-semibold">Submitted Date:</span>{" "}
            {complaintData.submittedDate}
          </p>
        </div>
      </div>

      {/* Status & Resolution */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Status & Resolution</h2>
        <p>
          <span className="font-semibold">Status:</span> {complaintData.status}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Resolution Notes:</span>{" "}
          {complaintData.resolutionNotes}
        </p>
      </div>

      {/* History */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Complaint History</h2>
        <ul className="space-y-2">
          {complaintData.history.map((entry, index) => (
            <li key={index} className="flex justify-between">
              <span>{entry.date}</span>
              <span>{entry.action}</span>
            </li>
          ))}
        </ul>
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
