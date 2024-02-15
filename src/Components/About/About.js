import React from "react";
import { Container } from "react-bootstrap";
import homebg from "../../assets/homebg.png";
import "./About.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const About = () => {
  return (
    <>
      <Container
        fluid
        id="aboutus"
        className="banner_fluid"
        style={{
          backgroundImage: `url(${homebg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          backgroundSize: "100% 100% ",
          padding: "10% 5%",
          position: "relative",
        }}
      >
        <div>
          <img className="fly1" src={require("../../assets/fly.gif")} alt="" />
        </div>
        <div>
          <img className="Banner_kit" src="Images/bannerKit.png" alt="" />
        </div>
        <div className="banner_text_div">
          <p
            className="page_text"
            style={{ color: "#FF688B", fontWeight: "600" }}
          >
            Essentials Reimagined:{" "}
          </p>
          <p className="banner_heading" style={{ fontFamily: "Satisfy" }}>
            One essntial kit for
            <br />
            every day for every woman
          </p>
          <div className="mt-3">
            <ScrollLink
              to="product_container"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <button className="Banner_button">Shop Now</button>
            </ScrollLink>{" "}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <img className="fly" src={require("../../assets/fly.gif")} alt="" />
        </div>
      </Container>

      <Container fluid className="about_content_container">
        <div className="about_text_wrapper">
          <p className="page_heading" style={{ fontFamily: "Satisfy" }}>
            About us
          </p>
          <p className="page_text">
            Discover Fix It Up, ! With 17 innovations, we redefine your daily
            effort. Stay stylish, embrace joy, and nurture the environment
            simultaneously. Effortlessly elevate your appearance and well-being.
            Fix It Up is where sustainability meets delight, ensuring you look
            good, feel great, and contribute to a greener world all in one
            remarkable experience
          </p>
        </div>
        <div className="aboutUs_img">
          <img
            src="Images/AboutUsimg.png"
            alt="aboutImg"
            className="about_image"
          />
        </div>
        <div className="about_fly_div">
          <img className="about_fly" src="Images/aboutFly.gif" alt="" />
        </div>
      </Container>
    </>
  );
};

export default About;
