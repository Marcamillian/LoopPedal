export const TOGGLE_RECORDING = 'toggle_recording'
export const STOP_RECORDING = 'stop_recording'
export const TOGGLE_PLAYSTATE = 'toggle_playstate'


// playback
export function togglePlayback(){
  return{
    type: TOGGLE_PLAYSTATE
  }
}

// recording
export function toggleRecording(){
  return{
    type: TOGGLE_RECORDING
  }
}

export function stopRecording(){
  return{
    type: STOP_RECORDING
  }
}
