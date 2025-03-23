'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '#about' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-900">
            <Link href="/">Cow Breeds</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="text-lg text-gray-800 hover:text-green-600 transition-all duration-300 font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-900"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[66px] left-0 w-full bg-white/80 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-4 py-4 px-6 ">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="text-lg text-gray-800 hover:text-green-600 transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
