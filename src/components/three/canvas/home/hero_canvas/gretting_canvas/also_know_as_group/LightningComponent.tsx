import React, { useLayoutEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

import { Lightning } from '@/components/three/models/home/hero/Lightning'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface LightningComponentInterface {
  timeline: GSAPTimeline
}

export default function LightningComponent({ timeline }: LightningComponentInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.ALSO_KNOW_AS_GROUP.SUBS.BUJO.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.ALSO_KNOW_AS_GROUP.SUBS.BUJO.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

  const lightningMeshRef = useRef<THREE.Mesh>(null!)

  useLayoutEffect(() => {
    if (lightningMeshRef.current) lightningMeshRef.current.visible = false
  }, [lightningMeshRef])

  useGSAP(
    () => {
      // POSITION
      timeline.to(
        lightningMeshRef.current,
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                lightningMeshRef.current.visible = true
              },
            },
            '100%': {
              onComplete: () => {
                lightningMeshRef.current.visible = false
              },
            },
          },
          duration: duration,
        },
        delay,
      )
    },
    /* { scope: lightningMeshRef }, */
  )

  return (
    <Lightning
      ref={lightningMeshRef}
      scale={2.5}
    />
  )
}
