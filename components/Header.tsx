import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">SciHigh</div>
      <nav className="space-x-4">
        <Link href="#"><span className="cursor-pointer">Community</span></Link>
        <Link href="#"><span className="cursor-pointer">Athletics</span></Link>
        <Link href="#"><span className="cursor-pointer">Calendar</span></Link>
        <Link href="#"><span className="cursor-pointer">Employment</span></Link>
        <Link href="#"><span className="cursor-pointer">Translate</span></Link>
        <Link href="#"><span className="cursor-pointer">Donate</span></Link>
      </nav>
    </header>
  );
};

export default Header;
