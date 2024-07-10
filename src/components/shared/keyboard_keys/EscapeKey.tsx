import React from 'react'

import { EscapeKeyInterface } from '@/interfaces/keyboardKeysInterfaces'

import './index.scss'

export default function EscapeKey({ handleAction }: EscapeKeyInterface) {
  const handleOnClick = () => {
    if (handleAction) handleAction()
  }

  return (
    <span
      id='esc_keyboard_key'
      className='keyboard_key'
      onClick={handleOnClick}
    >
      ESC
    </span>
  )
}
