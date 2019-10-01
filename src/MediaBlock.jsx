import React, {Component} from 'react';
import './App.scss';

class MediaBlock extends Component{
  constructor(props){
    super(props)
    this.state = {
      Rated: '',
      Runtime: '',
      Genre: '',
      Director: '',
      Writer: '',
      Actors: '',
      Country: '',
      Rating: '',
      Released: '',
      Production: '',
      Website: '',
      Awards: '',
      Plot: ''
    }
  }

  componentDidMount(){
    let test = document.querySelector('.Media-block__details');
    console.log(test)
  }

  showDetails = event =>{
    event.preventDefault();
    const targetId = event.target.getAttribute('mid');
    const detailsTarget = event.target.previousSibling.firstChild;

    fetch('http://www.omdbapi.com/?apikey=38697045&i=' + targetId + '&plot=full', {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      this.setState({
        Rated: json.Rated,
        Runtime: json.Runtime,
        Genre: json.Genre,
        Director: json.Director,
        Writer: json.Writer,
        Actors: json.Actors,
        Country: json.Country,
        Rating: json.imdbRating,
        Released: json.Released,
        Production: json.Production,
        Website: json.Website,
        Awards: json.Awards,
        Plot: json.Plot
      })

      for(let key in this.state){
        let tr = document.createElement('tr');
        let th = document.createElement('td');
        let td = document.createElement('td');

        tr.className = 'Media-block__info-row';
        th.className = 'Media-block__info-col col-th';
        td.className = 'Media-block__info-col';
        th.innerHTML = key;
        td.innerHTML = this.state[key];

        tr.appendChild(th);
        tr.appendChild(td);
        detailsTarget.appendChild(tr);
      }
    })
  }

  render(){
    return(
        <div className="Media-block">
          <div className="Media-block__poster">
            <img className="Media-block__poster-img" src={this.props.data.Poster} alt="" />
          </div>
          <div className="Media-block__info box">
            <h3 className="Media-block__title">{this.props.data.Title}</h3>
            <table className="Media-block__table">
              <tbody>
                <tr className="Media-block__info-row">
                  <td className="Media-block__info-col col-th">Type:</td>
                  <td className="Media-block__info-col">{this.props.data.Type}</td>
                </tr>
                <tr className="Media-block__info-row">
                  <td className="Media-block__info-col col-th">Year:</td>
                  <td className="Media-block__info-col">{this.props.data.Year}</td>
                </tr>
              </tbody>
            </table>
            <div className="Media-block__details" mid={this.props.data.imdbID} onClick={(event)=>this.showDetails(event)}>Show details</div>
          </div>
        </div>
    )
  }
}

export default MediaBlock;
