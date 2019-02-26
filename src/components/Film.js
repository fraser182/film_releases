import React, { Component } from 'react';
import '../styles/Film.css';


class Film extends Component {

  render(){
    return (
      <li className='film'>
      <a href={this.props.film.url}>{this.props.film.name}</a>
      </li>
    );
  }
}
  export default Film;
