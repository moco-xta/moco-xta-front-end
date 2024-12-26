import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Ganesh } from '@/components/three/models/home/hero/portrait/foreground/mess/Ganesh'

import {
  getGaneshComponentAnimationsData,
  getGaneshComponentDefaultValues,
} from '@/data/home/hero/three/portrait/foreground/mess/ganeshComponentData'

import { animate } from 'animations'

export default function GaneshComponent() {
  const { timeline } = useGSAPTimelineContext()

  const ganeshComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: ganeshComponentRef.current,
        animationsData: getGaneshComponentAnimationsData(),
      })
    },
    { scope: ganeshComponentRef },
  )

  return (
    <Ganesh
      ref={ganeshComponentRef}
      position={getGaneshComponentDefaultValues.position}
      scale={getGaneshComponentDefaultValues.scale}
    />
  )
}
