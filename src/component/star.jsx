import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarIcone = ({ note }) => {
  const noteArray = Array.from({ length: 5 }, (v, i) => i);
  return (
    <>
      {noteArray.map((i) =>
        i < note ? (
          <FontAwesomeIcon icon={faStar} className="red" key={note + i} />
        ) : (
          <FontAwesomeIcon icon={faStar} className="grey" key={note + i} />
        )
      )}
    </>
  );
};

export default StarIcone;
