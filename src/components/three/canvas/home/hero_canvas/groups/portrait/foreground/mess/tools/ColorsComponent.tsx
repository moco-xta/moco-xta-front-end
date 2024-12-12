import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Colors } from '@/components/three/models/home/hero/portrait/Colors'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as colorsComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/colorsComponentAnimationsConstants.json'

interface ColorsComponentInterface {
  timeline: GSAPTimeline
}

export default function ColorsComponent({ timeline }: ColorsComponentInterface) {
  const [duration] = useState<number>(
    colorsComponentAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    colorsComponentAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const colorsComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      if (colorsComponentAnimationsConstants.ANIMATE) {
        const meshes: THREE.Mesh[] = gsap.utils.toArray(colorsComponentRef.current.children)
        meshes.forEach((mesh) => {
          // MATERIAL
          timeline.to(
            mesh.material,
            {
              keyframes: {
                '0%': {
                  opacity:
                    colorsComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
                },
                '25%': {
                  opacity:
                    colorsComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
                },
                easeEach: colorsComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
              },
              duration: duration,
            },
            delay,
          )
        })
      }
    },
    { scope: colorsComponentRef },
  )

  return (
    <Colors
      ref={colorsComponentRef}
      position={[1, -3, 0.2]}
      scale={0.5}
    />
  )
}
