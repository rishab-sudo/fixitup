// App.js
import React, { Fragment, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";

import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { Address } from "./Components/Address/Address";

function App() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
