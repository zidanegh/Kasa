import { createBrowserRouter } from "react-router-dom";
import Appartement from "./page/Appartement";
import Accueil from "./page/Accueil";
import ErrorId from "./page/Error-id";
import APropos from "./page/A-propos";
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
