'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const textVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const buttonVariants = {
    hover: { y: -10, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2020/05/16/11/55/cow-5177251_1280.jpg')] bg-cover bg-center"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/30"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          variants={textVariants}
        >
          Sustainable Cow Breeds
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-green-100 mb-8 max-w-2xl mx-auto"
          variants={textVariants}
        >
          Discover eco-friendly cow breeds that promote a sustainable future for
          agriculture and the environment.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div className="space-x-4">
          <motion.a
            href="#about"
            className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
          >
            Learn More
          </motion.a>
          <motion.a
            href="#breeds"
            className="bg-transparent border-2 border-white hover:border-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 hover:text-white transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
          >
            Explore Breeds
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
