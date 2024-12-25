import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Heart } from '@/components/three/models/home/hero/portrait/foreground/mess/Heart'

import {
  getHeartComponentAnimationsData,
  getHeartComponentDefaultValues,
} from '@/data/home/hero/three/portrait/foreground/mess/heartComponentData'

import { animate } from 'animations'

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
