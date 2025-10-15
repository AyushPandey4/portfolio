"use client";
import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaAws,
  FaArrowLeft,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiDocker,
  SiRedis,
  SiClickhouse,
  SiNextdotjs,
  SiOpenai,
  SiMongodb,
  SiYoutube,
  SiGoogle,
  SiClerk,
  SiCloudinary,
  SiJest,
  SiReact,
  SiTailwindcss,
  SiRecharts,
  SiRedux,
} from "react-icons/si";

// Map string names from JSON to actual icon components
const iconMap = {
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiDocker,
  SiRedis,
  SiClickhouse,
  SiNextdotjs,
  SiOpenai,
  SiMongodb,
  SiYoutube,
  SiGoogle,
  SiClerk,
  SiCloudinary,
  SiJest,
  SiReact,
  SiTailwindcss,
  SiRecharts,
  SiRedux,
  FaAws,
};

const TechBadge = ({ icon: Icon, label }) => {
  if (!Icon) return null;
  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5"
      whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.5)" }}
    >
      <Icon className="text-cyan-400 w-4 h-4" />
      <span className="text-gray-300 text-sm">{label}</span>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group bg-[#161616] bg-opacity-70 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-800"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="relative lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent lg:bg-gradient-to-l" />
        </div>
        <div className="relative lg:w-3/5 p-6 md:p-8 flex flex-col">
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-400 text-sm lg:text-base leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, index) => (
                <TechBadge key={index} icon={tech.icon} label={tech.label} />
              ))}
            </div>
            <hr className="my-5 border-gray-800 group-hover:border-cyan-900 transition-colors" />
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 text-sm text-gray-300"
                >
                  <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4 pt-6 mt-4">
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black rounded-md text-sm font-semibold hover:bg-cyan-400 transition-colors duration-300 shadow-md shadow-cyan-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo <FaExternalLinkAlt size={12} />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-cyan-400 hover:border-cyan-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub <FaGithub size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AllProjects = () => {
  const [init, setInit] = useState(false);
  const [projects, setProjects] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        const processedData = data.map((project) => ({
          ...project,
          techStack: project.techStack.map((tech) => ({
            ...tech,
            icon: iconMap[tech.icon],
          })),
        }));
        setProjects(processedData);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: "#0e0e0e" } },
      fpsLimit: 120,
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" }, resize: true },
        modes: {
          grab: { distance: isMobile ? 140 : 200, links: { opacity: 0.2 } },
        },
      },
      particles: {
        color: { value: "#7DF9FF" },
        links: {
          color: "#7DF9FF",
          distance: isMobile ? 100 : 150,
          enable: true,
          opacity: 0.05,
          width: 1,
        },
        move: { enable: true, speed: 0.5 },
        number: {
          density: { enable: true, area: isMobile ? 1000 : 800 },
          value: isMobile ? 50 : isTablet ? 80 : 100,
        },
        opacity: { value: 0.1 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    [isMobile, isTablet]
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {init && (
        <Particles id="tsparticles-projects" options={particlesOptions} />
      )}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* --- Back Button with Fixed Positioning --- */}
        <Link href="/" aria-label="Go back to home">
          <motion.div
            className="fixed top-8 left-4 sm:left-8 z-20 flex items-center justify-center p-3 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft size={20} />
          </motion.div>
        </Link>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16">
          <span className="text-gray-300">My </span>
          <span className="text-cyan-400">Projects</span>
        </h1>
        <div className="grid gap-8 lg:gap-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllProjects;
