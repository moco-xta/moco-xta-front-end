import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Lightning } from '@/components/three/models/hero/also_know_as/Lightning'

import {
  lightningComponentDefaultValues,
  getLightningComponentAnimationsData,
} from '@/data/hero/three/also_know_as/lightningComponentData'

import { animate } from '@/animation/index'

export default function LightningComponent() {
  const { timeline } = useGSAPTimelineContext()

  const lightningComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: lightningComponentRef.current,
        animationsData: getLightningComponentAnimationsData(),
      })
    },
    { scope: lightningComponentRef },
  )

  return (
    <Lightning
      ref={lightningComponentRef}
      scale={lightningComponentDefaultValues.scale as THREE.Vector3}
    />
  )
}
