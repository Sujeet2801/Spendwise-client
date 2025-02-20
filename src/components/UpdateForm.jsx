import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function UpdateForm({ heading, apiUrl }) {
    const [username, setUsername] = useState("");
    const [month, setMonth] = useState("");
    const [total, setTotal] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(apiUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, month, total }),
            });

            if (response.ok) {
                setUsername("");
                setMonth("");
                setTotal("");
                toast.success("Expense updated successfully!", { position: "top-right", autoClose: 3000 });
            } else {
                toast.error("Failed to update expense!", { position: "top-right", autoClose: 3000 });
            }
        } catch (error) {
            toast.error("An error occurred!", { position: "top-right", autoClose: 3000 });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto"
        >

            <div className="flex flex-col items-center mb-4">
                <h2 className="lg:text-2xl text-3xl  font-extrabold text-indigo-700">{heading}</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="">Choose month...</option>
                    {[
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ].map((m, i) => (
                        <option key={i} value={m}>{m}</option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Total Amount"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 
          focus:ring-blue-500 outline-none"
                />

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md 
          font-semibold hover:bg-blue-600 transition"
                    type="submit"
                >
                    Update Expense
                </motion.button>
            </form>
        </motion.div>
    );
}
