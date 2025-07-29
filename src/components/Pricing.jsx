import React from 'react';

const Pricing = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Pricing is the process whereby a business sets the price at which it will sell its products and services,
            and may be part of the business's marketing plan.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Tier - Blue Theme */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100">
            <div className="bg-blue-50 px-8 py-6 border-b border-blue-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-1">Basic</h2>
              <p className="text-blue-600">Start with a first step</p>
            </div>
            <div className="p-8">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Prototype</h3>
                    <p className="text-gray-600 mt-1">A simple plan for simple needs. Use one of our designs to create a contract.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">App Design</h3>
                    <p className="text-gray-600 mt-1">A simple plan for simple needs. Use one of our designs to create a contract.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Web Design</h3>
                    <p className="text-gray-600 mt-1">A simple plan for simple needs. Use one of our designs to create a contract.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Interaction</h3>
                    <p className="text-gray-600 mt-1">A simple plan for simple needs. Use one of our designs to create a contract.</p>
                  </div>
                </li>
              </ul>
              <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                Choose Basic
              </button>
            </div>
          </div>

          {/* Standard Tier - Green Theme */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100">
            <div className="bg-green-50 px-8 py-6 border-b border-green-100">
              <h2 className="text-2xl font-bold text-green-800 mb-1">Standard</h2>
              <p className="text-green-600">Start with a first step</p>
            </div>
            <div className="p-8">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Prototype</h3>
                    <p className="text-gray-600 mt-1">Basic digital contract management so you can send, sign and organize documents.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">App Design</h3>
                    <p className="text-gray-600 mt-1">Basic digital contract management so you can send, sign and organize documents.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Web Design</h3>
                    <p className="text-gray-600 mt-1">Basic digital contract management so you can send, sign and organize documents.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Interaction</h3>
                    <p className="text-gray-600 mt-1">Basic digital contract management so you can send, sign and organize documents.</p>
                  </div>
                </li>
              </ul>
              <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                Choose Standard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;