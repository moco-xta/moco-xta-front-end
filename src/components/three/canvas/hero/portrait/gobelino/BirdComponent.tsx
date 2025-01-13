import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Bird } from '@/components/three/models/hero/portrait/gobelino/Bird'

import {
  getBirdComponentAnimationsData,
  getBirdComponentDefaultValues,
} from '@/data/hero/three/portrait/gobelino/birdComponentData'

import { animate } from '@/animation/index'

export default function BirdComponent() {
  const { timeline } = useGSAPTimelineContext()

  const birdComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: birdComponentRef.current,
        animationsData: getBirdComponentAnimationsData(),
      })
    },
    { scope: birdComponentRef },
  )

  return (
    <Bird
      ref={birdComponentRef}
      position={getBirdComponentDefaultValues.position}
    />
  )
}
