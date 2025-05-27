import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const QrCode = () => {
  const [inputText, setInputText] = useState('');
  const [qrText, setQrText] = useState('');
  const qrRef = useRef();

  const generateQR = () => {
    if (!inputText.trim()) {
      toast.error('❌ Please enter some text or URL.');
      return;
    }
    setQrText(inputText);
    toast.success('✅ QR Code generated!');
  };

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    toast.success('✅ QR Code downloaded!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inputText);
    toast.info('📋 Text copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-10">
        <ToastContainer />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🔍 QR Code Generator</h1>
        <p className="text-gray-600 text-center max-w-xl mb-6">
          Enter any text or URL to generate a QR code.
        </p>

        <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text or URL"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={generateQR}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Generate QR
          </button>
        </div>

        {qrText && (
          <>
            <div
              ref={qrRef}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
            >
              <QRCodeCanvas
                value={qrText}
                size={220}
                bgColor="#FFFFFF"
                fgColor="#000000"
                includeMargin={true}
              />
              {/* Conditionally show link if input is a URL */}
              {qrText.startsWith('http://') || qrText.startsWith('https://') ? (
                <a
                  href={qrText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-700 underline hover:text-blue-900 text-sm break-all text-center"
                >
                  🔗 Open Link
                </a>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <button
                onClick={downloadQR}
                className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
              >
                ⬇️ Download QR
              </button>
              <button
                onClick={handleCopy}
                className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
              >
                📋 Copy Text
              </button>
            </div>
          </>
        )}
      </div>
{/* QR Code Info Section */}
<div className="w-11/12 md:w-3/5 mx-auto mt-10 space-y-6 text-gray-800 text-sm md:text-base px-4">
  <div>
    <h2 className="text-xl md:text-2xl font-semibold mb-2">Generate Free QR Codes Instantly</h2>
    <p>
      Turn your links into scannable QR codes in seconds. Perfect for marketing, social media,
      product packaging, and more. No sign-up required.
    </p>
  </div>
</div>

{/* Protection Section */}
<div className="w-11/12 md:w-3/5 mx-auto mt-10 space-y-6 text-gray-800 text-sm md:text-base px-4">
  <div>
    <h2 className="text-xl md:text-2xl font-semibold mb-2">Secure and Reliable QR Codes</h2>
    <p>
      All QR codes generated on our platform are secure and designed to protect your information.
      We never store sensitive data, and every QR code is checked to ensure it leads to a safe, trustworthy link.
      You can confidently share QR codes knowing they're backed by advanced security and privacy measures.
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

      <Footer />
    </div>
  );
};

export default QrCode;
