import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { ColorPicker } from '@/components/three/models/hero/portrait/foreground/mess/tools/ColorPicker'

import {
  colorPickerComponentDefaultValues,
  getColorPickerComponentAnimationsData,
} from '@/data/hero/three/portrait/foreground/mess/tools/colorPickerComponentData'

import { animate } from '@/animation/index'

export default function ColorPickerComponent() {
  const { timeline } = useGSAPTimelineContext()

  const colorPickerComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: colorPickerComponentRef.current,
        animationsData: getColorPickerComponentAnimationsData(),
        params: {
          withMaterialsArray: true,
        },
      })
    },
    { scope: colorPickerComponentRef },
  )

  return (
    <ColorPicker
      ref={colorPickerComponentRef}
      position={colorPickerComponentDefaultValues.position}
    />
  )
}
