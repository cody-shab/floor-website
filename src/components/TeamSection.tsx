import React from 'react';
import Image from 'next/image';

const TeamSection: React.FC = () => {
  return (
    <section className="mb-0 pt-6 bg-[#E9F0F4]">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#104455] mt-8 font-normal">
          MEET THE <b>BUDDY TEAM</b>
        </h2>
        <p className="text-[#5B7078] font-normal mt-4 px-4 md:px-20 lg:px-48 xl:px-72">
          Our dedicated team offers expert craftsmanship and exceptional service, ensuring your flooring project is completed to the highest standards.
        </p>

        {/* Responsive Grid for Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-6">
          {/* Team Member 1 */}
          <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg">
            <Image
              src="/images/image6.png"
              alt="John Smith"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg md:text-xl font-semibold">John Smith</h3>
            <p className="text-sm md:text-base">Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg">
            <Image
              src="/images/image7.png"
              alt="Jane Doe"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg md:text-xl font-semibold">Jane Doe</h3>
            <p className="text-sm md:text-base">Lead Designer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg">
            <Image
              src="/images/image9.png"
              alt="Mike Johnson"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg md:text-xl font-semibold">Mike Johnson</h3>
            <p className="text-sm md:text-base">Installation Manager</p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg">
            <Image
              src="/images/image10.png"
              alt="Emily Brown"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg md:text-xl font-semibold">Emily Brown</h3>
            <p className="text-sm md:text-base">Customer Relations Specialist</p>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="mt-16 mb-0">
        <img
          src="/images/image12.png"
          alt="testimonials"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default TeamSection;


