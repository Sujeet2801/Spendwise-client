import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";
// import image from "../../src/images/image1.png";
// import Banner from "../../src/images/Banner.png";

const teamMembers = [
  { name: "Vikas Kumar Yadav", role: "Frontend Developer", bio: "Vikas is an experienced frontend developer who specializes in creating intuitive user interfaces.", imageUrl: "jane-smith.jpg" },
  { name: "Saksham Sharma", role: "Frontend Developer", bio: "Saksham is a passionate frontend developer who led the development team to success.", imageUrl: "john-doe.jpg" },
  { name: "Utkarsh Upadhyay", role: "Frontend Developer", bio: "Utkarsh specializes in creating intuitive user interfaces.", imageUrl: "jane-smith.jpg" },
  { name: "Vishal Rai", role: "Backend Developer", bio: "Vishal ensures smooth backend operations and system performance.", imageUrl: "jane-smith.jpg" },
  { name: "Sujeet Kumar Gupta", role: "Web Developer", bio: "A skilled professional in web development and UI/UX design.", imageUrl: "jane-smith.jpg" },
];

function About() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
    min-h-screen text-center pt-16 pb-5">

      {/* Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* <img className="w-full h-[400px] object-cover shadow-lg rounded-lg" src={Banner} alt="Banner" /> */}
      </motion.div>

      {/* About Text */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-2xl text-gray-100 font-semibold mt-6"
      >
        "Unlock Financial Clarity: Your Money, Your Way. Discover, Track, and 
        Take Control of Your Expenses with Ease."
      </motion.p>

      {/* Animated Sections */}
      {[
        { title: "About Spendwise", text: "Welcome to MyExpenseTracker! Easily record, categorize, and analyze your expenditures, empowering you to take control of your finances effortlessly.", delay: 0.3 },
        { title: "Key Features", text: "Our platform offers an intuitive user interface, real-time updates, customizable budgeting tools, and strong data encryption for security.", delay: 0.5 },
      ].map(({ title, text, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.8 }}
          className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-semibold bg-blue-600 text-white py-3 px-6 inline-block rounded-md">{title}</h2>
          <p className="text-lg text-gray-700 mt-4">{text}</p>
        </motion.div>
      ))}

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mt-10 p-6"
      >
        <h2 className="text-3xl font-semibold bg-blue-600 text-white py-3 px-6 inline-block rounded-md">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300"
            >
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-blue-600 font-semibold">{member.role}</p>
              <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-semibold bg-blue-600 text-white py-3 
        px-6 inline-block rounded-md">Contact Us</h2>

        <div className="mt-6 space-y-4">
          {[{ icon: FaEnvelope, text: "Email: contact@ecotrack.com" }, { icon: FaPhone, text: "Phone: +1 (123) 456-7890" }, { icon: FaMapMarker, text: "Address: 123 Green Street, Eco City" }].map(({ icon: Icon, text }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-3 text-lg transform transition duration-300"
            >
              <Icon className="text-blue-600" />
              <span>{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

export default About;
