import React, {Component} from 'react';
import './App.scss';

class MediaBlock extends Component{
  constructor(props){
    super(props)
  }

  /*requestM(link){
    let fullInfo;
    fetch(link, {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      fullInfo = json
      let fff = setTimeout(function(){
        return fullInfo.Title
      },1000)
    })

  }*/

  componentDidMount(){

  }

  showDetails(event){
    event.preventDefault();
    const targetId = event.target.getAttribute('mid');
    const detailsTarget = event.target.previousSibling.firstChild;

    fetch('http://www.omdbapi.com/?apikey=38697045&i=' + targetId, {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      let detailsArr = []

      for(let key in json){
        //if() continue
        console.log(json[key]);
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
            <a className="Media-block__details" mid={this.props.data.imdbID} onClick={(event)=>this.showDetails(event)}>Show details</a>
          </div>
        </div>
    )
  }
}

export default MediaBlock;
