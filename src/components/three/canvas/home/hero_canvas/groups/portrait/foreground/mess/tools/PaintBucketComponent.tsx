import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { PaintBucket } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/PaintBucket'

import { default as paintBucketComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/paintBucketComponentConstants.json'

import { paintBucketComponentAnimations } from 'animations'

export default function PaintBucketComponent() {
  const { timeline } = useGSAPTimelineContext()

  const paintBucketComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(paintBucketComponentRef.current.children)
      meshes.forEach((mesh) => {
        // MATERIAL
        timeline.to(
          mesh.material,
          {
            keyframes: paintBucketComponentAnimations.material.keyframes,
            duration: paintBucketComponentAnimations.material.duration,
          },
          paintBucketComponentAnimations.delay,
        )
      })
    },
    { scope: paintBucketComponentRef },
  )

  return (
    <PaintBucket
      ref={paintBucketComponentRef}
      position={
        new THREE.Vector3(
          paintBucketComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          paintBucketComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          paintBucketComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    />
  )
}
