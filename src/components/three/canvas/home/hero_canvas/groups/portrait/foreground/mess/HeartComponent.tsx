import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Heart } from '@/components/three/models/home/hero/portrait/foreground/mess/Heart'

import { default as heartComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/heartComponentConstants.json'

import { heartComponentAnimations } from 'animations'

export default function HeartComponent() {
  const { timeline } = useGSAPTimelineContext()

  const heartComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      heartComponentAnimations(timeline, heartComponentMeshRef.current)
    },
    { scope: heartComponentMeshRef },
  )

  return (
    <Heart
      ref={heartComponentMeshRef}
      position={
        new THREE.Vector3(
          heartComponentConstants.DEFAULT.POSITION.X,
          heartComponentConstants.DEFAULT.POSITION.Y,
          heartComponentConstants.DEFAULT.POSITION.Z,
        )
      }
      scale={heartComponentConstants.DEFAULT.SCALE}
    />
  )
}
