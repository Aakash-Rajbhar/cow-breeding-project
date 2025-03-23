'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 ">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-green-900"
          >
            <p className="text-sm uppercase tracking-widest font-semibold text-green-700 mb-3">
              Contact Now
            </p>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Get in Touch <span className="text-green-600">Now</span>
            </h2>
            <p className="text-lg text-green-700 mb-8">
              Have any questions or inquiries? Feel free to reach out. We’re
              here to help!
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-1">
                  Phone
                </p>
                <p className="text-lg font-medium">+880 1234 56789</p>
                <p className="text-lg font-medium">+880 9876 54321</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-green-700 mb-1">
                  Email
                </p>
                <p className="text-lg font-medium">help@company.com</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-green-700 mb-1">
                  Address
                </p>
                <p className="text-lg font-medium">
                  Road No. 8, Gahna, Uttar Pradesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-2xl"
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 shadow-sm border border-gray-300"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 shadow-sm border border-gray-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 shadow-sm border border-gray-300"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full bg-gray-100 p-4 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 shadow-sm border border-gray-300"
                ></textarea>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
