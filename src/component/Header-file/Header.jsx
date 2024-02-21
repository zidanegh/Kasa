import House from "../House";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header id="header-desktop">
        <House />
        <>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "notActive"
                  }
                >
                  ACCUEIL
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/A-propos"
                  className={({ isActive }) =>
                    isActive ? "active" : "notActive"
                  }
                >
                  A PROPOS
                </NavLink>
              </li>
            </ul>
          </nav>
        </>
      </header>
    </>
  );
}
export default Header;
