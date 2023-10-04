import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import { reserveCar } from "../redux/reservations/reservationsSlice";

const Reserve = () => {
  const dispatch = useDispatch();
  const [bookingDate, setBookingDate] = useState("");
  const [desiredCity, setDesiredCity] = useState("");
  const [dateError, setDateError] = useState("");
  const [cityError, setCityError] = useState("");
  const userId = useSelector((state) => state.user.user.id);
  const [reservationMessage, setReservationMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  const validateForm = () => {
    let valid = true;
    if (!bookingDate) {
      setDateError("Booking date is required");
      valid = false;
    } else {
      setDateError("");
    }
    if (!desiredCity) {
      setCityError("Desired city is required");
      valid = false;
    } else {
      setCityError("");
    }
    return valid;
  };

  // eslint-disable-next-line
  const { state } = useLocation();
  const data = state.car;

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const currentDate = new Date();
      const selectedDate = new Date(bookingDate);

      if (selectedDate < currentDate) {
        setDateError("Booking date cannot be in the past");
        return;
      }

      const reservationData = {
        reservation: {
          user_id: userId,
          car_id: data.id,
          date: bookingDate,
          city: desiredCity,
        },
      };

      dispatch(reserveCar(reservationData)).then((resultAction) => {
        if (reserveCar.fulfilled.match(resultAction)) {
          setReservationMessage("Reservation successful!");
          setBookingDate("");
          setDesiredCity("");
        } else if (reserveCar.rejected.match(resultAction)) {
          setReservationMessage("Reservation failed. Please try again.");
        }
      });

      setTimeout(() => {
        navigate("/reserved");
      }, 1000);
    }
  };

  return (
    <MainLayout>
      <div className='relative h-screen -mt-20'>
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
                {dateError && <p className='text-red-500'>{dateError}</p>}
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
                {cityError && <p className='text-red-500'>{cityError}</p>}
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
                >
                  RESERVE NOW
                </button>
              </div>
              {reservationMessage && (
                <div
                  className={`mt-8 text-center text-${
                    reservationMessage.includes("successful") ? "green" : "red"
                  }-500`}
                >
                  {reservationMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reserve;
