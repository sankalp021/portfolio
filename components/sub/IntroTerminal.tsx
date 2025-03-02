"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroTerminal = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    'Welcome to my portfolio! 👋',
    '> Loading personal info...',
    '> Name: Sankalp Chaturvedi',
    '> Education: B.Tech in Computer Science and Engineering',
    '> Institute: IET Lucknow (2021-2025)',
    '> Skills: ["React", "Next.js", "Node.js", "AWS", "MongoDB"]',
    '> Achievements: ["SIH 2023 Finalist", "MetaByte Hackathon Global Rank 2"]',
    '> Contact: snklp21@gmail.com',
    '> Status: Open to opportunities'
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setText(prev => prev + lines[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0C0C0C] rounded-lg p-6 font-mono text-sm text-green-400 max-w-2xl w-full shadow-xl border border-[#2A0E61]"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="whitespace-pre-wrap">
        {text}
        <span className="animate-blink">_</span>
      </pre>
    </motion.div>
  );
};

export default IntroTerminal;
