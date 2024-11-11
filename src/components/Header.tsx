import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-[#195D76] text-blue-50">
      <div className="container mx-auto flex justify-between items-center px-3 py-2 md:py-4">

        {/* Logo Section */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <Image 
            src="/images/logo.png" 
            alt="Woodcove Flooring Logo" 
            width={48} 
            height={48} 
            className="mb-2"
          />
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-lg font-medium hover:text-gray-400">Home</Link>
          <Link href="/products" className="text-lg font-medium hover:text-gray-400">Products</Link>
          <Link href="/about" className="text-lg font-medium hover:text-gray-400">About</Link>
          <Link href="/team-and-testimonials" className="text-lg font-medium hover:text-gray-400">Team & Testimonials</Link>
          <Link href="/contact" className="text-lg font-medium hover:text-gray-400">Contact Us</Link>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-xl">
            <i className="fas fa-bars"></i> {/* Replace with hamburger icon if needed */}
          </button>
        </div>

      </div>

      {/* Mobile Menu (Hidden by default, will be displayed on small screens) */}
      <div className="md:hidden bg-[#195D76] text-blue-50 space-y-3 px-4 py-3">
        <Link href="/" className="block text-lg font-medium hover:text-gray-400 text-center">Home</Link>
        <Link href="/products" className="block text-lg font-medium hover:text-gray-400 text-center">Products</Link>
        <Link href="/about" className="block text-lg font-medium hover:text-gray-400 text-center">About</Link>
        <Link href="/team-and-testimonials" className="block text-lg font-medium hover:text-gray-400 text-center">Team & Testimonials</Link>
        <Link href="/contact" className="block text-lg font-medium hover:text-gray-400 text-center">Contact Us</Link>
      </div>

    </header>
  );
};

export default Header;
