import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./components/About";
import Shop from "./components/Shop";
import Login from "./components/login components/Login";
import ErrorPage from "./components/ErrorPage";
import Register from "./components/login components/Register";

import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "about", element: <About /> },
  { path: "shop", element: <Shop /> },
  {
    path: "login",
    element: <Login />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
