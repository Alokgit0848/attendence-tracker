// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getEmployees } from "../utils/attendanceUtils";
// import Header from "../components/Header";

// const EmployeeLogin = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [employeeName, setEmployeeName] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Redirect to Dashboard if already logged in
//   useEffect(() => {
//     const isEmployeeLoggedIn = localStorage.getItem("isEmployeeLoggedIn");
//     if (isEmployeeLoggedIn) {
//       navigate("/dash", { replace: true });
//     }
//   }, [navigate]);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Check if both fields are filled
//     if (!employeeId.trim() || !employeeName.trim()) {
//       setError("Please enter a valid Employee ID and Name.");
//       return;
//     }

//     // Validate if the Employee ID is a number
//     if (isNaN(employeeId)) {
//       setError("Employee ID should be a number.");
//       return;
//     }

//     const employees = getEmployees();

//     // Check if the entered ID and Name match an employee in localStorage
//     const employee = employees.find(
//       (emp) =>
//         emp.id === parseInt(employeeId) &&
//         emp.name.toLowerCase() === employeeName.toLowerCase()
//     );

//     if (employee) {
//       // Store the logged-in employee information in localStorage
//       localStorage.setItem("isEmployeeLoggedIn", "true");
//       localStorage.setItem("loggedInEmployeeId", employeeId);
//       navigate("/dash");
//     } else {
//       setError("Invalid Employee ID or Name. Please try again.");
//     }
//   };

//   return (
//     <div className="mt-4">
//       <Header />
//       <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-r from-gray-300 to-gray-700">
//         {/* Image Section */}
//         <div className="hidden lg:block lg:w-1/2 h-full p-8">
//           <img
//             src="public/img/employee-login-image.jfif"
//             alt="Employee Login"
//             className="w-full max-w-xl mx-24 mt-4 object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="flex flex-col items-center lg:w-1/2 px-4 py-8">
//           <h1 className="text-3xl font-bold mb-8 font-mono text-white">Employee Login</h1>
//           <form onSubmit={handleLogin} className="w-full max-w-md">
//             {error && <p className="text-red-500 mb-4">{error}</p>}

//             <input
//               type="text"
//               placeholder="Enter Employee ID"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               className="border p-3 mb-4 w-full rounded-md"
//               required
//             />

//             <input
//               type="text"
//               placeholder="Enter Employee Name"
//               value={employeeName}
//               onChange={(e) => setEmployeeName(e.target.value)}
//               className="border p-3 mb-4 w-full rounded-md"
//               required
//             />

//             <button
//               type="submit"
//               className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../utils/attendanceUtils';
import Header from '../components/Header';

const EmployeeLogin = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if both fields are filled
    if (!employeeId.trim() || !employeeName.trim()) {
      alert('Please enter a valid Employee ID and Name.');
      return;
    }

    const employees = getEmployees();

    // Validate if the Employee ID is a number
    if (isNaN(employeeId)) {
      alert('Employee ID should be a number.');
      return;
    }

    // Check if the entered ID and Name match an employee in localStorage
    const employee = employees.find(
      (emp) =>
        emp.id === parseInt(employeeId) &&
        emp.name.toLowerCase() === employeeName.toLowerCase()
    );

    if (employee) {
      // Store the logged-in employee information in localStorage
      localStorage.setItem('isEmployeeLoggedIn', 'true');
      localStorage.setItem('loggedInEmployeeId', employeeId);
      alert('Login successful!');
      navigate('/dash'); // Redirect to the Dashboard
    } else {
      alert('Invalid Employee ID or Name. Please try again.');
    }
  };

  return (
    <div className="mt-4">
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-l from-gray-300 to-gray-700">
        {/* Form Section - Left Side */}
        <div className="flex flex-col items-center lg:w-1/2 px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 font-mono text-white">Employee Login</h1>
          <input
            type="text"
            placeholder="Enter Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="border p-3 mb-4 w-full max-w-md rounded-md"
          />
          <input
            type="text"
            placeholder="Enter Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="border p-3 mb-4 w-full max-w-md rounded-md"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded w-full max-w-md"
          >
            Login
          </button>
        </div>

        {/* Image Section - Right Side */}
        <div className="hidden lg:block lg:w-1/2 h-full p-8">
          <img
            src="/img/Gemini_Generated_Image_5ixrjb5ixrjb5ixr.jfif"
            alt="Employee Login"
            className="w-full max-w-xl mx-24 mt-4 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;

