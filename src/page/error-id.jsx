import Header from "../header/header";
import Footer from "../footer/footer";
import { NavLink } from "react-router-dom";
function ErrorId() {
  return (
    <>
      <Header />
      <div id="errorId">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to={"/"}>
          <p>Retourner sur la page d’accueil</p>
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
export default ErrorId;
