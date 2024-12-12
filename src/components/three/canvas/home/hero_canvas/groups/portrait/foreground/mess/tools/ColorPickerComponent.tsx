import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { ColorPicker } from '@/components/three/models/home/hero/portrait/ColorPicker'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as colorPickerComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/colorPickerComponentAnimationsConstants.json'

interface ColorPickerComponentInterface {
  timeline: GSAPTimeline
}

export default function ColorPickerComponent({ timeline }: ColorPickerComponentInterface) {
  const [duration] = useState<number>(
    colorPickerComponentAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    colorPickerComponentAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const colorPickerRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      if (colorPickerComponentAnimationsConstants.ANIMATE) {
        const meshes: THREE.Mesh[] = gsap.utils.toArray(colorPickerRef.current.children)
        meshes.forEach((mesh) => {
          // MATERIAL
          timeline.to(
            mesh.material,
            {
              keyframes: {
                '0%': {
                  opacity:
                    colorPickerComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
                },
                '25%': {
                  opacity:
                    colorPickerComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL
                      .OPACITY,
                },
                easeEach: colorPickerComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
              },
              duration: duration,
            },
            delay,
          )
        })
      }
    },
    { scope: colorPickerRef },
  )

  return (
    <ColorPicker
      ref={colorPickerRef}
      position={new THREE.Vector3(0, 1, 0)}
    />
  )
}
