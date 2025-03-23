'use client'; // Required for Next.js 13+ (app directory)

import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dynamically import Slider with SSR disabled
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, CompanyX',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    text: 'This service is amazing! I highly recommend it to anyone looking for quality and professionalism.',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Head, BrandY',
    image:
      'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
    text: 'A fantastic experience! The team is incredibly talented and dedicated.',
  },
  {
    name: 'Alice Johnson',
    role: 'Founder, StartupZ',
    image:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
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
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Clients Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gray-100 rounded-lg shadow-lg"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <p className="text-lg text-gray-700 italic">"{testimonial.text}"</p>
            <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSection;
