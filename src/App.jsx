import React, { useRef } from 'react';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import PlayReel from "./components/PlayReel";
import Work from "./components/Dashboard";
import Spread from "./components/Spread";
import TransactionHistory from './components/BudgetRecommendations';

function App() {
  const scrollRef = useRef(null);
  const dashboardRef = useRef(null);
  const budgetRef = useRef(null);
  const aboutUsRef = useRef(null);

  const scrollToDashboard = () => {
    dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBudget = () => {
    budgetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={scrollRef} className="w-full bg-zinc-800">
      <Navbar scrollToBudget={scrollToBudget} scrollToAboutUs={scrollToAboutUs} />
      <Landing scrollToDashboard={scrollToDashboard} />
      <div ref={dashboardRef}>
        <Work />
      </div>
      <div ref={budgetRef}>
        <TransactionHistory />
      </div>
      <div ref={aboutUsRef}>
        <Spread />
      </div>
    </div>
  );
}

export default App;