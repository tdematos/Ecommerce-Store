import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./components/About";
import Shop from "./components/Shop";
import Login from "./components/login components/Login";

import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "about", element: <About /> },
  { path: "shop", element: <Shop /> },
  { path: "login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
