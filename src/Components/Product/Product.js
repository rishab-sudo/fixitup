import React, { useState, useEffect, useDebugValue } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import "./Product.css";

const AboutUs = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ count }));
  };

  return (
    <div style={{ position: "relative" }}>
      <Container
        fluid
        className="g-0"
        style={{
          background: "#F7F6F6",
          margin: 0,
          padding: 0,
        }}
        id="product"
      >
        <div className="product_container">
          <div className="product_text_wrapper ">
            <h1 className="product_heading" style={{ fontFamily: "Satisfy" }}>
              Women Essential Kit
            </h1>
            <p className="regular_price">Regular Price</p>
            <p className="product_price" style={{ fontFamily: "Poppins" }}>
              ₹ 349.00
            </p>

            <div className="counter_container">
              <button className="counter-button" onClick={handleDecrement}>
                -
              </button>
              <span className="counter">{count}</span>
              <button className="counter-button" onClick={handleIncrement}>
                +
              </button>
            </div>
            <button
              className="addtocart_button "
              onClick={() => handleAddToCart()}
            >
              ADD TO CART
            </button>
          </div>

          <div className="kit_image_div">
            <img src="Images/Kit.png" alt="kit" className="kit_image" />
          </div>
          <div>
            <img src="Images/fly2.gif" alt="fly2" className="fly2_image" />
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <img
            src="Images/allProducts.png"
            alt="allProducts"
            className="allProduct_Img "
            style={{ width: "100%" }}
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
