import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_CREDENTIALS } from "../utils/attendanceUtils";
import Header from "../components/Header";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Redirect to Dashboard if already logged in
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (isAdminLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      // Save admin login status in LocalStorage
      localStorage.setItem("isAdminLoggedIn", true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="mt-4">
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-r from-gray-300 to-gray-700">
        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 h-full p-8">
          <img
            src="/img/Gemini_Generated_Image_5ixrjb5ixrjb5ixr.jfif"
            alt="Attendance Tracker"
            className="w-full max-w-xl mx-24 mt-4  object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center lg:w-1/2 px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 font-mono text-white">Admin Login</h1>
          <form onSubmit={handleLogin} className="w-full max-w-md">
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-3 mb-4 w-full rounded-md"
              placeholder="Enter admin username"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 mb-4 w-full rounded-md"
              placeholder="Enter admin password"
              required
            />

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
