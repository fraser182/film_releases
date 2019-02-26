import React, { Component } from 'react';
import '../styles/Film.css';

// props is being passed in to the function
const Film = (props)=> {
  return (
    <li className='film'>
    <a href={props.film.url}>{props.film.name}</a>
    </li>
  );
}

export default Film;
