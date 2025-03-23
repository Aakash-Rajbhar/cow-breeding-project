import React from 'react';

const ModernBreeding = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 text-center mb-12">
          Modern Breeding Techniques
        </h2>

        {/* Grid for Breeding Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Genetic Selection */}
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-700 text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-semibold text-green-900 mb-4">
              Genetic Selection
            </h3>
            <p className="text-green-800">
              We use advanced genetic selection to breed cows that are
              healthier, more productive, and better suited to sustainable
              farming practices.
            </p>
          </div>

          {/* Feature 2: Data-Driven Breeding */}
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-700 text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-semibold text-green-900 mb-4">
              Data-Driven Breeding
            </h3>
            <p className="text-green-800">
              Our breeding programs are guided by data analytics to ensure
              optimal outcomes for both the animals and the environment.
            </p>
          </div>

          {/* Feature 3: Eco-Friendly Practices */}
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-700 text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold text-green-900 mb-4">
              Eco-Friendly Practices
            </h3>
            <p className="text-green-800">
              We integrate eco-friendly practices into our breeding programs,
              reducing the environmental footprint of our operations.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <a
            href="#learn-more"
            className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300"
          >
            Discover Our Breeding Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModernBreeding;
