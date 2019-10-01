import React, {Component} from 'react';
import './App.scss';

class Pagination extends Component{
  render(){
    return(
      (this.props.pages.length > 1) ?
      <div className="Pagination">
      {
        this.props.pages.map((page, i) => {
          return (<div className={
          (page === this.props.currentPage) ? 'Page Current-page' : 'Page'
        } page={page} key={i} onClick={(event) => this.props.searchByPage(event)}>{page}</div>)
        })
      }
      </div> : false
    )
  }
}

export default Pagination;
