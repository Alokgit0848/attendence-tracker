# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- # Attendance Tracker

## Objective

The **Attendance Tracker** is a simple tool designed to manage and monitor employees' daily attendance. It allows employees to log their check-ins and check-outs, displays attendance history for managers, and automatically marks absences for employees who fail to check in by a specified time.

---

## Features

### 1. **Record Attendance**
- **Check-in/Check-out**: Employees can log their check-in and check-out times, recorded with the current date and time.
- **Confirmation Messages**: Employees receive a success message confirming their actions.

### 2. **View Attendance History**
- **Manager Dashboard**: Managers can view detailed attendance records for each employee.
- **History Details**: Each record displays the date, check-in time, and check-out time. Missing check-in records are marked as "Absent."

### 3. **Mark Absences Automatically**
- **Cutoff Time**: Employees who fail to check in by 10:00 AM are automatically marked as "Absent."
- **Attendance Tracking**: Absences are highlighted in the attendance history for review.

---

## User Stories Format

### 1. **Employee Check-in and Check-out**
#### Scenario: Employee checks in  
- **Given**: The employee is logged into the system.  
- **When**: The "Check-in" button is clicked.  
- **Then**: The system records the check-in time with the current date and time.  
- **And**: A success message is displayed.  

#### Scenario: Employee checks out  
- **Given**: The employee is logged into the system and has checked in for the day.  
- **When**: The "Check-out" button is clicked.  
- **Then**: The system records the check-out time with the current date and time.  
- **And**: A success message is displayed.  

### 2. **View Attendance History**  
#### Scenario: Manager views an employee's attendance history  
- **Given**: The manager is logged into the system.  
- **When**: The manager selects an employee from the attendance history page.  
- **Then**: The system displays the employee's attendance records with the date, check-in, and check-out times.  
- **And**: Missing check-in dates are displayed as "Absent."  

### 3. **Auto-Mark Absent Employees**  
#### Scenario: System marks employees as absent if they miss check-in time  
- **Given**: It is past 10:00 AM.  
- **When**: An employee has not checked in.  
- **Then**: The system marks the employee as "Absent" for the day.  
- **And**: This status is displayed in the employee's attendance history.  

---

## Project Setup

### Prerequisites
- Node.js
- React (Vite)  
- TailwindCSS  

### Installation Steps
1. Clone the repository:  
   ```bash
   git clone https://github.com/username/attendance-tracker.git

   - cd attendance-tracker
   - npm install
   - npm run dev










# Screem Shots!

![at1](https://github.com/user-attachments/assets/82560514-e618-4643-85a4-d19092afdddc)

![at2](https://github.com/user-attachments/assets/73e161d7-408f-4f67-9a35-1c50b6ad5368)

![at3](https://github.com/user-attachments/assets/7bda1278-aa42-4bd1-a7d3-e288a58e26b2)

![at4](https://github.com/user-attachments/assets/893f393b-2bac-40fb-b81f-ed5426c29b9c)

![at5](https://github.com/user-attachments/assets/1da6f69a-9341-4979-8bd7-c67f41750f39)

![at](https://github.com/user-attachments/assets/514215d6-f2b9-4518-8291-f04d56babbdd)
