import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Christus } from '@/components/three/models/home/hero/portrait/foreground/mess/Christus'

import {
  getChristusComponentAnimationsData,
  getChristusComponentDefaultValues,
} from '@/data/home/hero/three/portrait/foreground/mess/christusComponentData'

import { animate } from 'animations'

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
      position={getChristusComponentDefaultValues.position}
      rotation={getChristusComponentDefaultValues.rotation}
      scale={getChristusComponentDefaultValues.scale}
    />
  )
}
