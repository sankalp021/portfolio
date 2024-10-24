import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center z-20 justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a
          href="https://bk-sankalp.netlify.app/" // Replace with the actual URL of the project
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <ProjectCard
            src="/bkss.png"
            title="BranchKarma Website"
            description="A responsive website built for BranchKarma, focusing on user experience and seamless integration with GoHighLevel for enhanced CRM functionalities."
          />
        </a>
        
        <a
          href="https://jobport-nine.vercel.app/" // Replace with the actual URL of the project
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <ProjectCard
            src="/jpss.png"
            title="Job Portal Website"
            description="A platform that connects job seekers and employers, featuring user registration, job postings, and a streamlined application process."
          />
        </a>
        
        <a
          href="https://mystoresanklap.netlify.app/" // Replace with the actual URL of the project
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <ProjectCard
            src="/msss.png"
            title="Mystore Website"
            description="An e-commerce platform designed to provide a smooth shopping experience, complete with product listings, a shopping cart, and secure checkout."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
