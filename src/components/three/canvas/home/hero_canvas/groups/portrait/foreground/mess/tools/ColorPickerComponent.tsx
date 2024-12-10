import React, { useRef } from 'react'
import * as THREE from 'three'

import { ColorPicker } from '@/components/three/models/home/hero/portrait/ColorPicker'

export default function ColorPickerComponent() {
  const colorPickerRef = useRef<THREE.Group>(null!)

  return (
    <ColorPicker
      ref={colorPickerRef}
      position={new THREE.Vector3(0, 1, 0)}
    />
  )
}
