import React, {Component} from 'react';
import './App.scss';
//import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      query: '',
      media: []
    }
  }

  search(e){
    e.preventDefault()
    let mediaBase = [];
    //let pages;
    const baseUrl = 'http://www.omdbapi.com/?';
    const fetchUrl = baseUrl + 'apikey=38697045&s=' + this.state.query;

    fetch(fetchUrl, {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      if(json.Response === 'True'){
        //pages = Math.ceil(json.totalResults / 10);
        mediaBase.push(json.Search);
        this.setState({media: json.Search})
        console.log(mediaBase[0]);
      }
      return
    })
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Movies Search</div>
        <form className="Search-form">
          <input className="Search-input" placeholder="search an artist..."
            value={this.state.query}
            onChange={event => {this.setState({query: event.target.value})}}
            onKeyPress={event => {
              if(event.key === 'Enter'){
                this.search(event)
              }
            }}
           />
          <button className="Search-submit" onClick={(event)=> this.search(event)} >button</button>
        </form>
        <div className="Profile">
          <div>Movie Name</div>
          <div>Movie Poster</div>
        </div>
        <div className="Gallery">
           Gallery
        </div>
      </div>
    )
  }
}

export default App;
