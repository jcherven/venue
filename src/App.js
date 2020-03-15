import React, {Component} from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Event from "./components/Event";
import Calendar from './components/Calendar';
import About from './components/About';
// import Blog from './components/Blog';
// import PickUp from './components/PickUp';
// import Gallery from './components/Gallery';
// import Wanted from './components/Wanted';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{height: "1500px", background: "cornflowerblue"}}
      >
        <Header />
        <Event />
        <Calendar />
        <About />
      </div>
    );
  }
}

export default App;

// ex: filetype=javascriptreact
