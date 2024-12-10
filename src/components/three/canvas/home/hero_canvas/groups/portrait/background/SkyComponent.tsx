import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Sky } from '@/components/three/models/home/hero/gobelino/Sky'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as skyAnimationsConstants } from '@/constants/animations/home/hero/portrait/skyAnimationsConstants.json'

interface SkyComponentInterface {
  timeline: GSAPTimeline
}

export default function SkyComponent({ timeline }: SkyComponentInterface) {
  const [duration] = useState<number>(
    skyAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    skyAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const skyComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      if (skyAnimationsConstants.ANIMATE) {
        // POSITION
        timeline.to(
          // @ts-ignore
          skyComponentMeshRef.current.position,
          {
            keyframes: {
              '0%': {
                y: skyAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
              },
              '33%': {
                y: skyAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Y,
              },
              easeEach: skyAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
            },
            duration: duration,
          },
          delay,
        )
        // COLOR
        timeline.to(
          // @ts-ignore
          skyComponentMeshRef.current.material.color,
          {
            keyframes: {
              '0%': {
                r: skyAnimationsConstants.ANIMATION['0_PERCENT'].COLOR.R,
                g: skyAnimationsConstants.ANIMATION['0_PERCENT'].COLOR.G,
                b: skyAnimationsConstants.ANIMATION['0_PERCENT'].COLOR.B,
              },
              '40%': {
                r: skyAnimationsConstants.ANIMATION['40_PERCENT'].COLOR.R,
                g: skyAnimationsConstants.ANIMATION['40_PERCENT'].COLOR.G,
                b: skyAnimationsConstants.ANIMATION['40_PERCENT'].COLOR.B,
              },
              '60%': {
                r: skyAnimationsConstants.ANIMATION['60_PERCENT'].COLOR.R,
                g: skyAnimationsConstants.ANIMATION['60_PERCENT'].COLOR.G,
                b: skyAnimationsConstants.ANIMATION['60_PERCENT'].COLOR.B,
              },
              easeEach: 'power1.in',
            },
            duration: duration,
          },
          delay,
        )
        // OPACITY
        timeline.to(
          // @ts-ignore
          skyComponentMeshRef.current.material,
          {
            keyframes: {
              '0%': {
                opacity: skyAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
              },
              '33%': {
                opacity: skyAnimationsConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
              },
              easeEach: skyAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
            },
            duration: duration,
          },
          delay,
        )
      }
    },
    { scope: skyComponentMeshRef },
  )

  return <Sky ref={skyComponentMeshRef} />
}
