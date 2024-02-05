import SmallTopArrow from "../assets/svg/arrow/small-top-arrow";
function Collapsed({ object, size }) {
  return (
    <div className={"collapsed--" + size}>
      <button className="collapsed__btn">
        {object.title}
        <SmallTopArrow />
      </button>
      <div className="hide collapsed__text">{object.description}</div>
    </div>
  );
}
export default Collapsed;
