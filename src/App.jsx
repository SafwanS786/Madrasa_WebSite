import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import HomePages from "../src/Pages/HomePages";
import Footer from "./Component/Footer";
import Login from "../src/Component/Contact_Component/Login";
import FeaturesPages from "./Pages/FeaturesPages";
import PricingPages from "./Pages/PricingPages";
import AboutPages from "./Pages/AboutPages";
import ContactPages from "./Pages/ContactPages";
import Form_Sign from "./Component/Contact_Component/form";
import Address from "./Component/Contact_Component/Address";
import FeaturesDetails from "./Component/Features_Component/FeaturesDetails";
import Video from "./Component/Home_Component/Video_tutorial";
import StudentDetails from "./Component/Features_Component/Features_Details/StudentDetails";
import MaulanaDetails from "./Component/Features_Component/Features_Details/MaulanaDetails";
import ParentDetails from "./Component/Features_Component/Features_Details/ParentDetails";
import FeesDetails from "./Component/Features_Component/Features_Details/FeesDetails";
import PayrollDetails from "./Component/Features_Component/Features_Details/PayrollDetails";
import AttendancDetails from "./Component/Features_Component/Features_Details/AttendanceDetails";
import ReportsDetails from "./Component/Features_Component/Features_Details/ReportsDetails";
import RemarksComplaints from "./Component/Features_Component/Features_Details/RemarksComplaintsDetails";
import StorageManagement from "./Component/Features_Component/Features_Details/StorageManagementDetails";
import VehicleManagement from "./Component/Features_Component/Features_Details/VehicleManagementDetails";
import ReviewManagement from "./Component/Features_Component/Features_Details/ReviewManagementDetails";
import NoticeManagement from "./Component/Features_Component/Features_Details/NoticeManagementDetails";
import HolidayManagement from "./Component/Features_Component/Features_Details/HolidayManagementDetails";
import DivisionClassManagement from "./Component/Features_Component/Features_Details/DivisionClassManagementDetails";
import SubjectManagement from "./Component/Features_Component/Features_Details/SubjectManagementDetails";
import DonorManagement from "./Component/Features_Component/Features_Details/DonorManagementDetails";
import NotificationManagement from "./Component/Features_Component/Features_Details/NotificationManagementDetails";
import RecentActivity from "./Component/Features_Component/Features_Details/RecentActivityDetails";
import SubscriptionBilling from "./Component/Features_Component/Features_Details/SubscriptionBillingDetails";
import ConfigurationSettings from "./Component/Features_Component/Features_Details/ConfigurationSettingsDetails";
import Loader from "./Component/Loader_Component/Loader";
import PageTransitionLoader from "./Component/Loader_Component/PageTransitionLoader";
import { usePageLoader } from "./Component/Loader_Component/usePageLoader";

function App() {
  const location = useLocation();
  const isPageLoading = usePageLoader();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.classList.add("loading");

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("loading");
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("loading");
    };
  }, []);

  const hideFooter =
    location.pathname === "/form" ||
    location.pathname === "/Address" ||
    location.pathname === "/login";

  // const Header = location.pathname !== "/form";
  const showHeader =
    location.pathname !== "/form" &&
    location.pathname !== "/Address" &&
    location.pathname !== "/login";
  return (
    <>
      {/* {loading && <Loader />} */}
      {/* {isPageLoading && <PageTransitionLoader />} */}
      {showHeader && <Header />}
      {/* <div
        className={
          isPageLoading
            ? "opacity-50 transition-opacity duration-300"
            : "opacity-100 transition-opacity duration-300"
        }
      > */}
      <div style={{ marginTop: showHeader ? "70px" : "0" }}>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/video-tutorial" element={<Video />} />
          <Route path="/features" element={<FeaturesPages />} />
          <Route path="featuresdetails" element={<FeaturesDetails />} />

          <Route path="/studentDetails" element={<StudentDetails />} />
          <Route path="/maulanaDetails" element={<MaulanaDetails />} />
          <Route path="/parentManagement" element={<ParentDetails />} />
          <Route path="/feesManagement" element={<FeesDetails />} />
          <Route path="/payrollManagement" element={<PayrollDetails />} />
          <Route path="/attendanceManagement" element={<AttendancDetails />} />
          <Route path="/reportsAnalytics" element={<ReportsDetails />} />
          <Route path="/remarksComplaints" element={<RemarksComplaints />} />
          <Route path="/storageManagement" element={<StorageManagement />} />
          <Route path="/vehicleManagement" element={<VehicleManagement />} />
          <Route path="/reviewManagement" element={<ReviewManagement />} />
          <Route path="/noticeManagement" element={<NoticeManagement />} />
          <Route path="/holidayManagement" element={<HolidayManagement />} />
          <Route
            path="/divisionClassManagement"
            element={<DivisionClassManagement />}
          />
          <Route path="/subjectManagement" element={<SubjectManagement />} />
          <Route path="/donorManagement" element={<DonorManagement />} />
          <Route
            path="/notificationManagement"
            element={<NotificationManagement />}
          />
          <Route path="/recentActivity" element={<RecentActivity />} />
          <Route
            path="/subscriptionBilling"
            element={<SubscriptionBilling />}
          />
          <Route
            path="/configurationSettings"
            element={<ConfigurationSettings />}
          />
          <Route path="/features/details" element={<FeaturesDetails />} />
          <Route path="/pricing" element={<PricingPages />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/contact" element={<ContactPages />} />
          <Route path="/form" element={<Form_Sign />} />
          <Route path="/login" element={<Login />} />

          <Route path="/Address" element={<Address />} />
        </Routes>
      </div>
      {/* </div> */}
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
