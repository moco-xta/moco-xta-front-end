import React from 'react'

import ToolsGroup from './tools/ToolsGroup'
import ProfilePicture from './ProfilePicture'
import LogoAthleticoNacionalComponent from './LogoAthleticoNacionalComponent'
import HeartComponent from './HeartComponent'
import GaneshComponent from './GaneshComponent'
import ChristusComponent from './ChristusComponent'

import { getMessGroupDefaultValues } from '@/data/home/hero/three/portrait/foreground/mess/messGroupData'

export default function MessGroup() {
  return (
    <group {...getMessGroupDefaultValues}>
      <ToolsGroup />
      <ProfilePicture />
      <LogoAthleticoNacionalComponent />
      <HeartComponent />
      <GaneshComponent />
      <ChristusComponent />
    </group>
  )
}
