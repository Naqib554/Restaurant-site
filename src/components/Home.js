import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate('/menu');
  };

  return (
    <div
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551218808-94e220e084d2')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Our Restaurant</h1>
        <p className="text-lg md:text-xl mb-6">Delicious food made with love & served with care.</p>
        <button
          onClick={handleViewMenu}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Home;
