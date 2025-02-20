import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { authenticateSignup, authenticateLogin } from "../service/Api.js";
import { DataContext } from "../context/DataProvider.jsx";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo1.png";

const accountInitialValues = {
    login: {
        view: "login",
        heading: "Welcome Back!",
        subHeading: "Login to manage your expenses easily with SpendWise",
    },
    signup: {
        view: "signup",
        heading: "Join SpendWise Today!",
        subHeading: "Sign up to start tracking your finances effortlessly",
    },
};

const signupInitialValues = {
    firstname: "", lastname: "", username: "", email: "", password: "", phone: "", mode: "signup",
};

const loginInitialValues = { username: "", password: "", mode: "login" };

const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    };

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);
        navigate("/dashboard");
    };

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const registerUser = async () => {
        let response = await authenticateLogin(login);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname);
        } else {
            setError(true);
        }
    };

    return (
        open && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.4 }}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
                <motion.div 
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white rounded-lg shadow-lg w-full max-w-lg flex flex-col md:flex-row"
                >
                    {/* Left Section - Info & Branding */}
                    <div className="hidden md:flex flex-col items-center justify-center w-2/5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-l-lg">
                        <h2 className="text-2xl font-semibold">{account.heading}</h2>
                        <p className="text-sm mt-2 text-center">{account.subHeading}</p>
                        <img src={Logo} alt="Logo" className="w-24 mt-6 drop-shadow-lg" />
                    </div>

                    {/* Right Section - Form */}
                    <div className="w-full md:w-3/5 p-6">
                        <h2 className="text-center text-2xl font-semibold text-gray-800 md:hidden">{account.heading}</h2>
                        <p className="text-center text-gray-600 mt-2 md:hidden">{account.subHeading}</p>

                        {account.view === "login" ? (
                            <>
                                <input type="text" placeholder="Username" name="username"
                                    onChange={onValueChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                                />
                                {error && <p className="text-red-500 text-sm mt-1">Invalid username or password</p>}
                                <input type="password" placeholder="Password" name="password"
                                    onChange={onValueChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                                />
                                <p className="text-gray-600 text-xs mt-2">Remember your username to track expenses.</p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={registerUser}
                                    className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4 hover:bg-orange-600 transition"
                                >
                                    Login
                                </motion.button>

                                <p className="text-center text-gray-600 mt-4">OR</p>

                                <motion.p
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={toggleSignup}
                                    className="text-center text-indigo-600 font-semibold cursor-pointer mt-2"
                                >
                                    New here? Create an account
                                </motion.p>
                            </>
                        ) : (
                            <>
                                {["firstname", "lastname", "username", "email", "password", "phone"].map((field, index) => (
                                    <motion.input
                                        key={index}
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                        type={field === "password" ? "password" : "text"}
                                        placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                                        name={field}
                                        onChange={onInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                ))}

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={signupUser}
                                    className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4 hover:bg-orange-600 transition"
                                >
                                    Sign Up
                                </motion.button>
                            </>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            onClick={handleClose}
                            className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg mt-4 hover:bg-gray-300 transition"
                        >
                            Close
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        )
    );
};

export default LoginDialog;
