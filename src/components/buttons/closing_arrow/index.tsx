import React from 'react'

import { ClosingArrowInterface } from '@/interfaces/buttonsInterfaces'

import './index.scss'

export default function ClosingArrow({
  handleSetAuthenticationIsOpen,
}: ClosingArrowInterface) {

  return (
    <div id='closing_arrow_icon'>
      <input
        type='checkbox'
        id='closing_arrow_input'
        className='closing_arrow_input'
        checked={true}
        onClick={handleSetAuthenticationIsOpen}
      />
      <label
        htmlFor='closing_arrow_input'
        className='closing_arrow_label'
      >
        <span className='closing_arrow_line' />
      </label>
    </div>
  )
}