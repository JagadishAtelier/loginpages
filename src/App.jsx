import './App.css'
import LoginPage from './Component/LoginPage'
import Inventorylogin from './Component/Inventorylogin'

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Inventory Login */}
        <Route path="/inventory-login" element={<Inventorylogin />} />
      </Routes>
    </Router>
  );
}

export default App;
