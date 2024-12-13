import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Christus } from '@/components/three/models/home/hero/portrait/Christus'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as christusComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/christusComponentAnimationsConstants.json'

export default function ChristusComponent() {
  const [duration] = useState<number>(
    christusComponentAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    christusComponentAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const christusComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    if (christusComponentAnimationsConstants.ANIMATE)
      // MATERIAL
      timeline.to(
        christusComponentMeshRef.current.material,
        {
          keyframes: {
            '0%': {
              opacity: christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
            },
            '25%': {
              opacity:
                christusComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
            },
            easeEach: christusComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
          },
          duration: duration,
        },
        delay,
      )
  })

  return (
    <Christus
      ref={christusComponentMeshRef}
      position={new THREE.Vector3(0, 0, 2)}
      rotation={new THREE.Euler(THREE.MathUtils.degToRad(90), 0, 0)}
      scale={[-0.25, 0.25, 0.25]}
    />
  )
}
