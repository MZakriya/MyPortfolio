"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center h-screen px-5">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Hi, I'm Muhammad Zakriya
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mt-3 max-w-2xl text-gray-300"
        >
          A passionate Frontend Developer specializing in Next.js, React, and TypeScript. Crafting beautiful, scalable, and high-performance web applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6 mt-6"
        >
          <Link href="/projects" className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-all">
            View Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all">
            Contact Me
          </Link>
        </motion.div>
      </header>
    </div>
  );
}
