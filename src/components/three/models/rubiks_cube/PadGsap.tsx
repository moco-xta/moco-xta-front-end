import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadGsap: THREE.Mesh
  }
  materials: object
}

const PadGsap = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_GSAP) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadGsap.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadGsap.displayName = 'PadGsap'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_GSAP)

export default PadGsap