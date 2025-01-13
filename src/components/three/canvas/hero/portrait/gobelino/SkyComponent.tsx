import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Sky } from '@/components/three/models/hero/portrait/gobelino/Sky'

import {
  skyComponentDefaultValues,
  getSkyComponentAnimationsData,
} from '@/data/hero/three/portrait/gobelino/skyComponentData'

import { animate } from '@/animation/index'

export default function SkyComponent() {
  const { timeline } = useGSAPTimelineContext()

  const skyComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: skyComponentRef.current,
        animationsData: getSkyComponentAnimationsData(),
      })
    },
    { scope: skyComponentRef },
  )

  return (
    <Sky
      ref={skyComponentRef}
      position={skyComponentDefaultValues.position}
    />
  )
}
