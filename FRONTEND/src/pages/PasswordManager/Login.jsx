import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
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

    if (!formData.email || !formData.password) {
      toast.error("❌ Please enter both email and password");
      return;
    }

    toast.info("🔄 Logging in...", { autoClose: 1000 });
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/login`,
        {
          email: formData.email,
          password: formData.password
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("✅ Login Successful!", { autoClose: 2000 });

        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          navigate('/'); // Redirect to homepage or dashboard
        }, 2000);
      }
    } catch (error) {
      setLoading(false);

      if (error.response) {
        toast.error(`❌ ${error.response.data.message || "Login failed!"}`);
      } else if (error.request) {
        toast.error("❌ Server not responding. Check your internet connection.");
      } else {
        toast.error("❌ Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-[95vh] overflow-hidden'>
      {/* Top Section */}
      <div className="topSection h-[47vh] bg-blue-950 relative flex justify-center items-center rounded-bl-2xl">
        <h1 className="text-white font-bold text-2xl mb-9">Welcome Back</h1>
      </div>

      {/* Form Section */}
      <div className="absolute top-[25vh] rounded-tl-[17%] bg-white w-full p-4 md:p-8 min-h-[66vh]">
        <p className="w-[90%] md:w-1/2 m-auto mt-5 text-center font-semibold text-base md:text-lg">
          Login to manage your Passwords and Daily Tasks
        </p>

        <form onSubmit={handleSubmit} className="mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[85%] m-auto gap-5">
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
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-950 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-900 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </div>
        </form>

        {/* Link to Sign Up */}
        <div className="flex justify-center mt-4">
          <p>Don't have an Account? <Link to="/signUp" className='text-blue-900 underline'>SignUp here</Link></p>
        </div>

        <ToastContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Login;
