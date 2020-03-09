import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import roselia_logo from "../../resources/images/D4l379Roselia-Logo-6XL7FN.png";

class TimeUntil extends Component {
  state = {};

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="wrapper" style={{ border: "none" }}>
            <img src={roselia_logo} alt="Roselia Logo" />
          </div>
          <div className="countdown_top">Event starts in:</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">Hrs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">59</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">59</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUntil;
