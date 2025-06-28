import React, { useState } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const ManagePassword = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false) // New State
  const [passwordList, setPasswordList] = useState([
    { id: 1, name: 'Google', password: 'pass1234' },
    { id: 2, name: 'Facebook', password: 'fb5678' },
    { id: 3, name: 'Instagram', password: 'insta91011' },
  ]);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password) {
      alert("Both fields are required!");
      return;
    }

    const newPassword = {
      id: Date.now(),
      name: name,
      password: password
    };

    setPasswordList([newPassword, ...passwordList]);
    setName("");
    setPassword("");
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='w-full overflow-x-hidden min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-blue-200'>
      {/* Navbar */}
      <div className="navbar w-[100vw]">
        <Navbar />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center mt-4 text-center px-4">
        <h1 className='text-2xl font-semibold mb-4'>
          Best Free Password Manager
        </h1>
        <p className='mb-8 max-w-xl'>
          Keep your accounts secure, and your digital life stress-free with the best free password manager available today!
        </p>

        {/* Input Section */}
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg'>
          <div className='flex flex-row space-x-4 w-[40vw] items-center'>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Name'
              className='w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm'
            />

            {/* Password Field with Eye Icon */}
            <div className='relative w-1/2'>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
                className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm'
              />
              <span
                onClick={togglePasswordVisibility}
                className='absolute right-3 top-3 cursor-pointer text-gray-600'
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type='submit'
            className='bg-blue-900 mt-7 w-1/2 cursor-pointer rounded-2xl hover:bg-blue-600 p-2 text-lg text-white font-semibold'
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>

        {/* Password List */}
        <div className="lists mt-8 bg-white p-3 rounded-lg w-[40vw] text-left">
          <h2 className='text-xl font-semibold mb-4'>Your Password List</h2>
          <ul className='space-y-2'>
            {passwordList.map((item) => (
              <li key={item.id} className='flex justify-between bg-gray-100 p-3 rounded'>
                <span className='font-medium'>{item.name}</span>
                <span className='text-gray-600'>{item.password}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ManagePassword
