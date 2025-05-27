import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 flex-wrap">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">Shortify</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
            <Link to="/">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                Home
              </button>
            </Link>
            <Link to="/QrCode">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                QR Code Generator
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
