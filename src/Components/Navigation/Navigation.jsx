import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeStyle" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-contact"
            className={({ isActive }) => (isActive ? "activeStyle" : "")}
          >
            Add Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
