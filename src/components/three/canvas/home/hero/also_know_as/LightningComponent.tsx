import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Lightning } from '@/components/three/models/home/hero/also_know_as/Lightning'

import {
  getLightningComponentAnimationsData,
  getLightningComponentDefaultValues,
} from '@/data/home/hero/three/also_know_as/lightningComponentData'

import { animate } from 'animations'

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
      scale={getLightningComponentDefaultValues.scale}
    />
  )
}
