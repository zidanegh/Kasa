import House from "../component/house";
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
                <NavLink to="/">ACCUEIL</NavLink>
              </li>
              <li>
                <NavLink to="/A-propos">A PROPOS</NavLink>
              </li>
            </ul>
          </nav>
        </>
      </header>
    </>
  );
}
export default Header;
