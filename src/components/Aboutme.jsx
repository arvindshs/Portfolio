import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // your big left-side image

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0A0F2C] to-[#1A2238] flex flex-col items-center justify-center px-8 py-16 space-y-20 overflow-hidden">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-7xl relative">
        {/* Floating background graphic */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#D72638] opacity-20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>

        {/* Left - Big Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Right - About Me Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left z-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-italiana text-white mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-300 font-hanuman leading-relaxed mb-4">
            Hi! I'm <span className="text-white font-bold">Arvind H S</span> — a
            full-stack developer and creative designer. I specialize in crafting
            powerful websites and smooth user experiences.
          </p>
          <p className="text-md text-gray-400">
            I love building interactive products, telling stories through
            design, and pushing creative boundaries with modern technologies.
          </p>
        </motion.div>
      </div>

      {/* Contact Me Section */}
      <div className="w-full max-w-5xl text-center space-y-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-italiana text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-md text-gray-400 font-hanuman"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Let’s bring ideas to life! Reach out and let's start something awesome
          together.
        </motion.p>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <a
            href="mailto:yourname@gmail.com"
            className="inline-block px-8 py-4 mt-4 bg-[#D72638] text-white rounded-full font-hanuman hover:bg-white hover:text-[#D72638] hover:border-2 hover:border-[#D72638] transition duration-300"
          >
            Send an Email
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
