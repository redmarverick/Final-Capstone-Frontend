import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import car from "../assets/images/car.png";
import logo from "../assets/images/logo.png";
import { logoutUser } from "../redux/users/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  // Get the user object from the Redux store
  const user = useSelector((state) => state.user.user);
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(logoutUser());
  };

  return (
    <div className='min-h-screen flex flex-col overflow-hidden relative bg-amber-500'>
      {/* Header */}
      <header className='p-4 flex justify-between items-center'>
        {/* Logo (Top Left) */}
        <div className='text-white text-2xl font-bold flex items-center'>
          <img src={logo} alt='Logo' className='h-24 w-24 mr-2' />
        </div>
        <div className='flex gap-2'>
          {user ? (
            <>
              {/* If the user is logged in, display a "Log Out" link */}
              <button
                onClick={handleLogout} // Corrected onClick
                type='submit'
                className='border border-amber-700 text-amber-700 px-4 py-2 rounded-full hover:bg-amber-700 hover:text-white cursor-pointer'
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              {/* If the user is not logged in, display "Login" and "Sign Up" links */}
              <NavLink
                to='/login'
                className='border border-amber-700 text-amber-700 px-4 py-2 rounded-full hover:bg-amber-700 hover:text-white cursor-pointer'
              >
                Login
              </NavLink>
              <NavLink
                to='/signup'
                className='bg-white text-amber-700 px-4 py-2 rounded-full hover:bg-amber-700 hover:text-white cursor-pointer'
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-grow text-center flex items-center justify-center z-10'>
        <div className='flex-col gap-8 mb-40'>
          <h2 className='text-4xl md:text-6xl text-white font-semibold mb-4 md:mb-8'>
            Welcome to the Car Booking App
          </h2>
          <NavLink
            to='/cars'
            className='bg-lime-500 font-bold text-white px-4 md:text-xl py-2 rounded-md hover:bg-lime-600'
          >
            Explore Cars
          </NavLink>
        </div>
      </main>

      {/* Background Image */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <img className='h-40vh w-auto' src={car} alt='Background' />
      </div>
    </div>
  );
};

export default HomePage;
