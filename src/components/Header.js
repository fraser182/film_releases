import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {

  render(){
    return <div className="header">{this.props.title}</div>
  }
}

export default Header;
