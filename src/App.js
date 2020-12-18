import React, { Component } from "react";
import './resources/styles.css';
import Header from './components/header_footer/Header.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App" style={{height:'1500px',background:'cornflowerblue'}}>yubi yubi</div>
        <Header />
      </div>
    );
  }
}

export default App;
