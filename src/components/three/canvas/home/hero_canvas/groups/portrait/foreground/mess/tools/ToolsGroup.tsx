import React, { useRef } from 'react'
import * as THREE from 'three'

import SprayComponent from './SprayComponent'
import ColorsComponent from './ColorsComponent'
import ColorPickerComponent from './ColorPickerComponent'
import PaintBucketComponent from './PaintBucketComponent'

interface ToolsGroupInterface {
  timeline: GSAPTimeline
}

export default function ToolsGroup({ timeline }: ToolsGroupInterface) {
  const toolsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group
      ref={toolsGroupRef}
      position={new THREE.Vector3(-3, 0, 0.2)}
    >
      <SprayComponent />
      <ColorPickerComponent />
      <PaintBucketComponent />
      <ColorsComponent timeline={timeline} />
    </group>
  )
}
