import React from 'react';
import { LuMenu } from "react-icons/lu";

function Navbar({ scrollToBudget, scrollToAboutUs }) {
  const handleScrollToWork = () => {
    const workSection = document.getElementById('dashboard');
    workSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-10xl mx-auto px-5 py-5 sm:px-10 sm:py-10 flex items-center justify-between text-green-200">
        <div className="logo">
          <span className="text-2xl font-bold">Spend</span>
          <span className="text-2xl font-bold">Wise</span>
        </div>

        <span className="sm:hidden">
          <LuMenu />
        </span>
        <div className="links hidden sm:flex gap-10">
          {["Dashboard", "Budget Recommendations", "About us"].map((elem, index) => (
            <a
              key={index}
              className="text-sm font-semibold cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-green-700 hover:text-white rounded-full px-3 py-1"
              onClick={
                elem === "Dashboard"
                  ? handleScrollToWork
                  : elem === "Budget Recommendations"
                  ? scrollToBudget
                  : elem === "About us"
                  ? scrollToAboutUs
                  : null
              }
            >
              {elem}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;