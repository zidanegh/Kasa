import list from "../assets/ressource/resource.json";
import SmallTopArrow from "../assets/svg/arrow/small-top-arrow";
import BigrightArrow from "../assets/svg/arrow/big-rigth-arrow";
import BigLeftArrow from "../assets/svg/arrow/big-left-arrow";
import { useParams } from "react-router-dom";
import YellowStar from "../assets/svg/yellowStar";
import GreyStar from "../assets/svg/greyStar";
import { useState } from "react";

function Appartement() {
  const { id } = useParams();
  const findObject = list.find((x) => x.id === id);
  const tags = findObject.tags;
  const equipments = findObject.equipments;
  console.log(findObject.rating);
  const nbrStar = findObject.rating;
  const star = [];
  for (let i = 0; i < nbrStar; i++) {
    star.push(
      <p>
        <YellowStar key={i.toString()} />
      </p>
    );
  }
  const pictures = findObject.pictures;
  function click(el) {
    const [activeIndex, setActiveIndex] = useState(0);
  }
  return (
    <>
      <div id="appartement">
        {
          <div id="appartement__wrap">
            {}
            <button onClick={click}>
              <BigLeftArrow />
            </button>
            {pictures.map((el) => (
              <img id="appartement__pictures" src={el} alt={findObject.title} />
            ))}
            <button onClick={click}>
              <BigrightArrow />
            </button>
          </div>
        }
        <div id="appartement__information">
          <div id="appartement__information__logement">
            <h1>{findObject.title}</h1>
            <h2>{findObject.location}</h2>
          </div>
          <div id="appartement__information__loueur">
            <p>{findObject.host.name}</p>
            <img
              src={findObject.host.picture}
              alt={"image de" + findObject.host.name}
            />
          </div>
        </div>
        <div id="appartement__information__referencement">
          <ul>
            {tags.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          <div className="etoile" key={1}>
            {star}
          </div>
        </div>
        <div id="appartement__collapsed">
          <div className="collapsed--small">
            <button className="collapsed__btn">
              Description
              <SmallTopArrow />
            </button>
            <div className="hide collapsed__text ">
              {findObject.description}
            </div>
          </div>
          <div className="collapsed--small">
            <button className="collapsed__btn">
              Équipements <SmallTopArrow />
            </button>
            <div className="hide collapsed__text ">
              {equipments.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Appartement;
