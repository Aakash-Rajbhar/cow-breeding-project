'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '#about' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact' },
  ];

  const socialLinks = [
    {
      title: 'Facebook',
      link: 'https://facebook.com',
      icon: 'fab fa-facebook',
    },
    { title: 'Twitter', link: 'https://twitter.com', icon: 'fab fa-twitter' },
    {
      title: 'Instagram',
      link: 'https://instagram.com',
      icon: 'fab fa-instagram',
    },
    {
      title: 'LinkedIn',
      link: 'https://linkedin.com',
      icon: 'fab fa-linkedin',
    },
  ];

  return (
    <footer className="bg-green-900 text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="text-gray-400 hover:text-green-300 transition-all duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-300">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="font-semibold text-white">Address:</span> 123
                Green Farm Road, Eco City
              </li>
              <li>
                <span className="font-semibold text-white">Phone:</span> +1
                (123) 456-7890
              </li>
              <li>
                <span className="font-semibold text-white">Email:</span>{' '}
                info@sustainablecowbreeds.com
              </li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-300">Follow Us</h3>
            <ul className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-300 transition-all duration-300 text-3xl"
                  >
                    <i className={`${link.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-300">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and projects.
            </p>
            <form className="flex bg-white rounded-lg overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-gray-700 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-green-800 mt-12 pt-6 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Sustainable Cow Breeds. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
