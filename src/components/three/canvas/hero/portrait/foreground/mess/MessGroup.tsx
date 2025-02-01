import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

// import ToolsGroup from './tools/ToolsGroup'
import BustComponent from './BustComponent'
// import ProfilePicture from './ProfilePicture'
// import LogoAthleticoNacionalComponent from './LogoAthleticoNacionalComponent'
// import HeartComponent from './HeartComponent'
// import GaneshComponent from './GaneshComponent'
// import ChristusComponent from './ChristusComponent'
import { Knight } from '@/components/three/models/shared/Knight'
import { QueenOfHearts } from '@/components/three/models/shared/QueenOfHearts'

import { getDegreeEuler } from '@/helpers/threeHelpers'

import {
  messGroupDefaultValues,
  getMessGroupAnimationsData,
} from '@/data/hero/three/portrait/foreground/mess/messGroupData'

import { showHide } from '@/animation/index'

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
      {/* <ToolsGroup /> */}
      <BustComponent />
      {/* <ProfilePicture /> */}
      {/* <LogoAthleticoNacionalComponent /> */}
      {/* <HeartComponent /> */}
      {/* <GaneshComponent /> */}
      {/* <ChristusComponent /> */}
      <Knight
        position={new THREE.Vector3(-3, -1.5, 1)}
        rotation={getDegreeEuler({ x: 0, y: 90, z: 0 })}
        scale={1.5}
      />
      <Knight
        position={new THREE.Vector3(3, -1.5, 1)}
        rotation={getDegreeEuler({ x: 0, y: 90, z: 0 })}
        scale={1.5}
      />
      <QueenOfHearts
        position={new THREE.Vector3(2, -1, 0)}
        scale={0.25}
      />
    </group>
  )
}
