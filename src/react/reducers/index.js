import { combineReducers } from 'redux';

import RecordingsReducer from './reducer_recordings';
import ControlsReducer from './reducer_controls';

const rootReducer = combineReducers({
  recordings:RecordingsReducer,
  controls:ControlsReducer
})

export default rootReducer;