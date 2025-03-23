'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OurIntroduction = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
    hover: { y: -10, transition: { type: 'spring', stiffness: 300 } },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Card (Left Side) */}
          <motion.div
            className="w-full md:w-1/3"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/01/20/17/cow-7629733_1280.jpg"
                alt="Sustainable Cow Breeds"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Text Content (Right Side) */}
          <motion.div className="w-full md:w-1/2" variants={textVariants}>
            <h2 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-6">
              About Us
            </h2>
            <p className="text-xl text-green-800 mb-6">
              At <span className="font-semibold">Sustainable Cow Breeds</span>,
              we are dedicated to promoting eco-friendly and sustainable farming
              practices. Our mission is to provide high-quality, environmentally
              conscious cow breeds that support a greener future for
              agriculture.
            </p>
            <p className="text-xl text-green-800 mb-6">
              With years of expertise in sustainable farming, we prioritize
              animal welfare, organic feed, and zero-waste practices to ensure a
              healthier planet for future generations.
            </p>
            <motion.a
              href="#learn-more"
              className="bg-green-700 text-white px-10 py-4 rounded-xl text-xl font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurIntroduction;
