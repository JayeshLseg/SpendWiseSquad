import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import AuthForm from './components/Authform';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Spread from "./components/Spread";
import TransactionHistory from './components/BudgetRecommendations';
import InvestmentSuggestions from './components/InvestmentSuggestions';

function App() {
  const scrollRef = useRef(null);
  const dashboardRef = useRef(null);
  const budgetRef = useRef(null);
  const aboutUsRef = useRef(null);
  const investmentRef = useRef(null);

  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const scrollToDashboard = () => {
    dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBudget = () => {
    budgetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInvestment = () => {
    investmentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route
            path="/landing"
            element={
              <ProtectedRoute>
                <div ref={scrollRef} className="w-full bg-zinc-800">
                  <Navbar scrollToBudget={scrollToBudget} scrollToAboutUs={scrollToAboutUs} scrollToInvestment={scrollToInvestment} />
                  <Landing
                    setMonthlyIncome={setMonthlyIncome}
                    setSelectedFile={setSelectedFile}
                    scrollToDashboard={scrollToDashboard}
                  />
                  <div ref={dashboardRef}>
                    <Dashboard monthlyIncome={monthlyIncome} />
                  </div>
                  <div ref={budgetRef}>
                    <TransactionHistory />
                  </div>
                  <div ref={aboutUsRef}>
                    <Spread />
                  </div>
                  <div ref={investmentRef}>
                    <InvestmentSuggestions />
                  </div>
                  <div>
                    <Spread/>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;