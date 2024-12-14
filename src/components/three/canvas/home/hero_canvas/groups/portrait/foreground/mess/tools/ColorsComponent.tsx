import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Colors } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/Colors'

import { default as colorsComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/colorsComponentConstants.json'

import { colorsComponentAnimations } from '@/animations/index'

export default function ColorsComponent() {
  const { timeline } = useGSAPTimelineContext()

  const colorsComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(colorsComponentRef.current.children)
      meshes.forEach((mesh) => {
        // MATERIAL
        timeline.to(
          mesh.material,
          {
            keyframes: colorsComponentAnimations.material.keyframes,
            duration: colorsComponentAnimations.material.duration,
          },
          colorsComponentAnimations.delay,
        )
      })
    },
    { scope: colorsComponentRef },
  )

  return (
    <Colors
      ref={colorsComponentRef}
      position={
        new THREE.Vector3(
          colorsComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          colorsComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          colorsComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      scale={colorsComponentConstants.ANIMATION['0_PERCENT'].SCALE}
    />
  )
}
