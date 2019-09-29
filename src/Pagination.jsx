import React, {Component} from 'react';
import './App.scss';

class Pagination extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      (this.props.pages.length > 1) ?
      <div className="Pagination">
      {
        this.props.pages.map((page, i) => {
          return (<div className={
          (page === this.props.currentPage) ? 'Page Current-page' : 'Page'
          } page={page} key={i}>{page}</div>)
        })
      }
      </div> : false
    )
  }
}

export default Pagination;
