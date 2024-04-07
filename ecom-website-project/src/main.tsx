import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./components/About";

import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
