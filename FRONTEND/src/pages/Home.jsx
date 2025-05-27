import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!url) {
      toast.error('❌ Please enter a URL');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/create`, { url });
      setShortUrl(response.data.short_url);
      toast.success('✅ Short URL generated successfully!');
    } catch (error) {
      toast.error('❌ Something went wrong. Try again!');
      console.error("Error:", error.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.info('📋 Copied to clipboard!');
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-100 to-blue-200'>
      <Navbar />
      <ToastContainer />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex justify-center items-center mt-10 px-4'
      >
        <div className='text-center max-w-2xl'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800'>🔗 Best Free URL Shortener</h1>
          <p className='text-gray-600 mt-2 text-base md:text-lg'>
            Shorten, track, and analyze your links with a beautiful and smart tool.
          </p>
        </div>
      </motion.div>

      {/* Input Card */}
      <motion.form
        onSubmit={submitHandler}
        className='max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-center backdrop-blur-md px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type='text'
          placeholder='Enter your link here...'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm'
        />
        <button
          type='submit'
          className='bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition text-sm w-full sm:w-auto'
        >
          Shorten
        </button>
      </motion.form>

      {/* Short URL Display */}
      {shortUrl && (
        <div className='flex flex-col justify-center items-center mt-6 px-4 text-center'>
          <p className='text-green-700 font-medium break-all'>
            Shortened URL:
            <a href={shortUrl} target='_blank' rel='noreferrer' className='text-blue-600 underline ml-2'>
              {shortUrl}
            </a>
          </p>
          <button
            onClick={handleCopy}
            className='mt-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm'
          >
            Copy
          </button>
        </div>
      )}

      {/* Banner Section */}
      <div className='flex justify-center items-center mt-10 px-4'>
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl flex flex-col items-center h-auto md:h-40 w-full md:w-[85vw] text-center px-6 py-6 shadow-lg'>
          <h3 className='text-lg md:text-xl font-bold'>Shorten, brand, and convert more links fast</h3>
          <p className='text-sm md:text-base mt-2 mb-4'>
            Create an account to shorten links, generate QR codes, and more!
          </p>
          <button className='bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 font-semibold text-sm md:text-base'>
            Start for Free
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className='w-11/12 md:w-3/5 mx-auto mt-10 space-y-6 text-gray-800 text-sm md:text-base px-4'>
        <div>
          <h2 className='text-xl md:text-2xl font-semibold mb-2'>A fast, easy, and free link shortener</h2>
          <p>
            Use this free URL shortener to change long, ugly links into memorable and trackable short URLs.
            Better than Bitly, Tinyurl, and others.
          </p>
        </div>
        <div>
          <h2 className='text-xl md:text-2xl font-semibold mb-2'>Shorten links, then track them</h2>
          <p>
            Free short links for social platforms, websites, SMS, and more. Turn links into QR codes with our{' '}
            <a href='/' className='text-blue-600 underline'>QR code generator</a>.
          </p>
        </div>
      </div>

      {/* Important Links Section */}
      <div className="w-full bg-white py-10 mt-16 shadow-inner px-4">
        <div className="w-full md:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h4 className="text-lg font-bold mb-2">Popular Tools</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Free URL Shortener</a></li>
              <li><a href="/" className="hover:underline">QR Code Generator</a></li>
              <li><a href="/" className="hover:underline">Link-in-Bio Tool</a></li>
              <li><a href="/" className="hover:underline">Track URL Clicks</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Docs</a></li>
              <li><a href="/" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/" className="hover:underline">API Access</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Contact Us</a></li>
              <li><a href="/" className="hover:underline">FAQs</a></li>
              <li><a href="/" className="hover:underline">Report a Bug</a></li>
              <li><a href="/" className="hover:underline">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-10 px-4">
        <div className="w-full md:w-4/5 mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <div>
            <h4 className="text-xl font-semibold">Shortify</h4>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram--v1.png" alt="Instagram" />
            </a>
            <a href="mailto:vishubbkup@gmail.com">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png" alt="Email" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
