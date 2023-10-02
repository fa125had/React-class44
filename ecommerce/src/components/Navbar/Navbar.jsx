import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {path !== "/" && (
          <NavLink to={"/"}>
            <li className="nav-item">Home</li>
          </NavLink>
        )}
        {path !== "/favorites" && (
          <NavLink to={"/favorites"}>
            <li className="nav-item">Favorites</li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
