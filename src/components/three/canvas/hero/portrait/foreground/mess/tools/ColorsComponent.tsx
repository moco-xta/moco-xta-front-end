import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Colors } from '@/components/three/models/hero/portrait/foreground/mess/tools/Colors'

import {
  colorsComponentDefaultValues,
  getColorsComponentAnimationsData,
} from '@/data/hero/three/portrait/foreground/mess/tools/colorsComponentData'

import { animate } from '@/animation/index'

export default function ColorsComponent() {
  const { timeline } = useGSAPTimelineContext()

  const colorsComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: colorsComponentRef.current,
        animationsData: getColorsComponentAnimationsData(),
        params: {
          withMaterialsArray: true,
        },
      })
    },
    { scope: colorsComponentRef },
  )

  return (
    <Colors
      ref={colorsComponentRef}
      position={colorsComponentDefaultValues.position}
      scale={colorsComponentDefaultValues.scale}
    />
  )
}
