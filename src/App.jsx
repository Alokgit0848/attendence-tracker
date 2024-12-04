import React from "react";
import {Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AttendanceHistory from "./pages/AttendanceHistory";
import AdminLogin from "./pages/AdminLogin";
import DashboardAd from "./pages/DashboardAd";
import EmployeeLogin from "./pages/EmployeeLogin";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
      <Routes>
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/dashboard" element={<DashboardAd/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/history" element={<AttendanceHistory/>} />
      </Routes>
  );
};

export default App;