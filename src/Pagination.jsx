import React, {Component} from 'react';
import './App.scss';

class Pagination extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Paginationi">

        {(this.props.pages === 1) ?
          for(let i = 0; i < 3; i++){
            console.log(this.props.pages)
          } : ''
        }
        <a className="Page" href="1">1</a>
        {/*(this.postMessages.length == 0) ?
          <div className="no-posts">No posts</div> :
          this.postMessages.map((post, i) => {
             return (<Post key={i} ttest={post.message} />)
          })*/}
      </div>
    )
  }
}

export default Pagination;
