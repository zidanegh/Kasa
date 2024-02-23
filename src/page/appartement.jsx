import list from "../assets/ressource/resource.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import StarIcone from "../component/star";
import Collapsed from "../component/collapsed";
import Carousel from "../component/Carousel";

function Appartement() {
  const { id } = useParams();
  const findObject = list.find((x) => x.id === id);
  const tags = findObject.tags;
  const equipments = findObject.equipments;
  const nbrStar = findObject.rating;
  const pictures = findObject.pictures;
  const [changePicture, setChangePicture] = useState(0);
  const lengthOfPictures = pictures.length;
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
        <Carousel
          lengthPictures={lengthOfPictures}
          Object={findObject}
          state={changePicture}
          clickEventLeftArrow={clickGauche}
          clickEventRightArrow={clickDroit}
        />
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
