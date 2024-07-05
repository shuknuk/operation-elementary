import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/placeholder-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">We Believe</h1>
        <p className="mb-8">Our city will grow stronger when every New Orleanian can contribute to our wellbeing and innovation through the tools of math and science.</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;