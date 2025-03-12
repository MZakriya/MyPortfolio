"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-5 py-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-center"
      >
        About Me
      </motion.h1>

      {/* Professional Summary */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-base sm:text-lg mt-4 max-w-xl sm:max-w-2xl text-gray-300 text-center"
      >
        I am a highly motivated and detail-oriented <strong>Frontend Developer</strong> with expertise in <strong>Next.js, React.js, and TypeScript</strong>. I specialize in building modern, scalable, and high-performance web applications that enhance user experience. With a strong passion for UI/UX design, I create visually appealing and interactive interfaces that ensure seamless user engagement. I am always eager to explore new technologies and improve my skills to deliver cutting-edge web solutions.
      </motion.p>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center"
      >
        {[
          "Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion",
          "Node.js", "Express.js", "REST APIs", "Streamlit", "Python", 
          "Git", "GitHub", "VS Code", "HTML", "CSS"
        ].map((skill, index) => (
          <div
            key={index}
            className="p-2 sm:p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all text-sm sm:text-base"
          >
            {skill}
          </div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-10 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Education</h2>
        <p className="mt-2 text-gray-300">Pre-Engineering - 2020</p>
        <p className="text-gray-300">Matriculation - 2017</p>
      </motion.div>

      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-10 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Work Experience</h2>
        <p className="mt-2 text-gray-300 font-semibold">Frontend Developer | Freelance (2022 - Present)</p>
        <p className="text-gray-300">- Developed multiple web applications using Next.js, React, and TypeScript.</p>
        <p className="text-gray-300">- Designed and implemented responsive UI/UX using Tailwind CSS and Framer Motion.</p>
        <p className="text-gray-300">- Integrated APIs and backend services to build dynamic and scalable applications.</p>
        <p className="text-gray-300">- Worked on performance optimization, SEO, and accessibility for better user experience.</p>
        <p className="text-gray-300">- Built custom CRM systems and e-commerce platforms for clients.</p>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="mt-10 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Certifications</h2>
        <p className="mt-2 text-gray-300">IT Essentials - Cisco Networking Academy</p>
        <p className="text-gray-300">Introduction to Cybersecurity - Cisco Networking Academy</p>
        <p className="text-gray-300">Cyber Security Essentials - Cisco Networking Academy</p>
        <p className="text-gray-300">Cisco Packet Tracer - Cisco Networking Academy</p>
        <p className="text-gray-300">Network Basics - Cisco Networking Academy</p>
      </motion.div>
    </div>
  );
}
