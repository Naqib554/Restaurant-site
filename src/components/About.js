import React from 'react';
import teamMembers from '../data/team.json';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-800 py-16 px-6 sm:px-12 lg:px-20 max-w-screen-xl mx-auto">

      {/* Our Story */}
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-extrabold text-yellow-600 mb-6 drop-shadow-md">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          Born from a passion for flavor and tradition, <strong className="text-yellow-700">Tention Free</strong> started as a dream to offer delicious, comforting meals to everyone. Every recipe reflects our journey and love for food.
        </p>
      </div>

      {/* Our Mission */}
      <div className="bg-yellow-200/60 backdrop-blur-md rounded-3xl shadow-xl px-10 py-12 mb-20 border border-yellow-300">
        <h3 className="text-4xl font-bold text-center text-yellow-900 mb-6">Our Mission</h3>
        <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto">
          To bring joy and satisfaction through fresh ingredients, warm hospitality, and unforgettable taste. We cook with care so that every bite feels like home.
        </p>
      </div>

      {/* Meet Our Team */}
      <div className="text-center">
        <h3 className="text-4xl font-bold text-yellow-800 mb-12">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border border-yellow-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-yellow-500 shadow-md"
              />
              <h4 className="text-xl font-semibold text-yellow-700">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
