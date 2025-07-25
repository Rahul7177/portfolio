"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import "../style/Projects.css";

const projectsData = [
    {
        image: "/foodsanta1.png",
        projectName: "FoodSanta",
        projectLink: "https://foodsanta-in.web.app",
        projectDescription:
          "This is a web app is developed for the purpose of solving the problem of hunger and food wastage, by connecting people who want to donate or claim excess food. It features real-time listings, Google Maps integration, and Firebase for authentication and data storage.",
        projectTech: [
          "React", "Firebase", "Framer Motion", "Google Maps API",
        ],
        projectExternalLinks: {
          github: "https://github.com/Rahul7177/FoodSanta",
          externalLink: "https://foodsanta-in.web.app",
        },
      },
      {
        image: "/personaAI1.jpg",
        projectName: "Persona AI",
        projectLink: "https://github.com/Rahul7177/PersonaAI_frontend",
        projectDescription:
          "Persona AI is a personalized AI assistant that can mimic a user's voice, have a context of preferences, and behavior, offering intelligent responses, voice cloning, and interactive frontend for deeply customized interactions.",
        projectTech: [
          "React", "Node.js", "Express", "Flask", "MongoDB", "Whisper", "Gemini API",
        ],
        projectExternalLinks: {
          github: "https://github.com/Rahul7177/PersonaAI_frontend",
          externalLink: "https://github.com/Rahul7177/PersonaAI_frontend",
        },
      },
      {
        image: "/autovista1.png",
        projectName: "Autovista",
        projectLink: "https://autovista.vercel.app/",
        projectDescription:
          "AutoVista is a car comparison web app that fetches real-time vehicle data, allowing users to compare specifications, prices, and features, with personal lists and history.",
        projectTech: [
          "React", "Node.js", "MongoDB", "Express", "Redux Toolkit",
        ],
        projectExternalLinks: {
          github: "https://github.com/Rahul7177/AutoVista",
          externalLink: "https://autovista.vercel.app/",
        },
      },
];

function Projects() {
  return (
    <div 
      className="my-8 projects-section bg-white rounded-2xl px-4
                 py-8
                 md:bg-white md:px-6 md:rounded-2xl md:shadow-lg" 
      id="projects"
    >
      <motion.div
        className="flex flex-col items-start gap-4 mb-16 sm:flex-row sm:items-center sm:gap-6"
      >
        <h2 className="text-4xl font-extrabold font-raleway text-[var(--dark-text)] section-title">
          Things I’ve Built
        </h2>
        <div className="w-full h-[2px] bg-slate-700"></div>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-32">
        {projectsData.map(
          (
            {
              image,
              projectDescription,
              projectLink,
              projectExternalLinks,
              projectName,
              projectTech,
            },
            index
          ) => {
            const isEven = index % 2 !== 0;
            return (
              <motion.div
                className="group relative project-card"
                key={projectName}
                data-layout={isEven ? "even" : "odd"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
              >
                {/* Block 1: Info */}
                <div className="project-info">
                  <p className="text-[var(--theme-color)] font-mono text-md">
                    Featured Project
                  </p>
                  <h3 className="text-[--dark-text] font-raleway text-2xl font-bold transition-colors duration-300 hover:text-[var(--theme-color)] cursor-pointer w-max project-name">
                    <Link href={projectLink}>{projectName}</Link>
                  </h3>
                  <div className="project-description-box bg-[var(--dark-text)] p-4 my-4 rounded-lg  text-justify">
                    <p className="font-sans text-[var(--light-text)] project-description">
                      {projectDescription}
                    </p>
                  </div>
                </div>

                {/* Block 2: Image */}
                <div className="relative project-image">
                  <div className="absolute inset-0 z-10 image-overlay"></div>
                  <Image
                    src={image}
                    fill
                    alt={projectName}
                    quality={100}
                    className="object-cover grayscale transition-all duration-300 image-element"
                  />
                </div>
                
                {/* Block 3: Footer */}
                <div className="flex flex-col items-start gap-4 mt-4 w-full project-footer md:flex-row md:items-center md:justify-between">
                  <ul className="list-none flex flex-wrap gap-x-4 gap-y-2 font-sans text-[var(--dark-text)] tech-list">
                    {projectTech.map((tech) => (
                      <li key={tech} className="w-fit">{tech}</li>
                    ))}
                  </ul>
                  <ul className="list-none flex gap-4 text-xl text-[var(--dark-text)]">
                    <li>
                      <Link
                        href={projectExternalLinks.github}
                        className="p-1.5 block transition-colors duration-300 hover:text-[var(--theme-color)]"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="p-1.5 block transition-colors duration-300 hover:text-[var(--theme-color)]"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>

              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;