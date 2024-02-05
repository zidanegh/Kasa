function Banner({ textBanner }) {
  let text;
  if (textBanner == "accueil") {
    text = <h1>Chez vous, partout et ailleurs</h1>;
  } else {
    text = null;
  }
  return (
    <div id={"banner__" + textBanner} role="banner">
      {text}
    </div>
  );
}

export default Banner;
