import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { HillTopLeft } from '@/components/three/models/hero/portrait/gobelino/HillTopLeft'

import {
  hillTopLeftComponentDefaultValues,
  getHillTopLeftComponentAnimationsData,
} from '@/data/hero/three/portrait/gobelino/hillTopLeftComponentData'

import { animate } from '@/animation/index'

export default function HillTopLeftComponent() {
  const { timeline } = useGSAPTimelineContext()

  const hillTopLeftComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: hillTopLeftComponentRef.current,
        animationsData: getHillTopLeftComponentAnimationsData(),
      })
    },
    { scope: hillTopLeftComponentRef },
  )

  return (
    <HillTopLeft
      ref={hillTopLeftComponentRef}
      position={hillTopLeftComponentDefaultValues.position}
    />
  )
}
