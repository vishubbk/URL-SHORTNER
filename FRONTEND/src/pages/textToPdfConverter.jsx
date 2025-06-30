import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { FaDownload } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const TextToPDFConverter = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePDF = () => {
    if (text.trim() === '') {
      toast.error('Please enter some text first!');
      return;
    }

    setLoading(true);
    toast.loading('Generating PDF...');

    setTimeout(() => {
      const doc = new jsPDF();
      doc.text(text, 10, 10);
      doc.save('generated.pdf');

      setLoading(false);
      toast.dismiss();
      toast.success('Download Complete!');
    }, 1500);
  };

  return (
    <div className=''>

<Navbar/>
    <div className="max-h-screen  mt-20 flex items-center justify-center bg-gradient-to-br  p-4">

      <div className="bg-white bg-opacity-50 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Text to PDF Generator</h1>
        <textarea
          className="w-full max-h-[50vh] min-h-[10vh] h-48 p-4 border-2 border-blue-300 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"

          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generatePDF}
          disabled={loading}
          className={`flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full w-full text-lg font-semibold shadow-lg transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Downloading...' : (
            <>
              <FaDownload size={20} />
              Download PDF
            </>
          )}
        </motion.button>

        <Toaster />
      </div>
    </div></div>
  );
};

export default TextToPDFConverter;
