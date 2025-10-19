import React from 'react';
import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiJava,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiRender,
  SiVercel,
  SiPostman,
  SiFigma,
  SiPostgresql,
  SiDocker,
  SiSupabase,
  SiRedis,
  SiHtml5,
  SiCss3
} from 'react-icons/si';
import { FaJava, FaAws } from "react-icons/fa";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaTools,
  FaCloud,
  FaRocket,
  FaLaptopCode
} from 'react-icons/fa';
import { DiRedis } from "react-icons/di";
import { MdArchitecture } from "react-icons/md";

import SectionDivider from '../SectionDivider';

const SkillBadge = ({ icon: Icon, label, subLabel, isPrimary = false, isLarge = false }) => {
  if (!Icon) return null;

  return (
    <motion.div
      className={`flex items-center gap-2 ${isPrimary
        ? 'px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-400'
        : 'px-4 py-2 bg-[#1a1a1a] border border-cyan-400/20'
        } rounded-full group hover:border-cyan-400 transition-all duration-300`}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Icon className={`${isPrimary ? 'text-cyan-400' : 'text-gray-400'
        } group-hover:text-cyan-400 transition-colors duration-300 ${isLarge ? 'w-6 h-6' : 'w-5 h-5'
        }`} />
      <div className="flex flex-col">
        <span className={`${isPrimary ? 'text-gray-200' : 'text-gray-400'
          } group-hover:text-gray-200 transition-colors duration-300 ${isLarge ? 'text-base' : 'text-sm'
          }`}>
          {label}
        </span>
        {subLabel && (
          <span className="text-xs text-gray-500 group-hover:text-gray-400">
            {subLabel}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, icon: Icon, skills, isPrimary = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <div className="flex items-center gap-2 mb-4">
      <Icon className="text-cyan-400 w-5 h-5" />
      <h3 className="text-gray-200 text-lg font-medium">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <SkillBadge
          key={index}
          icon={skill.icon}
          label={skill.label}
          subLabel={skill.subLabel}
          isPrimary={isPrimary}
          isLarge={isPrimary}
        />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Primary Focus",
      icon: FaRocket,
      isPrimary: true,
      skills: [
        { icon: FaBrain, label: "Problem Solving", subLabel: "Competitive Programming, DSA" },
        { icon: FaServer, label: "Backend Development", subLabel: "API Design, Scalable Systems" },
      ]
    },
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: [
        { icon: SiCplusplus, label: "C++", subLabel: "Core CP language" },
        { icon: SiJavascript, label: "JavaScript" },
        { icon: FaJava, label: "Java" },
        { icon: SiPython, label: "Python" },
      ]
    },
    {
      title: "Web Development",
      icon: FaLaptopCode,
      skills: [
        { icon: SiNextdotjs, label: "Next.js" },
        { icon: SiReact, label: "React.js" },
        { icon: SiNodedotjs, label: "Node.js" },
        { icon: SiExpress, label: "Express.js" },
        { icon: SiHtml5, label: "HTML5" },
        { icon: SiCss3, label: "CSS3" },
        { icon: SiTailwindcss, label: "Tailwind CSS" },
      ]
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: [
        { icon: SiMongodb, label: "MongoDB" },
        { icon: SiPostgresql, label: "PostgreSQL" },
        { icon: SiMysql, label: "MySQL" },
        { icon: DiRedis, label: "Redis" },
        { icon: SiFirebase, label: "Firebase" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      skills: [
        { icon: FaAws, label: "AWS", subLabel: "ECS, ECR, S3" },
        { icon: SiDocker, label: "Docker" },
        { icon: SiSupabase, label: "Supabase" },
        { icon: SiVercel, label: "Vercel" },
        { icon: SiRender, label: "Render" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: FaTools,
      skills: [
        { icon: SiGit, label: "Git" },
        { icon: SiGithub, label: "GitHub" },
        { icon: SiPostman, label: "Postman", subLabel: "API Testing" },
        { icon: SiFigma, label: "Figma", subLabel: "UI Design" },
        { icon: SiRedis, label: "Redis" },
      ]
    },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-[#0e0e0e]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider text-center">
            Skills & Tech Stack
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              isPrimary={category.isPrimary}
            />
          ))}
        </div>

        {/* Core Knowledge Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5"
        >
          <h3 className="text-gray-200 text-lg font-medium mb-4 flex items-center gap-2">
            <FaBrain className="text-cyan-400 w-5 h-5" />
            Core Knowledge Areas
          </h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={FaCode} label="Data Structures & Algorithms" />
            <SkillBadge icon={FaServer} label="API Design" />
            <SkillBadge icon={MdArchitecture} label="System Design" subLabel="Scalability, Clean Architecture" />
            <SkillBadge icon={SiGit} label="Version Control (Git)" />
            <SkillBadge
              icon={FaBrain}
              label="Competitive Programming"
              subLabel="Codeforces, CodeChef, LeetCode, GFG"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <SectionDivider />
    </section>
  );
};

export default Skills; 