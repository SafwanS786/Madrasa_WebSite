import React from "react";
import { useNavigate } from "react-router-dom";

export default function ParentDetails() {
  // Sample parent data
  const parent = {
    name: "Mrs. Fatima Ahmed",
    contact: "+91-9876543212",
    address: "789, Yellow Lane, Kolkata",
    linkedStudents: [
      { name: "Ayesha Ahmed", class: "6th Grade", rollNumber: "15" },
      { name: "Zain Ahmed", class: "4th Grade", rollNumber: "22" },
    ],
    attendanceAccess: "Yes",
    reportAccess: "Yes",
    childReviews: [
      {
        student: "Ayesha Ahmed",
        review: "Excellent progress in Quran recitation",
      },
      { student: "Zain Ahmed", review: "Needs improvement in Arabic writing" },
    ],
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-[#126f77] mb-6">
        Parent Management Details
      </h1>

      {/* Basic Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Name:</span> {parent.name}
          </p>
          <p>
            <span className="font-semibold">Contact:</span> {parent.contact}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {parent.address}
          </p>
        </div>
      </div>

      {/* Linked Students */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Linked Students</h2>
        <ul className="space-y-3">
          {parent.linkedStudents.map((student, index) => (
            <li key={index} className="flex flex-col gap-1">
              <p>
                <span className="font-semibold">Name:</span> {student.name}
              </p>
              <p>
                <span className="font-semibold">Class:</span> {student.class}
              </p>
              <p>
                <span className="font-semibold">Roll Number:</span>{" "}
                {student.rollNumber}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Access Information */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Access Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Attendance Access:</span>{" "}
            {parent.attendanceAccess}
          </p>
          <p>
            <span className="font-semibold">Report Access:</span>{" "}
            {parent.reportAccess}
          </p>
        </div>
      </div>

      {/* Child Reviews */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Child Reviews</h2>
        <ul className="space-y-3">
          {parent.childReviews.map((review, index) => (
            <li key={index} className="flex flex-col gap-1">
              <p>
                <span className="font-semibold">Student:</span> {review.student}
              </p>
              <p>
                <span className="font-semibold">Review:</span> {review.review}
              </p>
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
