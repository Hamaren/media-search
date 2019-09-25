import React, {Component} from 'react';
import MediaBlock from './MediaBlock.jsx';
import './App.scss';

class Media extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="Media">
       { (this.props.media.length > 0) ?
         this.props.media.map((media, i) =>{
           return (<MediaBlock key={i} mediaUnit={media} />)
         }) :
         ''

       }
        <MediaBlock />
      </div>
    )
  }
}

export default Media;
