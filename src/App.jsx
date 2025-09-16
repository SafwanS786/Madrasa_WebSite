import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home_Component/Home";
import Features from "./Component/Features_Component/Features";
function App() {
  return (
    <>
      <Header />
      <div className="pt-[70px]">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
