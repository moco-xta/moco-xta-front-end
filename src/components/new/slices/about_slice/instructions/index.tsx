import React from 'react'

import { InstructionsInterface } from '@/interfaces/new/componentsInterfaces'

import './index.scss'

export default function Instructions({
  showInstructions,
}: InstructionsInterface) {
  return (
    <div
      id='instructions'
      className={showInstructions ? 'show_instructions' : 'hide_instructions'}
    >
      <p>Instructions</p>
      <button id='button'>Enter</button>
    </div>
  )
}
