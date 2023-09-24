import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

const MenuLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive
      ? "bg-[#97BF0F] text-white cursor-pointer py-4 text-xl font-semibold pl-4"
      : "cursor-pointer py-4 text-xl font-semibold pl-4")}
  >
    {children}
  </NavLink>
);

const Menu = () => (
  <aside className='fixed top-0 bottom-0 text-left navigation hidden border-r border-gray-300 float-left py-8 w-[250px] bg-slate-100 h-screen lg:block'>
    <NavLink to='/'>Logo</NavLink>
    <ul className='flex flex-col mt-16 ml-4 h-[70%]'>
      <MenuLink to='/'>VEHICLES</MenuLink>
      <MenuLink to='/new-reservation'>RESERVE</MenuLink>
      <MenuLink to='/reserved'>MY RESERVATIONS</MenuLink>
      <MenuLink to='/new-car'>ADD/REMOVE CAR</MenuLink>
    </ul>
  </aside>
);

MenuLink.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Menu;
