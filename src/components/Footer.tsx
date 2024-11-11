import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] px-6 md:px-14 pt-8 pb-8 text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo & About */}
        <div className="space-y-4 text-center md:text-left">
          <Image 
            src="/images/logo.png" 
            alt="Woodcove Flooring Logo" 
            width={48} 
            height={48} 
            className="mx-auto md:mx-0 mb-3"
          />
          <h3 className="text-lg sm:text-xl font-bold">ABOUT COMPANY</h3>
          <p className="text-sm sm:text-base text-[#737373]">
            Woodcove Flooring offers premium hardwood flooring solutions with a focus on quality and craftsmanship. Our expert team is dedicated to transforming your spaces with beautiful, durable floors. Experience the difference with Woodcove Flooring.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-[#737373]">
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div className="pt-6 md:pt-14 text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-bold">Our Services</h3>
          <ul className="mt-4 space-y-1 text-sm sm:text-base">
            <li><a href="#" className="text-[#737373] hover:text-white">Hardwood Flooring</a></li>
            <li><a href="#" className="text-[#737373] hover:text-white">Hardwood</a></li>
            <li><a href="#" className="text-[#737373] hover:text-white">Laminate</a></li>
            <li><a href="#" className="text-[#737373] hover:text-white">Vinyl</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="pt-6 md:pt-14 text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-bold">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            <li><a href="#" className="text-[#737373] hover:text-white">About us</a></li>
            <li><a href="#" className="text-[#737373] hover:text-white">Our team</a></li>
            <li><a href="#" className="text-[#737373] hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="text-[#737373] hover:text-white">Contact us</a></li>
            <li><a href="#" className="text-[#737373] hover:text-white">Terms of service</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="pt-6 md:pt-14 text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-bold">Newsletter</h3>
          <p className="mt-4 text-sm sm:text-base text-[#737373]">Stay updated on flooring trends and exclusive offers. Subscribe to the Woodcove Flooring newsletter!</p>
          <input
            type="text"
            placeholder="Your email"
            name="email"
            id="email"
            className="w-full border border-[#356172] bg-[#171717] text-white px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#356172] text-sm sm:text-base"
          />
          <button type="submit" className="bg-[#083343] w-full text-white py-2 mt-4 rounded-md hover:bg-[#0a4a5e] text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-[#737373] text-xs sm:text-sm">
        &copy; 2024 Woodcove Flooring. All Rights Reserved. <a href="#" className="hover:text-white">Naimur Rahman Hira</a>
      </div>
    </footer>
  );
};

export default Footer;
