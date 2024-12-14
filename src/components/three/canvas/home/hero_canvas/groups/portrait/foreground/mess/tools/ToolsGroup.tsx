import React, { useRef } from 'react'
import * as THREE from 'three'

import SprayComponent from './SprayComponent'
import ColorsComponent from './ColorsComponent'
import ColorPickerComponent from './ColorPickerComponent'
import PaintBucketComponent from './PaintBucketComponent'

import { default as toolsGroupConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/toolsGroupConstants.json'

export default function ToolsGroup() {
  const toolsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group
      ref={toolsGroupRef}
      position={
        new THREE.Vector3(
          toolsGroupConstants.ANIMATION['0_PERCENT'].POSITION.X,
          toolsGroupConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          toolsGroupConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    >
      <SprayComponent />
      <ColorPickerComponent />
      <PaintBucketComponent />
      <ColorsComponent />
    </group>
  )
}
