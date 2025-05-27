import { motion } from 'framer-motion';
import Adphoto from '../../src/images/Ad.png';
import Book from '../../src/images/book.png';
import { articlesData } from '../utility/data';

function Home() {

  return (
    <div className='relative bg-gradient-to-br from-[#4b0082] via-[#800080] to-[#ff1493]
    min-h-screen pt-16 px-6 md:px-12'>
      {/* Ad Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='flex justify-center pt-10'
      >
        <img
          src={Adphoto}
          alt='Ad'
          className='w-full max-w-[1300px] h-auto md:h-[400px] rounded-2xl shadow-2xl'
        />
      </motion.div>

      {/* Section Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='text-center text-white py-12'
      >
        <h2 className='text-3xl md:text-4xl font-extrabold'>The Tools for Your Goals</h2>
        <div className='mt-1 md:mt-4 text-lg leading-relaxed hidden md:block'>
          <p>Spend less to save more, invest in your dreams, and secure a brighter future.</p>
          <p>Your financial discipline sets a powerful example for others.</p>
        </div>
        <div className='mt-4 leading-relaxed md:hidden'>
          <p>
            Spend less to save more, invest in your dreams, and secure a brighter future, your
            financial discipline sets a powerful example for others.
          </p>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16'>
        {['Learn. Track. Improve.', 'Read Articles.', 'Stay Motivated.'].map((title, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className='p-8 rounded-2xl shadow-lg text-center bg-white hover:bg-gray-200 
            transform transition duration-300'
          >
            <img src={Book} alt='Book' className='w-20 mx-auto mb-4' />
            <h3 className='text-xl font-semibold text-indigo-600'>{title}</h3>
            <p className='mt-2 text-gray-700'>
              Track your expenses with us and stay motivated on your financial journey.
            </p>
          </motion.div>
        ))}
      </div>

      <hr className='my-12 border-gray-400' />

      {/* Article Section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='text-center py-0 text-white'
      >
        <h2 className='text-4xl font-extrabold'>Articles & Inspiration</h2>
        <p className='mt-4 text-lg'>
          "Track expenses efficiently with our articles, gain financial control, and make smarter
          money decisions effortlessly."
        </p>
      </motion.div>

      {/* Animated Articles with Slide-In */}
      {articlesData.map(({ title, desc, image, buttonAction, reverse }, index) => (
        <motion.div
          key={index}
          initial={{ x: reverse ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
          items-center gap-8 md:gap-16 px-8 my-10`}
        >
          <div className='md:w-7/12'>
            <h2 className='text-3xl font-bold text-white'>{title}</h2>
            <p className='mt-4 text-lg text-gray-200 leading-relaxed'>{desc}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-blue-600 text-white py-3 px-6 rounded-xl mt-6 hover:bg-blue-700 
              transition shadow-lg'
              onClick={buttonAction}
            >
              Read here
            </motion.button>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='md:w-5/12'
          >
            <img
              src={image}
              alt={title}
              className='w-full h-80 object-cover rounded-xl shadow-2xl'
            />
          </motion.div>
        </motion.div>
      ))}

      <hr className='mt-12 border-gray-400' />
    </div>
  );
}

export default Home;
