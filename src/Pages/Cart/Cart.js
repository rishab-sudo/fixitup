import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../Redux/CartSlice";
import emailjs from "emailjs-com";
import "./Style.css";

const Cart = () => {
  const cartCount = useSelector((state) => state.cart.cart);
  let c = 0;
  cartCount.map((item) => {
    c += item.count;
  });

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    // Assuming you want to remove all items in the cart
    dispatch(removeFromCart({}));
  };

  const handleIncreaseQuantity = () => {
    // Assuming you want to increase the quantity of all items in the cart
    dispatch(increaseQuantity({}));
  };

  const handleDecreaseQuantity = () => {
    if (cartCount.length > 0) {
      dispatch(decreaseQuantity({})); // Provide the id of the item
    }
  };



  return (
    <section style={{ backgroundColor: "#F7F6F6",height:"100vh"}}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-start align-items-center h-100">
          <MDBCol>
            <h2 className="text-center mb-4">Your Cart</h2>
            <MDBCard className="cart-card">
              <MDBCardBody>
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <MDBCardImage
                        src="Images/kit.png"
                        fluid
                        className="product-image"
                        alt="Shopping item"
                      />
                    </div>
                    <div className="product-details">
                      <h4 tag="h5">
                        <small className="text-muted">₹349.00</small>
                        <div className="subtotal mt-2.5">
                          Subtotal : ₹{c * 349}
                        </div>
                        <div className="d-grid mt-2">
                          <button
                            onClick={handleRemoveFromCart}
                            className="remove-button btn btn-danger"
                          >
                            Remove
                          </button>
                        </div>
                      </h4>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center quantity-buttons mt-md-0 mt-3">
                    <div>
                      <div tag="h5">
                        Quantity :{" "}
                        <button
                          size="sm"
                          onClick={handleDecreaseQuantity}
                          className="quantity-button"
                        >
                          -
                        </button>{" "}
                        {c}{" "}
                        <button
                          size="sm"
                          onClick={handleIncreaseQuantity}
                          className="quantity-button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 tag="h5 " className="mt-3">
                  Women Essentially Kit <br />
                </h4>
              </MDBCardBody>
            </MDBCard>
            <div className="text-center mt-3">
              <a href="/address" className="btn btn-primary">
                Address details
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Cart;
