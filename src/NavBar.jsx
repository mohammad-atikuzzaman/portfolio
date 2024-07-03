import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border-2 border-[#9e6d52] rounded-full mt-4">
      <div className="flex-1">
        <a className="text-xl font-semibold p-3">Atikuzzaman</a>
      </div>
      <div className="hidden md:block flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#9b7f64]" : ""
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#9b7f64]" : ""
              }>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#9b7f64]" : ""
              }>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#9b7f64]" : ""
              }>
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn m-1 rounded-full">
          Menu
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#9b7f64]" : ""
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#9b7f64]" : ""
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#9b7f64]" : ""
              }>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#9b7f64]" : ""
              }>
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
