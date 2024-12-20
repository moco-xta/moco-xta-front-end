import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import MessGroup from './mess/MessGroup'

import { default as foregroundAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/foregroundConstants.json'

import { foregroundAnimations, showHideAnimation } from 'animations'

export default function Foreground() {
  const { timeline } = useGSAPTimelineContext()

  const foregroundGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHideAnimation({
        timeline: timeline,
        ref: foregroundGroupRef.current,
        duration: foregroundAnimationsConstants.DURATION,
        label: foregroundAnimationsConstants.LABEL,
      })
      foregroundAnimations(timeline, foregroundGroupRef.current)
    },
    { scope: foregroundGroupRef },
  )

  return (
    <group
      ref={foregroundGroupRef}
      position={
        new THREE.Vector3(
          foregroundAnimationsConstants.DEFAULT.POSITION.X,
          foregroundAnimationsConstants.DEFAULT.POSITION.Y,
          foregroundAnimationsConstants.DEFAULT.POSITION.Z,
        )
      }
    >
      <MessGroup />
      {/* <AlsoKnowAsText /> */}
    </group>
  )
}
