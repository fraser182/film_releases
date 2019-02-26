import React, { Component } from 'react';
import Film from './Film.js';
import '../styles/FilmList.css';

class FilmList extends Component {

  render(){
    const filmObjects = this.props.film.map((film) => {
      return (
        <Film key ={film.id} film={film}/>
      )
    });
    return (
      <ul className='film-list'>
      {filmObjects}
      </ul>
    );
  }
}

export default FilmList;
