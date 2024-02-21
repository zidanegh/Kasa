import { createBrowserRouter } from "react-router-dom";
import Appartement from "./page/appartement";
import Accueil from "./page/accueil";
import ErrorId from "./page/error-id";
import APropos from "./page/a-propos";
import Root from "./page/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorId />,
    children: [
      { path: "", element: <Accueil /> },
      { path: "A-propos", element: <APropos /> },
      { path: "Appartement/:id", element: <Appartement /> },
    ],
  },
]);
export default router;
