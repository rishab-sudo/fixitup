import React, { Fragment } from "react";
import Header from "../Components/Header/Navbar";
import About from "../Components/About/About";
import Product from "../Components/Product/Product";
import Quote from "../Components/Quote/Quote";
import Client from "../Components/Client/Clients";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Product/>
      <Quote />
      <Client />
      <Footer />
    </Fragment>
  );
};

export default Home;
