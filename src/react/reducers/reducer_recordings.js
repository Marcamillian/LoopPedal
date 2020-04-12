import { TOGGLE_RECORDING } from '../actions'

export default function(state={}, action){

 switch(action.type){
  case TOGGLE_RECORDING:
    if( state.recordState == 'recording'){
      console.log('recording->stopped')
      return {...state, ['recordingState']:'stopped'}
    }else if( state.recordState == 'stopped'){
      console.log('stopped->recording')
      return {...state, ['recordingState']:'recording'}
    }else{
      console.log('default')
      return {...state, ['recordingState']:'recording'}
    }
  default: 
    return state;
 } 
}
