import React from 'react';
import { motion } from 'framer-motion';

function InvestmentSuggestions() {
  const videos = [
    {
      title: "Investment Basics",
      url: "https://youtu.be/qIw-yFC-HNU",
      thumbnail: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZXN0bWVudHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Saving Strategies",
      url: "https://youtu.be/0nWDufd0sLY",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Stock Market 101",
      url: "https://youtu.be/A7fZp9dwELo",
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Retirement Planning",
      url: "https://youtu.be/JxdUWsudi6g",
      thumbnail: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="relative w-full h-[100vh] sm:h-[220vh]">
      <div className="w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1" className="w-full h-full object-auto object-cover transform scale-x-[1]" src='https://plus.unsplash.com/premium_photo-1681589453442-3b383a67fcfb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Background" />
      </div>

      <div className="w-full absolute top-0">
        <div className="max-w-6xl mx-auto h-full text px-5 sm:px-10 text-black">
          <div className="para mt-54">
            {["Investing is a crucial part of building wealth and securing your financial future.", "Here are some resources to help you get started with investing and saving wisely."].map((elem, index) => (
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

          <div className="headings mt-20 sm:mt-30 overflow-hidden masker flex flex-col gap-4">
            {["Learn", "Invest", "Grow"].map((elem, index) => (
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

          <div className="videos mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="video-box bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-white text-xl font-semibold">{video.title}</h3>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentSuggestions;