import React, { useEffect, useState } from "react";
import {
  getEmployees,
  getCurrentDate,
  getAttendanceData,
  updateAttendanceData,
} from "../utils/attendanceUtils";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState(getAttendanceData());
  const navigate = useNavigate();

  // Get the logged-in employee ID from localStorage
  const loggedInEmployeeId = localStorage.getItem("loggedInEmployeeId");
  const isEmployeeLoggedIn =
    localStorage.getItem("isEmployeeLoggedIn") === "true";

  // Redirect to login page if no employee is logged in
  useEffect(() => {
    if (!isEmployeeLoggedIn) {
      alert("You need to log in first.");
      navigate("/employee-login");
    }
  }, [isEmployeeLoggedIn, navigate]);

  useEffect(() => {
    // Filter the employee list to only include the logged-in employee
    const allEmployees = getEmployees();
    const filteredEmployees = loggedInEmployeeId
      ? allEmployees.filter((emp) => emp.id === parseInt(loggedInEmployeeId))
      : allEmployees;
    setEmployees(filteredEmployees);
  }, [loggedInEmployeeId]);

  // const handleCheckIn = (id) => {
  //   const currentDate = getCurrentDate();
  //   if (!attendance[currentDate]) attendance[currentDate] = {};
  //   if (!attendance[currentDate][id]) {
  //     attendance[currentDate][id] = { checkIn: new Date().toLocaleTimeString() };
  //     setAttendance({ ...attendance });
  //     updateAttendanceData(attendance);
  //     alert('Check-in successful!');
  //   }
  // };

  // const handleCheckOut = (id) => {
  //   const currentDate = getCurrentDate();
  //   if (attendance[currentDate]?.[id]?.checkIn && !attendance[currentDate][id]?.checkOut) {
  //     attendance[currentDate][id].checkOut = new Date().toLocaleTimeString();
  //     setAttendance({ ...attendance });
  //     updateAttendanceData(attendance);
  //     alert('Check-out successful!');
  //   }
  // };

  const handleCheckIn = (id) => {
    const currentDate = getCurrentDate();
    const updatedAttendance = { ...attendance };

    // Initialize attendance for the current date if it doesn't exist
    if (!updatedAttendance[currentDate]) {
      updatedAttendance[currentDate] = {};
    }

    // Check if the employee has already checked in
    if (!updatedAttendance[currentDate][id]?.checkIn) {
      updatedAttendance[currentDate][id] = {
        ...updatedAttendance[currentDate][id], // Preserve existing status (e.g., 'Absent')
        checkIn: new Date().toLocaleTimeString(),
        status: "Present", // Update the status to 'Present'
      };

      // Update the state and save to localStorage
      setAttendance(updatedAttendance);
      updateAttendanceData(updatedAttendance);
      alert("Check-in successful!");
    } else {
      alert("You have already checked in today.");
    }
  };

  const handleCheckOut = (id) => {
    const currentDate = getCurrentDate();
    const updatedAttendance = { ...attendance };

    // Check if the employee has checked in but not yet checked out
    if (
      updatedAttendance[currentDate]?.[id]?.checkIn &&
      !updatedAttendance[currentDate][id]?.checkOut
    ) {
      updatedAttendance[currentDate][id].checkOut =
        new Date().toLocaleTimeString();

      // Update the state and save to localStorage
      setAttendance(updatedAttendance);
      updateAttendanceData(updatedAttendance);
      alert("Check-out successful!");
    } else {
      alert("You must check in first or you have already checked out.");
    }
  };

  return (
    <div className="p-4 lg:p-8 pb-24">
      <Header />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-center lg:text-left mt-4 mb-8">
        Employee Dashboard
      </h1>

      {/* Employee List */}
      <div className="flex flex-col space-y-1">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <div
              key={employee.id}
              className="flex flex-col md:text-right md:flex-row items-center justify-between p-4 border border-b-4 shadow-lg rounded-md mx-4 sm:mx-8 lg:mx-24"
            >
              {/* Employee Name */}
              <span className="text-lg sm:text-xl font-mono font-bold">
                {employee.name}
              </span>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
                <button
                  className="bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto"
                  onClick={() => handleCheckIn(employee.id)}
                  disabled={
                    attendance[getCurrentDate()]?.[employee.id]?.checkIn
                  }
                >
                  Check-in
                </button>
                <button
                  className="bg-blue-700 text-white px-4 py-2 rounded w-full sm:w-auto"
                  onClick={() => handleCheckOut(employee.id)}
                  disabled={
                    !attendance[getCurrentDate()]?.[employee.id]?.checkIn ||
                    attendance[getCurrentDate()]?.[employee.id]?.checkOut
                  }
                >
                  Check-out
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-mono font-bold">
            No employee data available. Please log in.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
