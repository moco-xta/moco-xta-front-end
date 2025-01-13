import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Moon } from '@/components/three/models/hero/portrait/gobelino/Moon'

import {
  moonComponentDefaultValues,
  getMoonComponentAnimationsData,
} from '@/data/hero/three/portrait/gobelino/sun_and_moon/moonComponentData'

import { animate } from '@/animation/index'

export default function MoonComponent() {
  const { timeline } = useGSAPTimelineContext()

  const moonComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: moonComponentRef.current,
        animationsData: getMoonComponentAnimationsData(),
      })
    },
    { scope: moonComponentRef },
  )

  return (
    <Moon
      ref={moonComponentRef}
      position={moonComponentDefaultValues.position}
    />
  )
}
