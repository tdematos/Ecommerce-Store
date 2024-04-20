import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./components/Routes";

import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
