import { NavLink } from "react-router-dom";
import list from "../assets/ressource/resource.json";
import Banner from "../component/banner";

function Accueil() {
  return (
    <>
      <Banner textBanner="accueil" />
      <main id="card-wrapper">
        {list.map((el) => (
          <NavLink to={"/appartement/" + el.id} key={el.id}>
            <figure className="card">
              <img className="card__img" src={el.cover} alt={el.title} />
              <figcaption className="card__caption">{el.title}</figcaption>
            </figure>
          </NavLink>
        ))}
      </main>
    </>
  );
}

export default Accueil;
