'use client';

import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Organic Milk',
    description:
      'Fresh, organic milk from our sustainably raised cows. Rich in nutrients and free from harmful additives.',
    image: '/images/product1.webp',
    link: '#buy-now',
  },
  {
    id: 2,
    title: 'Natural Cheese',
    description:
      'Handcrafted cheese made from organic milk. Perfect for a healthy and delicious diet.',
    image: '/images/product2.webp',
    link: '#buy-now',
  },
  {
    id: 3,
    title: 'Cow Dung Fertilizer',
    description:
      'Eco-friendly fertilizer made from cow dung. Enhances soil fertility and promotes sustainable farming.',
    image: '/images/product3.webp',
    link: '#buy-now',
  },
  {
    id: 4,
    title: 'Ghee (Clarified Butter)',
    description:
      'Pure and natural ghee made from organic milk. Ideal for cooking and traditional remedies.',
    image: '/images/product4.webp',
    link: '#buy-now',
  },
  {
    id: 5,
    title: 'Yogurt',
    description:
      'Creamy and probiotic-rich yogurt made from organic milk. Supports gut health and digestion.',
    image: '/images/product5.webp',
    link: '#buy-now',
  },
  {
    id: 6,
    title: 'Compost Manure',
    description:
      'High-quality compost manure for organic farming. Improves soil structure and nutrient content.',
    image: '/images/product6.webp',
    link: '#buy-now',
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-green-900 text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
      </motion.h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Product Image */}
            <div className="relative overflow-hidden h-56">
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Product Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-green-900 mb-3">
                {product.title}
              </h3>
              <p className="text-green-700 mb-6">{product.description}</p>
              <a
                href={product.link}
                className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition duration-300"
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
