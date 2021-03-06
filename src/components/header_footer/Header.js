import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value,
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px",
        }}
      >
        yubi yubi header
        <Toolbar>
          <div className="header_logo">
            <div className="header_logo_venue">Galaxy</div>
            <div className="header_logo_title">Livehouse</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={(value) => this.toggleDrawer(value)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          ></SideDrawer>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
