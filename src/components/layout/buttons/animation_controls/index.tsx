import React from 'react'

import PauseButton from './pause_button'
import PlayButton from './play_button'
import ReverseButton from './reverse_button'
// import PreviousLabelButton from './previous_label_button'

import './index.scss'

export default function AnimationControls() {
  return (
    <div id='animation_controls'>
      {/* <PreviousLabelButton /> */}
      <ReverseButton />
      <PauseButton />
      <PlayButton />
    </div>
  )
}
