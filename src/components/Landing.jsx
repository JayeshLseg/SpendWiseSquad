import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Landing({ scrollToDashboard }) {
  const [showPopup, setShowPopup] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImportClick = () => {
    setShowPopup(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (monthlyIncome && selectedFile) {
      console.log('Monthly Income:', monthlyIncome);
      console.log('Selected file:', selectedFile);
      setShowPopup(false);
    } else {
      alert('Please enter your monthly income and choose a file.');
    }
  };

  return (
    <div className="relative w-full h-[100vh] sm:h-[160vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1" className="w-full h-full object-auto object-cover transform scale-x-[1]" src='https://images.unsplash.com/photo-1562619227-71c891fd2799?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Background" />
      </div>

      <div className="w-full absolute top-0">
        <div className="max-w-6xl mx-auto h-full text px-5 sm:px-10 text-white">
          <div className="para mt-54">
            {["Helping individuals and families take control of their finances with ease and confidence", "to make budgeting, saving, and spending smarter and more efficient."].map((elem, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-md masker overflow-hidden font-semibold sm:text-2xl sm:font-light"
              >
                <span className="inline-block origin-left">
                  {elem}
                </span>
              </motion.p>
            ))}
          </div>

          <div className="buttons mt-20 flex gap-4">
            <motion.button
              onClick={handleImportClick}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              Import Your Data
            </motion.button>
            <motion.button
              onClick={scrollToDashboard}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              View My Dashboard
            </motion.button>
          </div>

          <div className="headings mt-20 sm:mt-30 overflow-hidden masker flex flex-col gap-4">
            {["Empowering", "Financial", "Freedom"].map((elem, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-5xl tracking-tighter sm:text-8xl origin-left y:0"
              >
                {elem}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-green-900 text-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Import Your Data</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white text-sm font-light mb-2" htmlFor="monthlyIncome">
                  Monthly Income (Rs.)
                </label>
                <input
                  type="number"
                  id="monthlyIncome"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  className="shadow appearance-none text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-light mb-2" htmlFor="fileInput">
                  Choose File
                </label>
                <input
  type="file"
  accept=".json"
  onChange={handleFileChange}
  className="shadow appearance-none border text-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  required
/>

              </div>
              <div className="flex gap-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                  Submit
                </button>
                <button onClick={handleClosePopup} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;