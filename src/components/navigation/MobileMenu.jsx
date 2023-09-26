import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  return (
    <div className='mobile-menu lg:hidden'>
      <button
        type='button'
        className='menu-btn absolute top-4 left-4 text-xl z-30'
        onClick={() => setShowMenu(true)}
      >
        <img src='/blackham.svg' alt='logo' className='w-10' />
      </button>
      {showMenu && (
        <div className='menu fixed inset-0 bg-white z-30 pt-8'>
          <button
            type='button'
            onClick={() => setShowMenu(false)}
            className='absolute top-4 right-4 text-3xl'
          >
            <img src='/xhamb.svg' alt='logo' className='w-10' />
          </button>
          <NavLink to='/'>Logo</NavLink>
          <ul className='flex items-stretch text-center flex-col mt-16 px-4'>
            <NavLink to='/cars'>
              <li className='cursor-pointer py-4 text-xl font-semibold'>
                CARS
              </li>
            </NavLink>
            <NavLink to='/reserved'>
              <li className='cursor-pointer py-4 text-xl font-semibold'>
                MY RESERVATIONS
              </li>
            </NavLink>
            <NavLink
              to='/new-reservation'
              onClick={() => sessionStorage.removeItem("id")}
            >
              <li className='cursor-pointer py-4 text-xl font-semibold'>
                NEW RESERVATION
              </li>
            </NavLink>
            <NavLink to='/new-car'>
              <li className='cursor-pointer py-4 text-xl font-semibold'>
                ADD CAR
              </li>
            </NavLink>
            {location.pathname.match("/cars") && (
              <li className='cursor-pointer py-4 text-xl font-semibold'>
                <button type='button'>DELETE CAR</button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
