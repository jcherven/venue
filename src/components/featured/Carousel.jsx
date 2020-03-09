import React from "react";
import Slider from "react-slick";

import slide_01 from "../../resources/images/slide_01.png";
import slide_02 from "../../resources/images/slide_02.png";
import slide_03 from "../../resources/images/slide_03.png";
import slide_04 from "../../resources/images/slide_04.png";
import slide_05 from "../../resources/images/slide_05.png";
import slide_06 from "../../resources/images/slide_06.png";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_01})`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_02})`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_03})`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_04})`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_05})`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_06})`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
