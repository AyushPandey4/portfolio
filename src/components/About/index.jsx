import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiNodedotjs, SiPostgresql, SiCplusplus, SiMongodb, SiDocker } from 'react-icons/si';
import { AiOutlineCode, AiOutlineDatabase } from 'react-icons/ai';
import { BiBrain } from 'react-icons/bi';
import SectionDivider from '../SectionDivider';

const SkillBadge = ({ icon: Icon, label }) => (
    <motion.div
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors duration-300"
        whileHover={{ scale: 1.05, borderColor: "#00FFFF" }}
        whileTap={{ scale: 0.95 }}
    >
        <Icon className="text-cyan-400 w-5 h-5" />
        <span className="text-gray-300 text-sm whitespace-nowrap">{label}</span>
    </motion.div>
);

const skills = [
    { icon: SiCplusplus, label: "C/C++" },
    { icon: SiReact, label: "React/Next.js" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiDocker, label: "Docker" },
];

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <section id="about" className="relative py-20 md:py-32 bg-[#0e0e0e]">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-4xl mx-auto md:mx-0"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Heading */}
                    <motion.div
                        className="flex flex-col items-center md:items-start mb-12"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider">
                            About Me
                        </h2>
                        <div className="mt-2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                    </motion.div>

                    {/* Main content */}
                    <div className="space-y-8 text-center md:text-left">
                        <motion.p
                            className="text-base md:text-lg text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                            I’m a computer science student focused on backend development and problem-solving. With expertise in C++, data structures, algorithms, and modern web technologies, I build scalable backend systems and write clean, efficient code.
                        </motion.p>

                        <motion.p
                            className="text-base md:text-lg text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                            Whether architecting reliable APIs or solving complex algorithmic challenges, I enjoy turning ideas into practical, high-performance solutions.
                        </motion.p>

                        {/* Skills */}
                        <motion.div
                            variants={itemVariants}
                            className="pt-8"
                        >
                            <div className="no-scrollbar">
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    {skills.map((skill, index) => (
                                        <SkillBadge key={index} icon={skill.icon} label={skill.label} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Personal note */}
                        <motion.p
                            className="text-base md:text-lg text-gray-400 italic pt-4"
                            variants={itemVariants}
                        >
                            "Outside of coding, I'm always exploring new technologies and ways to solve real-world challenges."
                        </motion.p>
                    </div>
                </motion.div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default About; 