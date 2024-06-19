import React from 'react'
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaMousePointer,
} from 'react-icons/fa'
import { LuTouchpad } from 'react-icons/lu'

import AboutEnterButton from '@/components/new/buttons/about_enter_button'

import './index.scss'

export default function DesktopInstructions() {
  return (
    <div id='desktop_instructions'>
      <h2 id='desktop_instructions_title'>Instructions</h2>
      <div id='displacement_desktop_instructions'>
        <div id='displacement_keyboard_keys'>
          <FaArrowUp className='keyboard_key' />
          <div id='left_down_right_keys'>
            <FaArrowLeft className='keyboard_key' />
            <FaArrowDown className='keyboard_key' />
            <FaArrowRight className='keyboard_key' />
          </div>
        </div>
        <p>Utilisez les fleches pour vous deplacer</p>
      </div>
      <p id='camera_orientation_desktop_instructions'>
        Use{' '}
        <FaMousePointer
          id='mouse_pointer_icon'
          size={40}
        />{' '}
        or{' '}
        <LuTouchpad
          id='touchpad_icon'
          size={40}
        />{' '}
        pour orienter la camera
      </p>
      <AboutEnterButton />
    </div>
  )
}
