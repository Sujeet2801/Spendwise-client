import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ConsumptionChart from "../components/ConsumptionChart";
export default function Response() {
  const [username, setUsername] = useState("");
  const [showBarCharts, setShowBarCharts] = useState(false);
  const navigate = useNavigate();

  const handelNavigate = () => navigate("/update");
  const handelOpenResponsePage = () => navigate("/dashboard");
  const toggleBarCharts = () => setShowBarCharts(!showBarCharts);

  const deployURL = "http://localhost:5000"

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 py-12 px-6 pt-24">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center text-white mb-10"
      >
        <h3 className="text-3xl font-bold">Enter Your Username to Show Expenses</h3>
      </motion.div>

      {/* Input Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 w-80 rounded-lg border border-gray-300 focus:ring-2
           focus:ring-indigo-400 outline-none shadow-md"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={toggleBarCharts}
          className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg 
          font-semibold hover:bg-yellow-500 transition shadow-md"
        >
          {showBarCharts ? "Hide Charts" : "Show Charts"}
        </motion.button>
      </motion.div>

      {/* Expense Charts */}
      {showBarCharts && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 space-y-8 max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          {[
            { heading: "Electricity Expense Chart", apiUrl: `${deployURL}/api/consumption/${username}`, id: "chart1" },
            { heading: "Online Expense Chart", apiUrl: `${deployURL}/api/online/${username}`, id: "chart2" },
            { heading: "Investment Chart", apiUrl: `${deployURL}/api/investment/${username}`, id: "chart3" },
            { heading: "Salary Chart", apiUrl: `${deployURL}/api/salary/${username}`, id: "chart4" },
            { heading: "Travel Expense Chart", apiUrl: `${deployURL}/api/travel/${username}`, id: "chart5" },
            { heading: "Personal Expenses Chart", apiUrl: `${deployURL}/api/personal/${username}`, id: "chart6" }
          ].map(({ heading, apiUrl, id }) => (
            <ConsumptionChart key={id} heading={heading} apiUrl={apiUrl} id={id} />
          ))}
        </motion.div>
      )}

      {/* Buttons Section */}
      <div className="flex justify-center gap-6 mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={handelOpenResponsePage}
          className="bg-green-500 text-white px-6 py-3 rounded-lg 
          font-semibold hover:bg-green-600 transition shadow-md"
        >
          Add Expense
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={handelNavigate}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg 
          font-semibold hover:bg-blue-600 transition shadow-md"
        >
          Update Expense
        </motion.button>
      </div>
    </div>
  );
}
