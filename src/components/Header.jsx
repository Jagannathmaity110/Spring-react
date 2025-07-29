import React from 'react';
import portfolioImg from '/src/assets/protfolio.png'; 

const Header = () => {
  return (
    <header className="font-sans bg-[#F6DA6F] min-h-screen px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-24">
          <div className="text-3xl font-bold text-gray-900">SPRING</div>
          <nav className="hidden md:flex gap-10 items-center">
            <a href="#home" className="text-gray-900 hover:text-gray-700">Home</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-700">Contact</a>
            <a href="#blog" className="text-gray-900 hover:text-gray-700">Blog</a>
            <a href="#support" className="text-gray-900 hover:text-gray-700">Support</a>
            <a href="#about" className="text-gray-900 hover:text-gray-700">About</a>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Get Start
            </button>
          </nav>
        </div>

        {/* Hero Section with Image */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              We Build Experiences For Your Clients
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-lg">
              Revolver Template is a professional webflow template with multiple sections that you can fully customize
            </p>
            <p className="text-lg text-gray-900 font-medium mb-10">quickmatch.di@gmail.com</p>
            <button className="bg-gray-900 text-white px-10 py-4 rounded-lg text-lg hover:bg-gray-800 transition shadow-lg">
              Get Free Info
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img 
              src={portfolioImg} 
              alt="Creative design work" 
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Services Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-24">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md max-w-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Layout Design</h3>
            <p className="text-gray-600 mb-6">Curabitur auctor metus et cursus feugiat phaseillus tempus nibh non.</p>
            <a href="#" className="font-bold text-gray-900 hover:underline flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md max-w-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Graphic Designer</h3>
            <p className="text-gray-600 mb-6">Curabitur auctor metus et cursus feugiat phaseillus tempus nibh non.</p>
            <a href="#" className="font-bold text-gray-900 hover:underline flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;