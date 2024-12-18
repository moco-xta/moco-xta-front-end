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
      meshes.forEach((meshRef) => {
        paintBucketComponentAnimations(timeline, meshRef)
      })
    },
    { scope: paintBucketComponentRef },
  )

  return (
    <PaintBucket
      ref={paintBucketComponentRef}
      position={
        new THREE.Vector3(
          paintBucketComponentConstants.DEFAULT.POSITION.X,
          paintBucketComponentConstants.DEFAULT.POSITION.Y,
          paintBucketComponentConstants.DEFAULT.POSITION.Z,
        )
      }
    />
  )
}
