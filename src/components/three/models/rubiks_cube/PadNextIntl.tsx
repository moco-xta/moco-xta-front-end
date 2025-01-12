import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadNextIntl: THREE.Mesh
  }
  materials: object
}

const PadNextIntl = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_NEXT_INTL) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadNextIntl.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadNextIntl.displayName = 'PadNextIntl'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_NEXT_INTL)

export default PadNextIntl
