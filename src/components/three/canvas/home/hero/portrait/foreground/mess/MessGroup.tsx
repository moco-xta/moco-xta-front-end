import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import ToolsGroup from './tools/ToolsGroup'
import ProfilePicture from './ProfilePicture'
import LogoAthleticoNacionalComponent from './LogoAthleticoNacionalComponent'
import HeartComponent from './HeartComponent'
import GaneshComponent from './GaneshComponent'
import ChristusComponent from './ChristusComponent'

import {
  messGroupDefaultValues,
  getMessGroupAnimationsData,
} from '@/data/home/hero/three/portrait/foreground/mess/messGroupData'

import { showHide } from 'animations'

export default function MessGroup() {
  const { timeline } = useGSAPTimelineContext()

  const messGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: messGroupRef.current,
        animationsData: getMessGroupAnimationsData(),
      })
    },
    { scope: messGroupRef },
  )

  return (
    <group
      ref={messGroupRef}
      {...messGroupDefaultValues}
      visible={messGroupDefaultValues.visible}
    >
      <ToolsGroup />
      <ProfilePicture />
      <LogoAthleticoNacionalComponent />
      <HeartComponent />
      <GaneshComponent />
      <ChristusComponent />
    </group>
  )
}
