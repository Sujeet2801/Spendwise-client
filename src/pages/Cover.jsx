import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Cover() {
  const { user } = useAuth();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const navigate = useNavigate();

  const quotes = [
    'A penny saved is a penny earned.',
    'Manage your money, or it will manage you.',
    'Saving is a habit, not a task.',
    'Every rupee counts. Spend wisely!',
    'Track today, secure tomorrow.',
  ];

  useEffect(() => {

    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/cover');
    }
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='flex justify-center items-center min-h-screen bg-gradient-to-br 
      from-indigo-600 via-purple-600 to-pink-500 px-4 py-10 mt-10'
    >
      {user ? (
        navigate('/dashboard')
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='text-center bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-2xl'
        >
          {/* App Title */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='text-4xl md:text-5xl font-extrabold text-blue-700'
          >
            💸 Spendwise
          </motion.h1>

          <p className='text-lg md:text-xl text-gray-700 mt-3 italic'>Track. Analyze. Optimize.</p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='my-8 px-4 py-5 bg-indigo-100 rounded-xl shadow-inner text-indigo-700'
          >
            <div className='flex justify-center items-center gap-3 text-xl font-semibold italic'>
              <FaQuoteLeft className='text-2xl text-indigo-500' />
              <span>{quotes[quoteIndex]}</span>
              <FaQuoteRight className='text-2xl text-indigo-500' />
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className='text-left text-gray-800 text-lg space-y-3 mb-8'
          >
            <li>✔️ Real-time expense tracking</li>
            <li>✔️ Easy-to-use interface</li>
            <li>✔️ Insightful charts and reports</li>
            <li>✔️ Secure login and data</li>
          </motion.ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className='bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold 
            hover:bg-blue-700 transition-all duration-300 shadow-lg'
            onClick={() => navigate('/login')}
          >
            Get Started
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
