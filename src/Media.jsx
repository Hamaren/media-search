import React, {Component} from 'react';
import MediaBlock from './MediaBlock.jsx';
import './App.scss';

class Media extends Component{
  render(){
    return(
      <div className="Media">
       { (this.props.media.length !== 0) ?
         this.props.media.map((media, i) =>{
           return (<MediaBlock key={i} data={media} />)
         }) : ''
       }
      </div>
    )
  }
}

export default Media;
