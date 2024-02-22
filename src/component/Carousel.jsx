import BigLeftArrow from "./big-left-arrow";
import BigRigthArrow from "./big-rigth-arrow";

function Carousel({
  lengthPictures,
  Object,
  state,
  clickEventLeftArrow,
  clickEventRightArrow,
}) {
  return (
    <div id="appartement__wrap">
      {lengthPictures > 1 && <BigLeftArrow clickEvent={clickEventLeftArrow} />}
      <img
        id="appartement__pictures"
        src={Object.pictures[state]}
        alt={Object.title}
        key={state + 1}
      />
      {lengthPictures > 1 && (
        <p id="appartement__compteur-image">
          {state + 1}/{lengthPictures}
        </p>
      )}
      {lengthPictures > 1 && (
        <BigRigthArrow clickEvent={clickEventRightArrow} />
      )}
    </div>
  );
}

export default Carousel;
