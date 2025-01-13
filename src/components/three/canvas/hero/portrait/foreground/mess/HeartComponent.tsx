import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Heart } from '@/components/three/models/hero/portrait/foreground/mess/Heart'

import {
  getHeartComponentAnimationsData,
  getHeartComponentDefaultValues,
} from '@/data/hero/three/portrait/foreground/mess/heartComponentData'

import { animate } from '@/animation/index'

export default function HeartComponent() {
  const { timeline } = useGSAPTimelineContext()

  const heartComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: heartComponentRef.current,
        animationsData: getHeartComponentAnimationsData(),
      })
    },
    { scope: heartComponentRef },
  )

  return (
    <Heart
      ref={heartComponentRef}
      position={getHeartComponentDefaultValues.position}
      scale={getHeartComponentDefaultValues.scale}
    />
  )
}
