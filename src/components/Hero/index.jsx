import React, { useEffect, useState, useMemo, useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import SectionDivider from '../SectionDivider';
import { LenisContext } from '@/components/Lenis';

const Hero = () => {
  const [init, setInit] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const lenis = useContext(LenisContext);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '#0e0e0e',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: isMobile ? 140 : 200,
            links: {
              opacity: 0.2,
            },
          },
        },
      },
      particles: {
        color: {
          value: '#7DF9FF',
        },
        links: {
          color: '#7DF9FF',
          distance: isMobile ? 100 : 150,
          enable: true,
          opacity: 0.05,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
        },
        number: {
          density: {
            enable: true,
            area: isMobile ? 1000 : 800,
          },
          value: isMobile ? 60 : isTablet ? 100 : 120, //particle count
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [isMobile, isTablet],
  );

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

  const handleScroll = (section) => {
    const element = document.querySelector(`#${section}`);
    if (element) {
      lenis?.scrollTo(element, {
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  return (
    <>
      {init && <Particles id="tsparticles" options={particlesOptions} />}
      <div className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            variants={itemVariants}
          >
            <span className="text-gray-400 block sm:inline">Hi, I'm </span>
            <TypeAnimation
              sequence={["Ayush.", 4000, "", 1000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ color: '#e0f7ff' }}
              className="inline-block"
            />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-400 tracking-wider"
          >
            Systems that Scale. Code that Lasts.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            Developer focused on clean backend architectures and scalable solutions. Always learning, building, and improving systems that solve real-world challenges.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('projects');
                }}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 text-base sm:text-lg min-w-[160px]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('contact');
                }}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-400 text-gray-400 rounded-full hover:bg-gray-400 hover:text-black transition-colors duration-300 text-base sm:text-lg min-w-[160px]"
              >
                Hire Me
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-6">
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <SectionDivider />
    </>
  );
};

export default Hero;