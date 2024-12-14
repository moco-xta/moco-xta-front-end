import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { ColorPicker } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/ColorPicker'

import { default as colorPickerComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/colorPickerComponentConstants.json'

import { colorPickerComponentAnimations } from '@/animations/index'

export default function ColorPickerComponent() {
  const { timeline } = useGSAPTimelineContext()

  const colorPickerRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(colorPickerRef.current.children)
      meshes.forEach((mesh) => {
        // MATERIAL
        timeline.to(
          mesh.material,
          {
            keyframes: colorPickerComponentAnimations.material.keyframes,
            duration: colorPickerComponentAnimations.material.duration,
          },
          colorPickerComponentAnimations.delay,
        )
      })
    },
    { scope: colorPickerRef },
  )

  return (
    <ColorPicker
      ref={colorPickerRef}
      position={
        new THREE.Vector3(
          colorPickerComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          colorPickerComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          colorPickerComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    />
  )
}
