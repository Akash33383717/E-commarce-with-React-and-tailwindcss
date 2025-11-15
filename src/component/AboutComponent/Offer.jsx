import React from 'react';

// The data structure provided by the user
const featuresData = [
  {
    "id": 1,
    "title": "Best Prices & Offers",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    "icon_url": "https://i.ibb.co.com/23WpH6By/icon.png"
  },
  {
    "id": 2,
    "title": "Wide Assortment",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    "icon_url": "https://i.ibb.co.com/prkTKR14/icon-1.png"
  },
  {
    "id": 3,
    "title": "Free Delivery",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    "icon_url": "https://i.ibb.co.com/sJMN38Zq/icon-2.png"
  },
  {
    "id": 4,
    "title": "Easy Returns",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    "icon_url": "https://i.ibb.co.com/svMLZHML/icon-3.png"
  },
  {
    "id": 5,
    "title": "100% Satisfaction",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    "icon_url": "https://i.ibb.co.com/jpn7kTh/icon-4.png"
  },
  {
    "id": 6,
    "title": "Great Daily Deal",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    "icon_url": "https://i.ibb.co.com/Q7fWbSdM/icon-6-svg.png"
  }
];

// Feature Card Component
const FeatureCard = ({ title, description, icon_url }) => {
  return (
    <div 
      className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 
                 flex flex-col items-center text-center transition duration-300 ease-in-out 
                 hover:shadow-xl hover:border-green-300 min-h-[300px]"
    >
      {/* Icon/Image */}
      <div className="mb-4">
        {/*
          The original icons appear to be SVG/vector graphics with specific line colors (green/yellow-green).
          We use a standard 64px image tag for the provided URLs.
        */}
        <img 
          src={icon_url} 
          alt={`${title} Icon`} 
          className="w-16 h-16 object-contain mx-auto"
          // Fallback image in case the provided URL fails (using a placeholder for visual stability)
          onError={(e) => {
            e.target.onerror = null; // Prevents looping
            e.target.src = "https://placehold.co/64x64/D1FAE5/065F46?text=Icon";
          }}
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 flex-grow">
        {description}
      </p>
      <div className='text-green-600'>
        <button>Read more</button>
      </div>
    </div>
  );
};

// Main App Component
const Offer = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto py-12">
        {/* Optional Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            What We Provide?
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Discover the exceptional benefits we offer to enhance your shopping experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresData.map(feature => (
            <FeatureCard 
              key={feature.id} 
              title={feature.title} 
              description={feature.description} 
              icon_url={feature.icon_url} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;