import React from 'react';

const ProjectsSection = () => {
  // Example project data
  const projects = [
    {
      id: 1,
      title: 'Eco-Friendly Dairy Farm',
      description:
        'A project focused on creating a zero-waste dairy farm using renewable energy and organic feed.',
      image: '/images/project1.webp', // Replace with your image path
      link: '#project1',
    },
    {
      id: 2,
      title: 'Sustainable Breeding Program',
      description:
        'Developing a breeding program that prioritizes animal welfare and environmental sustainability.',
      image: '/images/project2.webp', // Replace with your image path
      link: '#project2',
    },
    {
      id: 3,
      title: 'Community Farming Initiative',
      description:
        'Empowering local farmers with sustainable practices and modern breeding techniques.',
      image: '/images/project3.webp', // Replace with your image path
      link: '#project3',
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 text-center mb-12">
          Our Projects
        </h2>

        {/* Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg group"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full
                 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              {/* Text Overlay (Hidden by Default, Shown on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-green-100 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-green-300 font-semibold hover:text-green-400 transition duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
