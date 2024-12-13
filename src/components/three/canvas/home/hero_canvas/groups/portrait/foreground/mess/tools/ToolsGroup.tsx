import React, { useRef } from 'react'
import * as THREE from 'three'

import SprayComponent from './SprayComponent'
import ColorsComponent from './ColorsComponent'
import ColorPickerComponent from './ColorPickerComponent'
import PaintBucketComponent from './PaintBucketComponent'

import { default as toolsGroupAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/tools/toolsGroupAnimationsConstants.json'

export default function ToolsGroup() {
  const toolsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group
      ref={toolsGroupRef}
      position={
        new THREE.Vector3(
          toolsGroupAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          toolsGroupAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          toolsGroupAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
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
