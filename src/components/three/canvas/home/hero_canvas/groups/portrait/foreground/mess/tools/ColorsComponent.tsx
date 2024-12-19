import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Colors } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/Colors'

import { default as colorsComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/colorsComponentConstants.json'

import { colorsComponentAnimations } from 'animations'

export default function ColorsComponent() {
  const { timeline } = useGSAPTimelineContext()

  const colorsComponenGrouptRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(colorsComponenGrouptRef.current.children)
      meshes.forEach((meshRef) => {
        colorsComponentAnimations(timeline, meshRef)
      })
    },
    { scope: colorsComponenGrouptRef },
  )

  return (
    <Colors
      ref={colorsComponenGrouptRef}
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
