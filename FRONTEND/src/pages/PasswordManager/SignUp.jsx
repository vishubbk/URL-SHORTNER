import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contact: '',
    password: ''
  });
const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Correct API call
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/signUp`, formData);

      toast.success(data.message);
      setFormData({
        fullname: '',
        email: '',
        contact: '',
        password: ''
      });
      // Redirect to login after 1.5 seconds
setTimeout(() => {
  navigate('/login');
}, 1500);
    } catch (error) {
      toast.error("❌ Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      {/* Top Section */}
      <div className="topSection h-[47vh] bg-blue-950 relative flex justify-center items-center rounded-bl-2xl">
        <h1 className="text-white font-bold text-2xl mb-15 ">Create your Account</h1>
      </div>

      {/* Form Section */}
      <div className="absolute top-[30vh] rounded-tl-[17%] bg-white w-full p-4 md:p-8 min-h-[66vh]">
        <p className="w-[90%] md:w-1/2 m-auto mt-5 text-center font-semibold text-base md:text-lg">
          Create an account to manage your Passwords and Daily Tasks
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[85%] m-auto gap-5">

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Full Name</label>
              <input
                className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter Full Name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Email</label>
              <input
                className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />
            </div>

            {/* contact */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">contact No.</label>
              <input
                className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter contact No."
                required
              />
            </div>

            {/* Password with Eye */}
            <div className="flex flex-col relative">
              <label className="mb-2 font-medium text-gray-700">Password</label>
              <input
                className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-900 transition"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-12 cursor-pointer text-gray-600 text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

          </div>

          {/* Submit Button */}
          <div className="grid justify-center gap-4 mt-8">
            <button
              type="submit"
              className="bg-blue-950 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-900 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create User'}
            </button>
            <p>Already have an account? <Link to="/login" className="text-blue-900 underline">Login here</Link></p>
          </div>
        </form>
        <ToastContainer />
        <Footer />
      </div>

    </div>
  );
};

export default SignUp;
