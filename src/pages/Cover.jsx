import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { DataContext } from "../context/DataProvider";
import LoginDialog from "./LoginDialog";
import Dashboard from "./Dashboard";

export default function Cover() {
  const [open, setOpen] = useState(false);
  const { account } = useContext(DataContext);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "A penny saved is a penny earned.",
    "Manage your money, or it will manage you.",
    "Saving is a habit, not a task.",
    "Every rupee counts. Spend wisely!",
    "Track today, secure tomorrow.",
  ];

  // Auto-change quotes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openDialog = () => setOpen(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br 
    from-blue-500 to-purple-600 pt-20 pb-5">
      {account ? (
        <Dashboard />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
        >
          {/* Header with Animation */}
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-blue-700 text-white p-6 rounded-t-2xl shadow-md"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
              Expense Tracker
            </h1>
            <p className="text-lg md:text-xl mt-2 italic">Track Your Expenses Effortlessly</p>
          </motion.header>

          {/* Animated Quote Section */}
          <motion.section
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="my-6 flex items-center justify-center text-blue-700"
          >
            <FaQuoteLeft className="text-2xl mr-2" />
            <blockquote className="text-lg font-semibold italic text-center max-w-xs">
              {quotes[quoteIndex]}
            </blockquote>
            <FaQuoteRight className="text-2xl ml-2" />
          </motion.section>

          {/* Facts Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="my-6"
          >
            <h2 className="text-2xl font-bold text-blue-700">Why Choose Us?</h2>
            <ul className="mt-4 text-gray-700 space-y-3 text-lg">
              <motion.li whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                ✅ Real-time expense tracking
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                ✅ Easy-to-use interface
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                ✅ Detailed insights & reports
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                ✅ Secure & private transactions
              </motion.li>
            </ul>
          </motion.section>

          <p className="text-gray-700 mt-6">Login to start tracking your expenses</p>

          {/* Animated Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg 
            font-semibold mt-4 hover:bg-blue-700 transition shadow-lg"
            onClick={openDialog}
          >
            Login
          </motion.button>
        </motion.div>
      )}

      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  );
}
