import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-green-50">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2020/05/16/11/55/cow-5177251_1280.jpg')] bg-cover bg-center opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-900 mb-6">
          Sustainable Cow Breeds
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-green-800 mb-8 max-w-2xl mx-auto">
          Discover eco-friendly cow breeds that promote a sustainable future for
          agriculture and the environment.
        </p>
        <div className="space-x-4">
          <a
            href="#about"
            className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300"
          >
            Learn More
          </a>
          <a
            href="#breeds"
            className="bg-transparent border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 hover:text-white transition duration-300"
          >
            Explore Breeds
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
