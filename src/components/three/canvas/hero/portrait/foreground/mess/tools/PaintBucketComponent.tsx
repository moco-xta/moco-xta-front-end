import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { PaintBucket } from '@/components/three/models/hero/portrait/foreground/mess/tools/PaintBucket'

import {
  paintBucketComponentDefaultValues,
  getPaintBucketComponentAnimationsData,
} from '@/data/hero/three/portrait/foreground/mess/tools/paintBucketComponentData'

import { animate } from '@/animation/index'

export default function PaintBucketComponent() {
  const { timeline } = useGSAPTimelineContext()

  const paintBucketComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: paintBucketComponentRef.current,
        animationsData: getPaintBucketComponentAnimationsData(),
        params: {
          withMaterialsArray: true,
        },
      })
    },
    { scope: paintBucketComponentRef },
  )

  return (
    <PaintBucket
      ref={paintBucketComponentRef}
      position={paintBucketComponentDefaultValues.position}
    />
  )
}
