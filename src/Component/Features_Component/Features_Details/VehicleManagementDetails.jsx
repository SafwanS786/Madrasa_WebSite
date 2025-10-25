import React from 'react';
import { Bus, User, Wrench, Activity, Phone, Calendar, CheckCircle } from 'lucide-react';

export default function VehicleManagementDetails() {
  const vehicleData = {
    id: 'V-001',
    registration: 'MH-12-AB-1234',
    type: 'Bus',
    capacity: '50 seats',
    status: 'Active'
  };

  const driverData = {
    name: 'Rahul Sharma',
    contact: '+91-9876543213'
  };

  const maintenance = {
    last: '2025-09-30',
    next: '2025-12-30'
  };

  const usageHistory = [
    { date: '2025-10-20', description: 'School to City', status: 'Completed' },
    { date: '2025-10-18', description: 'Field Trip', status: 'Completed' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-300 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 flex items-center gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center">
            <Bus className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Vehicle Management Dashboard</h1>
            <p className="text-gray-500 mt-1">Complete overview of vehicle {vehicleData.id}</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Vehicle Information Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-gray-100">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Vehicle Information</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium">Vehicle ID</span>
                <span className="text-gray-800 text-sm font-semibold">{vehicleData.id}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium">Registration Number</span>
                <span className="text-gray-800 text-sm font-semibold">{vehicleData.registration}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium">Type</span>
                <span className="text-gray-800 text-sm font-semibold">{vehicleData.type}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium">Capacity</span>
                <span className="text-gray-800 text-sm font-semibold">{vehicleData.capacity}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium">Status</span>
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {vehicleData.status}
                </span>
              </div>
            </div>
          </div>

          {/* Driver Information Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-gray-100">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Driver Information</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium">Driver Name</span>
                <span className="text-gray-800 text-sm font-semibold">{driverData.name}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium">Contact</span>
                <span className="text-gray-800 text-sm font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {driverData.contact}
                </span>
              </div>
            </div>
          </div>

          {/* Maintenance Schedule Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-gray-100">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Maintenance Schedule</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Last Maintenance
                </span>
                <span className="text-gray-800 text-sm font-semibold">{maintenance.last}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Next Maintenance
                </span>
                <span className="text-gray-800 text-sm font-semibold">{maintenance.next}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Usage History */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex items-center gap-3 pb-4 mb-5 border-b-2 border-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Usage History</h2>
          </div>
          <div className="space-y-3">
            {usageHistory.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-l-4 border-purple-600"
              >
                <div>
                  <div className="text-gray-800 font-semibold text-sm">{item.date}</div>
                  <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}