import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ManagePassword = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordList, setPasswordList] = useState([]);
  const navigate = useNavigate();

  const fetchPasswords = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate("/login");
        return;
      }

      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/passwordManager`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Add 'show' property for each password
      const updatedData = data.map(item => ({ ...item, show: false }));
      setPasswordList(updatedData);
    } catch (error) {
      console.error("Error fetching passwords", error);
      toast.error("❌ Failed to fetch passwords");
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      alert("Both fields are required!");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        navigate("/login");
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/passwordManager`,
        { website: name, password: password },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Password saved successfully");
      fetchPasswords();
      setName("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.error("Error saving password", error);
      toast.error("❌ Failed to save password");
      setLoading(false);
    }
  };

  // Individual eye toggle
  const toggleSinglePassword = (id) => {
    const updatedList = passwordList.map(item =>
      item._id === id ? { ...item, show: !item.show } : item
    );
    setPasswordList(updatedList);
  };

  // Show/hide password input while typing
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='w-full min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-blue-200'>
      <Navbar />

      <div className="flex flex-1 flex-col items-center mt-10 px-4">
        <motion.h1
          className='text-3xl font-bold mb-4 text-center'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Best Free Password Manager
        </motion.h1>

        <motion.p
          className='mb-8 max-w-xl text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Keep your accounts secure, and your digital life stress-free with the best free password manager available today!
        </motion.p>

        {/* Input Section */}
        <form onSubmit={handleSubmit} className='bg-white bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-full max-w-xl'>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center'>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Website Name'
              className='w-full md:w-1/2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm'
            />

            <div className='relative w-full md:w-1/2'>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
                className='w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm'
              />
              <span
                onClick={togglePasswordVisibility}
                className='absolute right-3 top-3 cursor-pointer text-gray-600'
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>
          </div>

          <button
            type='submit'
            className='bg-blue-900 mt-7 w-full md:w-1/2 mx-auto block cursor-pointer rounded-2xl hover:bg-blue-600 p-2 text-lg text-white font-semibold'
          >
            {loading ? "Saving..." : "Save Password"}
          </button>
        </form>

        {/* Password List */}
        <div className="lists mt-12 w-full max-w-2xl">
          <h2 className='text-2xl font-semibold mb-4 text-center'>Your Password List</h2>
          {passwordList.length > 0 ? (
            <motion.ul
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
              }}
            >
              {passwordList.map((item) => (
                <motion.li
                  key={item._id}
                  className='bg-white bg-opacity-40 backdrop-blur-lg p-4 rounded-2xl shadow-md flex flex-col space-y-2 hover:scale-[1.02] transition-transform duration-200'
                  whileHover={{ scale: 1.03 }}
                >
                  <span className='font-semibold text-lg'>{item.website}</span>

                  <div className='flex items-center justify-between'>
                    <span className='text-gray-700 max-w-60 overflow-hidden'>
                      {item.show ? item.password : '********'}
                    </span>
                    <span
                      onClick={() => toggleSinglePassword(item._id)}
                      className='cursor-pointer text-gray-600'
                    >
                      {item.show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <p className='text-center'>No passwords found.</p>
          )}
        </div>
      </div>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default ManagePassword;
