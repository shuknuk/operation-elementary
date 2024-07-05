import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/logo/theHomePage.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-12">Operation Elementary</h1>
        <p className="mb-8">
        Enhancing the childhood experience
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
