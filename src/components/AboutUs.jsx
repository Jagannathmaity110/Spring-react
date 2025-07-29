import React from "react";
import TokenImg from "/src/assets/token.png";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#C4C4C4]">
      <div className="max-w-7xl mx-auto">
        {/* Flex container for side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2">
            <div className="text-left mb-8"> {/* Changed from text-center */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More About Our Services With Transfer Money
              </h2>
              <p className="text-xl text-gray-600">
                Product offer from services in that there's no obligation beyond the
                transaction, our digital products are designed to create value and
                convince through quality.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="bg-gray-900 text-white hover:bg-gray-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Get the App
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg border border-amber-600 font-medium transition-colors">
                How It Works
              </button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="lg:w-1/2">
            <img
              src={TokenImg}
              alt="Transfer money"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;