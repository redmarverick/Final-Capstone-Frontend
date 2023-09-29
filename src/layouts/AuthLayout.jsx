import PropTypes from "prop-types";
import car from "../assets/images/car.png";
import logo from "../assets/images/logo.png";

const AuthLayout = ({ children }) => (
  <div className='min-h-screen max-h-screen flex flex-col overflow-hidden relative bg-amber-500'>
    {/* Header */}
    <header className='p-4 flex justify-between items-center'>
      {/* Logo (Top Left) */}
      <div className='text-white text-2xl font-bold flex items-center'>
        <img src={logo} alt='Logo' className='h-20 w-20 mr-2' />
      </div>
      <div className='flex gap-2'>
        <button
          type='button'
          className='z-50 border border-amber-700 text-amber-700 px-4 py-2 rounded-full hover:bg-amber-700 hover:text-white cursor-pointer'
        >
          Login
        </button>
        {/* SIGNUP Button (Top Right) */}
        <button
          type='button'
          className='bg-white text-amber-700 px-4 py-2 rounded-full'
        >
          Sing Up
        </button>
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
