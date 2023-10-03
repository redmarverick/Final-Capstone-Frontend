import { useState } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Reserve = () => {
  const [bookingDate, setBookingDate] = useState("");
  const [desiredCity, setDesiredCity] = useState("");

  const { state } = useLocation();
  const data = state.car;

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("id", data.id);
  };

  return (
    <MainLayout>
      <div className='relative h-screen'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <img
            className='absolute inset-0 object-fit-cover w-full h-full'
            src={data.photo}
            alt='background'
          />
          <div className='absolute inset-0 bg-green-500 opacity-50' />
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white'>
            <h1 className='text-xl font-semibold mb-4'>Make a Reservation</h1>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='ride'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Select Your Ride
                </label>
                <p>{data.name}</p>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='bookingDate'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Booking Date
                </label>
                <input
                  type='date'
                  id='bookingDate'
                  name='bookingDate'
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className='w-full p-2 border rounded focus:outline-none focus:border-blue-500'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='desiredCity'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Desired City
                </label>
                <input
                  type='text'
                  id='desiredCity'
                  name='desiredCity'
                  value={desiredCity}
                  onChange={(e) => setDesiredCity(e.target.value)}
                  className='w-full p-2 border rounded focus:outline-none focus:border-blue-500'
                  placeholder='Enter Desired City'
                />
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
                >
                  RESERVE NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reserve;
