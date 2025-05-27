import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 flex-wrap">
          {/* Logo */}
          <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 tracking-wide drop-shadow-sm">
  <Link to="/" className="hover:opacity-90 transition duration-300 ease-in-out">
    Short<span className="font-extrabold text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">ify</span>
  </Link>
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

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
