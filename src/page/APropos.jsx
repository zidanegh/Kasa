import Banner from "../component/Banner";
import Collapsed from "../component/collapsed";
import list from "../assets/ressource/A-propos.json";

function APropos() {
  return (
    <>
      <Banner textBanner={"a-propos"} />
      <div id="collapsed__apropos">
        {list.map((el) => (
          <Collapsed
            title={el.title}
            contentDiv={el.description}
            size={"big"}
            key={el.title}
          />
        ))}
      </div>
    </>
  );
}
export default APropos;
