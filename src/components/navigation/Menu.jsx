import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
import MenuLink from "./MenuLink";
import logo from "../../assets/images/logo.png";

const Menu = () => (
  <aside className='fixed top-0 bottom-0 text-left navigation hidden border-r border-gray-300 float-left pb-8 w-[250px] bg-slate-100 h-screen lg:block'>
    <NavLink to='/' className='flex items-center justify-center'>
      <img src={logo} alt='logo' className='w-[150px] ml-4' />
    </NavLink>
    <ul className='flex flex-col ml-4 h-[70%]'>
      <MenuLink to='/cars'>VEHICLES</MenuLink>
      <MenuLink to='/car-to-reserve'>RESERVE</MenuLink>
      <MenuLink to='/reserved'>MY RESERVATIONS</MenuLink>
      <MenuLink to='/new-car'>ADD CAR</MenuLink>
      <MenuLink to='/delete-car'>REMOVE CAR</MenuLink>
    </ul>
  </aside>
);

MenuLink.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Menu;
