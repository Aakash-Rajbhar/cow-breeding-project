'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ModernBreeding = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <section className="py-20  max-w-7xl mx-auto px-6">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-green-900 text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Modern Breeding Techniques
      </motion.h2>

      {/* Feature Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Feature 1: Genetic Selection */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 text-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="text-green-700 text-5xl mb-4">🧬</div>
          <h3 className="text-3xl font-semibold text-green-900 mb-4">
            Genetic Selection
          </h3>
          <p className="text-green-800 text-lg">
            We use advanced genetic selection to breed cows that are healthier,
            more productive, and better suited to sustainable farming practices.
          </p>
        </motion.div>

        {/* Feature 2: Data-Driven Breeding */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 text-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="text-green-700 text-5xl mb-4">📊</div>
          <h3 className="text-3xl font-semibold text-green-900 mb-4">
            Data-Driven Breeding
          </h3>
          <p className="text-green-800 text-lg">
            Our breeding programs are guided by data analytics to ensure optimal
            outcomes for both the animals and the environment.
          </p>
        </motion.div>

        {/* Feature 3: Eco-Friendly Practices */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 text-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="text-green-700 text-5xl mb-4">🌍</div>
          <h3 className="text-3xl font-semibold text-green-900 mb-4">
            Eco-Friendly Practices
          </h3>
          <p className="text-green-800 text-lg">
            We integrate eco-friendly practices into our breeding programs,
            reducing the environmental footprint of our operations.
          </p>
        </motion.div>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        className="text-center mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#learn-more"
          className="bg-green-700 text-white px-10 py-4 rounded-xl text-md md:text-xl font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
        >
          Discover Our Breeding Programs
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ModernBreeding;
