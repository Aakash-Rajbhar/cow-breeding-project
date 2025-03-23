import Image from 'next/image';
import React from 'react';

const ProjectsPage = () => {
  // Example project data (10-12 projects)
  const projects = [
    {
      id: 1,
      title: 'Eco-Friendly Dairy Farm',
      description:
        'A project focused on creating a zero-waste dairy farm using renewable energy and organic feed.',
      image: '/images/project1.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 2,
      title: 'Sustainable Breeding Program',
      description:
        'Developing a breeding program that prioritizes animal welfare and environmental sustainability.',
      image: '/images/project2.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 3,
      title: 'Community Farming Initiative',
      description:
        'Empowering local farmers with sustainable practices and modern breeding techniques.',
      image: '/images/project3.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 4,
      title: 'Organic Feed Development',
      description:
        'Researching and producing organic feed to improve cow health and reduce environmental impact.',
      image: '/images/project4.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 5,
      title: 'Renewable Energy for Farms',
      description:
        'Installing solar panels and wind turbines to power farms with clean, renewable energy.',
      image: '/images/project5.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 6,
      title: 'Water Conservation Project',
      description:
        'Implementing advanced irrigation systems to conserve water and improve farm efficiency.',
      image: '/images/project6.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 7,
      title: 'Animal Welfare Program',
      description:
        'Ensuring the highest standards of care and comfort for our cows through innovative practices.',
      image: '/images/project7.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 8,
      title: 'Zero-Waste Manure Management',
      description:
        'Transforming cow manure into natural fertilizers to promote sustainable farming.',
      image: '/images/project8.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 9,
      title: 'Educational Workshops',
      description:
        'Hosting workshops to educate farmers and communities about sustainable farming practices.',
      image: '/images/project9.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 10,
      title: 'Biodiversity Enhancement',
      description:
        'Planting native trees and creating habitats to enhance biodiversity on farms.',
      image: '/images/project10.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 11,
      title: 'Climate-Resilient Crops',
      description:
        'Developing and promoting crops that are resilient to climate change and extreme weather.',
      image: '/images/project11.webp', // Replace with your image path
      link: '#donate',
    },
    {
      id: 12,
      title: 'Youth Farming Program',
      description:
        'Engaging young people in sustainable farming through training and mentorship programs.',
      image: '/images/project12.webp', // Replace with your image path
      link: '#donate',
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Page Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 text-center mb-12">
          Our Projects
        </h2>

        {/* Grid for Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={800}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-green-800 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
                >
                  Contribute Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
