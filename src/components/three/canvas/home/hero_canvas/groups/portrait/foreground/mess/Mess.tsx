import React from 'react'

import HeartComponent from './HeartComponent'
import ToolsGroup from './tools/ToolsGroup'
import LogoAthleticoNacionalComponent from './LogoAthleticoNacionalComponent'
import LogoRCL from './LogoRCL'
import ProfilPicture from './ProfilPicture'
import ChristusComponent from './ChristusComponent'
import GaneshComponent from './GaneshComponent'

import { default as foregroundAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/foregroundConstants.json'
import { default as messGroupConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/messGroupConstants.json'

export default function MessGroup() {
  return (
    <group
      position={[
        messGroupConstants.ANIMATION['0_PERCENT'].POSITION.X,
        -foregroundAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
        messGroupConstants.ANIMATION['0_PERCENT'].POSITION.Z,
      ]}
    >
      <HeartComponent />
      <ToolsGroup />
      <LogoAthleticoNacionalComponent />
      {/* <LogoRCL /> */}
      <ProfilPicture />
      <ChristusComponent />
      <GaneshComponent />
    </group>
  )
}
