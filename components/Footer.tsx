
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Operation Elementary</h2>
            <p>Contact: contact@resoapfoundation.org</p>
            <p>© 2022 Operation Elementary. All Rights Reserved.</p>
            <p>Operation Elementary is a 501(c) (3) non-profit organization.</p>
            <p>EIN #93-3580549</p>
          </div>
          <nav className="space-x-4">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Initiatives</a>
            <a href="#">Projects</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
