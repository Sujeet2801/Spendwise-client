import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Adphoto from '../../public/images/Ad.png';
import { useAuth } from '../hooks/useAuth';
import Book from '../../public/images/book.png';
import { articlesData } from '../utility/data';
import { FaLock, FaBolt, FaChartPie } from 'react-icons/fa';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLoginClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div
      className='relative min-h-screen pt-16 px-6 md:px-12 mt-5 bg-gradient-to-br from-purple-700 
    via-indigo-700 to-blue-700 overflow-x-hidden text-gray-900 selection:bg-indigo-600 
    selection:text-white'
    >
      {/* Floating Blurred Shapes */}
      <div
        className='absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full filter 
      blur-3xl animate-pulse pointer-events-none'
      />

      <div
        className='absolute bottom-10 right-1/3 w-72 h-72 bg-purple-300/20 rounded-full 
      filter blur-2xl animate-pulse pointer-events-none'
      />

      {/* 1. Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='mb-14'
      >
        <img
          src={Adphoto}
          alt='Ad Banner'
          className='w-full max-w-[1300px] mx-auto rounded-3xl shadow-2xl hover:scale-[1.02] 
          transition-transform duration-500'
        />
      </motion.div>

      {/* 2. Why SpendWise */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='text-center max-w-8xl mx-auto px-4 md:px-0'
      >
        <h2 className='text-4xl font-extrabold tracking-tight text-white drop-shadow-lg'>
          Why Choose SpendWise?
        </h2>
        <p
          className='mt-5 text-md md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed 
        drop-shadow-md'
        >
          SpendWise isn't just a tracker — it's your daily money mentor. Whether you're budgeting,
          saving, or investing, we guide you toward clarity, control, and growth.
        </p>
      </motion.section>

      {/* Divider */}
      <div className='w-2/3 h-1 mx-auto my-12 bg-indigo-500 rounded-full animate-pulse shadow-lg' />

      {/* 3. How It Works */}
      <motion.section className='py-2 px-4 md:px-20 max-w-6xl mx-auto'>
        <h3 className='text-4xl font-extrabold text-center text-white drop-shadow-md mb-10'>
          How SpendWise Works
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {[
            { step: 1, title: 'Add Transactions', desc: 'Log income & expenses in seconds.' },
            {
              step: 2,
              title: 'Track & Analyze',
              desc: 'See where your money goes with intuitive charts.',
            },
            { step: 3, title: 'Smart Suggestions', desc: 'Get AI tips to save more every month.' },
          ].map(({ step, title, desc }) => (
            <motion.div
              key={step}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: step * 0.2 }}
              className='bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-transform duration-300 cursor-default'
            >
              <div className='text-6xl font-extrabold text-indigo-600 select-none'>0{step}</div>
              <h4 className='mt-6 font-semibold text-gray-900 text-xl'>{title}</h4>
              <p className='mt-3 text-gray-700 text-base'>{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Features */}
      <motion.section className='py-12 px-4 md:px-20 max-w-6xl mx-auto'>
        <h3 className='text-4xl font-extrabold text-center text-white drop-shadow-md mb-10'>
          What Makes SpendWise Unique?
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {[
            { title: 'Budget Smarter', desc: 'Set limits and stay on track.' },
            { title: 'Learn & Grow', desc: 'Read actionable articles daily.' },
            { title: 'Motivation Engine', desc: 'Daily nudges to keep goals in focus.' },
          ].map(({ title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className='bg-white rounded-3xl p-10 shadow-lg hover:bg-indigo-50 transition-colors duration-300 text-center cursor-default'
            >
              <img src={Book} alt='Feature icon' className='w-16 h-16 mx-auto mb-6' />
              <h4 className='font-semibold text-indigo-700 text-2xl'>{title}</h4>
              <p className='mt-3 text-gray-800 text-base'>{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Divider */}
      <div className='w-2/3 h-1 mx-auto my-12 bg-indigo-500 rounded-full animate-pulse shadow-lg' />

      {/* 5. Articles */}
      <motion.section className='py-12 px-4 md:px-20 max-w-6xl mx-auto text-white text-center'>
        <h3 className='text-4xl font-extrabold drop-shadow-lg'>Financial Wisdom Hub</h3>
        <p className='mt-4 max-w-3xl mx-auto text-indigo-200 text-lg leading-relaxed drop-shadow-md'>
          Tap into articles that help you budget better, save more, and live richer.
        </p>
        {articlesData.map((a, i) => (
          <motion.div
            key={i}
            initial={{ x: a.reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`flex flex-col ${a.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
            items-center gap-10 my-12 shadow-lg rounded-3xl bg-indigo-900/40 backdrop-blur-md 
            p-8 hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className='md:w-7/12 text-left'>
              <h4 className='text-3xl font-bold text-white'>{a.title}</h4>
              <p className='mt-4 text-indigo-200 leading-relaxed'>{a.desc}</p>
              <button
                onClick={a.buttonAction}
                className='mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                px-8 py-3 rounded-lg shadow-lg transition'
              >
                Read here
              </button>
            </div>
            <div className='md:w-5/12 flex justify-center'>
              <img
                src={a.image}
                alt={a.title}
                className='rounded-2xl shadow-xl max-w-full h-auto object-cover'
                loading='lazy'
              />
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* 6. Testimonials */}
      <motion.section
        className='py-16 px-6 md:px-20 bg-indigo-50 rounded-3xl shadow-2xl 
      max-w-7xl mx-auto mt-16'
      >
        <h3 className='text-4xl font-extrabold text-center mb-12 text-indigo-700'>
          Real Users. Real Stories.
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {[
            { name: 'Priya M.', quote: 'SpendWise helped me finally build a saving habit!' },
            { name: 'Amit R.', quote: 'Perfect for tracking daily spends. So smooth!' },
            { name: 'Sara T.', quote: 'Feels like I’ve hired a personal finance guide.' },
          ].map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              className='p-8 border-l-6 border-indigo-500 italic text-gray-700 rounded-xl bg-white shadow-md'
            >
              “{t.quote}”
              <footer className='mt-6 text-right font-semibold text-indigo-800 select-text'>
                — {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.section>

      {/* 7. FAQs */}
      <motion.section className='py-16 px-6 md:px-20 mt-20 max-w-4xl mx-auto'>
        <h3 className='text-4xl font-extrabold text-center text-white mb-8'>
          FAQs about SpendWise
        </h3>
        <div className='space-y-6 text-gray-900'>
          {[
            { q: 'Is SpendWise free to use?', a: 'Absolutely—no hidden fees!' },
            { q: 'Can I use it across devices?', a: 'Yes! Your data syncs seamlessly.' },
            {
              q: 'Is my data secure?',
              a: 'Absolutely—industry‑grade encryption protects your info.',
            },
          ].map((faq, i) => (
            <details
              key={i}
              className='bg-white border border-indigo-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer'
            >
              <summary className='font-semibold text-indigo-700 cursor-pointer select-none'>
                {faq.q}
              </summary>
              <p className='mt-3 text-gray-700'>{faq.a}</p>
            </details>
          ))}
        </div>
      </motion.section>

      {/* 8. CTA */}

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='py-16 px-6 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 
        text-gray-900 text-center rounded-3xl shadow-2xl max-w-5xl mx-auto my-10 relative overflow-hidden'
      >
        <div className='absolute -top-10 -left-10 w-48 h-48 bg-pink-300 rounded-full opacity-20 blur-2xl
        animate-pulse' />
        <div className='absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-300 rounded-full opacity-20 
        blur-2xl animate-pulse' />

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-4xl md:text-5xl font-extrabold'
        >
          Ready to Take Control of Your Money?
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='mt-4 text-lg md:text-xl max-w-2xl mx-auto'
        >
          Join thousands simplifying their finances—with <strong>SpendWise</strong>.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='flex flex-col md:flex-row justify-center items-center gap-6 mt-8'
        >
          {[
            { icon: <FaBolt />, label: 'Fast Setup' },
            { icon: <FaChartPie />, label: 'Visual Insights' },
            { icon: <FaLock />, label: 'Private & Secure' },
          ].map((item, idx) => (
            <div
              key={idx}
              className='flex items-center gap-3 bg-white/30 p-4 rounded-xl shadow-md backdrop-blur-sm'
            >
              <div className='text-2xl text-yellow-600'>{item.icon}</div>
              <div className='text-gray-800 font-medium'>{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLoginClick}
          className='mt-10 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full text-lg shadow-lg
          hover:bg-indigo-700 transition-all'
        >
          Create Your Free SpendWise Account 🚀
        </motion.button>
      </motion.section>
    </div>
  );
}
