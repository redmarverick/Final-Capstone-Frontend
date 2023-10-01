import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Car = ({ car }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
      <Link to={`/cars/details/${car.id}`}>
        <img src={car.photo} alt={car.name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">{car.name}</h1>
        <p className="text-gray-600">{car.description}</p>
      </div>
    </div>
  </div>
);

Car.propTypes = {
  car: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Car;
