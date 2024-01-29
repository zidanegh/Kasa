import list from "../assets/ressource/resource.json";
import SmallTopArrow from "../assets/svg/arrow/small-top-arrow";
import BigrightArrow from "../assets/svg/arrow/big-rigth-arrow";
import BigLeftArrow from "../assets/svg/arrow/big-left-arrow";
function Appartement() {
  const list1 = list[0];

  return (
    <div id="appartement">
      <div id="appartement__wrap">
        <BigLeftArrow />
        <img
          id="appartement__pictures"
          src={list1.pictures[0]}
          alt={list1.title}
        />
        <BigrightArrow />
      </div>
      <div id="appartement__information">
        <div id="appartement__information__logement">
          <h1>{list1.title}</h1>
          <h2>{list1.location}</h2>
        </div>
        <div id="appartement__information__loueur">
          <p>{list1.host.name}</p>
          <img src={list1.host.picture} alt={"image de" + list1.host.name} />
        </div>
      </div>
      <div id="appartement__information__referencement">
        <ul>
          <li>{list1.tags[0]}</li>
        </ul>
        <p>étoile</p>
      </div>
      <div id="appartement__collapsed">
        <div className="collapsed--small">
          <button className="collapsed__btn">
            Description
            <SmallTopArrow />
          </button>
          <div className="hide collapsed__text ">{list1.description}</div>
        </div>
        <div className="collapsed--small">
          <button className="collapsed__btn">
            Équipements <SmallTopArrow />
          </button>
          <div className="hide collapsed__text ">{list1.equipments[0]}</div>
        </div>
      </div>
    </div>
  );
}
export default Appartement;
