import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  // Check if the user is logged in as admin
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdminLoggedIn");
    if (adminStatus === "true") {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    const empStatus = localStorage.getItem("isEmployeeLoggedIn");
    if (empStatus === "true") {
      setIsUser(true);
    }
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsAdmin(false);
    navigate("/admin-login");
  };

  const handleLogoutE = () => {
    localStorage.removeItem("isEmployeeLoggedIn");
    localStorage.removeItem("loggedInEmployeeId");
    alert("Logged out successfully!");
    navigate("/employee-login");
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      {/* Logo */}
      <div className="text-3xl font-serif hover:font-bold cursor-pointer mb-2 sm:mb-0">
        <Link to="/">TrackMyHand</Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex text-md flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">

        
        {/* Dashboard button for Employee */}
        {isUser && !isAdmin && (
          <button
            className="hover:text-gray-400 text-lg font-mono"
            onClick={() => navigate("/dash")}
          >
            Dashboard
          </button>
        )}

        {/* Dashboard button for Admin */}
        {isAdmin && !isUser && (
          <button
            className="hover:text-gray-400 text-lg font-mono"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        )}

        {isAdmin && (
          <button
            className="hover:text-gray-400 text-lg font-mono"
            onClick={() => navigate("/history")}
          >
            History
          </button>
        )}

        {/* Admin button (hidden when logged in as admin or employee) */}
        {!isAdmin && !isUser && (
          <button
            className="hover:text-gray-400 text-lg font-mono"
            onClick={() => navigate("/admin-login")}
          >
            Admin
          </button>
        )}

        {/* Employee button (hidden when logged in as admin or employee) */}
        {!isUser && !isAdmin && (
          <button
            className="hover:text-gray-400 text-lg font-mono"
            onClick={() => navigate("/employee-login")}
          >
            Employee
          </button>
        )}

        {/* Logout button (shown when logged in as admin) */}
        {isAdmin && (
          <button
            className="hover:text-gray-400 text-lg text-red-500 font-mono"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

        {/* Logout button (shown when logged in as admin) */}
        {isUser && (
          <button
            className="hover:text-gray-400 text-lg text-red-500 font-mono"
            onClick={handleLogoutE}
          >
            Logout
          </button>
        )}
      </nav>

      {/* Current Date and Time */}
      <div className="text-sm mt-2 sm:mt-0 text-center sm:text-right">
        {currentTime}
      </div>
    </header>
  );
};

export default Header;
