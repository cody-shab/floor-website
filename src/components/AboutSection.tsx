import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D53] mb-4">
            A Trendy Woodwork for Trendy Home
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#627D89] mb-6">
            We are committed to providing our customers with exceptional service while offering our employees the best training and a working environment in which they can excel best of all places.
          </p>
          <a href="#" className="inline-block bg-[#0F3D53] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-none font-semibold text-sm sm:text-base">
            Read more
          </a>
        </div>

        {/* Right Side: Image with Overlay */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-start w-full h-64 sm:h-80 md:h-96">
          <Image 
            src="/images/image5.png" 
            alt="Woodwork Image" 
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

