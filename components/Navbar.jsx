// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '#about' },
    { title: 'Project', link: '#projects' },
    { title: 'Contact', link: '#contact' },
  ];

  return (
    <nav className="bg-green-800 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold text-gray-200">
            <Link href="/">Cow Breeds</Link>
          </div>
          <div className="flex space-x-4">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.link} className="text-gray-200">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
