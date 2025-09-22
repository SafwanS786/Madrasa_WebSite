import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Component/Header";
import HomePages from "../src/Pages/HomePages";
import Footer from "./Component/Footer";
import FeaturesPages from "./Pages/FeaturesPages";
import PricingPages from "./Pages/PricingPages";
function App() {
  return (
    <>
      <Header />
      <div className="pt-[70px]">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePages />} />
          <Route path="/features" element={<FeaturesPages />} />
          <Route path="/pricing" element={<PricingPages />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
