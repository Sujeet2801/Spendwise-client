import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/Form";
import { DataContext } from "../context/DataProvider";

const Dashboard = () => {
  const navigate = useNavigate();
  const { account } = useContext(DataContext);

  const handelNavigate = () => navigate("/");
  const handelOpenResponsePage = () => navigate("/response");

  const expenses = [
    { title: "Online Expense", apiUrl: "http://localhost:5000/api/online" },
    { title: "Electricity Expense", apiUrl: "http://localhost:5000/api/consumption" },
    { title: "Investment", apiUrl: "http://localhost:5000/api/investment" },
    { title: "Travel Expense", apiUrl: "http://localhost:5000/api/travel" },
    { title: "Personal Expenses", apiUrl: "http://localhost:5000/api/personal" },
    { title: "Liability", apiUrl: "http://localhost:5000/api/consumption" },
    { title: "Salary", apiUrl: "http://localhost:5000/api/salary" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 p-6 pt-5">
      {/* Heading and Tagline */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-5xl font-extrabold text-white">Manage Your Expenses</h2>
        <p className="text-lg text-gray-200 mt-2 italic">
          "Track wisely, spend smartly, save consistently!
        </p>
      </motion.div>

      {/* Expense Sections */}
      <div className=" max-w-6xl mx-auto grid grid-cols-1 
        md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5">
          
        {expenses.map((expense, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-xl rounded-2xl p-8"
          >
            <ExpenseForm heading={expense.title} apiUrl={expense.apiUrl} username={account || "Guest"} />
          </motion.div>
        ))}
      </div>

      {/* Submit and Home Buttons */}
      <div className="flex justify-center gap-6 mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600 shadow-xl"
          onClick={handelOpenResponsePage}
        >
          Submit
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 shadow-xl"
          onClick={handelNavigate}
        >
          Home
        </motion.button>
      </div>
    </div>
  );
};

export default Dashboard;
