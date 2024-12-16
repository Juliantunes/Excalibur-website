import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-page">
      {/* Title */}
      <div className="home-title">Excalibur Gallery</div>
      <div className="header-line"></div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/shop">Shop</a>
      </nav>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="/image1.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="/image2.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="/image3.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        &copy; 2024 Excalibur Gallery. All Rights Reserved.
      </footer>
    </div>
  );
}

export default HomePage;
