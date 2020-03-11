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
    autoplaySpeed: 7000,
    fade: true,
    speed: 2700,
    cssEase: "linear"
  };

  const viewportHeight = window.innerHeight;

  const styleCarouselImage = {
    backgroundSize: "cover",
    backgroundPositionY: "center",
    height: `${viewportHeight}px`
  };

  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${viewportHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_01})`,
              ...styleCarouselImage
            }}
          />
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_02})`,
              ...styleCarouselImage
            }}
          />
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_03})`,
              ...styleCarouselImage
            }}
          />
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_04})`,
              ...styleCarouselImage
            }}
          />
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_05})`,
              ...styleCarouselImage
            }}
          />
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_06})`,
              ...styleCarouselImage
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
