import { useState } from "react";
import SmallTopArrow from "./small-top-arrow";
function Collapsed({ title, contentDiv, size }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"collapsed--" + size}>
      <button className="collapsed__btn" onClick={() => setOpen(!open)}>
        {title}
        <SmallTopArrow />
      </button>
      {open && <ul className="collapsed__text">{contentDiv}</ul>}
    </div>
  );
}
export default Collapsed;
