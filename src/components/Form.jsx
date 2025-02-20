import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ExpenseForm({ heading, apiUrl }) {
  const [username, setUsername] = useState("");
  const [month, setMonth] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, month, total }),
      });

      if (response.ok) {
        setUsername("");
        setMonth("");
        setTotal("");
        toast.success("Expense added successfully!", { autoClose: 3000 });
      } else {
        toast.error("Failed to add expense", { autoClose: 3000 });
      }
    } catch (error) {
      toast.error("An error occurred", { autoClose: 3000 });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-100 shadow-2xl rounded-2xl 
      p-8 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center mb-4">
        <h2 className="lg:text-2xl text-3xl  font-extrabold text-indigo-700">{heading}</h2>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Username */}
        <div>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Total Amount */}
        <div>
          <input
            type="number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            placeholder="Total Amount"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            required
          />
        </div>

        {/* Month Selection */}
        <div>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          >
            <option value="">Choose month...</option>
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m, index) => (
              <option key={index} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-lg transition"
        >
          Add Expense
        </motion.button>
      </form>

      <ToastContainer />
    </motion.div>
  );
}

export default ExpenseForm;