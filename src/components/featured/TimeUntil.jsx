import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import roselia_logo from "../../resources/images/D4l379Roselia-Logo-6XL7FN.png";
import axios from "axios";

const bdbApiBaseUrl = "https://api.bandori.ga/v1/en";
const bdbApiEndpoint = {
  currentEvent: "/event",
  card: "/card"
};
const bdbResourceBaseUrl = "https://res.bandori.ga/assets-en/event/";
const bdbResourceEndpoint = {
  logo: "/images_rip/logo.png",
  banner: "/images_rip/banner.png"
};

class TimeUntil extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      countdownMessage: "",
      deadline: 0,
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      assetBundleName: "",
      eventBanner: "",
      eventLogo: "",
      startAt: 0,
      endAt: 0
    };
  }

  selectDeadline(startAt, endAt) {
    const nowTime = Date.parse(new Date());
    if (nowTime - startAt > 0) {
      this.setState({
        deadline: endAt,
        countdownMessage: "Event ends at: "
      });
    } else {
      this.setState({
        deadline: startAt,
        countdownMessage: "Event starts at: "
      });
    }
  }

  getTimeUntil(deadline) {
    const nowTime = Date.parse(new Date());
    const countdown = deadline - nowTime;

    const sec = Math.floor((countdown / 1000) % 60);
    const min = Math.floor((countdown / 1000 / 60) % 60);
    const hr = Math.floor((countdown / (1000 * 60 * 60)) % 24);
    const day = Math.floor(countdown / (1000 * 60 * 60 * 24));

    this.setState({
      day,
      hr,
      min,
      sec
    });
  }

  componentDidMount() {
    axios.get(bdbApiBaseUrl + bdbApiEndpoint.currentEvent).then(
      response => {
        this.setState({ assetBundleName: response.data.assetBundleName });
        this.setState({ startAt: parseInt(response.data.startAt) });
        this.setState({ endAt: parseInt(response.data.endAt) });
        this.selectDeadline(this.state.startAt, this.state.endAt);
      },
      error => {
        this.setState(error);
      }
    );
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="wrapper" style={{ border: "none" }}>
            <img
              src={`${bdbResourceBaseUrl}${this.state.assetBundleName}${bdbResourceEndpoint.banner}`}
              alt="Current Event Logo"
            />
          </div>
          <div className="countdown_top">{this.state.countdownMessage}</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.day}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hr}</div>
              <div className="countdown_tag">Hrs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.min}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.sec}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUntil;
