import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./component/header";
import { Footer } from "./component/footer";
import Main from "./pages/main";
import Company from "./pages/company";
import Product from "./pages/product";

import { GlobalStyle } from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/company" element={<Company />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
