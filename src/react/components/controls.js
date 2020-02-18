import React, {Component} from 'react';
import { connect } from 'react-redux';

import { playClips, stopClips } from '../actions';

class Controls extends Component{

  render(){

    let boundTogglePlaystate = this.togglePlayState.bind(this);

    return(
      <div className="controls">
        <p>{this.props.playState}</p>
        <button onClick={ boundTogglePlaystate }>Play</button>
        <button>Record</button>
      </div>
    )
  }

  togglePlayState(){
    switch(this.props.playState){
      case 'playing':
        this.props.stopClips()
      case 'stopped':
        this.props.playClips()
      default:
        this.props.stopClips()
    }
  }

}

function mapStateToProps( state ){
  return{
    playState: state.controls.state
  }
}

export default connect( mapStateToProps, {
 playClips,
 stopClips
})(Controls);