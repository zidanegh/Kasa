import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Collapsed({ title, contentDiv, size }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"collapsed--" + size}>
      <button className="collapsed__btn" onClick={() => setOpen(!open)}>
        {title}
        <FontAwesomeIcon
          icon={open ? faChevronDown : faChevronUp}
          className={open === true ? "rotationNegative" : "rotationPositive"}
        />
        {console.log(open)}
      </button>
      <ul
        className={`collapsed__text ${open === true ? "scaleOut" : "scaleIn"}`}
      >
        {contentDiv}
      </ul>
    </div>
  );
}
export default Collapsed;
