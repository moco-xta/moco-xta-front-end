import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const MetroArrow = forwardRef<THREE.Group, GroupProps>(function MetroArrow(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.CONTACT.METRO_ARROW) as GLTFResult

  return (
    <group
      position={[1.3, -0.7, 0]}
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MetroArrow.geometry}
        material={materials['metro_paris_#0C208F']}
      />
    </group>
  )
})

MetroArrow.displayName = 'MetroArrow'

useGLTF.preload(glbConstants.CONTACT.METRO_ARROW)

export default MetroArrow
