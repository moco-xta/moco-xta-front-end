import React from 'react'

import LogoRCL from './LogoRCL'
import ProfilPicture from './ProfilPicture'
import ToolsGroup from './tools/ToolsGroup'
import GaneshComponent from './GaneshComponent'
import HeartComponent from './HeartComponent'
import ChristusComponent from './ChristusComponent'

export default function Mess() {
  return (
    <group position={[0, 5, 0]}>
      <HeartComponent />
      {/* <ToolsGroup /> */}
      {/* <LogoRCL /> */}
      <ProfilPicture />
      {/* <ChristusComponent /> */}
      {/* <GaneshComponent /> */}
    </group>
  )
}
