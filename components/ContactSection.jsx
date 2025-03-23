// Contact.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className=" py-16 px-4 md:px-8 text-green-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-sm uppercase tracking-wider mb-2">CONTACT NOW</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              GET IN TOUCH NOW
            </h2>
            <p className="text-green-800 mb-10">
              Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse
              platea dictumst. Duis porta quam ut finibus ultrices.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider mb-3">PHONE</p>
                <p className="mb-1">+880123456789</p>
                <p>+880987654321</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider mb-3">EMAIL</p>
                <p>needhelp@company.com</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider mb-3">ADDRESS</p>
                <p>Road No. 8, Gahna, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-neutral-700 border-[1px] border-neutral-300 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-neutral-700 border-[1px] border-neutral-300 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-neutral-700 border-[1px] border-neutral-300 placeholder-gray-400"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full bg-gray-100 p-4 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-neutral-700 border-[1px] border-neutral-300 placeholder-gray-400"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-black font-medium py-3 px-8 rounded-md"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
