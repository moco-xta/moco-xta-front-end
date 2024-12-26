import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Lightning } from '@/components/three/models/home/hero/also_know_as/Lightning'

import { default as lightningComponentConstants } from '@/constants/animations/home/hero/canvas/groups/also_konw_as/lightningComponentConstants.json'

import { lightningComponentAnimations } from 'animations'

export default function LightningComponent() {
  const { timeline } = useGSAPTimelineContext()

  const lightningComponentMeshRef = useRef<THREE.Mesh>(null!)

  useLayoutEffect(() => {
    if (lightningComponentMeshRef.current)
      lightningComponentMeshRef.current.visible = lightningComponentConstants.DEFAULT.VISIBLE
  }, [lightningComponentMeshRef])

  useGSAP(
    () => {
      const animations = lightningComponentAnimations(lightningComponentMeshRef.current)
      // POSITION
      timeline.to(
        lightningComponentMeshRef.current.material,
        {
          keyframes: animations.material.keyframes,
          duration: animations.material.duration,
        },
        animations.delay,
      )
    },
    { scope: lightningComponentMeshRef },
  )

  return (
    <Lightning
      ref={lightningComponentMeshRef}
      scale={lightningComponentConstants.DEFAULT.GEOMETRY.SCALE}
    />
  )
}
