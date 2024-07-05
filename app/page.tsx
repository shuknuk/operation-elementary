import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';
import InstagramGallery from '../components/InstagramGallery';
import Newsroom from '../components/Newsroom';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <UpcomingEvents />
      <Newsroom />
      <InstagramGallery />
      <Footer />
    </>
  );
};

export default Home;
