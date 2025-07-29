import React from "react";

const CTAFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a project in mind ?
          </h2>
          <p className="text-2xl text-gray-300 mb-8 font-semibold">
            Let's get to work
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-lg font-medium transition-colors">
            Get the app
          </button>
        </div>
        {/* Footer Links */}
        <div className="grid grid-cols-4 md;grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                "Features",
                "Why Sequence",
                "Technology",
                "Security",
                "Pricing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solution</h3>
            <ul className="space-y-2">
              {[
                "Procurement",
                "Sales",
                "Legal",
                "Medium Businesses",
                "Enterprises",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["Careers", "Case study"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {["Facebook", "Instagram","Twitter"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className=" mt-12  pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Jagannath Maity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
