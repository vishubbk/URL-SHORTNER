
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full shadow-md bg-white fixed top-0 left-0 z-50'>
      <div className='flex justify-between items-center mx-4 md:mx-8 py-4'>
        {/* Logo */}
        <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 tracking-wide drop-shadow-sm">
  <Link
    to="/"
    className="hover:text-black transition duration-300 ease-in-out"
  >
    Short<span className="font-extrabold text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">ify</span>
  </Link>
</div>


        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-5 bg-[rgba(53,67,125,0.2)] backdrop-blur-md border border-white/30 rounded-xl shadow-md p-4'>
          <Link to="/">
            <button className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition">
              Home
            </button>
          </Link>
          <Link to="/QrCode">
            <button className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition">
              QR Code Generator
            </button>
          </Link>
          <Link to="/PasswordManager">
            <button className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition">
              Password Manager
            </button>
          </Link>
          <Link to="/PdfCovert">
            <button className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition">
              Text-to-PDF
            </button>
          </Link>
        </div>

        {/* Desktop Login Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/signUp">
            <button className="bg-[#404095] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition">
              <FaUserPlus /> Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-[#404095] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition">
              <FaSignInAlt /> Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-md">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <button className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition w-40">
              Home
            </button>
          </Link>
          <Link to="/QrCode" onClick={() => setIsOpen(false)}>
            <button className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition w-40">
              QR Code Generator
            </button>
          </Link>
          <Link to="/PasswordManager" onClick={() => setIsOpen(false)}>
            <button className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition w-40">
              Password Manager
            </button>
          </Link>
          <Link to="/PdfCovert" onClick={() => setIsOpen(false)}>
            <button className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition w-40">
              Text-to-PDF
            </button>
          </Link>
          <Link to="/signUp" onClick={() => setIsOpen(false)}>
            <button className="bg-[#404095] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition w-40 justify-center">
              <FaUserPlus /> Sign Up
            </button>
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="bg-[#404095] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition w-40 justify-center">
              <FaSignInAlt /> Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
