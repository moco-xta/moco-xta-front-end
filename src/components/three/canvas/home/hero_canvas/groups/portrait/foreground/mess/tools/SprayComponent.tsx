import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Spray } from '@/components/three/models/home/hero/portrait/Spray'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as sprayComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/sprayComponentAnimationsConstants.json'

interface SprayComponentInterface {
  timeline: GSAPTimeline
}

export default function SprayComponent({ timeline }: SprayComponentInterface) {
  const [duration] = useState<number>(
    sprayComponentAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    sprayComponentAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const sprayComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      if (sprayComponentAnimationsConstants.ANIMATE) {
        const meshes: THREE.Mesh[] = gsap.utils.toArray(sprayComponentRef.current.children)
        meshes.forEach((mesh) => {
          // MATERIAL
          timeline.to(
            mesh.material,
            {
              keyframes: {
                '0%': {
                  opacity:
                    sprayComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
                },
                '25%': {
                  opacity:
                    sprayComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
                },
                easeEach: sprayComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
              },
              duration: duration,
            },
            delay,
          )
        })
      }
    },
    { scope: sprayComponentRef },
  )

  return <Spray ref={sprayComponentRef} />
}
