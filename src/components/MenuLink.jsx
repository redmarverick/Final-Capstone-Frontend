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

MenuLink.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default MenuLink;
