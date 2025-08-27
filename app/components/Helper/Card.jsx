import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { TbCurrencyRiyal } from "react-icons/tb";

const Card = ({ name, price, location, image }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* image */}
      <div className="w-full h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* content */}
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">{name}</h1>

        <h2 className="text-lg font-semibold flex items-center gap-1 text-green-600">
          {price}
          <TbCurrencyRiyal className="text-xl" />
        </h2>

        <h3 className="flex items-center gap-1.5 text-gray-600 text-sm">
          <IoLocationSharp className="text-red-500 text-lg" />
          {location}
        </h3>

        <button className="mt-3 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
          اطلب الآن
        </button>
      </div>
    </div>
  );
};

export default Card;
