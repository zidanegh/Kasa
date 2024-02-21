import list from "../assets/ressource/resource.json";
import BigrightArrow from "../component/big-rigth-arrow";
import BigLeftArrow from "../component/big-left-arrow";
import { useParams } from "react-router-dom";
import { useState } from "react";
import StarIcone from "../component/star";
import Collapsed from "../component/collapsed";

function Appartement() {
  const { id } = useParams();
  const findObject = list.find((x) => x.id === id);
  const tags = findObject.tags;
  const equipments = findObject.equipments;
  const nbrStar = findObject.rating;
  const pictures = findObject.pictures;
  const [changePicture, setChangePicture] = useState(0);
  function clickDroit() {
    setChangePicture((changePicture) => changePicture + 1);
    if (changePicture >= pictures.length - 1) {
      setChangePicture(0);
    }
  }
  function clickGauche() {
    setChangePicture((changePicture) => changePicture - 1);
    if (changePicture <= 0) {
      setChangePicture(pictures.length - 1);
    }
  }
  return (
    <>
      <div id="appartement">
        {
          <div id="appartement__wrap">
            {pictures.length > 1 && <BigLeftArrow clickEvent={clickGauche} />}
            <img
              id="appartement__pictures"
              src={findObject.pictures[changePicture]}
              alt={findObject.title}
              key={changePicture + 1}
            />
            {pictures.length > 1 && (
              <p id="appartement__compteur-image">
                {changePicture + 1}/{pictures.length}
              </p>
            )}
            {pictures.length > 1 && <BigrightArrow clickEvent={clickDroit} />}
          </div>
        }
        <div id="appartement__information">
          <div id="appartement__information__logement">
            <div>
              <h1>{findObject.title}</h1>
              <h2>{findObject.location}</h2>
            </div>
            <ul>
              {tags.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
          <div id="appartement__information__loueur">
            <div>
              <p>{findObject.host.name}</p>
              <img
                src={findObject.host.picture}
                alt={"image de" + findObject.host.name}
              />{" "}
            </div>
            <div className="etoile">
              <StarIcone note={nbrStar} />
            </div>
          </div>
        </div>
        <div id="appartement__collapsed">
          <Collapsed
            title={"Description"}
            contentDiv={findObject.description}
            size={"small"}
          />
          <Collapsed
            title={"Équipements"}
            contentDiv={equipments.map((el) => (
              <li key={el}>{el}</li>
            ))}
            size={"small"}
          />
        </div>
      </div>
    </>
  );
}
export default Appartement;
