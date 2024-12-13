import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { PaintBucket } from '@/components/three/models/home/hero/portrait/PaintBucket'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as paintBucketComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/paintBucketComponentAnimationsConstants.json'

export default function PaintBucketComponent() {
  const [duration] = useState<number>(
    paintBucketComponentAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    paintBucketComponentAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const paintBucketComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      if (paintBucketComponentAnimationsConstants.ANIMATE) {
        const meshes: THREE.Mesh[] = gsap.utils.toArray(paintBucketComponentRef.current.children)
        meshes.forEach((mesh) => {
          // MATERIAL
          timeline.to(
            mesh.material,
            {
              keyframes: {
                '0%': {
                  opacity:
                    paintBucketComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
                },
                '25%': {
                  opacity:
                    paintBucketComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL
                      .OPACITY,
                },
                easeEach: paintBucketComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
              },
              duration: duration,
            },
            delay,
          )
        })
      }
    },
    { scope: paintBucketComponentRef },
  )

  return (
    <PaintBucket
      ref={paintBucketComponentRef}
      position={new THREE.Vector3(0, 2, 0)}
    />
  )
}
