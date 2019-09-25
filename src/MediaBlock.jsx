import React, {Component} from 'react';
import './App.scss';

class MediaBlock extends Component{

  render(){
    return(
        <div className="Media-block">
          <div className="Media-block__poster">
            <img className="Media-block__poster-img" src={this.props.mediaUnit.Poster} alt="" />
          </div>
          <div className="Media-block__info box">
            <h3 className="Media-block__title">Media title</h3>
            <table className="Media-block__table">
              <tr className="Media-block__info-row">
                <td className="Media-block__info-col col-th">Type:</td>
                <td className="Media-block__info-col">Movie</td>
              </tr>
              <tr className="Media-block__info-row">
                <td className="Media-block__info-col col-th">Type:</td>
                <td className="Media-block__info-col">Movie</td>
              </tr>
              <tr className="Media-block__info-row">
                <td className="Media-block__info-col col-th">Type:</td>
                <td className="Media-block__info-col">Movie</td>
              </tr>
            </table>
          </div>
        </div>
    )
  }
}

export default MediaBlock;
