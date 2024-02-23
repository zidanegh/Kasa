import Header from "../component/Header";
import Footer from "../component/Footer";
import { NavLink } from "react-router-dom";
function ErrorId() {
  return (
    <>
      <div id="body">
        <Header />
        <div id="errorId">
          <h1>404</h1>
          <h2>
            Oups! La page que <br />
            vous demandez n'existe pas.
          </h2>
          <NavLink to={"/"}>
            <p>Retourner sur la page d’accueil</p>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ErrorId;
