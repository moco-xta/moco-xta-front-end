import React from 'react'

import { ToggleButtonInterface } from '@/interfaces/new/buttonsInterfaces'

import './index.scss'

export default function ToggleButton({
  label,
  handleOnClick,
}: ToggleButtonInterface) {
  return (
    <div id='toggle_button_container'>
      <div id='toggle_button_label'>
        {label[0]}&emsp;{label[1]}
      </div>
      <div id='toggle_button'>
        <input
          id='checkbox_toggle_button'
          type='checkbox'
        />
        <label
          id='label_toggle_button'
          htmlFor='checkbox_toggle_button'
          onClick={handleOnClick}
        />
      </div>
    </div>
  )
}
