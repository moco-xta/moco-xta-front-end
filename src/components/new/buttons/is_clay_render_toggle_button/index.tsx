import React, { MouseEvent } from 'react'

import { IsClayRenderToggleButtonInterface } from '@/interfaces/new/buttonsInterfaces'

import './index.scss'

export default function IsClayRenderToggleButton({
  handleSetIsClayRender,
}: IsClayRenderToggleButtonInterface) {
  return (
    <div id='toggle_button_container'>
      <div id='toggle_button_label'>CLAY&emsp;FINAL</div>
      <div id='toggle_button'>
        <input
          id='checkbox_toggle_button'
          type='checkbox'
        />
        <label
          id='label_toggle_button'
          htmlFor='checkbox_toggle_button'
          onClick={handleSetIsClayRender}
        />
      </div>
    </div>
  )
}
