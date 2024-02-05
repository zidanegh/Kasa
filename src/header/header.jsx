import House from "../assets/svg/house";
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
                <NavLink to="/">accueil</NavLink>
              </li>
              <li>
                <NavLink to="/A-propos">A-propos</NavLink>
              </li>
            </ul>
          </nav>
        </>
      </header>
    </>
  );
}
export default Header;
