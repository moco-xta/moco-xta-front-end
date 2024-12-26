import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Bird } from '@/components/three/models/home/hero/portrait/gobelino/Bird'

import {
  getBirdComponentAnimationsData,
  getBirdComponentDefaultValues,
} from '@/data/home/hero/three/portrait/gobelino/birdComponentData'

import { animate } from 'animations'

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
