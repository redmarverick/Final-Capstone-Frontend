import { NavLink } from 'react-router-dom';

const Menu = () => (
  <aside className="fixed top-0 bottom-0 text-left navigation hidden border-r border-gray-300 float-left py-8 w-[250px] bg-slate-100 h-screen lg:block">
    <NavLink to="/">Logo</NavLink>
    <ul className="flex flex-col mt-16 ml-4 h-[70%]">
      <NavLink to="/">
        <li className="cursor-pointer py-4 text-xl font-semibold pl-4">CARS</li>
      </NavLink>
      <NavLink
        to="/new-reservation"
        onClick={() => sessionStorage.removeItem('id')}
      >
        <li className="cursor-pointer py-4 text-xl font-semibold pl-4">
          RESERVE
        </li>
      </NavLink>
      <NavLink to="/reserved">
        <li className="cursor-pointer py-4 text-xl font-semibold pl-4">
          MY RESERVATIONS
        </li>
      </NavLink>
      <NavLink to="/new-car">
        <li className="cursor-pointer py-4 text-xl font-semibold pl-4">
          <button type="button">ADD CAR</button>
        </li>
      </NavLink>
      {location.pathname.match("/cars") && ( // eslint-disable-line
        <li className="cursor-pointer py-4 text-xl font-semibold pl-4">
          <button type="button">DELETE CAR</button>
        </li>
      )}
    </ul>
  </aside>
);

export default Menu;
