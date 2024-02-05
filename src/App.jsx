import Appartement from "./page/appartement";
import Accueil from "./page/accueil";
import Header from "./header/header";
import Footer from "./footer/footer";
import ErrorId from "./page/error-id";
import APropos from "./page/a-propos";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import router from "./route";

function App() {
  return <RouterProvider router={router} />;
}
export default App;
