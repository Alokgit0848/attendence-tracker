import React, { useState } from 'react';
import { addEmployee, getEmployees, updateAttendanceData, getAttendanceData, getCurrentDate } from '../utils/attendanceUtils';

const AddEmployee = ({ onEmployeeAdded }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleAddEmployee = () => {
    if (name.trim() && id.trim()) {
      const newEmployee = { id: parseInt(id), name };

      // Add the new employee to the employee list
      addEmployee(newEmployee);

      // Initialize the new employee's attendance only for the current date
      const currentDate = getCurrentDate();
      const attendance = getAttendanceData();

      // Initialize attendance for the current date if it doesn't exist
      if (!attendance[currentDate]) {
        attendance[currentDate] = {};
      }

      // Add the new employee's status for the current date only
      if (!attendance[currentDate][newEmployee.id]) {
        attendance[currentDate][newEmployee.id] = {
          status: 'Absent', // Default status is "Absent" until they check in
        };
      }

      // Update the attendance data in localStorage
      updateAttendanceData(attendance);

      alert('Employee added successfully!');
      setName('');
      setId('');
      onEmployeeAdded(); // Notify the parent component to update the employee list
    } else {
      alert('Please enter a valid ID and name.');
    }
  };

  return (
    <div className="p-4 rounded-lg bg-gradient-to-r from-gray-300 to-gray-700 pb-12">
      <h2 className="text-xl font-bold font-mono mb-2">Add New Employee</h2>
      <input
        type="text"
        placeholder="Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border p-2 mb-2 w-full rounded-md"
      />
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full rounded-md"
      />
      <button
        onClick={handleAddEmployee}
        className="bg-blue-900 hover:bg-blue-700 mt-2 text-white px-4 py-2 rounded"
      >
        Add Employee
      </button>
    </div>
  );
};

export default AddEmployee;
