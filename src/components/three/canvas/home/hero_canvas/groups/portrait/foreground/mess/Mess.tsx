import React from 'react'

import HeartComponent from './HeartComponent'
import ToolsGroup from './tools/ToolsGroup'
import LogoAthleticoNacionalComponent from './LogoAthleticoNacionalComponent'
import LogoRCL from './LogoRCL'
import ProfilPicture from './ProfilPicture'
import ChristusComponent from './ChristusComponent'
import GaneshComponent from './GaneshComponent'

import { default as foregroundAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/foregroundAnimationsConstants.json'
import { default as messAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/messAnimationsConstants.json'

export default function Mess() {
  return (
    <group
      position={[
        messAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
        -foregroundAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
        messAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
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
