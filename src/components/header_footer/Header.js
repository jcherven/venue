import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor:'#2f2f2f',
          boxShadow: 'none',
          padding: '10px 0px'
        }}>
        yubi yubi header
        <Toolbar>
          <div className="header_logo"></div>
          <div className="header_logo_venue">Galaxy</div>
          <div className="header_logo_title">Livehouse</div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
