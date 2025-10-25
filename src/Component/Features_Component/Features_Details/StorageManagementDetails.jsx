import React from "react";
import { useNavigate } from "react-router-dom";

export default function StorageManagementDetails() {
  // Sample storage management data
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
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-[#126f77] mb-6">
        Storage Management Details
      </h1>

      {/* Basic Storage Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Storage Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">User:</span> {storageData.userName}
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
      </div>

      {/* Folders */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Folders</h2>
        <ul className="space-y-2">
          {storageData.folders.map((folder, index) => (
            <li key={index} className="flex justify-between">
              <span>{folder.name}</span>
              <span>
                {folder.files} files - {folder.size}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Files */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Files</h2>
        <ul className="space-y-2">
          {storageData.recentFiles.map((file, index) => (
            <li key={index} className="flex justify-between">
              <span>{file.name}</span>
              <span>
                {file.date} - {file.size}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Search & Manage Control */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Search & Management</h2>
        <p>
          <span className="font-semibold">Last Search:</span>{" "}
          {storageData.searchQuery}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Results Found:</span>{" "}
          {storageData.searchResults}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Manage Control:</span> Available
          (Upload/Edit/Delete)
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
