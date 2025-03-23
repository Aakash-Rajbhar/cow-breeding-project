'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Eco-Friendly Dairy Farm',
      description:
        'A project focused on creating a zero-waste dairy farm using renewable energy and organic feed.',
      image: '/images/project1.webp',
      link: '#project1',
    },
    {
      id: 2,
      title: 'Sustainable Breeding Program',
      description:
        'Developing a breeding program that prioritizes animal welfare and environmental sustainability.',
      image: '/images/project2.webp',
      link: '#project2',
    },
    {
      id: 3,
      title: 'Community Farming Initiative',
      description:
        'Empowering local farmers with sustainable practices and modern breeding techniques.',
      image: '/images/project3.webp',
      link: '#project3',
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-green-900 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >
          Our Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-xl group"
              whileHover={{
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 },
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-3xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-green-100 mb-4 text-lg">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-green-300 text-lg font-semibold hover:text-green-400 transition duration-300"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.a
            href="/projects"
            className="bg-green-700 text-white px-10 py-4 rounded-xl text-xl font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 300 },
            }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
