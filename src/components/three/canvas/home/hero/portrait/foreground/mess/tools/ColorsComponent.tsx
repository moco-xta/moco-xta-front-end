import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Colors } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/Colors'

import {
  colorsComponentDefaultValues,
  getColorsComponentAnimationsData,
} from '@/data/home/hero/three/portrait/foreground/mess/tools/colorsComponentData'

import { animate } from 'animations'

export default function ColorsComponent() {
  const { timeline } = useGSAPTimelineContext()

  const colorsComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: colorsComponentRef.current,
        animationsData: getColorsComponentAnimationsData(),
        withMaterialsArray: true,
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
