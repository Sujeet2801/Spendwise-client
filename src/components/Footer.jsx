import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Logo from '../../src/images/logo1.png';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="footer-logo">
          <img src={Logo} alt="Your Logo" className="w-24 h-auto" />
        </div>

        {/* Social Media Links */}
        <div className="social-media flex gap-6 text-2xl">
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon hover:text-blue-700 transition-colors" />
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon hover:text-pink-500 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
