import React from 'react';

const news = [
  { title: 'Chamber Chat', date: 'August 8, 2023' },
  { title: 'Advocates Board Meeting', date: 'June 16, 2023' },
  { title: 'Science Fair 2021 Results', date: 'January 30, 2023' },
  { title: 'COVID Testing', date: 'January 27, 2023' },
  { title: 'Procedure for Parent Board Membership', date: 'January 26, 2023' },
];

const Newsroom = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Newsroom</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index} className="mb-2">
            <h3 className="text-xl">{item.title}</h3>
            <p className="text-gray-500">{item.date}</p>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">More News</button>
      </div>
    </section>
  );
};

export default Newsroom;
