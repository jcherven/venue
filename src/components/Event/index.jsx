import React from "react";
import Carousel from "./Carousel";
import TimeUntil from "./TimeUntil";

const Event = () => {
  return (
    <div style={{position: "relative"}}>
      <Carousel />
      <TimeUntil />
    </div>
  );
};

export default Event;
