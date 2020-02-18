import { combineReducers } from 'redux';

import RecordingsReducer from './reducer_recordings';
import ControlsReducer from './reducer_controls';
import TestReducer from './reducer_test'

const rootReducer = combineReducers({
  recordings:RecordingsReducer,
  controls:ControlsReducer,
  testData:TestReducer
})

export default rootReducer;