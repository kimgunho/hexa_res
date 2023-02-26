import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./component/header";
import { Footer } from "./component/footer";
import Main from "./pages/main";
import Company from "./pages/company";

import { GlobalStyle } from "./styles/globalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>none</div>,
  },
  {
    path: "/company",
    element: <Company />,
    errorElement: <div>none</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
