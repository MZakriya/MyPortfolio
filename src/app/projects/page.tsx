"use client";

import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website - Furnio",
    description: "A modern e-commerce platform with optimized performance.",
    techStack: "Next.js, Tailwind CSS",
    liveLink: "https://hackathon-uiux-14.vercel.app/",
    githubLink: "https://github.com/MZakriya/hackathon-UIUX14",
    imageUrl: "https://picsum.photos/600/400?random=1",
  },
  {
    title: "Static Resume Builder",
    description: "A simple resume builder using HTML and CSS.",
    techStack: "HTML, CSS",
    liveLink: "https://static-resume-builder-green-psi.vercel.app/",
    githubLink: "https://github.com/MZakriya/Static-Resume-Builder",
    imageUrl: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "Amazon Clone",
    description: "A replica of Amazon's homepage using HTML and CSS.",
    techStack: "HTML, CSS",
    liveLink: "https://amazon-c-lone.vercel.app/",
    githubLink: "https://github.com/MZakriya/Amazon-CLone",
    imageUrl: "https://picsum.photos/600/400?random=3",
  },
  {
    title: "Dynamic Resume Builder",
    description: "A TypeScript-based dynamic resume builder.",
    techStack: "HTML, CSS, TypeScript",
    liveLink: "https://dynamic-resume-builder-rust.vercel.app/",
    githubLink: "https://github.com/MZakriya/Dynamic_Resume_Builder",
    imageUrl: "https://picsum.photos/600/400?random=4",
  },
  {
    title: "Unit Converter",
    description: "A Python-powered unit conversion tool using Streamlit.",
    techStack: "Python, Streamlit",
    liveLink: "https://mzakriya-unit-converter-unit-converter-nesoot.streamlit.app/",
    githubLink: "https://github.com/MZakriya/Unit_Converter",
    imageUrl: "https://picsum.photos/600/400?random=5",
  },
  {
    title: "Data Sweeper",
    description: "A Python-based data cleaning and processing tool.",
    techStack: "Python, Streamlit",
    liveLink: "https://mzakriya-data-sweeper-data-sweeper-ngvhsg.streamlit.app/",
    githubLink: "https://github.com/MZakriya/Data_Sweeper",
    imageUrl: "https://picsum.photos/600/400?random=6",
  },
  {
    title: "Password Strength Meter",
    description: "A web app to analyze and rate password strength.",
    techStack: "Streamlit, Python",
    liveLink: "https://mzakriya-password-strength-meter-app-tpnv5i.streamlit.app/",
    githubLink: "https://github.com/MZakriya/Password_Strength_Meter",
    imageUrl: "https://picsum.photos/600/400?random=7",
  },
  {
    title: "Expert To-Do List App",
    description: "A productivity app to manage tasks efficiently.",
    techStack: "Streamlit, Python",
    liveLink: "https://mzakriya-expert-to-do-list-app-yibbvm.streamlit.app/",
    githubLink: "https://github.com/MZakriya/Expert_To-Do_List",
    imageUrl: "https://picsum.photos/600/400?random=8",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-22">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects Showcase
      </motion.h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
