import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { HillTopRight } from '@/components/three/models/home/hero/portrait/gobelino/HillTopRight'

import {
  getHillTopRightComponentAnimationsData,
  getHillTopRightComponentDefaultValues,
} from '@/data/home/hero/three/portrait/gobelino/hillTopRightComponentData'

import { animate } from 'animations'

export default function HillTopRightComponent() {
  const { timeline } = useGSAPTimelineContext()

  const hillTopRightComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: hillTopRightComponentRef.current,
        animationsData: getHillTopRightComponentAnimationsData(),
      })
    },
    { scope: hillTopRightComponentRef },
  )

  return (
    <HillTopRight
      ref={hillTopRightComponentRef}
      position={getHillTopRightComponentDefaultValues.position}
    />
  )
}
