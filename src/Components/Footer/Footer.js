import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValid(emailRegex.test(inputValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Implement your logic to send data via email here
      console.log("Email sent:", email);
    } else {
      console.log("Invalid email");
    }
  };
  return (
    <>
      <Container
        fluid
        className="footer_containerFluid  d-none d-lg-block"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <Container className="footer_container">
          <div className="footer_wrapper1 footer_text">
            <a href="#aboutus">
              <img className="footer_logo" src="Images/logo.png" alt="" />
            </a>

            <div
              className="d-flex justify-content-start align-items-center"
              style={{ gap: "2rem", marginTop: "1rem", fontSize: "20px" }}
            >
              <a className="footer_links">
                <FaFacebookSquare />
              </a>
              <a className="footer_links">
                {" "}
                <GrInstagram />
              </a>
              <a className="footer_links">
                {" "}
                <SiWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer_text">
            <p className="link_title">Quick Links</p>
            <a className="footer_links" href="#aboutus">
              <p>About Us</p>
            </a>
          </div>

          <div className="footer_text">
            <p className="link_title">Company</p>
            <a className="footer_links" href="#product">
              <p>Our Product</p>
            </a>
          </div>

          <div className="footer_text">
            <p className="link_title">Support</p>
            <a className="footer_links" href="#contact">
              {" "}
              <p>Contact Us</p>
            </a>
          </div>

          <div className="footer_text footer_wrapper3">
            <p className="link_title">Newsletter</p>
            <p>Subscribe our newsletter and get exciting offers </p>
            {/* <form onSubmit={handleSubmit}>
      <div className={`email-input ${isValid ? '' : 'invalid'}`}>
        <AiOutlineMail className="email-icon" />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
      {!isValid && <p className="error-message">Invalid email address</p>}
    </form> */}
          </div>
        </Container>
        <div>
          <p>
            © 2024 All Rights Reserved by Fixitup design & develop by{" "}
            <span style={{ color: "#FF688B", fontWeight: "bold" }}>
              <a
                href="https://www.reclamehub.in/"
                target="_blank"
                style={{
                  color: "#FF688B",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Reclame hub
              </a>
            </span>
          </p>
        </div>
      </Container>

      <Container
        fluid
        className="footer_containerFluid  d-block d-lg-none"
        style={{ backgroundColor: "" }}
      >
        <Container className="footer_sm_container">
          <div className="footer_sm_wrapper1 footer_text">
            <a href="#home">
              <img className="footer_logo" src="Images/logo.png" alt="" />
            </a>
          </div>

          <div className="footer_sm_wrapper2">
            <div className="footer_text">
              <p className="link_title">Quick Links</p>
              <a className="footer_links" href="#aboutus">
                <p>About Us</p>
              </a>
            </div>

            <div className="footer_text">
              <p className="link_title">Company</p>
              <a className="footer_links" href="#product">
                <p>Our Projects</p>
              </a>
            </div>

            <div className="footer_text">
              <p className="link_title">Support</p>
              <a className="footer_links" href="#contact">
                {" "}
                <p>Contact Us</p>
              </a>
            </div>
          </div>

          <div className=" footer_sm_wrapper3 footer_text">
            <p className="link_title">Newsletter</p>
            <p>Subscribe our newsletter and get exciting offers </p>
          </div>

          <div
            className="d-flex justify-content-start align-items-center mb-2"
            style={{ gap: "2rem", marginTop: "1rem", fontSize: "20px" }}
          >
            <a className="footer_links">
              <FaFacebookSquare />
            </a>
            <a className="footer_links">
              {" "}
              <GrInstagram />
            </a>
            <a className="footer_links">
              {" "}
              <SiWhatsapp />
            </a>
          </div>
        </Container>
        <div>
          <p>
            © 2024 All Rights Reserved by Fixitup design & develop by{" "}
            <span style={{ color: "#FF688B", fontWeight: "bold" }}>
              <a
                href="https://www.reclamehub.in/"
                target="_blank"
                style={{
                  color: "#FF688B",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Reclame hub
              </a>
            </span>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
