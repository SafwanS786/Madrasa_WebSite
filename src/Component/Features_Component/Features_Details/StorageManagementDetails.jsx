import React from "react";
import { useNavigate } from "react-router-dom";
import storageImg from "../../../assets/img/storage1.jpg"; // 🖼️ add your storage image here

export default function StorageManagementDetails() {
  const navigate = useNavigate();

  const storageData = {
    userName: "Admin User",
    totalStorage: "50 GB",
    usedStorage: "12.5 GB",
    availableStorage: "37.5 GB",
    folders: [
      { name: "Student Records", files: 15, size: "5 GB" },
      { name: "Staff Documents", files: 8, size: "3.2 GB" },
      { name: "Fee Receipts", files: 20, size: "4.3 GB" },
    ],
    recentFiles: [
      { name: "Student_List_2025.pdf", date: "2025-10-20", size: "2 MB" },
      { name: "Payroll_Summary.xlsx", date: "2025-10-18", size: "1.5 MB" },
    ],
    searchQuery: "Student Records",
    searchResults: 5,
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-10 md:mt-20">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#126F77]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-[#EB6319]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
            {/* Text Side */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 text-start">
                <span className="inline">Storage </span>
                <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
                  Management
                </span>
                <br /> System
              </h1>

              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-start">
                Securely manage your institution’s cloud storage, track usage,
                organize documents, and ensure that all records are accessible
                anytime — all in one centralized platform.
              </p>

              <div className="flex flex-row sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#126F77] to-[#0F5A61] text-white px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-500">
                  Start Free Trial
                </button>
                <button className="border-2 border-[#126F77] text-[#126F77] px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#126F77] hover:text-white transition-all duration-500">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full max-w-2xl">
              <img
                src={storageImg}
                alt="Storage Management"
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="py-4 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <section className="mb-8 md:mb-16 border-b border-[#E5E7EB] pb-4 md:pb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 leading-tight text-start">
            <span className="bg-gradient-to-r from-[#126F77] to-[#EB6319] bg-clip-text text-transparent">
              Smart Cloud-Based Storage Management
            </span>
          </h2>

          <p className="text-base md:text-xl text-[#6B6B6B] mb-8 leading-relaxed max-w-3xl">
            DeenNest’s Storage Management System helps Islamic educational
            institutions efficiently organize, store, and track digital data —
            ensuring that student, staff, and financial records are secure and
            easily accessible.
          </p>

          {/* Storage Overview */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#126F77] mb-4">
              Storage Overview
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#555]">
              <p>
                <span className="font-semibold">User:</span>{" "}
                {storageData.userName}
              </p>
              <p>
                <span className="font-semibold">Total Storage:</span>{" "}
                {storageData.totalStorage}
              </p>
              <p>
                <span className="font-semibold">Used Storage:</span>{" "}
                {storageData.usedStorage}
              </p>
              <p>
                <span className="font-semibold">Available Storage:</span>{" "}
                {storageData.availableStorage}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-[#126F77] to-[#EB6319] h-3 rounded-full transition-all duration-700"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <p className="text-sm text-[#6B6B6B] mt-2">
                {storageData.usedStorage} used of {storageData.totalStorage}
              </p>
            </div>
          </div>

          {/* Folder Section */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#126F77] mb-4">
              Folders
            </h3>
            <div className="divide-y divide-gray-200">
              {storageData.folders.map((folder, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between py-3 text-[#555]"
                >
                  <span>{folder.name}</span>
                  <span>
                    {folder.files} files • {folder.size}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Files */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#126F77] mb-4">
              Recent Files
            </h3>
            <div className="divide-y divide-gray-200">
              {storageData.recentFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between py-3 text-[#555]"
                >
                  <span>{file.name}</span>
                  <span>
                    {file.date} • {file.size}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Search & Management */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#126F77] mb-4">
              Search & Management
            </h3>
            <p className="text-[#555] mb-2">
              <span className="font-semibold">Last Search:</span>{" "}
              {storageData.searchQuery}
            </p>
            <p className="text-[#555] mb-2">
              <span className="font-semibold">Results Found:</span>{" "}
              {storageData.searchResults}
            </p>
            <p className="text-[#555]">
              <span className="font-semibold">Manage Control:</span> Available
              for Upload, Edit, and Delete operations.
            </p>
          </div>

          {/* Highlight Box */}
          <div className="p-6 bg-gradient-to-r from-[#126F77]/10 to-[#EB6319]/10 rounded-2xl md:mb-10">
            <h3 className="text-lg md:text-xl font-semibold text-[#126F77] mb-3">
              Built for Islamic Institutions
            </h3>
            <p className="text-[#6B6B6B] text-sm md:text-base">
              DeenNest’s Storage Management System ensures safe digital record
              keeping aligned with your Islamic institution’s operational needs.
              Access documents anytime, anywhere with complete data privacy.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-4 md:mt-8 text-center">
            <button
              onClick={() => navigate("/features")}
              className="bg-[#126F77] text-white px-2 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 rounded-lg hover:bg-[#0E575D]
               transition-colors duration-300 cursor-pointer text-sm md:text-base"
            >
              Back to Features
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
