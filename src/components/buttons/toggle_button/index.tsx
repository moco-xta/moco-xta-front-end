import React from 'react'
import { useDispatch } from 'react-redux'

import { ToggleButtonInterface } from '@/interfaces/new/buttonsInterfaces'

import { AppDispatch } from '@/redux/store'

import './index.scss'

export default function ToggleButton({ label, checked, action }: ToggleButtonInterface) {
  const dispatch = useDispatch<AppDispatch>()

  const handleOnClick = () => {
    dispatch(action(!checked))
  }

  return (
    <div id='toggle_button_container'>
      <div id='toggle_button_label'>
        {label[0]}
        &emsp;
        {label[1]}
      </div>
      <div id='toggle_button'>
        <input
          id='checkbox_toggle_button'
          type='checkbox'
          checked={checked}
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
