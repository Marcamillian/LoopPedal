import {SET_PLAYSTATE, SET_RECORDSTATE} from '../actions'

export default function( state = {}, action ){
  switch(action.type){
    case SET_PLAYSTATE:
      return {...state, ['state']:action.payload.data}
    default:
      return state;
  }
}