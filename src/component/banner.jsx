function Banner({ textBanner }) {
  return (
    <div id={"banner__" + textBanner} role="banner">
      {textBanner === "accueil" && (
        <h1>
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      )}
    </div>
  );
}

export default Banner;
