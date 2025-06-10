import { motion } from 'framer-motion';
import Logo from '../../public/images/logo1.png';
import { footerData } from '../utility/data.js';

function Footer() {
  return (
    <footer className='relative overflow-hidden text-white py-6'>
      <div
        className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 
      opacity-95'
      ></div>

      <div
        className='relative z-10 flex flex-row justify-around items-center max-w-6xl mx-auto 
      px-6 gap-6 flex-wrap'
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Logo} alt='Your Logo' className='w-24 h-auto drop-shadow-xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='flex gap-6 text-2xl'
        >
          {footerData.map(({ icon: Icon, url, color }, index) => (
            <motion.a
              key={index}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className={`transition-colors ${color}`}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='text-gray-300 text-sm whitespace-nowrap'
        >
          © {new Date().getFullYear()} SpendWise. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
