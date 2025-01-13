import React, { useRef } from 'react'
import * as THREE from 'three'

import ColorPickerComponent from './ColorPickerComponent'
import ColorsComponent from './ColorsComponent'
import PaintBucketComponent from './PaintBucketComponent'
import SprayComponent from './SprayComponent'

import { getToolsGroupDefaultValues } from '@/data/hero/three/portrait/foreground/mess/tools/toolsGroupData'

export default function ToolsGroup() {
  const toolsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group
      ref={toolsGroupRef}
      {...getToolsGroupDefaultValues}
    >
      <ColorPickerComponent />
      <ColorsComponent />
      <PaintBucketComponent />
      <SprayComponent />
    </group>
  )
}
