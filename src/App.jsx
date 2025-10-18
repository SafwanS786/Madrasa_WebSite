import React from "react";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import HomePages from "../src/Pages/HomePages";
import Footer from "./Component/Footer";
import FeaturesPages from "./Pages/FeaturesPages";
import PricingPages from "./Pages/PricingPages";
import AboutPages from "./Pages/AboutPages";
import ContactPages from "./Pages/ContactPages";
import Form_Sign from "./Component/Contact_Component/form";
import Address from "./Component/Contact_Component/Address";
import FeaturesDetails from "./Component/Features_Component/FeaturesDetails";
function App() {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/form" || location.pathname === "/Address";
  return (
    <>
      <Header />
      <div className="pt-[70px]">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePages />} />
          <Route path="/features" element={<FeaturesPages />} />
          <Route path="/features/details" element={<FeaturesDetails />} />
          <Route path="/pricing" element={<PricingPages />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/contact" element={<ContactPages />} />
          <Route path="/form" element={<Form_Sign />} />
          <Route path="/Address" element={<Address />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
