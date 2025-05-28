import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate success without sending to a server
    setName('');
    setEmail('');
    setMessage('');
    toast.success('Message "sent" successfully (not stored in DB)!', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <div className='relative min-h-screen flex justify-center items-center bg-gradient-to-br 
    from-indigo-500 via-purple-500 to-pink-500 px-4 pt-20 pb-5'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='bg-white shadow-xl rounded-lg p-8 max-w-lg w-full relative z-10'
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-3xl font-semibold text-center bg-blue-600 text-white py-3 rounded-md'
        >
          Message Us
        </motion.h2>

        <form onSubmit={handleSubmit} className='mt-6'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='mb-4'
          >
            <label className='block text-gray-700 font-medium'>Full Name</label>
            <input
              type='text'
              className='w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:ring-2 focus:ring-blue-500 focus:outline-none'
              placeholder='Type your name here'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='mb-4'
          >
            <label className='block text-gray-700 font-medium'>Email</label>
            <input
              type='email'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
              focus:ring-blue-500 focus:outline-none'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mb-4'
          >
            <label className='block text-gray-700 font-medium'>Message</label>
            <textarea
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
              focus:ring-blue-500 focus:outline-none resize-none'
              rows='4'
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </motion.div>

          <motion.button
            type='submit'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className='w-full bg-blue-600 text-white py-2 rounded-md text-lg font-medium 
            hover:bg-blue-700 transition-colors shadow-lg'
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
