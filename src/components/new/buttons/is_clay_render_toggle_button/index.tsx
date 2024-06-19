import React, { MouseEvent } from 'react'

import { IsClayRenderToggleButtonInterface } from '@/interfaces/new/buttonsInterfaces'

import './index.scss'

export default function IsClayRenderToggleButton({
  isClayRender,
  handleOnClick,
}: IsClayRenderToggleButtonInterface) {

  return (
    <button
      id='is_clay_render_toggle_button'
      className='toggle_button'
      onClick={handleOnClick}
    >
      {!isClayRender ? 'Clay' : 'Final'}
    </button>
  )
}
