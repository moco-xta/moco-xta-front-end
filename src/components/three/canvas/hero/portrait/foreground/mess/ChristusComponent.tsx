import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Christus } from '@/components/three/models/hero/portrait/foreground/mess/Christus'

import {
  christusComponentDefaultValues,
  getChristusComponentAnimationsData,
} from '@/data/hero/three/portrait/foreground/mess/christusComponentData'

import { animate } from '@/animation/index'

export default function ChristusComponent() {
  const { timeline } = useGSAPTimelineContext()

  const christusComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: christusComponentRef.current,
        animationsData: getChristusComponentAnimationsData(),
      })
    },
    { scope: christusComponentRef },
  )

  return (
    <Christus
      ref={christusComponentRef}
      position={christusComponentDefaultValues.position}
      rotation={christusComponentDefaultValues.rotation}
      scale={christusComponentDefaultValues.scale}
    />
  )
}
