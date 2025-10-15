import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import SectionDivider from "../SectionDivider";

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

const MoreProjectCard = () => (
  <motion.a
    href="/projects"
    rel="noopener noreferrer"
    className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-400 text-black rounded-full text-base font-medium hover:bg-cyan-300 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>View All Projects</span>
    <FaExternalLinkAlt size={12} />
  </motion.a>
);

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#121212] rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Project Image */}
        <div className="relative lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden bg-black">
          <motion.img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent lg:bg-gradient-to-l" />
        </div>

        {/* Project Content */}
        <div className="relative lg:w-1/2 p-6 lg:p-8">
          <div className="space-y-6">
            {/* Title */}
            <motion.h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
              <div className="h-0.5 w-0 group-hover:w-full bg-cyan-400 transition-all duration-300" />
            </motion.h3>

            {/* Description */}
            <p className="text-gray-400 text-sm lg:text-base">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <TechBadge key={index} icon={tech.icon} label={tech.label} />
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 text-sm lg:text-base"
                >
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-400 text-black rounded-full text-sm font-medium hover:bg-cyan-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Live Demo <FaExternalLinkAlt size={12} />
                </span>
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full text-sm font-medium hover:bg-cyan-400/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  GitHub <FaGithub size={14} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    title: "JSRedis – High-Performance Redis Clone & Dashboard",
    description:
      "A fully-featured, Redis-compatible server built from scratch in Node.js, featuring advanced data structures, master-replica replication, and a real-time observability dashboard built with React.",
    image: "/images/js-redis.png",
    techStack: [
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiReact, label: "React" },
      { icon: SiDocker, label: "Docker" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
      { icon: SiRecharts, label: "Recharts" },
      { icon: SiJest, label: "Jest" },
    ],
    features: [
      "Multi-client TCP server with RESP protocol support",
      "AOF persistence and TTL-based key expiration",
      "LRU eviction policy for memory management",
      "Master-replica replication with real-time updates",
      "Interactive terminal via @xterm/xterm",
      "Live key browser and metrics dashboard with WebSockets",
      "Full containerization using Docker Compose",
    ],
    demo: "https://jsredis-project-ui.vercel.app/",
    github: "https://github.com/AyushPandey4/jsredis-project",
  },
  {
    title: "DeployNow – Automated Cloud Deployment Platform",
    description:
      "Platform to deploy Dockerized apps to AWS ECS using GitHub OAuth, BullMQ, Redis, and ClickHouse for full-stack cloud automation.",
    image: "/images/deploy-now.png",
    techStack: [
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiExpress, label: "Express.js" },
      { icon: SiSupabase, label: "Supabase" },
      { icon: FaAws, label: "AWS ECS" },
      { icon: SiDocker, label: "Docker" },
      { icon: SiRedis, label: "Redis (BullMQ)" },
      { icon: SiClickhouse, label: "ClickHouse" },
    ],
    features: [
      "GitHub OAuth integration for project access",
      "Automated Docker builds & AWS ECS deployments",
      "Redis-powered job queues for multi-project concurrency",
      "ClickHouse logs & searchable deployment history",
      "Supabase DB for scalable metadata storage",
    ],
    demo: "https://deploy-now-lime.vercel.app/",
    github: "https://github.com/AyushPandey4/DeployNow",
  },
  {
    title: "CodeReflex – AI-Powered Interview Simulator",
    description:
      "Interactive interview simulator using OpenAI, face detection, and voice I/O to replicate real-time tech interview scenarios.",
    image: "/images/code-reflex.png",
    techStack: [
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiSupabase, label: "Supabase" },
      { icon: SiOpenai, label: "OpenAI API" },
    ],
    features: [
      "Auto-generated DSA & system design challenges",
      "AI-based feedback on answers",
      "Face API for behavior analysis",
      "Audio input/output mock interviews",
      "Session tracking and analytics",
    ],
    demo: "https://code-reflex.vercel.app/",
    github: "https://github.com/AyushPandey4/CodeReflix",
  },
  {
    title: "LearnLoop – YouTube Learning Tracker",
    description:
      "Full-stack tool to track YouTube learning with note-taking, playlist automation, and content categorization.",
    image: "/images/learn-loop.png",
    techStack: [
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiRedis, label: "Redis" },
      { icon: SiYoutube, label: "YouTube API" },
      { icon: SiGoogle, label: "Google OAuth" },
    ],
    features: [
      "Video-level note taking with synced timestamp",
      "Google OAuth with JWT session auth",
      "Realtime content dashboard with Redis caching",
      "Automated playlist management",
      "Category-based learning filters",
    ],
    demo: "https://learn-loop-nine.vercel.app/",
    github: "https://github.com/AyushPandey4/LearnLoop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-32 bg-[#0e0e0e]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider">
            Projects
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {/* More Project Card */}
        <div className="flex justify-center mt-10">
          <MoreProjectCard />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default Projects;
