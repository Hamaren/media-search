import React, {Component} from 'react';
import Media from './Media.jsx';
import Pagination from './Pagination.jsx';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      response: true,
      sesrchLink: '',
      media: [],
      pages: [],
      currentPage: null
    }
  }

  search(e){
    e.preventDefault();

    let query = document.querySelector('.Search-input').value,
        pagesNum,
        pagesArr = [];
    const baseUrl = 'http://www.omdbapi.com/?',
          year = document.querySelector('.By-year').value,
          type = document.querySelector('.By-type').value,
          fetchUrl = baseUrl + 'apikey=38697045&s=' + query + '&y=' + year + '&type=' + type;

    fetch(fetchUrl, {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      if(json.Response === 'True'){
        pagesNum = Math.ceil(json.totalResults / 10);
        for(let i=0; i<pagesNum; i++){
          pagesArr.push(i+1);
        }
        this.setState({
          response: true,
          searchLink: fetchUrl,
          media: json.Search,
          pages: pagesArr,
          currentPage: 1
        })
      } else{
        this.setState(
          {
            response: false,
            searchLink: '',
            media: [],
            pages: [],
            currentPage: null
          }
        )
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
    const key = event.key
      if(!(
          key >= '0' && event.key <= '9' ||
          key === 'ArrowLeft' ||
          key === 'ArrowRight' ||
          key === 'Backspace' ||
          key === 'Delete'
        )){
          event.preventDefault();
        }
  };

  focus = (event) => {

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
              <input className="Input By-year" placeholder="Year" maxLength="4" onKeyDown={(event)=> this.inputCheck(event)} onBlur={(event)=> this.focus(event)} />
            </div>
            <div className="Form-group">
              <label className="Form-label">Media type</label>
              <select className="select By-type" onBlur={(event)=> this.focus(event)}>
                <option></option>
                <option>Movie</option>
                <option>Series</option>
                <option>Episode</option>
                <option>Game</option>
              </select>
            </div>
          </div>
        </form>
        {(!this.state.response) ? <div className="Search-status">Media not found</div> : false}
        <Pagination pages={this.state.pages} currentPage={this.state.currentPage} searchByPage={this.searchByPage}/>
        {(this.state.media.length > 0) ? <Media media={this.state.media} /> : false}
        <Pagination pages={this.state.pages} currentPage={this.state.currentPage} searchByPage={this.searchByPage}/>
      </div>
    )
  }
}

export default App;
