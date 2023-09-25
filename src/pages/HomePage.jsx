import React from "react";
import car from "../assets/images/car.png";
import logo from "../assets/images/logo.png";

const HomePage = () => (
  <div className="min-h-screen flex flex-col overflow-hidden relative bg-amber-500">
    {/* Header */}
    <header className="p-4 flex justify-between items-center">
      {/* Logo (Top Left) */}
      <div className="text-white text-2xl font-bold flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-20 mr-2"
        />
      </div>

      {/* SIGNUP Button (Top Right) */}
      <button
        type="button"
        className="bg-white text-amber-700 px-4 py-2 rounded-full"
      >
        SIGNUP
      </button>
    </header>

    {/* Main Content */}
    <main className=" flex-grow text-center z-10">
      <h2 className=" text-4xl text-white font-semibold mb-4">CAR BOOKING APP</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          className="px-4 py-2 border border-gray-300 rounded-full w-64 mt-20"
        />
      </div>
      <button
        type="button"
        className="bg-lime-400 text-white px-4 py-2 rounded-md"
      >
        SIGNIN
      </button>
    </main>
    <div className="absolute inset-0 flex items-center justify-center">
      <img className="h-40vh w-auto" src={car} alt="background" />
    </div>
  </div>
);

export default HomePage;
