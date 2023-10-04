import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import car from "../assets/images/car.png";
import logo from "../assets/images/logo.png";

const AuthLayout = ({ children }) => (
  <div className='min-h-screen max-h-screen flex flex-col overflow-hidden relative bg-amber-500'>
    {/* Header */}
    <header className='z-50 p-4  md:px-10 flex justify-between items-center'>
      {/* Logo (Top Left) */}
      <NavLink
        to='/cars'
        className='text-white text-2xl font-bold flex items-center'
      >
        <img src={logo} alt='Logo' className='h-20 w-20 mr-2' />
      </NavLink>
      <div className='flex gap-2'>
        <NavLink
          to='/login'
          className='z-50 border border-amber-700 text-amber-700 px-4 py-2 rounded-full hover:bg-amber-700 hover:text-white cursor-pointer'
        >
          Login
        </NavLink>
        {/* SIGNUP Button (Top Right) */}
        <NavLink
          to='/signup'
          className='z-50 bg-white text-amber-700 px-4 py-2 rounded-full hover:bg-amber-700 hover:text-white cursor-pointer'
        >
          Sing Up
        </NavLink>
      </div>
    </header>

    {/* Main Content */}
    <main className='max-h-[80vh] z-50 flex items-center justify-center p-40'>
      {children}
    </main>
    <div className='absolute inset-0 flex items-center justify-center'>
      <img className='h-40vh w-auto' src={car} alt='background' />
    </div>
  </div>
);

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
