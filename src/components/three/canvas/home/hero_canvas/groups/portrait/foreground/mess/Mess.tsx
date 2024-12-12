import React from 'react'

import LogoRCL from './LogoRCL'
import ProfilPicture from './ProfilPicture'
import ToolsGroup from './tools/ToolsGroup'
import GaneshComponent from './GaneshComponent'
import HeartComponent from './HeartComponent'
import ChristusComponent from './ChristusComponent'

interface MessInterface {
  timeline: GSAPTimeline
}

export default function Mess({ timeline }: MessInterface) {
  return (
    <group position={[0, 5, 0]}>
      <HeartComponent timeline={timeline} />
      <ToolsGroup timeline={timeline} />
      <LogoRCL timeline={timeline} />
      <ProfilPicture timeline={timeline} />
      <ChristusComponent timeline={timeline} />
      <GaneshComponent timeline={timeline} />
    </group>
  )
}
