import React, { MouseEvent } from 'react'

import { IsClayRenderToggleButtonInterface } from '@/interfaces/new/buttonsInterfaces'

import ToggleButton from '@/components/buttons/toggle_button'

import './index.scss'

export default function IsClayRenderToggleButton({
  handleSetIsClayRender,
}: IsClayRenderToggleButtonInterface) {
  return (
    <ToggleButton
      label={['CLAY', 'FINAL']}
      handleOnClick={handleSetIsClayRender}
    />
  )
}
