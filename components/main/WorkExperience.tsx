"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      role: "Fullstack Developer Intern",
      company: "Branch Karma",
      period: "May 2024 - Oct 2024",
      description: "Developed high-traffic websites using React.js and Node.js, improving page load times by 25%. Implemented RESTful APIs and integrated GoHighLevel CRM.",
      skills: ["React", "Node.js", "Docker", "Git", "GoHighLevel"]
    },
    {
      role: "ERP Developer Intern",
      company: "Knighthood",
      period: "Feb 2024 - March 2024",
      description: "Developed and customized ERP system using Frappe and ERPNext, reducing manual processing time by 35%. Implemented custom modules for attendance tracking and payroll management.",
      skills: ["Frappe", "ERPNext", "REST APIs", "Python"]
    }
  ];

  return (
    <div className="py-20 px-4" id="experience">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12">
        Work Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="glass-card p-6 hover:border-purple-500 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-purple-400">{exp.company}</p>
              </div>
              <span className="text-gray-400">{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, index) => (
                <span key={index} 
                      className="px-2 py-1 text-sm bg-[#2A0E61] rounded-full text-white">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
