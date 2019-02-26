import React, { Component } from 'react';
import '../styles/MoreReleases.css';

class MoreReleases extends Component {

  render(){
    return (
      <div className='more-releases'>
      <a href={'https://www.imdb.com/calendar/?region=gb'}>
      View more upcoming releases > ></a>
      </div>
    );
  }
}


export default MoreReleases;
