import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./Context/user.context";
import { ProductProvider } from "./Context/products.context";
import { CartProvider } from "./Context/cart.context";

import App from "./App";
import "./index.scss";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>
);
