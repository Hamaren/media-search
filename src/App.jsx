import React, {Component} from 'react';
import Media from './Media.jsx';
import Pagination from './Pagination.jsx';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      sesrchLink: '',
      media: [],
      pages: [],
      currentPage: null
    }
  }

  search(e){
    e.preventDefault()
    let query = document.querySelector('.Search-input').value;
    let pagesNum;
    let pagesArr = []
    const baseUrl = 'http://www.omdbapi.com/?';
    const year = document.querySelector('.By-year').value;
    const fetchUrl = baseUrl + 'apikey=38697045&s=' + query + '&y=' + year;

    fetch(fetchUrl, {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      if(json.Response === 'True'){
        pagesNum = Math.ceil(json.totalResults / 10);
        for(let i=0; i<pagesNum; i++){
          pagesArr.push(i+1);
        }
        this.setState({
          searchLink: fetchUrl,
          media: json.Search,
          pages: pagesArr,
          currentPage: 1
        })
      }
      return
    })
  }

  searchByPage = (e) => {
    let page = e.target.getAttribute('page');
    fetch(this.state.searchLink + '&page=' + page, {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      if(json.Response === 'True'){
        this.setState({
          currentPage: +page,
          media: json.Search,
        })
      }
      return
    })
  }

  inputCheck = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };

  focus = (event) => {
    console.log(event.target.value)
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Media Search</div>
        <form className="Search-form">
          <div className="Form-group">
            <input className="Search-input Input box" placeholder="Search..."
              value={this.state.query}
              onKeyPress={event => {
                if(event.key === 'Enter'){
                  this.search(event)
                }
              }}
             />
            <button className="Search-submit" onClick={(event)=> this.search(event)} ></button>
          </div>
          <div className="Form-row">
            <div className="Form-group">
              <label className="Form-label">Release year</label>
              <input className="Input By-year" placeholder="Year" maxlength="4" onKeyDown={(event)=> this.inputCheck(event)} onBlur={(event)=> this.focus(event)} />
            </div>
            <div className="Form-group">
              <label className="Form-label">Media type</label>
              <select className="select By-type">
                <option>All types</option>
                <option>Movie</option>
                <option>Series</option>
                <option>Episode</option>
                <option>Game</option>
              </select>
            </div>
          </div>
        </form>
        <Pagination pages={this.state.pages} currentPage={this.state.currentPage} searchByPage={this.searchByPage}/>
        <Media media={this.state.media} />
      </div>
    )
  }
}

export default App;
