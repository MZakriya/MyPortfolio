"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import Link from "next/link";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
    file: File | null;
  }>({ name: "", email: "", message: "", file: null });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      file: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      setSuccess(true);
      setFormData({ name: "", email: "", message: "", file: null });
    } catch (error) {
      console.error("Email send error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-22 flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Upload File (Optional)</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full mt-4"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

        {success && (
          <p className="mt-4 text-green-400 text-center">Message sent successfully!</p>
        )}
      </motion.form>

      {/* Social Links with Icons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <Link
          href="https://www.linkedin.com/in/muhammad-zakriya-2a6788347/"
          target="_blank"
          className="flex items-center gap-2 bg-gray-800 text-blue-400 hover:text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </Link>

        <Link
          href="https://github.com/MZakriya"
          target="_blank"
          className="flex items-center gap-2 bg-gray-800 text-gray-400 hover:text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <FaGithub size={20} />
          GitHub
        </Link>

        <Link
          href="https://wa.me/+923162959826"
          target="_blank"
          className="flex items-center gap-2 bg-gray-800 text-green-400 hover:text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </Link>

        <Link
          href="tel:+923162558058"
          className="flex items-center gap-2 bg-gray-800 text-yellow-400 hover:text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <FaPhone size={20} />
          Call Now
        </Link>
      </div>
    </div>
  );
};

export default Contact;
