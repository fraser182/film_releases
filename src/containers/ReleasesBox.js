import React, { Component } from 'react';
import Header from '../components/Header.js';
import FilmList from '../components/FilmList.js';
import MoreReleases from '../components/MoreReleases.js';
import '../styles/ReleasesBox.css';
import NewMovieForm from '../components/NewMovieForm.js';


class ReleasesBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part",
          url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    };

    this.handleNewMovieSubmit = this.handleNewMovieSubmit.bind(this);
  }

  handleNewMovieSubmit(newMovie){
    newMovie.id = Date.now();
    // creates a new array, with everything in the old one, and the new one. 3 dots remove the old array brackets.
    const updatedMovies = [...this.state.data, newMovie]
    this.setState({data: updatedMovies});
  }

  render(){
    return (
      <div className="releases-box">
      <NewMovieForm onFilmSubmit={this.handleNewMovieSubmit}/>
      <Header title='Upcoming Film Releases for UK' />
      <FilmList film={this.state.data}/>
      <MoreReleases/>
      </div>
    );
  }
}

export default ReleasesBox;
