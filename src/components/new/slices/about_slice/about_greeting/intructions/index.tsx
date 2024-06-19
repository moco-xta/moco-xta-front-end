import React from 'react'
import { isMobile } from 'react-device-detect'

import { InstructionsInterface } from '@/interfaces/new/componentsInterfaces'

import DesktopInstructions from './desktop_instructions'
import MobileInstructions from './mobile_instructions'

import './index.scss'

export default function Instructions({
  handleSetIsClayRender,
}: InstructionsInterface) {
  return (
    <>
      {!isMobile ? (
        <DesktopInstructions handleSetIsClayRender={handleSetIsClayRender} />
      ) : (
        <MobileInstructions />
      )}
    </>
  )
}
