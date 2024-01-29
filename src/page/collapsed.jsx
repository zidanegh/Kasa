function Collapsed(object) {
  return (
    <div className="collapsed--small">
      <button className="collapsed__btn">
      {object.}
        <SmallTopArrow />
      </button>
      <div className="hide collapsed__text ">{object.description}</div>
    </div>
  );
}
export default Collapsed;
