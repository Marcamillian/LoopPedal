import React, {Component} from 'react';

class Controls extends Component{

  render(){

    let playCallback = this.props.playCallback? this.props.playCallback : ()=>{};
    let recordCallback = this.props.recordCallback? this.props.recordCallback : ()=>{};


    return(
      <div className="controls">
        <button onClick={ playCallback }>Play</button>
        <button onClick={ recordCallback }>Record</button>
      </div>
    )
  }

}

export default Controls;