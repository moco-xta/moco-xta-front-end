import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadCss: THREE.Mesh
  }
  materials: object
}

const PadCss = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_CSS) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadCss.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadCss.displayName = 'PadCss'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_CSS)

export default PadCss
