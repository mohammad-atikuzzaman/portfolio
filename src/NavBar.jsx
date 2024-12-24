import { NavLink } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  return (
    <div className="navbar py-0 bg-base-100 border-2 border-[#a035e7] rounded-full mt-4">
      <div className="flex-1">
        <a className="logo"> {"</"}Atikuzzaman{">"}</a>
      </div>
      <div className="hidden md:block flex-none">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "font-black border-b-2 border-[#a035e7]" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="dropdown dropdown-end md:hidden">
        <div
          tabIndex={0}
          role="button"
          className="px-3 py-2 font-semibold m-1 rounded-full shadow-md shadow-[#9c744e]"
        >
          Menu
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content min-h-screen menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive ? "font-semibold border-b-2 border-[#a035e7]" : ""
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
