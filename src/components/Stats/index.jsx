import React from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import { FaExternalLinkAlt, FaStar, FaRegStar } from 'react-icons/fa';
import Image from 'next/image';
import SectionDivider from '../SectionDivider';

const PlatformCard = ({ platform, stats, icon: Icon, customIcon, profileUrl, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative bg-[#1a1a1a] rounded-2xl p-6 flex flex-col items-center group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      {/* Platform Icon */}
      <div className="relative mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
        {Icon ? (
          <Icon size={40} />
        ) : (
          <div className="w-10 h-10 relative">
            <Image
              src={customIcon}
              alt={platform}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </div>

      {/* Platform Name */}
      <h3 className="text-xl font-bold text-white mb-4">{platform}</h3>

      {/* Stats */}
      <div className="space-y-2 mb-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-gray-300">
            {stat.type === 'rating' ? (
              <div className="font-medium">
                Max Rating: <span className="text-cyan-400">{stat.value}</span>
              </div>
            ) : stat.type === 'stars' ? (
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  i < stat.value ?
                    <FaStar key={i} className="text-yellow-400" /> :
                    <FaRegStar key={i} className="text-gray-500" />
                ))}
              </div>
            ) : (
              <div className="font-medium">{stat.label}: <span className="text-cyan-400">{stat.value}</span></div>
            )}
          </div>
        ))}
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-400 text-sm text-center mb-6">{description}</p>
      )}

      {/* Profile Button */}
      <motion.a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full text-sm font-medium hover:bg-cyan-400/10 transition-colors duration-300 flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>View Profile</span>
        <FaExternalLinkAlt size={12} />
      </motion.a>
    </motion.div>
  );
};

const CodolioCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative col-span-1 md:col-span-2 lg:col-span-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl p-8 text-center group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
  >
    <h3 className="text-2xl font-bold text-white mb-4">See My Complete CP & DSA Stats</h3>
    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
      View my consolidated competitive programming journey across Codeforces, CodeChef, LeetCode, and GeeksforGeeks on Codolio.
    </p>
    <motion.a
      href="https://codolio.com/profile/dXcs7iuc"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-400 text-black rounded-full text-base font-medium hover:bg-cyan-300 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>View Full Stats</span>
      <FaExternalLinkAlt size={12} />
    </motion.a>
    <p className="text-gray-400 text-sm mt-4">Real-time stats powered by Codolio</p>
  </motion.div>
);

const Stats = () => {
  const platforms = [
    {
      platform: "Codeforces",
      icon: SiCodeforces,
      stats: [
        { type: 'rating', value: process.env.NEXT_PUBLIC_CODEFORCES_RATING },
        { label: 'Rank', value: process.env.NEXT_PUBLIC_CODEFORCES_RANK },
        { label: 'Contests', value: process.env.NEXT_PUBLIC_CODEFORCES_CONTESTS }
      ],
      profileUrl: process.env.NEXT_PUBLIC_CODEFORCES_PROFILE,
      description: "Focused on solving algorithmic problems and participating in contests."
    },
    {
      platform: "CodeChef",
      icon: SiCodechef,
      stats: [
        { type: 'rating', value: process.env.NEXT_PUBLIC_CODECHEF_RATING },
        { type: 'stars', value: process.env.NEXT_PUBLIC_CODECHEF_STARS },
        { label: 'Contests', value: process.env.NEXT_PUBLIC_CODECHEF_CONTESTS }
      ],
      profileUrl: process.env.NEXT_PUBLIC_CODECHEF_PROFILE,
      description: "Regular participant in CodeChef contests."
    },
    {
      platform: "LeetCode",
      icon: SiLeetcode,
      stats: [
        { label: 'Problems Solved', value: process.env.NEXT_PUBLIC_LEETCODE_PROBLEMS },
        { label: 'Contest Rating', value: process.env.NEXT_PUBLIC_LEETCODE_RATING },
        { label: 'Contests', value: process.env.NEXT_PUBLIC_LEETCODE_CONTESTS }
      ],
      profileUrl: process.env.NEXT_PUBLIC_LEETCODE_PROFILE,
      description: "Focused on solving data structure and algorithm challenges."
    },
    {
      platform: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      stats: [
        { label: 'Problems Solved', value: process.env.NEXT_PUBLIC_GFG_PROBLEMS },
        { label: 'Institute Rank', value: `Top ${process.env.NEXT_PUBLIC_GFG_RANK}` }
      ],
      profileUrl: process.env.NEXT_PUBLIC_GFG_PROFILE,
      description: "Active in practicing topic-wise problems."
    }
  ];

  return (
    <section id="stats" className="relative py-20 md:py-32 bg-[#0e0e0e]">
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
            Competitive Programming & DSA Stats
          </h2>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>

        {/* Codolio Card */}
        <CodolioCard />
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <SectionDivider />
    </section>
  );
};

export default Stats; 