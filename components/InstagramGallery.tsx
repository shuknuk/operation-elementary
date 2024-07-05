import React from 'react';

const InstagramGallery = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">#GOHARD</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-300 h-40"></div>
        <div className="bg-gray-300 h-40"></div>
        <div className="bg-gray-300 h-40"></div>
        <div className="bg-gray-300 h-40"></div>
        <div className="bg-gray-300 h-40"></div>
        <div className="bg-gray-300 h-40"></div>
      </div>
      <div className="text-center mt-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Instagram</button>
      </div>
    </section>
  );
};

export default InstagramGallery;
