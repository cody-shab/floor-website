import Link from 'next/link';
const Home = () => {
  return (
    <section
      className="bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center"
      style={{ backgroundImage: "url('/images/image1.png')" }}
    >
      <div className="container mx-auto text-white text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Premium Hardwood Floors <br></br> by Woodcove Flooring
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Discover the elegance and durability<br></br> of our premium hardwood flooring.
        </p>
        <Link href="/contact" className="mt-6 inline-block hover:text-gray-500 shadow-md shadow-slate-900 bg-white text-[#195D76] font-bold py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 rounded-none text-sm sm:text-base md:text-lg">Contact us</Link>
      </div>
    </section>
  );
};

export default Home;
