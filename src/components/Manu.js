import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Chicken Biryani', category: 'Lunch', price: 300 },
  { id: 2, name: 'Beef Karahi', category: 'Dinner', price: 500 },
  { id: 3, name: 'Paratha Roll', category: 'Snacks', price: 150 },
  { id: 4, name: 'Chana Chaat', category: 'Snacks', price: 120 },
  { id: 5, name: 'Tikka Boti', category: 'Dinner', price: 450 },
];

const Menu = () => {
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = category === 'All' || item.category === category;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-600">Our Menu</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <div className="flex flex-wrap gap-2 justify-center">
          {['All', 'Lunch', 'Dinner', 'Snacks'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category === cat
                  ? 'bg-red-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-red-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No items found.</p>
        ) : (
          filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white border rounded-xl shadow hover:shadow-xl p-6 transition transform hover:scale-[1.02]"
            >
              <h2 className="text-xl font-semibold text-red-600 mb-1">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{item.category}</p>
              <p className="text-lg font-bold text-gray-800">Rs {item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
