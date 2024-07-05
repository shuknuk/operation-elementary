import React from 'react';
import EventCard from './EventCard';

const events = [
  { date: '28 Sep 2023', title: 'Advocates Board Meeting', image: '/placeholder-event1.jpg' },
  { date: '19 Jun 2024', title: 'S.T.E.P Juneteenth No School', image: '/placeholder-event2.jpg' },
  { date: '05 Aug 2024', title: 'Freshmen Orientation', image: '/placeholder-event3.jpg' },
  { date: '06 Aug 2024', title: 'Sophomore Orientation', image: '/placeholder-event4.jpg' },
];

const UpcomingEvents = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="flex space-x-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">View Calendar</button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
