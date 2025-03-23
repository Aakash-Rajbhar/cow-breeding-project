import React from 'react';

const OurIntroduction = () => {
  return (
    <section id="about" className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image Card (Left Side) */}
          <div className="w-full md:w-1/3">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/01/20/17/cow-7629733_1280.jpg" // Replace with your image path
                alt="Sustainable Cow Breeds"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  Sustainable Future
                </span>
              </div> */}
            </div>
          </div>

          {/* Text Content (Right Side) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-green-800 mb-6">
              At <span className="font-semibold">Sustainable Cow Breeds</span>,
              we are dedicated to promoting eco-friendly and sustainable farming
              practices. Our mission is to provide high-quality, environmentally
              conscious cow breeds that support a greener future for
              agriculture.
            </p>
            <p className="text-lg text-green-800 mb-6">
              With years of expertise in sustainable farming, we prioritize
              animal welfare, organic feed, and zero-waste practices to ensure a
              healthier planet for future generations.
            </p>
            <a
              href="#learn-more"
              className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIntroduction;
