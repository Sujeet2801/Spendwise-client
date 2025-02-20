import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import UpdateForm from "../components/UpdateForm";

const expenses = [
  { title: "Online Expense", apiUrl: "/api/online" },
  { title: "Electricity Expense", apiUrl: "/api/consumption" },
  { title: "Investment", apiUrl: "/api/investment" },
  { title: "Travel Expense", apiUrl: "/api/travel" },
  { title: "Personal Expenses", apiUrl: "/api/personal" },
  { title: "Liability", apiUrl: "/api/consumption" },
  { title: "Salary", apiUrl: "/api/salary" },
];

export default function UpdatePage() {
  const navigate = useNavigate();
  const handleNavigateResponse = () => navigate("/response");

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 p-6 pt-5 mt-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-5xl font-extrabold text-white">Update Your Expenses</h2>
        <p className="text-lg text-gray-200 mt-2 italic">
          "Effortless finance tracking: Streamline your spending with ease."
        </p>
      </motion.div>

      {/* Expense Update Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5">

        {expenses.map((expense, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-xl rounded-2xl p-8"
          >
            <UpdateForm heading={expense.title} apiUrl={expense.apiUrl} />
          </motion.div>
        ))}
      </div>

      {/* Navigate to Response Page Button */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={handleNavigateResponse}
          className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold 
          text-lg hover:bg-green-600 shadow-xl"
        >
          View Updated Expenses
        </motion.button>
      </div>
    </div>
  );
}
