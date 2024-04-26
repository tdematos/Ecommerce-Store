import React from "react";
import App from "../App";
import About from "./About";
import Shop from "./Shop";
import Account from "./login components/Account";
import ErrorPage from "./ErrorPage";
import Login from "./login components/Login";
import Register from "./login components/Register";
import TermsOfService from "./Terms/TOS";

interface Route {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: Route[];
}

const Routes: Route[] = [
  {
    path: "/",
    element: (<App />) as React.ReactNode,
    errorElement: (<ErrorPage />) as React.ReactNode,
  },
  {
    path: "/about",
    element: (<About />) as React.ReactNode,
  },
  { path: "/shop", element: (<Shop />) as React.ReactNode },
  { path: "/tos", element: (<TermsOfService />) as React.ReactNode },
  {
    path: "account",
    element: (<Account />) as React.ReactNode,
    children: [
      {
        path: "login",
        element: (<Login />) as React.ReactNode,
      },
      {
        path: "register",
        element: (<Register />) as React.ReactNode,
      },
    ],
  },
];

export default Routes;
