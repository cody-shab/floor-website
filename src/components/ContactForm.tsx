import React from 'react';
import Image from 'next/image';

const ContactForm: React.FC = () => {
  return (
    <section className="py-12 bg-[#083343] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side: Form */}
          <div className="px-4 sm:px-8 lg:px-0">
            <p className="text-center text-sm sm:text-base lg:text-lg">GET IN TOUCH</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10">
              Need Help? Let's Get in Touch
            </h2>
            <div className="bg-[#082733] border-2 border-[#356172] rounded-md pb-5 px-4 sm:px-6 lg:px-8">
              <form className="mt-6 max-w-lg mx-auto lg:mx-0 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="p-3 border-2 border-[#356172] rounded-md bg-[#031820] text-white w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="p-3 border-2 border-[#356172] rounded-md bg-[#031820] text-white w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 border-2 border-[#356172] rounded-md bg-[#031820] text-white w-full"
                />
                <textarea
                  placeholder="Message"
                  className="p-3 border-2 border-[#356172] rounded-md bg-[#031820] text-white w-full"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="bg-white text-[#083343] py-3 px-6 border-2 border-[#356172] rounded-md w-full sm:w-auto mx-auto lg:mx-0 mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          
          {/* Right side: Image */}
          <div className="flex justify-center lg:justify-end px-4 sm:px-8 lg:px-0">
            <Image 
              src="/images/image13.png"
              alt="Get in touch illustration"
              width={400}
              height={400}
              className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md pt-8 sm:pt-0"
            />
          </div>
    
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
