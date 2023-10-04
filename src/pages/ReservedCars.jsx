import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import { fetchAllReservations } from "../redux/reservations/reservationsSlice";
import Car from "../components/reserved/Car";

const ReservedCars = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  console.log(reservations);

  useEffect(() => {
    dispatch(fetchAllReservations());
  }, [dispatch]);

  return (
    <MainLayout>
      <h1 className='text-3xl uppercase text-gray-800 tracking-wider font-bold text-center mt-6 md:text-5xl md:tracking-widest md:mt-12'>
        Reserved Cars
      </h1>
      <h4 className='text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4'>
        Here you can see all your reservations
      </h4>
      <hr className='w-24 self-center m-4 border-t-black md:w-52 md:m-8' />
      {reservations.length === 0 && (
        <h4 className='text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4'>
          No reservations yet
        </h4>
      )}
      <div className='max-w-min w-[100%] self-center'>
        <div className='cars-container m-2 flex flex-col gap-4 md:mt-8'>
          {/* eslint-disable-next-line */}
          {reservations &&
            reservations.cars_reservations
            && reservations.cars_reservations.map((car) => (
              <Car data={car} key={car.id} />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ReservedCars;
