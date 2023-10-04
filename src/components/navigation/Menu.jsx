import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MenuLink from "./MenuLink";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.svg";
import x from "../../assets/images/x.png";
import instagram from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";

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
        {user ? <MenuLink to="/new-car">ADD CAR</MenuLink> : null}
        {user ? <MenuLink to="/delete-car">REMOVE CAR</MenuLink> : null}
      </ul>
      <div className="flex items-center justify-center mt-8 gap-2">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={x} alt="twitter" className="w-4 h-4" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="youtube" className="w-7 h-7" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" className="w-5 h-5" />
        </a>
      </div>
      {/* copyright */}
      <div className="flex items-center justify-center pt-4 pb-20">
        <p className="text-xs text-gray-500 text-center">
          &copy; 2023 Car Booking App.
          <br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
};

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Menu;
