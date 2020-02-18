import React,{Component} from 'react';

import RecordingBlock from './recording_block';

class RecordingsList extends Component{

  render(){
    return(
      <div className="recordings-list">
        <ul>
          <RecordingBlock></RecordingBlock>
        </ul>
      </div>
    )
  }
}