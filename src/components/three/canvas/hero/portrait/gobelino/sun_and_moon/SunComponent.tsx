import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Sun } from '@/components/three/models/hero/portrait/gobelino/Sun'

import {
  sunComponentDefaultValues,
  getSunComponentAnimationsData,
} from '@/data/hero/three/portrait/gobelino/sun_and_moon/sunComponentData'

import { animate } from '@/animation/index'

export default function SunComponent() {
  const { timeline } = useGSAPTimelineContext()

  const sunComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: sunComponentRef.current,
        animationsData: getSunComponentAnimationsData(),
      })
    },
    { scope: sunComponentRef },
  )

  return (
    <Sun
      ref={sunComponentRef}
      position={sunComponentDefaultValues.position}
    />
  )
}
