import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/users/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const location = useLocation();
  const isOnNewReservationPage = location.pathname === "/new-reservation";

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
  };

  if (isOnNewReservationPage) {
    return null;
  }
  return (
    <div className='flex justify-end p-4 bg-transparent z-10 absolute top-0 right-0'>
      {user ? (
        <button
          type='button'
          className='inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <NavLink
          to='/login'
          className='inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Header;
