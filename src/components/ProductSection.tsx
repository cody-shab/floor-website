import React from 'react';
import Image from 'next/image';

const ProductSection: React.FC = () => {
  return (
    <section className="pt-6 pb-14 bg-[#E9F0F4]">
      {/* Flex container for heading and product grid */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:space-x-8">
        {/* Left side - Heading and Description */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D53] text-center lg:text-left">
            Explore Our Hardwood Collections
          </h2>
          <p className="mt-4 text-base md:text-lg font-semibold text-center lg:text-left text-[#627D89] max-w-2xl">
            Browse our wide selection of high-quality hardwood flooring options. From classic to contemporary, Woodcove Flooring offers a variety of styles, colors, and finishes to suit any décor. Find the perfect floor for your space today.
          </p>
        </div>

        {/* Right side - Products Grid */}
        <div className="lg:w-1/2 grid gap-6 mt-8 sm:grid-cols-1 md:grid-cols-2">
          {/* Product 1 */}
          <div className="bg-white shadow-lg shadow-slate-600 p-4 rounded-lg">
            <Image
              src="/images/image2.png"
              alt="Karndean Korlok Select Texas White Ash"
              width={500}
              height={220}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-base font-semibold text-[#0F3D53] text-center lg:text-left">
              Karndean Korlok Select Texas White Ash Luxury Vinyl Plank
            </h3>
            <div className="mt-4 flex justify-center lg:justify-start bg-[#0F3D53] text-white px-4 py-2 w-20 rounded">
              $5.4
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-lg shadow-slate-600 p-4 rounded-lg">
            <Image
              src="/images/image3.png"
              alt="Mohawk RevWood Select Rare Vintage"
              width={500}
              height={220}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-base font-semibold text-[#0F3D53] text-center lg:text-left">
              Mohawk RevWood Select Rare Vintage CDL74 Laminate Plank
            </h3>
            <div className="mt-4 flex justify-center lg:justify-start bg-[#0F3D53] text-white px-4 py-2 w-20 rounded">
              $7.2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
