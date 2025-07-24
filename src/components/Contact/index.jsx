import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaCopy, FaCheck, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import SectionDivider from '../SectionDivider';

const SocialLink = ({ href, icon: Icon, label, color, isResume = false }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-300 ${isResume ? 'relative animate-pulse' : ''
      }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className={`p-3 rounded-full ${isResume
      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 relative'
      : 'bg-[#1a1a1a] group-hover:' + color
      } transition-colors duration-300`}>
      <Icon className={`w-5 h-5 ${isResume ? 'text-white' : ''}`} />
      {isResume && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 -z-10 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </div>
    <span className={`text-sm ${isResume ? 'font-medium text-cyan-400 group-hover:text-blue-400' : ''}`}>
      {label}
    </span>
  </motion.a>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const lastSubmission = localStorage.getItem('lastSubmission');
    if (lastSubmission && Date.now() - Number(lastSubmission) < 60000) {
      alert('Please wait a minute before sending another message.');
      return;
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      const formData = new FormData(e.target);
      const formObject = Object.fromEntries(formData.entries());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formObject.name,
          email: formObject.email,
          subject: formObject.subject,
          message: formObject.message,
          from_name: "Portfolio Contact Form",
          replyto: formObject.email,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setFormStatus({ 
          isSubmitting: false, 
          isSubmitted: true, 
          error: null 
        });
        e.target.reset();
        localStorage.setItem('lastSubmission', Date.now().toString());
        alert('Thank you for your message! I will get back to you soon.');
      } else {
        throw new Error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: error.message 
      });
      alert(`Sorry, there was an error: ${error.message}`);
    }
  };
  
  const socialLinks = [
    {
      href: process.env.NEXT_PUBLIC_RESUME_URL,
      icon: FaFileAlt,
      label: "Download Resume",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      isResume: true
    },
    { href: process.env.NEXT_PUBLIC_LINKEDIN_URL, icon: FaLinkedin, label: "LinkedIn", color: "bg-[#0077b5]" },
    { href: process.env.NEXT_PUBLIC_GITHUB_URL, icon: FaGithub, label: "GitHub", color: "bg-[#333]" },
    { href: process.env.NEXT_PUBLIC_LEETCODE_PROFILE, icon: SiLeetcode, label: "LeetCode", color: "bg-[#FFA116]" },
    { href: process.env.NEXT_PUBLIC_X_URL, icon: FaTwitter, label: "Twitter", color: "bg-[#1DA1F2]" },
    { href: process.env.NEXT_PUBLIC_INSTAGRAM_URL, icon: FaInstagram, label: "Instagram", color: "bg-[#E4405F]" },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#0e0e0e]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, exciting projects, or just chatting about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <HiMail className="text-cyan-400 w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-200">{email}</span>
                    <motion.button
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {copied ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <HiLocationMarker className="text-cyan-400 w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-200">Kolkata, West Bengal, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <HiClock className="text-cyan-400 w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                  <p className="text-gray-200">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-gray-200 font-medium">Connect with me</h3>
              <div className="flex flex-col item-start gap-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl text-gray-200 font-medium mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#0e0e0e] text-gray-200 rounded-lg px-4 py-3 border border-gray-800 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#0e0e0e] text-gray-200 rounded-lg px-4 py-3 border border-gray-800 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full bg-[#0e0e0e] text-gray-200 rounded-lg px-4 py-3 border border-gray-800 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="6"
                  className="w-full bg-[#0e0e0e] text-gray-200 rounded-lg px-4 py-3 border border-gray-800 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={formStatus.isSubmitting}
                className={`w-full font-medium rounded-full py-3 px-6 transition-all duration-300 shadow-lg ${
                  formStatus.isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-cyan-400 hover:bg-cyan-300 shadow-cyan-400/20'
                } text-black`}
              >
                {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <SectionDivider />
    </section>
  );
};

export default Contact; 