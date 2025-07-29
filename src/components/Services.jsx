import React from "react";
import ServiceImg from "/src/assets/Service.png";

const Services = () => {
  const services = [
    { name: "Layout Design" },
    { name: "Graphic Design" },
    { name: "Mobile Design" },
    { name: "App Design" },
    { name: "Web Design" },
    { name: "Landing Page" },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome</h1>
          <p className="text-xl md:text-2xl mb-8">
            We help you build <br />
            something amazing
          </p>
          <button className="bg-black text-white rounded-lg px-8 py-3 hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">We Provide This Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.name}
                </h3>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium underline hover:no-underline"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
