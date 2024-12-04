


// Function to get all employees from LocalStorage
export const getEmployees = () => {
  return JSON.parse(localStorage.getItem('employees')) || [];
};

// Function to add a new employee to LocalStorage
export const addEmployee = (employee) => {
  const employees = getEmployees();
  employees.push(employee);
  localStorage.setItem('employees', JSON.stringify(employees));
};

// Function to get the current date
export const getCurrentDate = () => new Date().toLocaleDateString();

// Function to get attendance data from LocalStorage
export const getAttendanceData = () =>
  JSON.parse(localStorage.getItem('attendance')) || {};

// Function to update attendance data in LocalStorage
export const updateAttendanceData = (attendance) => {
  localStorage.setItem('attendance', JSON.stringify(attendance));
};

export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
};