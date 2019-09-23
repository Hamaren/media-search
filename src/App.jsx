import React, {Component} from 'react';
import './App.css';
//import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      query: ''
    }
  }

  search(e){
    e.preventDefault()
    console.log('this.state', this.state);
    let movie;
    const baseUrl = 'http://www.omdbapi.com/?';
    const fetchUrl = baseUrl + 'apikey=38697045&s=' + this.state.query + '&page=2';
    console.log(fetchUrl);
    fetch(fetchUrl, {
      method: 'GET'
    }).then(response => movie = response.json()).then(json => {
      movie = json;
      console.log(movie);
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
