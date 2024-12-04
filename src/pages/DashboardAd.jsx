import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AddEmployee from '../components/AddEmployee';
import { getEmployees } from '../utils/attendanceUtils';


const DashboardAd = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const handleEmployeeAdded = () => {
    setEmployees(getEmployees());
  }

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isAdminLoggedIn) {
      navigate('/admin-login');
    }
  }, [navigate]);

  return (
    <div className='p-4'>
      <Header />
      <h1 className="text-3xl font-bold font-mono p-4">Admin Dashboard</h1>
      <AddEmployee onEmployeeAdded={handleEmployeeAdded} />

      {employees.length === 0 ? (
        <p>No employees found. Please add employees to get started.</p>
      ) : (
      <div className="employee-list mt-4">
        <h2 className="text-3xl mx-3 font-mono font-bold mb-4">Employee List</h2>
        <ul className="list-disc mx-3 font-mono font-bold  pl-5 mt-2">
          {employees.map((employee, index) => (
            <li key={index} className="mb-2">
              <strong  className="text-lg sm:text-xl font-mono font-bold">{employee.id} - {employee.name}</strong>  {employee.position}
            </li>
          ))}
        </ul>
     </div>
      )}
    </div>
  );
};
export default DashboardAd;
