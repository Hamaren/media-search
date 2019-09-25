import React, {Component} from 'react';
import Media from './Media.jsx';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      query: '',
      media: [
        {
          Poster: 'test'
        }
      ]
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
          <input className="Search-input" placeholder="Search..."
            value={this.state.query}
            onChange={event => {this.setState({query: event.target.value})}}
            onKeyPress={event => {
              if(event.key === 'Enter'){
                this.search(event)
              }
            }}
           />
          <button className="Search-submit" onClick={(event)=> this.search(event)} ></button>
        </form>
        <Media media={this.state.media} />
      </div>
    )
  }
}

export default App;
