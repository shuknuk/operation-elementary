import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">SciHigh</div>
      <nav className="space-x-4">
        <a href="#" className="cursor-pointer">Community</a>
        <a href="#" className="cursor-pointer">Athletics</a>
        <a href="#" className="cursor-pointer">Calendar</a>
        <a href="#" className="cursor-pointer">Employment</a>
        <a href="#" className="cursor-pointer">Translate</a>
        <a href="#" className="cursor-pointer">Donate</a>
      </nav>
    </header>
  );
};

export default Header;
