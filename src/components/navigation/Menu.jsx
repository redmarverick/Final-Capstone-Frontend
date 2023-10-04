import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MenuLink from "./MenuLink";
import logo from "../../assets/images/logo.png";

const Menu = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <aside className="fixed top-0 bottom-0 text-left navigation hidden border-r border-gray-300 float-left pb-8 w-[250px] bg-slate-100 h-screen lg:block">
      <NavLink to="/" className="flex items-center justify-center">
        <img src={logo} alt="logo" className="w-[150px] ml-4" />
      </NavLink>
      <ul className="flex flex-col ml-4 h-[70%]">
        <MenuLink to="/cars">VEHICLES</MenuLink>
        <MenuLink to="/car-to-reserve">RESERVE</MenuLink>
        <MenuLink to="/reserved">MY RESERVATIONS</MenuLink>
        {user.admin ? <MenuLink to="/new-car">ADD CAR</MenuLink> : null}
        {user.admin ? <MenuLink to="/delete-car">REMOVE CAR</MenuLink> : null}
      </ul>
    </aside>
  );
};

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Menu;
