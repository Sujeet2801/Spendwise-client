import React from "react";
import { motion } from "framer-motion";
import Adphoto from "../../src/images/Ad.png";
import Book from "../../src/images/book.png";
import Photo1 from "../../src/images/Expense.png";
import Photo2 from "../../src/images/eExpense.png";
import Photo3 from "../../src/images/Home_image1.jpg";

function Home() {
  const redirectToLink = () => window.open("https://www.lifehack.org/articles/featured/an-introduction-to-expense-tracking.html", "_blank");
  const article2 = () => window.open("https://ieeexplore.ieee.org/document/8628070", "_blank");
  const article3 = () => window.open("https://www.freshbooks.com/hub/accounting/expense-tracking", "_blank");

  return (
    <>
      {/* Background with SVG Waves */}
      <div className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
      min-h-screen pt-5">

        {/* Ad Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center pt-10"
        >
          <img src={Adphoto} alt="Ad" className="w-full max-w-[1300px] 
          h-auto md:h-[400px] rounded-lg shadow-xl" />
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white py-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">The Tools for Your Goals</h2>
          <p className="text-lg">Spend less to save more, invest in your dreams, and 
            secure a brighter future.</p>
          <p className="text-lg">Your financial discipline sets a powerful example for 
            others</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10">
          {["Learn. Track. Improve.", "Read Articles.", "Stay Motivated."].map((title, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-lg shadow-xl text-center bg-white 
              hover:bg-gray-100 transform transition duration-300"
            >
              <img src={Book} alt="Book" className="w-16 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-indigo-600">{title}</h3>
              <p className="mt-2 text-gray-700">Track your expenses with us and 
                stay motivated on your financial journey.</p>
            </motion.div>
          ))}
        </div>

        <hr className="my-10 border-gray-300" />

        {/* Article Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center py-10 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Article & Inspiration</h2>
          <p className="text-lg">"Track expenses efficiently with our articles, gain financial control,</p>
          <p className="text-lg">and make smarter money decisions effortlessly."</p>
        </motion.div>

        {/* Animated Sections with Slide-In */}
        {[{
          title: "What is Expense Tracking? How Will it Help Your Business?",
          desc: "Expense tracking involves monitoring, recording, and analyzing all financial expenditures within a business...",
          image: Photo1,
          buttonAction: article3,
          reverse: false
        }, {
          title: "A Smart Approach to Track Everyday Expense.",
          desc: "Tracking everyday expenses is a smart financial practice that involves monitoring and recording daily spending...",
          image: Photo2,
          buttonAction: article2,
          reverse: true
        }, {
          title: "An Introduction to Expense Tracking.",
          desc: "Expense tracking is the art of monitoring and recording your financial transactions...",
          image: Photo3,
          buttonAction: redirectToLink,
          reverse: false
        }].map(({ title, desc, image, buttonAction, reverse }, index) => (
          <motion.div
            key={index}
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16 px-8`}
          >
            <div className="md:w-7/12">
              <h2 className="text-3xl font-bold text-white">{title}</h2>
              <p className="mt-4 text-lg text-gray-200">{desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white py-3 px-6 rounded-lg mt-4 hover:bg-blue-600 transition shadow-lg"
                onClick={buttonAction}
              >
                Read here
              </motion.button>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="md:w-5/12"
            >
              <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-xl" />
            </motion.div>
          </motion.div>
        ))}

        <hr className="mt-10 border-gray-300" />

      </div>
    </>
  );
}

export default Home;
