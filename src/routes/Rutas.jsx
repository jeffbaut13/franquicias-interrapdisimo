import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Franquicia from "./Franquicia";
import Formulario from "./Formulario";
import Home from "./Home";
import ErrorPage from "../page-404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "franquicia",
        children: [
          {
            path: "/franquicia/:id",
            element: <Franquicia />,
          },
          {
            path: "/franquicia/:id/formulario",
            element: <Formulario />,
          },
        ],
      },
    ],
  },
]);

export default router;
