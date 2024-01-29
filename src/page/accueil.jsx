import list from "../assets/ressource/resource.json";

function Accueil() {
  return (
    <>
      <div id="body">
        <main id="card-wrapper">
          <figure className="card">
            <img
              className="card__img"
              src={list[0].cover}
              alt={list[0].title}
            />
            <figcaption className="card__caption">{list[0].title}</figcaption>
          </figure>
          <figure className="card">
            <img
              className="card__img"
              src={list[1].cover}
              alt={list[1].title}
            />
            <figcaption className="card__caption">{list[1].title}</figcaption>
          </figure>
          <figure className="card">
            <img
              className="card__img"
              src={list[2].cover}
              alt={list[2].title}
            />
            <figcaption className="card__caption">{list[2].title}</figcaption>
          </figure>
          <figure className="card">
            <img
              className="card__img"
              src={list[3].cover}
              alt={list[3].title}
            />
            <figcaption className="card__caption">{list[3].title}</figcaption>
          </figure>
          <figure className="card">
            <img
              className="card__img"
              src={list[4].cover}
              alt={list[4].title}
            />
            <figcaption className="card__caption">{list[4].title}</figcaption>
          </figure>
          <figure className="card">
            <img
              className="card__img"
              src={list[5].cover}
              alt={list[5].title}
            />
            <figcaption className="card__caption">{list[5].title}</figcaption>
          </figure>
          {list.forEach((element) => {})}
        </main>
      </div>
    </>
  );
}

export default Accueil;
