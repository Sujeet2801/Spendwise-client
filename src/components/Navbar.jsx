import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = [
    { id: 1, name: 'Home', icon: <FaHome />, path: '/' },
    { id: 2, name: 'Dashboard', icon: <FaFolderOpen />, path: '/cover' },
    { id: 3, name: 'About', icon: <FaUser />, path: '/about' },
    { id: 4, name: 'Contact', icon: <FaEnvelopeOpen />, path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 
              via-purple-500 to-pink-500 shadow-lg z-50'
      >
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
          {/* Brand Logo */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='text-2xl font-semibold text-white cursor-pointer'
            onClick={() => navigate('/')}
          >
            Spendwise
          </motion.h1>

          {/* Desktop Menu */}
          <ul className='hidden md:flex space-x-6'>
            {links.map(({ name, icon, path }) => (
              <motion.li key={name} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-medium transition-colors 
                    ${isActive ? 'text-yellow-400 font-semibold' : 'text-white hover:text-yellow-300'}`
                  }
                >
                  {icon}
                  {name}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Desktop Login/Logout Button */}
          <div className='hidden md:block'>
            {user ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className='bg-red-700 text-white px-4 py-1 rounded hover:bg-red-800'
                onClick={handleLogout}
              >
                Logout
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className='bg-yellow-400 text-gray-900 px-4 py-1 rounded hover:bg-yellow-500'
                onClick={() => navigate('/login')}
              >
                Login
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className='md:hidden text-white text-2xl' onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className='fixed top-0 right-0 w-3/4 h-screen bg-gray-900 bg-opacity-90
            p-6 flex flex-col space-y-6 items-start z-50'
          >
            <button className='text-white text-2xl self-end' onClick={() => setShowMenu(false)}>
              <FaTimes />
            </button>

            {links.map(({ name, icon, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg font-medium transition-colors 
                  ${isActive ? 'text-yellow-400 font-semibold' : 'text-white hover:text-yellow-300'}`
                }
              >
                {icon} {name}
              </NavLink>
            ))}

            {/* Mobile Login/Logout Button */}
            {user ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className='bg-red-600 text-white px-4 py-1 rounded 
                hover:bg-red-700 transition w-full text-center'
                onClick={() => {
                  handleLogout();
                  setShowMenu(false);
                }}
              >
                Logout
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className='bg-yellow-400 text-gray-900 px-4 py-1 rounded 
                hover:bg-yellow-500 transition w-full text-center'
                onClick={() => {
                  navigate('/login');
                  setShowMenu(false);
                }}
              >
                Login
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
