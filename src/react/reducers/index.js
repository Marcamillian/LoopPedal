import { combineReducers } from 'redux';

import ControlsReducer from './reducer_controls';

const rootReducer = combineReducers({
  controls:ControlsReducer,
})

export default rootReducer;