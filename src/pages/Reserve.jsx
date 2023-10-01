import { useState } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Reserve = () => {
  const [bookingDate, setBookingDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [desiredCity, setDesiredCity] = useState("");

  const { state } = useLocation();
  const data = state.car;

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted with the following data:");
    console.log("Booking Date:", bookingDate);
    console.log("Return Date:", returnDate);
    console.log("Desired City:", desiredCity);
  };

  return (
    <MainLayout className="bg-lime-500">
      <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Make a Reservation</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="ride"
              className="block text-gray-700 font-bold mb-2"
            >
              Select Your Ride
            </label>
            <p>{data.name}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="bookingDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Booking Date
            </label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="returnDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="desiredCity"
              className="block text-gray-700 font-bold mb-2"
            >
              Desired City
            </label>
            <input
              type="text"
              id="desiredCity"
              name="desiredCity"
              value={desiredCity}
              onChange={(e) => setDesiredCity(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter Desired City"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg"
            >
              RESERVE NOW
            </button>
          </div>
        </form>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img className="h-40vh w-auto" src={data.photo} alt="background" />
      </div>
    </MainLayout>
  );
};

export default Reserve;
