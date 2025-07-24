import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { LenisContext } from '@/components/Lenis';

const NavLink = ({ href, children, onClick, isMobile, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a
        href={href}
        onClick={onClick}
        className={`text-[#e0e0e0] relative transition-colors duration-300 ${isMobile ? 'text-lg py-4' : 'text-base'
          } ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
      >
        {children}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isHovered || isActive ? 1 : 0,
            opacity: isActive ? 1 : isHovered ? 0.8 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
          }}
        />
      </a>
    </motion.div>
  );
};

const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-[#1c1c1c]/95 backdrop-blur-lg z-50 shadow-xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col p-6">
              <button
                onClick={onClose}
                className="self-end text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <HiX size={24} />
              </button>
              <div className="flex flex-col items-center space-y-6 mt-8">
                <NavLink href="#about" onClick={onClose} isMobile isActive={activeSection === 'about'}>About Me</NavLink>
                <NavLink href="#projects" onClick={onClose} isMobile isActive={activeSection === 'projects'}>Projects</NavLink>
                <NavLink href="#stats" onClick={onClose} isMobile isActive={activeSection === 'stats'}>Stats</NavLink>
                <NavLink href="#skills" onClick={onClose} isMobile isActive={activeSection === 'skills'}>Skills</NavLink>
                <NavLink href="#contact" onClick={onClose} isMobile isActive={activeSection === 'contact'}>Contact Me</NavLink>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lenis = useContext(LenisContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);


      const sections = ['home', 'about', 'projects', 'stats', 'skills', 'contact'];
      let foundSection = '';
      for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };


    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      const element = document.querySelector(`#${hash}`);
      if (element) {
        lenis?.scrollTo(element, { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);

    if (section === 'home') {
      lenis?.scrollTo(0, { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      const element = document.querySelector(`#${section}`);
      if (element) {
        lenis?.scrollTo(element, { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-[#1c1c1c]/30 backdrop-blur-md shadow-lg'
            : 'bg-transparent backdrop-blur-sm'
          }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <a
                href="#home"
                className={`text-[#e0e0e0] text-xl md:text-2xl font-bold transition-colors duration-300 ${activeSection === 'home' ? 'text-cyan-400' : 'hover:text-cyan-400'
                  }`}
                onClick={(e) => {
                  handleNavClick('home');
                }}
              >
                Ayush <span className="text-cyan-400">Pandey</span>
              </a>
            </motion.div>
            <motion.div
              className="hidden md:flex items-center justify-end space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <NavLink href="#about" onClick={() => handleNavClick('about')} isActive={activeSection === 'about'}>About Me</NavLink>
              <NavLink href="#projects" onClick={() => handleNavClick('projects')} isActive={activeSection === 'projects'}>Projects</NavLink>
              <NavLink href="#stats" onClick={() => handleNavClick('stats')} isActive={activeSection === 'stats'}>Stats</NavLink>
              <NavLink href="#skills" onClick={() => handleNavClick('skills')} isActive={activeSection === 'skills'}>Skills</NavLink>
              <NavLink href="#contact" onClick={() => handleNavClick('contact')} isActive={activeSection === 'contact'}>Contact Me</NavLink>
            </motion.div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <HiMenu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} activeSection={activeSection} />
    </>
  );
};

export default Navbar;