import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Logo from "../../src/images/logo1.png";

function Footer() {
  return (
    <footer className="relative overflow-hidden text-white pt-10 pb-8">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-95"></div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto px-6">
        {/* Animated Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="footer-logo"
        >
          <img src={Logo} alt="Your Logo" className="w-24 h-auto drop-shadow-xl" />
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="flex gap-6 text-2xl mt-6"
        >
          {[
            { icon: FaFacebook, url: "https://www.facebook.com", color: "hover:text-blue-400" },
            { icon: FaTwitter, url: "https://twitter.com", color: "hover:text-blue-300" },
            { icon: FaLinkedin, url: "https://www.linkedin.com", color: "hover:text-blue-500" },
            { icon: FaInstagram, url: "https://www.instagram.com", color: "hover:text-pink-400" },
            { icon: FaEnvelope, url: "mailto:contact@yourdomain.com", color: "hover:text-gray-300" }
          ].map(({ icon: Icon, url, color }, index) => (
            <motion.a 
              key={index} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className={`transition-colors ${color}`}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright Text */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-300 text-sm mt-4"
        >
          © {new Date().getFullYear()} SpendWise. All rights reserved.
        </motion.p>
      </div>

      
    </footer>
  );
}

export default Footer;
