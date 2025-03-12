"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  liveLink: string;
  githubLink: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  imageUrl,
}) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Optimized Image */}
      <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Project - ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-gray-400 mb-4">Tech Stack: {techStack}</p>
      <div className="flex gap-4">
        <Button asChild variant="outline" className="text-blue-400 border-blue-400">
          <Link href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Link>
        </Button>
        <Button asChild variant="outline" className="text-green-400 border-green-400">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
