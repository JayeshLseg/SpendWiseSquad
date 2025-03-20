import React, { useState } from 'react';
import bg from '../assets/bg.jpg';
import bg1 from '../assets/bg1.jpg';

function Landing({ scrollToDashboard }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleImportClick = () => {
    setShowPopup(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // Handle the file upload logic here
      setShowPopup(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative w-full h-[100vh] sm:h-[160vh] ">
      <div className="picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1" className="w-full h-full object-auto object-cover transform scale-x-[1]" src='https://images.unsplash.com/photo-1562619227-71c891fd2799?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
      </div>

      <div className="w-full absolute top-0">
        <div className="max-w-6xl mx-auto h-full text px-5 sm:px-10 text-white">
          <div className="para mt-54">
            {["Helping individuals and families take control of their finances with ease and confidence", "to make budgeting, saving, and spending smarter and more efficient."].map((elem, index) => (
              <p key={index} className="text-md masker overflow-hidden font-semibold sm:text-2xl sm:font-light ">
                <span className="inline-block origin-left">
                  {elem}
                </span>
              </p>
            ))}
          </div>

          <div className="buttons mt-20 flex gap-4">
            <button onClick={handleImportClick} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105">
              Import Your Data
            </button>
            <button onClick={scrollToDashboard} className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105">
              View My Dashboard
            </button>
          </div>

          <div className="headings mt-20 sm:mt-30 overflow-hidden masker flex flex-col gap-4">
            {["Empowering", "Financial", "Freedom"].map((elem, index) => (
              <span key={index} className="text-5xl tracking-tighter sm:text-8xl origin-left y:0">
                {elem}
              </span>
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Import Your Data</h2>
            <input type="file" accept=".json" onChange={handleFileChange} className="hidden" id="fileInput" />
            <div className="flex gap-4">
              <label htmlFor="fileInput" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full cursor-pointer">
                Choose File
              </label>
              <button onClick={handleClosePopup} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;