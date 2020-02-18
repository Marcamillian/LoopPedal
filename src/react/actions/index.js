export const TEST_ACTION = 'test_action'

export const FETCH_RECORDINGS = 'fetch_recordings'
export const DELETE_RECORDINGS = 'delete_recording'
export const ADD_RECORDING = 'add_recording'
export const MUTE_RECORDING = 'mute_recording'

export const SET_PLAYSTATE = 'toggle_play'
export const SET_RECORDSTATE = 'toggle_record'


export function playClips(){
  return{
    type: SET_PLAYSTATE,
    payload:{data:'playing'}
  }
}

export function pauseClips(){
  return{
    type: SET_PLAYSTATE,
    payload:{data:'paused'}
  }
}

export function stopClips(){
  return{
    type: SET_PLAYSTATE,
    payload:{data:'stopped'}
  }
}

export function testAction(value){
  return{
    type: TEST_ACTION,
    payload: {data: value}
  }
}