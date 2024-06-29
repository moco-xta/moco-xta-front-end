import React from 'react'

import './index.scss'

export default function AboutTarget() {
  return (
    <div id='about_target_test_block'>
      <span id='about_target'>+</span>
      <p>TEST</p>
      <p>{JSON.stringify(window.DeviceMotionEvent)}</p>
    </div>
  )
}
