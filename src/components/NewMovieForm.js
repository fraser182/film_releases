import React, { Component } from 'react';
import '../styles/NewMovieForm.css';

class NewMovieForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      url: ''
    };

    this.handleFilmNameChange = this.handleFilmNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFilmNameChange(event){
    this.setState({name: event.target.value})
  }

  handleUrlChange(event){
    this.setState({url: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim();
    const url = this.state.url.trim();
    if(!name|| !url){
      return
    }
    this.props.onFilmSubmit({name: name, url: url}) // setting properties on moviesubmit
    // this.props.onFilmSubmit({name: this.state.name, url: this.state.url}) // setting properties on moviesubmit 
    this.setState({name: '', url:''}); // resets the form back to an empty string on submit

  }

  render(){
    return(
      <form className="new-movie-form" onSubmit={this.handleSubmit}>

      <input type="text" placeholder="Film Name"
      value ={this.state.name}
      onChange={this.handleFilmNameChange}/>

      <input type="text" placeholder="IMDB url: https://www.imdb.com/title/tt4633694/?ref_=rlm"
      value={this.state.url}
      onChange={this.handleUrlChange}/>
      <input type="submit" value="Add Movie" />
      </form>
    );
  }

}

export default NewMovieForm;
