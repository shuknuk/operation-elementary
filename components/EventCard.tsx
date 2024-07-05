import Link from 'next/link';

import React from 'react';

type Event = {
  date: string;
  title: string;
  image: string;
};

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="border p-4 rounded-md shadow-md w-1/4">
      <div className="bg-cover bg-center h-32 mb-4" style={{ backgroundImage: `url('${event.image}')` }}></div>
      <h3 className="text-orange-500 text-xl mb-2">{event.date}</h3>
      <p className="text-lg">{event.title}</p>
    </div>
  );
};

export default EventCard;