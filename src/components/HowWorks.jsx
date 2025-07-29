import React from "react";
import PersonOneImg from "../assets/person1.png";
import PersonTwoImg from "../assets/person2.png";

const HowWorks = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#77B7E9]">
      <div className="max-w-6xl mx-auto">
        {/* First Value Card */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Not just your regular design agency{" "}
            </h2>
            <p className="text-lg  text-gray-600 mb-8">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan. Quis ipsum suspendisse ultrices gravida. Risus
              commodo viverra maecenas accumsan.
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors font-medium">
              Learn more{" "}
            </button>
          </div>
          <div className="lg:w-1/3 ">
            <img src={PersonOneImg} alt="First Person Img" />
          </div>
        </div>

        {/* Second Value Card */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We design products that user love{" "}
            </h2>
            <p className="text-lg  text-gray-600 mb-8">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan. Quis ipsum suspendisse ultrices gravida. Risus
              commodo viverra maecenas accumsan.
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors font-medium">
              Learn more
            </button>
          </div>
          <div className="lg:w-1/3 ">
          <img
          src={PersonTwoImg}
          alt="Second Person Img "/></div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
