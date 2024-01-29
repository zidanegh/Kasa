import Accueil from "./page/accueil";
import Appartement from "./page/appartement";
import Header from "./header/header";
import Footer from "./footer/footer";
import ErrorId from "./page/error-id";

function App() {
  return (
    <>
      <div id="body">
        <Header />
        <ErrorId />
      </div>
      <Footer />
    </>
  );
}
export default App;
