import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { fetchAllCars } from "../redux/cars/carsSlice";

const CarsToReserve = () => {
  const dispatch = useDispatch();
  const carsToReserve = useSelector((state) => state.cars);
  const { cars } = carsToReserve;

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  if (!cars || carsToReserve.status === "loading") {
    return <div>Loading...</div>;
  }

  if (carsToReserve.status === "failed") {
    return <div>Error: An error occurred while fetching data.</div>;
  }

  return (
    <MainLayout>
      <h1>Choose car you wsih to reserve.</h1>
      <div className="grid grid-cols-4 gap-2">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={car.photo}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl mt-2">{car.name}</h2>
            <Link
              to={`/cars/details/${car.id}`}
              className="text-blue-500 mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default CarsToReserve;
