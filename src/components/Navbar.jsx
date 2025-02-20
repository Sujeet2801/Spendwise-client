import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import LoginDialog from "../pages/LoginDialog";
import { DataContext } from "../context/DataProvider";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const links = [
    { id: 1, name: "Home", icon: <FaHome />, path: "/" },
    { id: 2, name: "Dashboard", icon: <FaFolderOpen />, path: "/dashboard" },
    { id: 3, name: "About Us", icon: <FaUser />, path: "about" },
    { id: 4, name: "Contact", icon: <FaEnvelopeOpen />, path: "/contact" },
  ];

  const handleLoginClick = () => {
    if (account) {
      setUserMenuOpen(!userMenuOpen);
    } else {
      setOpen(true);
    }
  };

  const handleLogout = () => {
    setAccount(null);
    setUserMenuOpen(false);
    navigate("/");
  };

  const handleLoginSuccess = (userData) => {
    setOpen(false);
    setAccount(userData.firstname);
    navigate("/dashboard");
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-white"
          >
            Spendwise
          </motion.h1>

          <ul className="hidden md:flex space-x-6">
            {links.map(({ name, icon, path }) => (
              <motion.li key={name} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-medium transition-colors ${isActive ? "text-yellow-400 font-semibold" : "text-white hover:text-yellow-300"
                    }`
                  }
                >
                  {icon}
                  {name}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block bg-yellow-400 text-gray-900 px-4 py-1 
              rounded hover:bg-yellow-500 transition"
              onClick={handleLoginClick}
            >
              {account ? account : "Login"}
            </motion.button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40">
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 
                w-full text-left" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.nav>

      <LoginDialog open={open} setOpen={setOpen} onLoginSuccess={handleLoginSuccess} />
    </>
  );
};

export default Navbar;