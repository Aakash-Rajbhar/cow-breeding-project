'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, CompanyX',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    text: 'This service is amazing! I highly recommend it to anyone looking for quality and professionalism.',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Head, BrandY',
    image:
      'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    text: 'A fantastic experience! The team is incredibly talented and dedicated.',
  },
  {
    name: 'Alice Johnson',
    role: 'Founder, StartupZ',
    image:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    text: 'Top-notch quality and service. I will definitely use this again.',
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section>
      <div className="max-w-4xl mx-auto py-20">
        <motion.h2
          className="text-5xl font-extrabold text-center text-green-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          What Our Clients Say
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="text-center py-12 px-8 bg-white rounded-xl "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover self-center rounded-full mb-4 border-4 border-green-500 shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold mt-4 text-green-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                  <p className="text-lg text-gray-700 italic max-w-2xl">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
