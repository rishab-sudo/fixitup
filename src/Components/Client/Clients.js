import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Clients.css";

function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container fluid className="client_fluid">
      <Container className="client_container">
        <div className="clinet_heading_wrapper">
          <p className="page_heading">
            <span style={{ color: "black" }}> what</span> OUR CLIENTS{" "}
          </p>
          <p
            className="page_heading"
            style={{ marginTop: "-15px", color: "black" }}
          >
            ARE SAYING
          </p>
        </div>
        <Slider {...settings} className="slider">
          <div className="review_main_div">
            <div className="flex_div">
              <img className="line" src="Images/line.png" alt="" />
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>
            <div className="flex_div">
              <img src="Images/c1.png" alt="" />
              <p style={{ fontWeight: 600 }}>ankit yadav</p>
            </div>
          </div>

          <div className="review_main_div">
            <div className="flex_div">
              <img src="Images/line.png" alt="" />
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
              <br />
              <br />
            </div>
            <div className="flex_div">
              <img src="Images/c2.png" />
              <p style={{ fontWeight: 600 }}>shivani gupta</p>
            </div>
          </div>

          <div className="review_main_div">
            <div className="flex_div">
              <img src="Images/line.png" alt="" />
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
              <br />
              <br />
            </div>
            <div className="flex_div">
              <img src="Images/c3.png" />
              <p style={{ fontWeight: 600 }}>shivani gupta</p>
            </div>
          </div>
        </Slider>
      </Container>
    </Container>
  );
}

export default Clients;
