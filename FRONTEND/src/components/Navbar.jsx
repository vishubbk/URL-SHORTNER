import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full shadow-md bg-white top-0 left-0 z-50'>
      <div className='flex justify-between items-center mx-4 md:mx-8 py-4'>

        {/* Logo */}
        <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 tracking-wide drop-shadow-sm">
          <Link to="/" className="hover:text-black transition duration-300 ease-in-out">
            Short<span className="font-extrabold text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">ify</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-5 bg-[rgba(50,37,90,0.23)] backdrop-blur-md border border-white/30 rounded-xl shadow-md p-4'>
          {['/', '/QrCode', '/PasswordManager', '/PdfCovert'].map((path, index) => (
            <Link key={index} to={path}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                {path === '/' ? 'Home' :
                  path === '/QrCode' ? 'QR Code Generator' :
                    path === '/PasswordManager' ? 'Password Manager' : 'Text-to-PDF'}
              </motion.button>
            </Link>
          ))}
        </div>

        {/* Desktop Login Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/signUp">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#404095] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition"
            >
              <FaUserPlus /> Sign Up
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#404095] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition"
            >
              <FaSignInAlt /> Login
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <motion.div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9, rotate: 90 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* Mobile Menu with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {['/', '/QrCode', '/PasswordManager', '/PdfCovert'].map((path, index) => (
              <Link key={index} to={path} onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:bg-blue-700 hover:text-white text-black px-4 py-2 rounded-lg text-sm font-medium transition w-40"
                >
                  {path === '/' ? 'Home' :
                    path === '/QrCode' ? 'QR Code Generator' :
                      path === '/PasswordManager' ? 'Password Manager' : 'Text-to-PDF'}
                </motion.button>
              </Link>
            ))}
            <Link to="/signUp" onClick={() => setIsOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#404095] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition w-40 justify-center"
              >
                <FaUserPlus /> Sign Up
              </motion.button>
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#404095] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition w-40 justify-center"
              >
                <FaSignInAlt /> Login
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
