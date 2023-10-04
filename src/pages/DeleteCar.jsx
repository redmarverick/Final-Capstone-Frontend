import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import { fetchAllCars, deleteCar } from "../redux/cars/carsSlice";

const DeleteCar = () => {
  const dispatch = useDispatch();
  const carsToDelete = useSelector((state) => state.cars);
  const { cars } = carsToDelete;

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  if (!cars || carsToDelete.status === "loading") {
    return <div>Loading...</div>;
  }

  if (carsToDelete.status === "failed") {
    return <div>Error: An error occurred while fetching data.</div>;
  }

  const handleDelete = (id) => {
    dispatch(deleteCar(id)).then((response) => {
      if (response.payload) {
        dispatch(fetchAllCars());
      }
    });
  };

  return (
    <MainLayout>
      <h1>Choose car you wsih to delete.</h1>
      <div className="grid grid-cols-4 gap-2">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={car.photo}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl mt-2">{car.name}</h2>
            <button type="button" onClick={() => handleDelete(car.id)}>
              <img src="delete.svg" alt="delete" className="w-8 md:w-10" />
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default DeleteCar;
