// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="bg-grays-100 font-sans">
      {/* Header Section */}
      <header className="bg-gray-900 mt-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif hover:font-bold cursor-pointer mb-2 sm:mb-0">TrackMyHand</h1>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex flex-col text-xl sm:flex-row sm:space-x-6 text-center">
              <li><a href="#features" className="hover:text-gray-400">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-400 to-gray-700 text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Efficient Employee Attendance Tracking
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
            Streamline your team's attendance management with TrackMyHand.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-gray-800 text-black-600 font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg hover:bg-gray-400 transition"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-400 p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Real-Time Tracking</h4>
              <p className="text-sun-600">Monitor employee attendance in real-time with ease.</p>
            </div>
            <div className="bg-gray-400 p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Detailed Reports</h4>
              <p className="text-sun-600">Generate comprehensive attendance reports for insights.</p>
            </div>
            <div className="bg-gray-400 p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Multi-Device Access</h4>
              <p className="text-sun-600">Access your tracker from any device, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
            Pricing Plans
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg sm:text-xl font-bold mb-2">Basic</h4>
              <p className="text-xl sm:text-2xl font-extrabold mb-4">$9.99</p>
              <p className="text-gray-600 mb-4">Ideal for small teams.</p>
              <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg sm:text-xl font-bold mb-2">Pro</h4>
              <p className="text-xl sm:text-2xl font-extrabold mb-4">$19.99</p>
              <p className="text-gray-600 mb-4">Perfect for growing businesses.</p>
              <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg sm:text-xl font-bold mb-2">Enterprise</h4>
              <p className="text-xl sm:text-2xl font-extrabold mb-4">Custom</p>
              <p className="text-gray-600 mb-4">Tailored solutions for large enterprises.</p>
              <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 mb-4 text-white py-6">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base">&copy; 2024 TrackMyHand. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
