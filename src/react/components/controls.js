import React, {Component} from 'react';
import { connect } from 'react-redux';

import { togglePlayback, toggleRecording } from '../actions';

class Controls extends Component{

  render(){
    console.log(this.props.controlState)
    return(
      <div className="controls">
        <p>{this.props.controlState.playState}</p>
        <button onClick={ this.props.togglePlayback }>Play</button>
        <p>{ this.props.controlState.recordingState}</p>
        <button onClick={ this.props.toggleRecording}>Record</button>
      </div>
    )
  }

}

function mapStateToProps( state ){
  return{
    controlState: state.controls,
  }
}

export default connect( mapStateToProps, {
 togglePlayback,
 toggleRecording
})(Controls);