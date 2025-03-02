import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "BranchKarma Website",
      description: "A responsive website built for BranchKarma, focusing on user experience and seamless integration with GoHighLevel for enhanced CRM functionalities.",
      src: "/bkss.png",
      demoLink: "https://bk-sankalp.netlify.app/",
      techStack: ["React", "Node.js", "GoHighLevel", "TailwindCSS"]
    },
    {
      title: "Job Portal Website",
      description: "A platform that connects job seekers and employers, featuring user registration, job postings, and a streamlined application process.",
      src: "/jpss.png",
      demoLink: "https://jobport-nine.vercel.app/",
      techStack: ["Next.js", "MongoDB", "Express", "Node.js"]
    },
    {
      title: "Mystore Website",
      description: "A modern, sleek single-page business website showcasing products, services, and company information. Features responsive design, elegant animations, and seamless navigation for an enhanced user experience.",
      src: "/msss.png",
      demoLink: "https://mystoresanklap.netlify.app/",
      techStack: ["React", "Redux", "Firebase", "Stripe"]
    }
  ];

  return (
    <div className="flex flex-col items-center z-20 justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
