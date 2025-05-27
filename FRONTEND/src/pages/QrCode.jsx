import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex flex-col items-center px-4 py-10">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🔲 QR Code Generator</h1>
      <p className="text-gray-600 text-center max-w-xl mb-6">
        Enter any text or URL to generate a QR code.
      </p>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text or URL"
        className="w-full max-w-md px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
      />

      <button
        onClick={generateQR}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition mb-5"
      >
        Generate QR
      </button>

      {qrText && (
        <>
          <div ref={qrRef} className="bg-white p-6 rounded-xl shadow-md">
            <QRCodeCanvas value={qrText} size={220} bgColor="#FFFFFF" fgColor="#000000" includeMargin={true} />
          </div>

          <div className="mt-4 flex gap-4 flex-wrap justify-center">
            <button
              onClick={downloadQR}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Download QR
            </button>
            <button
              onClick={handleCopy}
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Copy Text
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QrCode;
