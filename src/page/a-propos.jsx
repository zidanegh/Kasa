import Banner from "./banner";
import Collapsed from "./collapsed";
import list from "../assets/ressource/A-propos.json";

function APropos() {
  return (
    <>
      <div id="body">
        <Banner textBanner={"a-propos"} />
        {list.map((el) => (
          <Collapsed object={el} size={"big"} key={el.title} />
        ))}
      </div>
    </>
  );
}
export default APropos;
