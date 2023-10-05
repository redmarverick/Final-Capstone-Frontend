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

  return (
    <MainLayout>
      {carsToReserve.status === "loading" && <div>Loading...</div>}
      {carsToReserve.status === "failed" && (
        <div className='text-red-500 font-bold text-center mt-4'>
          Error: An error occurred while fetching data.
        </div>
      )}
      {carsToReserve.status === "succeeded" && (
        <>
          <h1 className=' text-3xl uppercase text-gray-800 tracking-wider font-bold text-center md:text-5xl md:tracking-widest md:mt-12'>
            Reserve a Test Drive
          </h1>
          <h4 className='text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4'>
            Select a car to reserve
          </h4>
          <div className='p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {cars.map((car) => (
              <div
                key={car.id}
                className='bg-white p-4 rounded-lg shadow border-1'
              >
                <img
                  src={car.photo}
                  alt={car.name}
                  className='w-full h-48 object-cover'
                />
                <h2 className='text-xl mt-2'>{car.name}</h2>
                <Link
                  to={`/cars/details/${car.id}`}
                  className='text-blue-500 mt-2 block'
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default CarsToReserve;
