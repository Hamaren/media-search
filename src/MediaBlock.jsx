import React, {Component} from 'react';
import './App.scss';

class MediaBlock extends Component{
  modalY(obj) {
      let modalBack = document.createElement('div'),
          modalWindowY = document.createElement('div'),
          modalClose = document.createElement('a');

      modalBack.className = 'modal-back';
      modalClose.className = 'y-modal-close';
      modalClose.innerHTML = '<i class="close-icon"></i>';
      modalWindowY.className = 'y-modal-window';
      modalWindowY.appendChild(obj);
      modalWindowY.classList.add('show-modal');
      modalWindowY.appendChild(modalClose);
      modalBack.appendChild(modalWindowY);
      document.body.appendChild(modalBack);

      document.querySelector('.modal-back').addEventListener('click', function (e) {
          if (e.target.classList.contains('modal-back')) {
              document.body.removeChild(this);
          }
      });

      document.querySelector('.y-modal-close').onclick = function () {
          document.querySelector('.modal-back').remove(this);
      };
  }

  showDetails = event =>{
    event.preventDefault();
    const targetId = event.target.getAttribute('mid');

    fetch('http://www.omdbapi.com/?apikey=38697045&i=' + targetId + '&plot=full', {
      method: 'GET'
    }).then(response => response.json()).then(json => {
      const detailObj = {
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
      }

      let modalContent = document.createElement('div');
      let poster = document.createElement('img');
      let table = document.createElement('table');

      modalContent.className = 'Media-details'
      poster.className = 'Modal-poster';

      if(json.Poster !== 'N/A'){
        poster.src = json.Poster;
      } else{
        poster.src = '/images/no-poster.jpg';
      }

      for(let key in detailObj){
        let tr = document.createElement('tr');
        let th = document.createElement('td');
        let td = document.createElement('td');

        tr.className = 'Media-block__info-row';
        th.className = 'Media-block__info-col col-th';
        td.className = 'Media-block__info-col';
        th.innerHTML = key;
        td.innerHTML = detailObj[key];

        tr.appendChild(th);
        tr.appendChild(td);
        table.appendChild(tr);
      }

      modalContent.appendChild(poster);
      modalContent.appendChild(table);

      this.modalY(modalContent)
    })
  }

  render(){
    return(
        <div className="Media-block">
          <div className="Media-block__poster">
            <img className="Media-block__poster-img" src={(this.props.data.Poster !== 'N/A') ? this.props.data.Poster : '/images/no-poster.jpg'} alt="" />
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
