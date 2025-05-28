import { motion } from 'framer-motion';
import { contact } from '../utility/data.js';

function About() {
  return (
    <div
      className='relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
      min-h-screen text-center pt-16 pb-5'
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className='max-w-3xl mx-auto text-2xl text-gray-100 font-semibold mt-6'
      >
        "Unlock Financial Clarity: Your Money, Your Way. Discover, Track, and Take Control of Your
        Expenses with Ease."
      </motion.p>

      {[
        {
          title: 'About Spendwise',
          points: [
            'Track your expenses effortlessly with MyExpenseTracker.',
            'Categorize and analyze your spending habits.',
            'Gain control of your finances with ease.',
          ],
          delay: 0.3,
        },
        {
          title: 'Key Features',
          points: [
            'User-friendly interface for a smooth experience.',
            'Real-time updates for transactions and analytics.',
            'Customizable budgeting tools to suit your needs.',
            'Strong data encryption to keep your information secure.',
          ],
          delay: 0.5,
        },
      ].map(({ title, points, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.8 }}
          className='max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg'
        >
          <h2 className='text-3xl font-semibold bg-blue-600 text-white py-3 px-6 inline-block rounded-md'>
            {title}
          </h2>
          <ul className='list-disc list-inside text-lg text-gray-700 mt-4 space-y-2'>
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className='max-w-2xl mx-auto mt-10 py-6 bg-white shadow-lg rounded-lg'
      >
        <h2 className='text-3xl font-semibold bg-blue-600 text-white py-3 px-6 inline-block rounded-md'>
          Contact
        </h2>

        <div className='mt-6 space-y-4'>
          {contact.map(({ icon: Icon, text, url }, index) => (
            <motion.a
              key={index}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              className='flex items-center justify-center space-x-3 text-lg transform transition 
              duration-300 text-gray-800 hover:text-blue-600'
            >
              <Icon className='text-blue-600' />
              <span>{text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
