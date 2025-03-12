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
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>

      {/* Animated Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {["name", "email", "message"].map((field, index) => (
          <motion.div
            key={field}
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <label className="block text-gray-300 capitalize">{field}</label>
            {field === "message" ? (
              <textarea
                name={field}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                rows={4}
                required
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as "name" | "email"]}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                required
              />
            )}
          </motion.div>
        ))}

        {/* File Upload */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label className="block text-gray-300">Upload File (Optional)</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            type="submit"
            variant="primary"
            className="w-full mt-4"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {success && (
            <motion.p
              className="mt-4 text-green-400 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.div>
      </motion.form>

      {/* Social Links with Animation */}
      <motion.div
        className="mt-8 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {[
          { href: "https://www.linkedin.com/in/muhammad-zakriya-2a6788347/", icon: FaLinkedin, label: "LinkedIn", color: "text-blue-400" },
          { href: "https://github.com/MZakriya", icon: FaGithub, label: "GitHub", color: "text-gray-400" },
          { href: "https://wa.me/+923162959826", icon: FaWhatsapp, label: "WhatsApp", color: "text-green-400" },
          { href: "tel:+923162558058", icon: FaPhone, label: "Call Now", color: "text-yellow-400" },
        ].map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="transform transition-all"
          >
            <Link
              href={link.href}
              target="_blank"
              className={`flex items-center gap-2 bg-gray-800 ${link.color} hover:text-white px-4 py-2 rounded-lg shadow-md transition-all`}
            >
              <link.icon size={20} />
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
