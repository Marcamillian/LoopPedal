import { TOGGLE_PLAYSTATE, TOGGLE_RECORDING} from '../actions'

export default function( state = {}, action ){

  switch(action.type){
    case TOGGLE_PLAYSTATE:
      if(state.playState == 'playing'){
        return {...state, ['playState']:'stopped'}
      }else if(state.playState == 'stopped'){
        return {...state, ['playState']:'playing'}
      }else{
        return {...state, ['playState']:'playing'}
      }
    case TOGGLE_RECORDING:
      if( state.recordingState == 'recording'){
        console.log('recording->stopped')
        return {...state, ['recordingState']:'stopped'}
      }else if( state.recordingState == 'stopped'){
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