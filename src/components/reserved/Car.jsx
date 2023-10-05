import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../redux/reservations/reservationsSlice";

const Car = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteReservation(data.id));
    closeModal();
  };

  return (
    <article className='car flex flex-col md:flex-row items-center justify-start text-center bg-orange rounded-xl px-4 border-2'>
      <div className='car-image w-45 m-4 relative flex flex-col justify-center md:w-56 md:h-56'>
        {data.car.photo ? (
          <img
            src={data.car.photo}
            alt={`${data.car.name}`}
            className='rounded-full w-32 h-32 md:w-48 md:h-48 '
          />
        ) : (
          <img
            src='https://dummyimage.com/70x70'
            className='rounded-full w-32 h-32 md:w-52 md:h-52'
            alt='car_image'
          />
        )}
      </div>

      <div className='info-container text-gray-700 mx-2 flex flex-col w-72 md:wd-0 gap-4 justify-start md:w-80'>
        <h1 className='name text-xl font-semibold md:text-2xl md:font-bold'>
          {data.car.name}
        </h1>
        <hr className='w-24 self-center border-t-white md:w-52 md:my-2' />
        <p className='description font-medium'>{`${data.city}`}</p>
        <p className='description text-sm font-light'>{data.date}</p>
      </div>
      <div className='social mt-8 mb-4 flex gap-4 rounded-full bg-white bg-opacity-50 py-2 px-6'>
        <button type='button' onClick={openModal}>
          <img src='delete.svg' alt='delete' className='w-8 md:w-10' />
        </button>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          {/* Background with blur effect */}
          <div className='fixed inset-0 backdrop-blur-sm' />

          {/* Modal content */}
          <div className='border-2 modal-content bg-white w-80 p-4 md:p-20 rounded-lg shadow-lg relative'>
            <p className='text-lg font-semibold mb-4'>
              Are you sure you want to cancel this reservation?
            </p>
            <div className='modal-buttons flex justify-center'>
              <button
                type='button'
                onClick={handleDelete}
                className='btn-confirm bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg mr-2'
              >
                Confirm
              </button>
              <button
                type='button'
                onClick={closeModal}
                className='btn-cancel bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded-lg'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

Car.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    car: PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Car;
