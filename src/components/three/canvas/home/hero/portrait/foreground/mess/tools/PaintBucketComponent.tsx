import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { PaintBucket } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/PaintBucket'

import {
  paintBucketComponentDefaultValues,
  getPaintBucketComponentAnimationsData,
} from '@/data/home/hero/three/portrait/foreground/mess/tools/paintBucketComponentData'

import { animate } from 'animations'

export default function PaintBucketComponent() {
  const { timeline } = useGSAPTimelineContext()

  const paintBucketComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: paintBucketComponentRef.current,
        animationsData: getPaintBucketComponentAnimationsData(),
        withMaterialsArray: true,
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
