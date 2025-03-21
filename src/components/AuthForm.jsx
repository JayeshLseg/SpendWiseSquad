import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signIn, signUp } from '../firebase/firebase'; // Adjusted path
import { easeIn } from 'framer-motion';


const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      navigate('/landing'); // Redirect to landing page after successful authentication
    } catch (error) {
      console.error(`Error ${isSignUp ? 'signing up' : 'signing in'}:`, error);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="relative font-light w-full h-[100vh] sm:h-[160vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img className="w-full h-full object-cover" src='https://images.unsplash.com/photo-1562619227-71c891fd2799?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Background" />
      </div>

      <div className="absolute top-0 left-0 m-8 p-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl"
        >
          Welcome to <span className='text-green-400'>SpendWise</span>
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-2xl mb-10'
        >
          Track, save, and spend smarter.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-light mt-10"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'} to get started
        </motion.h2>
      </div>

      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-50 left-0 m-8 p-8 bg-opacity-50 rounded-lg shadow-lg text-white"
      >
        <form onSubmit={handleAuth}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-2/3 p-2 mb-4 text-black rounded"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-2/3 p-2 mb-4 text-black rounded"
          />
          <button type="submit" className="w-2/3 bg-green-500 hover:bg-green-900 text-white font-light py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <button onClick={toggleAuthMode} className="w-2/3 mt-4 bg-green-200 hover:bg-green-900 text-green-900 hover:text-white font-light py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105">
          {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
        </button>
      </motion.div>
    </div>
  );
};

export default AuthForm;