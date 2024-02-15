import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { Link } from "react-router-dom";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cart);
  let c = 0;
  cartCount.map((item) => {
    c += item.count;
  });
  console.log(c);

  return (
    <>
      <div
        fluid
        className="d-none d-lg-block"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <div>
          <nav className="navbar bg-black">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <p className="Navbar_contact">Contact Us</p>
            </ScrollLink>{" "}
            <div className="mx-auto">
              <img
                src="Images/logo.png"
                alt="RSUITE Logo"
                className="Navbar_logo mr-3"
              />
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/Cart">
                <div className="position-relative">
                  <img
                    src="Images/cart.png"
                    alt="cart"
                    className="Navbar_cart"
                  />
                  {c > 0 && <p className="cart-count">{c}</p>}{" "}
                </div>
              </Link>

              <img
                src="Images/profile.png"
                alt="Profile"
                className="Navbar_profile"
              />
            </div>
          </nav>
        </div>
      </div>

      <div
        fluid
        className="  d-block d-lg-none"
        style={{ backgroundColor: "" }}
      >
        <div>
          <nav className="navbar bg-black">
            <div className="logo" style={{ marginLeft: "10px" }}>
              <img
                src="Images/logo.png"
                alt="RSUITE Logo"
                className="Navbar_logo mr-3"
              />
            </div>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <p className="Navbar_contact">Contact Us</p>
            </ScrollLink>{" "}
            <div className="d-flex justify-content-between">
              <Link to="/Cart">
                <div className="position-relative">
                  <img
                    src="Images/cart.png"
                    alt="cart"
                    className="Navbar_cart"
                  />
                  {c > 0 && <p className="cart-count">{c}</p>}{" "}
                </div>
              </Link>

              <img
                src="Images/profile.png"
                alt="Profile"
                className="Navbar_profile"
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
