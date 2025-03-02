"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  demoLink: string;
  techStack?: string[];
}

const ProjectCard = ({ src, title, description, demoLink, techStack = [] }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group"
    >
      <div className="relative h-[200px] md:h-[300px]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-4 mb-4">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-500/20 hover:bg-purple-500/40 rounded-full border border-purple-500/50 transition-all duration-300"
              >
                <FaExternalLinkAlt className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-[#2A0E61] rounded-full text-gray-300 border border-purple-500/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative p-4 bg-[#0300145e] backdrop-blur-sm">
        <h1 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-500 transition-colors duration-300">
          {title}
        </h1>
        <p className="text-gray-300 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
