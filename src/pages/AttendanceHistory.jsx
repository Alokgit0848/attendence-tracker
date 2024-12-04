import React, { useState, useEffect } from 'react';
import { getEmployees, getAttendanceData, getCurrentDate } from '../utils/attendanceUtils';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const AttendanceHistory = () => {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState(getAttendanceData());
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminloggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isAdminloggedIn) {
      navigate('/admin-login');
    }
  },[navigate]);


  

  useEffect(() => {
    const markAbsentees = () => {
      const currentDate = getCurrentDate();
      const currentHour = new Date().getHours();
      const currentMinutes = new Date().getMinutes();
      const updatedAttendance = { ...attendance };
  
      // Only auto-mark absentees if the time is past 10:00 AM
      if (currentHour >= 10 && currentMinutes >= 0) {
        if (!updatedAttendance[currentDate]) {
          updatedAttendance[currentDate] = {};
        }
  
        getEmployees().forEach((employee) => {
          // Mark as "Absent" if no check-in record exists
          if (
            !updatedAttendance[currentDate][employee.id] || // No record for the employee
            !updatedAttendance[currentDate][employee.id]?.checkIn // No check-in time recorded
          ) {
            updatedAttendance[currentDate][employee.id] = {
              ...updatedAttendance[currentDate][employee.id],
              status: 'Absent',
            };
          }
        });
  
        // Update the attendance state and save to localStorage
        setAttendance(updatedAttendance);
        localStorage.setItem('attendance', JSON.stringify(updatedAttendance));
      }
    };
  
    // Check every minute for the auto-marking of absentees
    const interval = setInterval(markAbsentees, 60000); // 60000 milliseconds = 1 minute
  
    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [attendance]);
  



  // useEffect(() => {
  //   const markAbsentees = () => {
  //     const currentDate = getCurrentDate();
  //     const currentHour = new Date().getHours();
  //     const updatedAttendance = { ...attendance };
  
  //     // Only auto-mark absentees if the time is past 10:00 AM
  //     if (currentHour >= 10) {
  //       // Initialize attendance for the current date if it doesn't exist
  //       if (!updatedAttendance[currentDate]) {
  //         updatedAttendance[currentDate] = {};
  //       }
  
  //       // Iterate over the employee list and mark those who haven't checked in as "Absent"
  //       getEmployees().forEach((employee) => {
  //         if (!updatedAttendance[currentDate][employee.id]?.checkIn) {
  //           updatedAttendance[currentDate][employee.id] = {
  //             ...updatedAttendance[currentDate][employee.id],
  //             status: 'Absent',
  //           };
  //         }
  //       });
  
  //       // Update the attendance state and save to localStorage if there are any changes
  //       if (JSON.stringify(updatedAttendance) !== JSON.stringify(attendance)) {
  //         setAttendance(updatedAttendance);
  //         localStorage.setItem('attendance', JSON.stringify(updatedAttendance));
  //       }
  //     }
  //   };
  
  //   const checkForNewDay = () => {
  //     const currentDate = getCurrentDate();
  //     if (!attendance[currentDate]) {
  //       const updatedAttendance = { ...attendance };
  //       updatedAttendance[currentDate] = {};
  
  //       // Mark all employees as "Absent" initially for the new date
  //       getEmployees().forEach((employee) => {
  //         updatedAttendance[currentDate][employee.id] = {
  //           status: 'Absent',
  //         };
  //       });
  
  //       setAttendance(updatedAttendance);
  //       localStorage.setItem('attendance', JSON.stringify(updatedAttendance));
  //     }
  //   };
  
  //   // Call the function to mark absentees
  //   markAbsentees();
  
  //   // Check every minute to handle both date changes and time checks for marking absentees
  //   const interval = setInterval(() => {
  //     checkForNewDay();
  //     markAbsentees();
  //   }, 60000); // Check every minute (60000 milliseconds)
  
  //   // Cleanup interval on component unmount
  //   return () => clearInterval(interval);
  // }, [attendance]);
  

  
  





  // Fetch employees list from LocalStorage only once on component mount
  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  // Function to filter attendance data by date range
  const filterByDateRange = () => {
    if (!startDate || !endDate) return Object.entries(attendance);
    const start = new Date(startDate);
    const end = new Date(endDate);

    return Object.entries(attendance).filter(([date]) => {
      const recordDate = new Date(date);
      return recordDate >= start && recordDate <= end;
    });
  };

  // Function to sort employees by name
  const getSortedEmployees = () => {
    return [...employees].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  };

  // Reset filters and refresh attendance data
  const resetFilters = () => {
    setStartDate('');
    setEndDate('');
    setAttendance(getAttendanceData());
  };

  return (
    <div className="p-4 pb-24 lg:p-8  border border-b-4 border-t-0 ">
      <Header />
      <h1 className="text-3xl lg:text-4xl  font-mono font-bold mb-8 mt-4 text-center lg:text-left">Attendance History</h1>

      {/* Date Range Filter */}
      <div className="mb-6  flex flex-col md:flex-row  item-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 ">
        <div className='flex item-center'>
          <label className="mr-2 font-mono mt-2 ">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-1 py-1 mr-4"
          />
        </div>
        <div className='flex item-center'>
          <label className="mr-2 font-mono mt-2">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-1 py-1 mr-4"
          />
        </div>
        <button
          onClick={resetFilters}
          className=" bg-blue-900 text-white px-4 py-2 mr-8  rounded w-full md:w-auto"
        >
          Reset
        </button>
      </div>

      {/* Sorting Options */}
      <div className="mb-8 flex justify-center md:justify-start ">
        <label className="mr-2 font-mono mt-2">Sort by Name:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {/* Attendance Table */}
      <div className='overflow-x-auto'>
        <table className="w-full border">
          <thead>
            <tr className='bg-gary-100'>
              <th className="border border-b-4 px-4 py-2 lg:text-base">Employee Name</th>
              <th className="border border-b-4 px-4 py-2 lg:text-base">Date</th>
              <th className="border border-b-4 px-4 py-2 lg:text-base">Check-in Time</th>
              <th className="border border-b-4 px-4 py-2 lg:text-base">Check-out Time</th>
              <th className="border border-b-4 px-4 py-2 lg:text-base">Status</th>
            </tr>
          </thead>
          <tbody>
            {filterByDateRange().map(([date, records]) =>
              getSortedEmployees().map((employee) => (
                <tr key={`${date}-${employee.id}`}>
                  <td className="border font-mono font-bold px-4 py-2 lg:text-base">{employee.name}</td>
                  <td className="border font-mono font-bold px-4 py-2 lg:text-base">{date}</td>
                  <td className="border font-mono font-bold px-4 py-2 lg:text-base">{records[employee.id]?.checkIn || '-'}</td>
                  <td className="border font-mono font-bold px-4 py-2 lg:text-base">{records[employee.id]?.checkOut || '-'}</td>
                  <td className="border font-mono font-bold px-4 py-2 lg:text-base">{records[employee.id]?.status || 'Present'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceHistory;
