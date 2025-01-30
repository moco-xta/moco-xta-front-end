import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

// import ToolsGroup from './tools/ToolsGroup'
import BustComponent from './Bust'
// import ProfilePicture from './ProfilePicture'
// import LogoAthleticoNacionalComponent from './LogoAthleticoNacionalComponent'
// import HeartComponent from './HeartComponent'
// import GaneshComponent from './GaneshComponent'
// import ChristusComponent from './ChristusComponent'

import {
  messGroupDefaultValues,
  getMessGroupAnimationsData,
} from '@/data/hero/three/portrait/foreground/mess/messGroupData'

import { showHide } from '@/animation/index'

export default function MessGroup() {
  const { timeline } = useGSAPTimelineContext()

  const messGroupRef = useRef<THREE.Group>(null!)

  /* useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: messGroupRef.current,
        animationsData: getMessGroupAnimationsData(),
      })
    },
    { scope: messGroupRef },
  ) */

  return (
    <group
      ref={messGroupRef}
      {...messGroupDefaultValues}
      visible={messGroupDefaultValues.visible}
    >
      {/* <ToolsGroup /> */}
      <BustComponent />
      {/* <ProfilePicture /> */}
      {/* <LogoAthleticoNacionalComponent /> */}
      {/* <HeartComponent /> */}
      {/* <GaneshComponent /> */}
      {/* <ChristusComponent /> */}
    </group>
  )
}
