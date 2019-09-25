import React, {Component} from 'react';
import './App.scss';

class MediaBlock extends Component{
  constructor(props){
    super(props)
  }

  requestM(link){
    let fullInfo;
    fetch(link, {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      fullInfo = json
      let fff = setTimeout(function(){
        return fullInfo.Title
      },1000)
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
                <tr className="Media-block__info-row">
                {

                }
                  <td className="Media-block__info-col col-th">Description:</td>
                  <td className="Media-block__info-col">{this.requestM(`http://www.omdbapi.com/?apikey=38697045&i=${this.props.data.imdbID}&plot=full`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
  }
}

export default MediaBlock;
