import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BiayaT from "./pages/BiayaT";
import LPmin from "./pages/LPmin";
import LPmax from "./pages/LPmax";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0e1018] via-[#0c1123] to-[#08101f] text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BiayaT" element={<BiayaT />} />
            <Route path="/LPmin" element={<LPmin />} />
            <Route path="/LPmax" element={<LPmax />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
