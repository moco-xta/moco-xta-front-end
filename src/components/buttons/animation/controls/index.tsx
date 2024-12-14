import React from 'react'

import { PauseButton, ReverseButton } from '@/components/buttons/animation'

import './index.scss'

export default function Controls() {
  return (
    <div
      id='animation_controls'
      className='animation_controls_zIndex'
    >
      <PauseButton />
      <ReverseButton />
    </div>
  )
}
