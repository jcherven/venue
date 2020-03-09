import React from "react";
import Carousel from "./Carousel";

import roselia_logo from "../../resources/images/D4l379Roselia-Logo-6XL7FN.png";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div
        className="artist_name"
        style={{ border: "none", position: "relative", top: "-130px" }}
      >
        <div className="wrapper" style={{ border: "none" }}>
          <img
            src={roselia_logo}
            alt="Roselia Logo"
            style={{ position: "relative", left: "-135px", top: "-70px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
