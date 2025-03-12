"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white">
      <nav className="flex justify-between items-center p-5 shadow-md bg-black/50 backdrop-blur-md fixed w-full z-50 transition-all duration-300">
        <Link href="/" className="hover:text-blue-800 transition-all">
          <h1 className="text-3xl font-extrabold text-blue-400">MyPortfolio</h1>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-blue-400 hover:text-blue-600 focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black/70 md:static md:flex gap-6 text-lg justify-center p-5 md:p-0 transition-all`}
        >
          <li className="text-center">
            <Link
              href="/about"
              className="block py-2 hover:text-blue-400 transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/projects"
              className="block py-2 hover:text-blue-400 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/contact"
              className="block py-2 hover:text-blue-400 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
