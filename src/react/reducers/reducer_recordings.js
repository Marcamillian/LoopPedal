import _ from 'lodash'

import { FETCH_RECORDINGS, ADD_RECORDING } from '../actions'

export default function(state={}, action){
 switch(action.type){
  case ADD_RECORDING:
    return _.mapKeys(action.payload.data.recordings, 'id');
  default:
    return state;
 } 
}